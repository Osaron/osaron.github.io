window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    // We'll use the precise shader engine mathematics from BreathDearMedusae
    // Ported cleanly to Vanilla JS & Three.js so no build steps are needed!
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    // Create immersive Universe Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Medusae configuration parameters
    const numParticles = 100 * 55; // 5500 Particles total giving dense fidelity
    const geometry = new THREE.PlaneGeometry(1, 1);

    const baseColor = new THREE.Color("#080808");
    const colorOne = new THREE.Color("#007bff"); 
    const colorTwo = new THREE.Color("#ff5500"); 
    const colorThree = new THREE.Color("#ffaa00");

    const uniforms = {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uOuterOscFrequency: { value: 1.5 },
        uOuterOscAmplitude: { value: 0.15 },
        uHaloRadiusBase: { value: 1.2 },
        uHaloRadiusAmplitude: { value: 0.2 },
        uHaloShapeAmplitude: { value: 0.15 },
        uHaloRimWidth: { value: 0.4 },
        uHaloOuterStartOffset: { value: 0.1 },
        uHaloOuterEndOffset: { value: 1.5 },
        uHaloScaleX: { value: 1.0 },
        uHaloScaleY: { value: 1.0 },
        uParticleBaseSize: { value: 0.015 },
        uParticleActiveSize: { value: 0.08 },
        uBlobScaleX: { value: 1.0 },
        uBlobScaleY: { value: 1.0 },
        uParticleRotationSpeed: { value: 1.0 },
        uParticleRotationJitter: { value: 1.0 },
        uParticleOscillationFactor: { value: 1.0 },
        uParticleColorBase: { value: baseColor },
        uParticleColorOne: { value: colorOne },
        uParticleColorTwo: { value: colorTwo },
        uParticleColorThree: { value: colorThree },
    };

    const vertexShader = `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uOuterOscFrequency;
        uniform float uOuterOscAmplitude;
        uniform float uHaloRadiusBase;
        uniform float uHaloRadiusAmplitude;
        uniform float uHaloShapeAmplitude;
        uniform float uHaloRimWidth;
        uniform float uHaloOuterStartOffset;
        uniform float uHaloOuterEndOffset;
        uniform float uHaloScaleX;
        uniform float uHaloScaleY;
        uniform float uParticleBaseSize;
        uniform float uParticleActiveSize;
        uniform float uBlobScaleX;
        uniform float uBlobScaleY;
        uniform float uParticleRotationSpeed;
        uniform float uParticleRotationJitter;
        uniform float uParticleOscillationFactor;
        
        varying vec2 vUv;
        varying float vSize;
        varying vec2 vPos;
        varying float vRandom;

        attribute vec3 aOffset; 
        attribute float aRandom;

        float hash(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            float a = hash(i);
            float b = hash(i + vec2(1.0, 0.0));
            float c = hash(i + vec2(0.0, 1.0));
            float d = hash(i + vec2(1.0, 1.0));
            return mix( mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        void main() {
            vUv = uv;
            vRandom = aRandom;

            vec3 pos = aOffset;
            float driftSpeed = uTime * 0.15;
            float dx = sin(driftSpeed + pos.y * 0.5) + sin(driftSpeed * 0.5 + pos.y * 2.0);
            float dy = cos(driftSpeed + pos.x * 0.5) + cos(driftSpeed * 0.5 + pos.x * 2.0);
            pos.x += dx * 0.25; 
            pos.y += dy * 0.25;

            vec2 relToMouse = pos.xy - uMouse;
            vec2 haloScale = max(vec2(uHaloScaleX, uHaloScaleY), vec2(0.0001));
            float distFromMouse = length(relToMouse / haloScale);
            float angleToMouse = atan(relToMouse.y, relToMouse.x);
            vec2 dirToMouse = normalize(relToMouse + vec2(0.0001, 0.0));

            float shapeFactor = noise(dirToMouse * 2.0 + vec2(0.0, uTime * 0.1));
            float baseRadius = uHaloRadiusBase + sin(uTime * 0.8) * uHaloRadiusAmplitude;
            float currentRadius = baseRadius + (shapeFactor * uHaloShapeAmplitude);
            float dist = distFromMouse; 
            float rimInfluence = smoothstep(uHaloRimWidth, 0.0, abs(dist - currentRadius));

            vec2 pushDir = normalize(relToMouse + vec2(0.0001, 0.0));
            float pushAmt = (sin(uTime * 0.8) * 0.5 + 0.5) * 0.5;
            pos.xy += pushDir * pushAmt * rimInfluence;
            pos.z += rimInfluence * 0.3 * sin(uTime);

            float outerInfluence = smoothstep(baseRadius + uHaloOuterStartOffset, baseRadius + uHaloOuterEndOffset, dist);
            float outerOsc = sin(uTime * uOuterOscFrequency + pos.x * 0.6 + pos.y * 0.6);
            pos.xy += normalize(relToMouse + vec2(0.0001, 0.0)) * outerOsc * uOuterOscAmplitude * outerInfluence;

            float baseSize = uParticleBaseSize + (sin(uTime + pos.x)*0.003);
            float activeSize = uParticleActiveSize; 
            float currentScale = baseSize + (rimInfluence * activeSize);
            float stretch = rimInfluence * 0.02;

            vec3 transformed = position;
            transformed.x *= (currentScale + stretch) * uBlobScaleX;
            transformed.y *= currentScale * uBlobScaleY; 

            vSize = rimInfluence;
            vPos = pos.xy;

            float dirLen = max(length(relToMouse), 0.0001);
            vec2 dir = relToMouse / dirLen;
            float oscPhase = aRandom * 6.28318530718;
            float osc = 0.5 + 0.5 * sin(uTime * (0.25 + uParticleOscillationFactor * 0.35) + oscPhase);
            float speedScale = mix(0.55, 1.35, osc) * (0.8 + uParticleOscillationFactor * 0.2);
            float jitterScale = mix(0.7, 1.45, osc) * (0.85 + uParticleOscillationFactor * 0.15);
            float jitter = sin(uTime * uParticleRotationSpeed * speedScale + pos.x * 0.35 + pos.y * 0.35) * (uParticleRotationJitter * jitterScale);
            vec2 perp = vec2(-dir.y, dir.x);
            vec2 jitteredDir = normalize(dir + perp * jitter);
            mat2 rot = mat2(jitteredDir.x, jitteredDir.y, -jitteredDir.y, jitteredDir.x);
            transformed.xy = rot * transformed.xy;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos + transformed, 1.0);
        }
    `;

    const fragmentShader = `
        uniform float uTime;
        uniform vec3 uParticleColorBase;
        uniform vec3 uParticleColorOne;
        uniform vec3 uParticleColorTwo;
        uniform vec3 uParticleColorThree;
        varying vec2 vUv;
        varying float vSize;
        varying vec2 vPos;
        varying float vRandom;

        void main() {
            vec2 center = vec2(0.5);
            vec2 pos = abs(vUv - center) * 2.0; 
            float d = pow(pow(pos.x, 2.6) + pow(pos.y, 2.6), 1.0/2.6);
            float alpha = 1.0 - smoothstep(0.8, 1.0, d);
            if (alpha < 0.01) discard;

            float t = uTime * 1.2;
            float p1 = sin(vPos.x * 0.8 + t);
            float p2 = sin(vPos.y * 0.8 + t * 0.8 + p1);

            vec3 activeColor = mix(uParticleColorOne, uParticleColorTwo, p1 * 0.5 + 0.5);
            activeColor = mix(activeColor, uParticleColorThree, p2 * 0.5 + 0.5);

            vec3 baseColorChoice;
            if (vRandom < 0.33) {
                baseColorChoice = uParticleColorOne;
            } else if (vRandom < 0.66) {
                baseColorChoice = uParticleColorTwo;
            } else {
                baseColorChoice = uParticleColorThree;
            }

            vec3 finalColor = mix(baseColorChoice, activeColor, smoothstep(0.1, 0.8, vSize));
            float finalAlpha = alpha * mix(0.7, 1.0, vSize);

            gl_FragColor = vec4(finalColor, finalAlpha);
        }
    `;

    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
    });

    const offsets = new Float32Array(numParticles * 3);
    const randoms = new Float32Array(numParticles);
    
    const gridWidth = 40;
    const gridHeight = 22;
    const jitter = 0.25;

    let idx = 0;
    for (let y = 0; y < 55; y++) {
        for (let x = 0; x < 100; x++) {
            const u = x / 99;
            const v = y / 54;
            let px = (u - 0.5) * gridWidth;
            let py = (v - 0.5) * gridHeight;
            px += (Math.random() - 0.5) * jitter;
            py += (Math.random() - 0.5) * jitter;

            offsets[idx * 3] = px;
            offsets[idx * 3 + 1] = py;
            offsets[idx * 3 + 2] = 0;

            randoms[idx] = Math.random();
            idx++;
        }
    }

    geometry.setAttribute("aOffset", new THREE.InstancedBufferAttribute(offsets, 3));
    geometry.setAttribute("aRandom", new THREE.InstancedBufferAttribute(randoms, 1));

    const mesh = new THREE.InstancedMesh(geometry, material, numParticles);
    scene.add(mesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isHovering = true;

    document.body.addEventListener("mouseenter", () => isHovering = true);
    document.body.addEventListener("mouseleave", () => isHovering = false);

    window.addEventListener("pointermove", (e) => {
        // Map pointer to normalized device coordinates
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", resize);
    resize();

    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);

        const t = clock.getElapsedTime();
        uniforms.uTime.value = t;

        if (isHovering) {
            // Translate normalized coordinates to Three.js world coordinates mimicking React Three Fiber
            const viewportHeight = 2 * Math.tan((Math.PI * 75) / 360) * 5;
            const viewportWidth = viewportHeight * camera.aspect;
            
            const baseX = (mouseX * viewportWidth) / 2;
            const baseY = (mouseY * viewportHeight) / 2;
            
            const jitterRadius = Math.min(viewportWidth, viewportHeight) * 0.15;
            const jitterX = (Math.sin(t * 0.35) + Math.sin(t * 0.77 + 1.2)) * 0.5;
            const jitterY = (Math.cos(t * 0.31) + Math.sin(t * 0.63 + 2.4)) * 0.5;
            
            // Apply precise 1:1 cursor tracking (removed 1.5x overshoot multiplier)
            // Keep a tiny bit of organic jitter so it feels alive
            targetX = baseX + jitterX * jitterRadius * 0.1; 
            targetY = baseY + jitterY * jitterRadius * 0.1;
        }

        // Apply drag factor smoothing
        uniforms.uMouse.value.x += (targetX - uniforms.uMouse.value.x) * 0.15;
        uniforms.uMouse.value.y += (targetY - uniforms.uMouse.value.y) * 0.15;

        renderer.render(scene, camera);
    };

    animate();
});
