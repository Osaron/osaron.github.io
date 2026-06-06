import {
  Component, ElementRef, OnDestroy,
  viewChild, HostListener, AfterViewInit
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [],
  templateUrl: './particle-background.html',
  styleUrl: './particle-background.scss',
})
export class ParticleBackground implements AfterViewInit, OnDestroy {
  canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private uniforms!: Record<string, THREE.IUniform>;
  private startMs = 0;
  private animFrameId!: number;

  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;

  ngAfterViewInit() {
    this.init();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrameId);
    this.renderer?.dispose();
  }

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(e: PointerEvent) {
    this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  @HostListener('window:resize')
  onResize() {
    this.resize();
  }

  private init() {
    const canvas = this.canvasRef().nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    const numParticles = 100 * 55;
    const geometry = new THREE.PlaneGeometry(1, 1);

    this.uniforms = {
      uTime:                    { value: 0 },
      uMouse:                   { value: new THREE.Vector2(0, 0) },
      uResolution:              { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uOuterOscFrequency:       { value: 1.5 },
      uOuterOscAmplitude:       { value: 0.15 },
      uHaloRadiusBase:          { value: 1.2 },
      uHaloRadiusAmplitude:     { value: 0.2 },
      uHaloShapeAmplitude:      { value: 0.15 },
      uHaloRimWidth:            { value: 0.4 },
      uHaloOuterStartOffset:    { value: 0.1 },
      uHaloOuterEndOffset:      { value: 1.5 },
      uHaloScaleX:              { value: 1.0 },
      uHaloScaleY:              { value: 1.0 },
      uParticleBaseSize:        { value: 0.015 },
      uParticleActiveSize:      { value: 0.08 },
      uBlobScaleX:              { value: 1.0 },
      uBlobScaleY:              { value: 1.0 },
      uParticleRotationSpeed:   { value: 1.0 },
      uParticleRotationJitter:  { value: 1.0 },
      uParticleOscillationFactor: { value: 1.0 },
      uParticleColorBase:       { value: new THREE.Color('#080808') },
      uParticleColorOne:        { value: new THREE.Color('#007bff') },
      uParticleColorTwo:        { value: new THREE.Color('#ff5500') },
      uParticleColorThree:      { value: new THREE.Color('#ffaa00') },
    };

    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
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
        offsets[idx * 3]     = (u - 0.5) * gridWidth  + (Math.random() - 0.5) * jitter;
        offsets[idx * 3 + 1] = (v - 0.5) * gridHeight + (Math.random() - 0.5) * jitter;
        offsets[idx * 3 + 2] = 0;
        randoms[idx] = Math.random();
        idx++;
      }
    }

    geometry.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3));
    geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 1));

    const mesh = new THREE.InstancedMesh(geometry, material, numParticles);
    this.scene.add(mesh);

    this.startMs = performance.now();
    this.resize();
    this.animate();
  }

  private resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.uniforms['uResolution'].value.set(window.innerWidth, window.innerHeight);
  }

  private animate = () => {
    this.animFrameId = requestAnimationFrame(this.animate);
    const t = (performance.now() - this.startMs) / 1000;
    this.uniforms['uTime'].value = t;

    const viewportHeight = 2 * Math.tan((Math.PI * 75) / 360) * 5;
    const viewportWidth = viewportHeight * this.camera.aspect;

    this.targetX = (this.mouseX * viewportWidth) / 2;
    this.targetY = (this.mouseY * viewportHeight) / 2;

    this.uniforms['uMouse'].value.x += (this.targetX - this.uniforms['uMouse'].value.x) * 0.15;
    this.uniforms['uMouse'].value.y += (this.targetY - this.uniforms['uMouse'].value.y) * 0.15;

    this.renderer.render(this.scene, this.camera);
  };
}

const VERTEX_SHADER = `
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

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
  }

  void main() {
    vUv = uv; vRandom = aRandom;
    vec3 pos = aOffset;
    float ds = uTime * 0.15;
    pos.x += (sin(ds + pos.y*.5) + sin(ds*.5 + pos.y*2.)) * .25;
    pos.y += (cos(ds + pos.x*.5) + cos(ds*.5 + pos.x*2.)) * .25;

    vec2 rel = pos.xy - uMouse;
    vec2 hs = max(vec2(uHaloScaleX, uHaloScaleY), vec2(.0001));
    float dist = length(rel / hs);
    float shape = noise(normalize(rel + .0001) * 2. + vec2(0., uTime*.1));
    float rad = uHaloRadiusBase + sin(uTime*.8)*uHaloRadiusAmplitude + shape*uHaloShapeAmplitude;
    float rim = smoothstep(uHaloRimWidth, 0., abs(dist - rad));
    pos.xy += normalize(rel + .0001) * (sin(uTime*.8)*.5+.5)*.5 * rim;
    pos.z  += rim * .3 * sin(uTime);
    float outer = smoothstep(rad+uHaloOuterStartOffset, rad+uHaloOuterEndOffset, dist);
    pos.xy += normalize(rel+.0001) * sin(uTime*uOuterOscFrequency+pos.x*.6+pos.y*.6) * uOuterOscAmplitude * outer;

    float sc = uParticleBaseSize + sin(uTime+pos.x)*.003 + rim*uParticleActiveSize;
    vec3 tr = position;
    tr.x *= (sc + rim*.02) * uBlobScaleX;
    tr.y *= sc * uBlobScaleY;
    vSize = rim; vPos = pos.xy;

    float osc = .5 + .5*sin(uTime*(.25+uParticleOscillationFactor*.35) + aRandom*6.283);
    float j = sin(uTime*uParticleRotationSpeed*mix(.55,1.35,osc) + pos.x*.35 + pos.y*.35) * uParticleRotationJitter*mix(.7,1.45,osc);
    vec2 d = normalize(rel/max(length(rel),.0001));
    vec2 jd = normalize(d + vec2(-d.y,d.x)*j);
    tr.xy = mat2(jd.x,jd.y,-jd.y,jd.x) * tr.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos + tr, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform float uTime;
  uniform vec3 uParticleColorBase;
  uniform vec3 uParticleColorOne;
  uniform vec3 uParticleColorTwo;
  uniform vec3 uParticleColorThree;
  varying vec2 vUv; varying float vSize; varying vec2 vPos; varying float vRandom;

  void main() {
    vec2 p = abs(vUv - .5) * 2.;
    float d = pow(pow(p.x, 2.6) + pow(p.y, 2.6), 1./2.6);
    float a = 1. - smoothstep(.8, 1., d);
    if (a < .01) discard;
    float t = uTime * 1.2;
    float p1 = sin(vPos.x*.8 + t);
    float p2 = sin(vPos.y*.8 + t*.8 + p1);
    vec3 ac = mix(mix(uParticleColorOne, uParticleColorTwo, p1*.5+.5), uParticleColorThree, p2*.5+.5);
    vec3 bc = vRandom < .33 ? uParticleColorOne : vRandom < .66 ? uParticleColorTwo : uParticleColorThree;
    vec3 fc = mix(bc, ac, smoothstep(.1, .8, vSize));
    gl_FragColor = vec4(fc, a * mix(.7, 1., vSize));
  }
`;
