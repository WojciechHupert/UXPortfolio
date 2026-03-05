import * as THREE from 'three';

(function () {
  const canvas = document.getElementById('heroBlob');
  if (!canvas) return;
  const hero = canvas.closest('.hero--centered');
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  /* ── Renderer ───────────────────────────────────────────── */
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
  renderer.setClearColor(0x1c1c24);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  function onResize() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  onResize();
  window.addEventListener('resize', onResize);

  /* ── Procedural environment map ─────────────────────────── */
  function buildEnvMap() {
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x040410);

    const addPanel = (color, size, pos) => {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
      );
      mesh.position.copy(pos);
      mesh.lookAt(0, 0, 0);
      envScene.add(mesh);
    };

    addPanel(0x3a2a7e, 20, new THREE.Vector3(0, 10, -5));
    addPanel(0x0a1025, 20, new THREE.Vector3(12, 0, 0));
    addPanel(0x6050c0, 4, new THREE.Vector3(-4, 6, -4));
    addPanel(0x0a0a18, 20, new THREE.Vector3(0, -10, 2));
    addPanel(0x201540, 6, new THREE.Vector3(5, -3, 8));

    const envTex = pmrem.fromScene(envScene, 0.04).texture;
    pmrem.dispose();
    envScene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) o.material.dispose();
    });
    return envTex;
  }

  const envMap = buildEnvMap();

  /* ── Shader uniforms ────────────────────────────────────── */
  const blobUniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector3(0, 0, 100) },
    u_strength: { value: 0 },
  };

  /* ── GLSL 3D simplex noise (Ashima Arts) ────────────────── */
  const NOISE_GLSL = `
    vec3 _sn_mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 _sn_mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 _sn_permute(vec4 x) { return _sn_mod289(((x * 34.0) + 10.0) * x); }
    vec4 _sn_tis(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = _sn_mod289(i);
      vec4 p = _sn_permute(_sn_permute(_sn_permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 xn = x_ * ns.x + ns.yyyy;
      vec4 yn = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(xn) - abs(yn);
      vec4 b0 = vec4(xn.xy, yn.xy);
      vec4 b1 = vec4(xn.zw, yn.zw);
      vec4 s0 = floor(b0) * 2.0 + 1.0;
      vec4 s1 = floor(b1) * 2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = _sn_tis(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
      m = m * m;
      return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
    }
  `;

  /* ── Material ───────────────────────────────────────────── */
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x080808,
    metalness: 1.0,
    roughness: 0.05,
    envMap,
    envMapIntensity: 1.4,
    clearcoat: 0.2,
    clearcoatRoughness: 0.08,
    transparent: false,
    side: THREE.FrontSide,
    depthWrite: true,
  });

  material.onBeforeCompile = (shader) => {
    shader.uniforms.u_time = blobUniforms.u_time;
    shader.uniforms.u_mouse = blobUniforms.u_mouse;
    shader.uniforms.u_strength = blobUniforms.u_strength;

    shader.vertexShader = shader.vertexShader.replace(
      '#include <common>',
      `#include <common>
      uniform float u_time;
      uniform vec3 u_mouse;
      uniform float u_strength;
      ${NOISE_GLSL}`
    );

    // Adjust normals to match displaced surface for accurate reflections
    shader.vertexShader = shader.vertexShader.replace(
      '#include <beginnormal_vertex>',
      `#include <beginnormal_vertex>
      {
        vec3 _np = position * 0.8 + u_time * 0.15;
        float _eps = 0.02;
        float _base = snoise(_np);
        vec3 _grad = vec3(
          snoise(_np + vec3(_eps, 0.0, 0.0)) - _base,
          snoise(_np + vec3(0.0, _eps, 0.0)) - _base,
          snoise(_np + vec3(0.0, 0.0, _eps)) - _base
        ) / _eps;
        objectNormal = normalize(objectNormal - _grad * 0.25);
      }`
    );

    // Displace vertices with noise + mouse repulsion + break-apart near cursor
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        vec3 _np2 = position * 0.8 + u_time * 0.15;
        float _n1 = snoise(_np2) * 0.35;
        float _n2 = snoise(_np2 * 2.0 + 100.0) * 0.1;

        float _dm = length(position - u_mouse);
        float _infl = smoothstep(2.0, 0.0, _dm);
        float _chaos = snoise(position * 3.0 + u_time * 0.5) * 0.3;
        vec3 _repDir = normalize(position - u_mouse + vec3(0.001));
        _repDir += normal * _chaos;
        float _rep = _infl * u_strength * 1.2;

        vec3 _dir = normalize(position);
        transformed += _dir * (_n1 + _n2) + _repDir * _rep;

        float _breakZone = smoothstep(1.0, 0.25, _dm) * u_strength;
        float _breakNoise = snoise(position * 2.0 + u_mouse * 0.5 + u_time * 0.3);
        vec3 _outDir = normalize(position - u_mouse + vec3(0.001));
        vec3 _breakDir = normalize(_outDir + normal * (_breakNoise * 2.0 - 1.0));
        float _breakMag = _breakZone * (0.35 + _breakNoise * 0.65) * 1.4;
        _breakMag = min(_breakMag, 0.85);
        transformed += _breakDir * _breakMag;
      }`
    );
  };

  /* ── Geometry & Mesh ────────────────────────────────────── */
  /* ~100x more vertices: each detail level ≈ 4x (detail 9 ≈ 1.3M faces, 10 ≈ 5.2M) */
  const detail = isMobile ? 9 : 10;
  const geometry = new THREE.IcosahedronGeometry(1.5, detail);
  const blob = new THREE.Mesh(geometry, material);
  scene.add(blob);

  /* ── Lights ─────────────────────────────────────────────── */
  const dirLight = new THREE.DirectionalLight(0x9078e8, 0.55);
  dirLight.position.set(3, 5, 4);
  scene.add(dirLight);
  scene.add(new THREE.AmbientLight(0x181830, 0.28));

  /* ── Mouse tracking ─────────────────────────────────────── */
  const ndc = new THREE.Vector2(10, 10);
  let targetStrength = 0;
  let currentStrength = 0;
  const mouseWorld = new THREE.Vector3();
  const invMatrix = new THREE.Matrix4();
  const _unprojectVec = new THREE.Vector3();
  const _rayDir = new THREE.Vector3();

  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    targetStrength = 1.0;
  });

  hero.addEventListener('pointerleave', () => {
    targetStrength = 0;
  });

  function projectMouseToLocalSpace() {
    _unprojectVec.set(ndc.x, ndc.y, 0.5).unproject(camera);
    _rayDir.copy(_unprojectVec).sub(camera.position).normalize();
    const t = -camera.position.z / _rayDir.z;
    mouseWorld.copy(camera.position).addScaledVector(_rayDir, t);
    invMatrix.copy(blob.matrixWorld).invert();
    blobUniforms.u_mouse.value.copy(mouseWorld).applyMatrix4(invMatrix);
  }

  /* ── Fade in canvas after first render ──────────────────── */
  canvas.style.opacity = '0';
  canvas.style.transition = 'opacity 1.2s ease';

  /* ── Render loop ────────────────────────────────────────── */
  let raf;
  let firstFrame = true;

  function loop(timestamp) {
    raf = requestAnimationFrame(loop);
    const t = timestamp * 0.001;

    blobUniforms.u_time.value = t;
    currentStrength += (targetStrength - currentStrength) * 0.05;
    blobUniforms.u_strength.value = currentStrength;

    projectMouseToLocalSpace();

    blob.rotation.y = t * 0.08;
    blob.rotation.x = Math.sin(t * 0.05) * 0.15;
    blob.position.y = Math.sin(t * 0.2) * 0.08;

    const breathe = 1 + Math.sin(t * 0.3) * 0.015;
    blob.scale.setScalar(breathe);

    renderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      canvas.style.opacity = '1';
    }
  }

  if (prefersReducedMotion) {
    renderer.render(scene, camera);
    canvas.style.opacity = '1';
  } else {
    loop(0);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
    } else if (!prefersReducedMotion) {
      loop(performance.now());
    }
  });
})();
