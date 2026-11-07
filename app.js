// ============================================================================
// 🌌 3D GALAXY OF MEMORIES & 20TH BIRTHDAY EXPERIENCE FOR SHOROUK (دلوعتي)
// Exact Frustum-Fitted 3D Typography & Responsive Layout for Mobile/Tablet/PC
// ============================================================================

const MEMORIES = [
  {
    type: 'image',
    src: 'assets/photos/photo14.jpg',
    title: '2006 ⬅️ 2026 • عشرين سنة يا دلوعتي 👑🎂',
    caption: 'من أحلى بنوتة صغيرة في 2006 لأجمل وأرق شروق في الدنيا في 2026.. كل سنة وإنتي دلوعتي ومنورة سنيني كلها!'
  },
  {
    type: 'image',
    src: 'assets/photos/photo1.jpg',
    title: 'أحلى وردة جنب دلوعتي 🌺✨',
    caption: 'ضحكتك وبراءتك يا شوشو في الصورة دي بتلخص كل الجمال والبهجة اللي دخلتيهم حياتي.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo7.jpg',
    title: 'قلبي في إيد دلوعتي للأبد ❤️🤝',
    caption: 'القلبين اللي مرسومين على إيدينا دول وعد يا شروق إن إيدي عمرها ما هتسيب إيدك مهما عدى العمر.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo6.jpg',
    title: 'مش بشوف في الدنيا غيرك يا شروق 👀📱',
    caption: 'حتى وأنا مغمض عيني، إنتي يا دلوعتي الصورة الوحيدة اللي شايفها قدامي وفي قلبي.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo9.jpg',
    title: 'عيون دلوعتي هي الحقيقة الوحيدة 👀✨',
    caption: 'العيون عمرها ما بتكدب، وعيوني من أول يوم شافتك يا بنوتي وهي بتقول إنك أماني وراحتي.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo10.jpg',
    title: 'إنتي سبب فرحتي وحياتي يا شوشو 💫❤️',
    caption: 'إنتي فعلاً يا دلوعتي السبب اللي بيخليني أحب الحياة وأصحى كل يوم وأنا مبسوط إنك معايا.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo11.jpg',
    title: 'قلب واحد بيجمعني بدلوعتي 💗✨',
    caption: 'جوه قلب واحد، أنا وشروق حبيبتي بنكمّل بعض في كل تفصيلة صغيرة وكبيرة.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo2.jpg',
    title: 'كل خروجة مع دلوعتي عيد لوحده 🤍✨',
    caption: 'وجودك جنبي يا بنوتي بيحول أي مكان عادي لأحلى ذكرى في الدنيا.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo3.jpg',
    title: 'أقرب حد لقلبي وروحي يا شوشو 💙',
    caption: 'تلقائيتنا وهزارنا سوا يا دلوعتي هما أحلى حاجة في يومي كله.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo4.jpg',
    title: 'أحلى أوقاتنا والضحكة من القلب 😂💜',
    caption: 'معاكي بس يا شروق بنسى الدنيا كلها وبنعيش اللحظة بكل فرحتها.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo5.jpg',
    title: 'في كل مكان مع بنوتي وحبيبتي 🌸🤍',
    caption: 'ضحكتك الرقيقة دي يا دلوعتي هي الطاقة اللي بتحركني وبتخلي أي يوم صعب يعدي في ثانية.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo8.jpg',
    title: 'دلوعتي وأميرتي الجميلة ✨💚',
    caption: 'قمر في كل حالاتك يا شروق، ربنا يحفظلي الضحكة دي وميحرمنيش منك أبداً.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo12.jpg',
    title: 'أحلى ونس وأدفى ضحكة يا شوشو ☕💛',
    caption: 'أجمل قعدة في الدنيا هي اللي بتكون عيني فيها شايفاكي يا دلوعتي مبسوطة وبتضحكي.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo13.jpg',
    title: 'أجمل صدفة وأحلى نصيب يا بنوتي 🤍✨',
    caption: 'كل ما أبص لصورتنا سوا بحمد ربنا مليون مرة إن شروق في حياتي.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo15.jpg',
    title: 'شروق اللي نورها بيغطي على أي نور 🌟💛',
    caption: 'اسم على مسمى يا دلوعتي.. وسط كل الأنوار دي مفيش نور بيخطف قلبي غير نور وشك.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo16.jpg',
    title: 'كل سنة وحياتك منورة زيك يا دلوعتي 🎆🌸',
    caption: 'زي الشماريخ المنورة في إيدك يا بنوتي، إنتي خليتي حياتي كلها أعياد ونور.'
  },
  {
    type: 'image',
    src: 'assets/photos/photo17.jpg',
    title: 'You Mean The World To Me يا دلوعتي 💌💋',
    caption: 'جوابك وكلامك شايلهم جوه عيني وفي قلبي يا شروق.. وأنا كمان بعشقك فوق ما تتخيلي.'
  },
  {
    type: 'video',
    src: 'assets/memory_video.mp4',
    title: 'لحظاتنا الحية مع دلوعتي شروق 🎥💖',
    caption: 'ذكرى متحركة بصوت وصورة للحظاتنا الحلوة يا بنوتي اللي هتفضل عايشة بينا طول العمر!'
  }
];

// ============================================================================
// RESPONSIVE DEVICE & CAMERA CALCULATOR (Mobile / Tablet / Laptop)
// ============================================================================
function getViewportProfile() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const aspect = w / Math.max(h, 1);
  const isMobile = w <= 768;
  const isTablet = w > 768 && w <= 1024;
  return { w, h, aspect, isMobile, isTablet };
}

// Compute exact scale for 3D morphed text/shapes so 100% of letters fit inside ANY screen width
function getMorphTransformForScreen() {
  const { aspect, isMobile } = getViewportProfile();
  if (!isMobile && aspect >= 1) {
    // Desktop / Laptop: untouched 1.0 scale
    return { scale: 1.0, offsetY: 0 };
  }
  // At camera distance 48 with FOV 60, visible frustum height = 2 * 48 * tan(30deg) = 55.42
  const visibleWidth = 55.42 * aspect;
  // Our 3D text cloud spans ~74 units wide. Fit it into 86% of visibleWidth!
  const fittedScale = Math.min(1.0, Math.max(0.32, (visibleWidth * 0.88) / 74));
  // Shift up slightly on mobile so the 3D text sits in the upper-center above the bottom controls
  const offsetY = isMobile ? 5.2 : 1.5;
  return { scale: fittedScale, offsetY };
}

function getCameraPreset(mode) {
  const { isMobile, aspect } = getViewportProfile();
  const portraitMult = aspect < 1 ? Math.min(1.55, 1 / Math.max(aspect, 0.45)) : 1.0;

  if (mode === 'galaxy') {
    const z = isMobile ? 48 * portraitMult * 0.82 : 48;
    const y = isMobile ? 21 : 18;
    const lookY = isMobile ? 1.5 : 3.5;
    return {
      pos: new THREE.Vector3(0, y, z),
      lookAt: new THREE.Vector3(0, lookY, 0)
    };
  }

  if (mode === 'morph') {
    // Always face straight on at x=0 so 3D text is never viewed sideways!
    return {
      pos: new THREE.Vector3(0, 5, 48),
      lookAt: new THREE.Vector3(0, 4, 0)
    };
  }

  if (mode === 'cake') {
    const z = isMobile ? 40 : 28;
    const y = isMobile ? 13.5 : 12;
    const lookY = isMobile ? 3.5 : 6;
    return {
      pos: new THREE.Vector3(0, y, z),
      lookAt: new THREE.Vector3(0, lookY, 0)
    };
  }

  if (mode === 'fireworks') {
    return {
      pos: new THREE.Vector3(0, 8, 52),
      lookAt: new THREE.Vector3(0, 4.5, 0)
    };
  }

  return {
    pos: new THREE.Vector3(0, 18, 48),
    lookAt: new THREE.Vector3(0, 3.5, 0)
  };
}

// ============================================================================
// 1. LIVE 20TH BIRTHDAY COUNTER (Since Nov 7, 2006)
// ============================================================================
const birthDate = new Date('2006-11-07T00:00:00');
function updateAgeTimer() {
  const now = new Date();
  const diffMs = Math.max(0, now - birthDate);
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalHours = Math.floor(totalSeconds / 3600);
  const totalDays = Math.floor(totalHours / 24);
  const years = 20;

  const elYears = document.getElementById('t-years');
  const elDays = document.getElementById('t-days');
  const elHours = document.getElementById('t-hours');
  const elSecs = document.getElementById('t-secs');

  if (elYears) elYears.textContent = years;
  if (elDays) elDays.textContent = totalDays.toLocaleString('en-US');
  if (elHours) elHours.textContent = (totalHours % 24).toString().padStart(2, '0') + 'h';
  if (elSecs) elSecs.textContent = (totalSeconds % 60).toString().padStart(2, '0') + 's';
}
setInterval(updateAgeTimer, 1000);
updateAgeTimer();

// ============================================================================
// 2. DREAMY WEB AUDIO MUSIC BOX SYNTHESIZER
// ============================================================================
class RomanticMusicBox {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.step = 0;
    this.melody = [
      { f: 261.63, d: 0.45 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 },
      { f: 349.23, d: 0.7 }, { f: 329.63, d: 1.2 },
      { f: 261.63, d: 0.45 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.7 }, { f: 261.63, d: 0.7 },
      { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.2 },
      { f: 261.63, d: 0.45 }, { f: 261.63, d: 0.35 }, { f: 523.25, d: 0.7 }, { f: 440.00, d: 0.7 },
      { f: 349.23, d: 0.7 }, { f: 329.63, d: 0.7 }, { f: 293.66, d: 1.1 },
      { f: 466.16, d: 0.45 }, { f: 466.16, d: 0.35 }, { f: 440.00, d: 0.7 }, { f: 349.23, d: 0.7 },
      { f: 392.00, d: 0.7 }, { f: 349.23, d: 1.4 }
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playNote(freq, duration = 0.8) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + duration * 1.9);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration * 2);
    osc2.stop(now + duration * 2);
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.scheduleNext();
  }

  scheduleNext() {
    if (!this.isPlaying) return;
    const note = this.melody[this.step % this.melody.length];
    this.playNote(note.f, note.d);
    if (this.step % 4 === 0) {
      this.playNote(note.f * 0.5, 1.4);
    }
    this.step++;
    this.timer = setTimeout(() => this.scheduleNext(), note.d * 650);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

const musicBox = new RomanticMusicBox();

// ============================================================================
// 3. THREE.JS SCENE, CAMERA, RENDERER & ORBIT CONTROLS
// ============================================================================
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x05020a, 0.0042);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 35, 95);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
container.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.maxDistance = 185;
controls.minDistance = 6;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.65;

// Lights
const ambientLight = new THREE.AmbientLight(0xffd6e8, 0.85);
scene.add(ambientLight);

const centerPointLight = new THREE.PointLight(0xff4d8d, 3.2, 120);
centerPointLight.position.set(0, 4, 0);
scene.add(centerPointLight);

const goldLight = new THREE.PointLight(0xffd166, 2.2, 120);
goldLight.position.set(25, 25, 25);
scene.add(goldLight);

function createGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,180,220,0.8)');
  grad.addColorStop(0.7, 'rgba(255,77,141,0.25)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(canvas);
}
const particleTexture = createGlowTexture();

// ============================================================================
// 4. 10,000 MORPHING 3D GALAXY & SHAPE PARTICLES (ALL HER NAMES & NICKNAMES)
// ============================================================================
const PARTICLE_COUNT = 10000;
const particleGeo = new THREE.BufferGeometry();
const currentPositions = new Float32Array(PARTICLE_COUNT * 3);
const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
const particleColors = new Float32Array(PARTICLE_COUNT * 3);

const shapeTargets = {
  galaxy: new Float32Array(PARTICLE_COUNT * 3),
  daloaty: new Float32Array(PARTICLE_COUNT * 3),
  shorouk: new Float32Array(PARTICLE_COUNT * 3),
  banoty: new Float32Array(PARTICLE_COUNT * 3),
  twenty: new Float32Array(PARTICLE_COUNT * 3),
  heart: new Float32Array(PARTICLE_COUNT * 3),
  ring: new Float32Array(PARTICLE_COUNT * 3)
};

const colorPink = new THREE.Color(0xff4d8d);
const colorGold = new THREE.Color(0xffd166);
const colorPurple = new THREE.Color(0xa855f7);
const colorCyan = new THREE.Color(0x64dfdf);

// 4A. Generate Spiral Galaxy positions
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  const radius = Math.pow(Math.random(), 1.35) * 68 + 3;
  const branches = 4;
  const branchAngle = ((i % branches) / branches) * Math.PI * 2;
  const spinAngle = radius * 0.14;

  const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 6;
  const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 4.5;
  const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 6;

  shapeTargets.galaxy[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
  shapeTargets.galaxy[i3 + 1] = randomY;
  shapeTargets.galaxy[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

  currentPositions[i3] = shapeTargets.galaxy[i3];
  currentPositions[i3 + 1] = shapeTargets.galaxy[i3 + 1];
  currentPositions[i3 + 2] = shapeTargets.galaxy[i3 + 2];

  targetPositions[i3] = shapeTargets.galaxy[i3];
  targetPositions[i3 + 1] = shapeTargets.galaxy[i3 + 1];
  targetPositions[i3 + 2] = shapeTargets.galaxy[i3 + 2];

  const mixed = colorPink.clone();
  const ratio = radius / 70;
  if (i % 5 === 0) {
    mixed.lerp(colorGold, 0.8);
  } else if (ratio < 0.45) {
    mixed.lerp(colorGold, 1 - ratio * 2);
  } else {
    mixed.lerp(colorPurple, (ratio - 0.45) * 1.4);
    if (i % 7 === 0) mixed.lerp(colorCyan, 0.6);
  }

  particleColors[i3] = mixed.r;
  particleColors[i3 + 1] = mixed.g;
  particleColors[i3 + 2] = mixed.b;
}

// 4B. Generate 3D Parametric Heart positions
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  const t = Math.random() * Math.PI * 2;
  const u = Math.random() * Math.PI - Math.PI / 2;
  const scale = 1.45;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  const z = Math.sin(u) * 6 * (1 - Math.abs(t - Math.PI) / Math.PI);

  shapeTargets.heart[i3] = x * scale + (Math.random() - 0.5) * 1.2;
  shapeTargets.heart[i3 + 1] = y * scale + 4 + (Math.random() - 0.5) * 1.2;
  shapeTargets.heart[i3 + 2] = z * scale + (Math.random() - 0.5) * 1.5;
}

// 4C. Sample 2D text into 3D extruded point cloud (normalized to 72 units max width)
function sampleTextTo3DPoints(lines, targetArray) {
  const c = document.createElement('canvas');
  c.width = 520;
  c.height = 280;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (lines.length === 1) {
    ctx.font = '900 112px Cairo, Arial, sans-serif';
    ctx.fillText(lines[0], c.width / 2, c.height / 2);
  } else {
    ctx.font = '900 78px Cairo, Arial, sans-serif';
    ctx.fillText(lines[0], c.width / 2, c.height * 0.34);
    ctx.font = '900 72px Cairo, Arial, sans-serif';
    ctx.fillText(lines[1], c.width / 2, c.height * 0.72);
  }

  const imgData = ctx.getImageData(0, 0, c.width, c.height).data;
  const validPixels = [];
  const scale = 0.145; // Max width = 520 * 0.145 = 75 units
  for (let y = 0; y < c.height; y += 2) {
    for (let x = 0; x < c.width; x += 2) {
      const idx = (y * c.width + x) * 4;
      if (imgData[idx] > 128) {
        validPixels.push({
          x: (x - c.width / 2) * scale,
          y: (c.height / 2 - y) * scale
        });
      }
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    if (validPixels.length > 0 && i < PARTICLE_COUNT * 0.88) {
      const p = validPixels[i % validPixels.length];
      targetArray[i3] = p.x + (Math.random() - 0.5) * 0.35;
      targetArray[i3 + 1] = p.y + 4 + (Math.random() - 0.5) * 0.35;
      targetArray[i3 + 2] = (Math.random() - 0.5) * 2.4;
    } else {
      const angle = Math.random() * Math.PI * 2;
      const r = 24 + Math.random() * 12;
      targetArray[i3] = Math.cos(angle) * r;
      targetArray[i3 + 1] = (Math.random() - 0.5) * 22 + 4;
      targetArray[i3 + 2] = Math.sin(angle) * r;
    }
  }
}

let activeMorphShape = 'galaxy';

function buildAllTextShapes() {
  sampleTextTo3DPoints(['دلوعتي شروق', 'بحبك للأبد ❤️'], shapeTargets.daloaty);
  sampleTextTo3DPoints(['SHOROUK ❤️', 'HAPPY 20th'], shapeTargets.shorouk);
  sampleTextTo3DPoints(['بنوتي القمر', 'شوشو حبيبتي'], shapeTargets.banoty);
  sampleTextTo3DPoints(['👑 شوشو 20 👑', 'دلوعتي ❤️'], shapeTargets.twenty);
  if (activeMorphShape !== 'galaxy') {
    setMorphTarget(activeMorphShape);
  }
}

buildAllTextShapes();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(buildAllTextShapes);
}

// 4D. Eternal Torus Knot / Diamond Ring
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const i3 = i * 3;
  const u = (i / PARTICLE_COUNT) * Math.PI * 2 * 12;
  const p = 2, q = 3;
  const r = 14 * (2 + Math.sin(q * u) * 0.45);
  shapeTargets.ring[i3] = r * Math.cos(p * u) * 0.65 + (Math.random() - 0.5) * 1.4;
  shapeTargets.ring[i3 + 1] = r * Math.sin(p * u) * 0.65 + 4 + (Math.random() - 0.5) * 1.4;
  shapeTargets.ring[i3 + 2] = 10 * Math.cos(q * u) + (Math.random() - 0.5) * 1.4;
}

particleGeo.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

const particleMat = new THREE.PointsMaterial({
  size: 0.95,
  map: particleTexture,
  vertexColors: true,
  transparent: true,
  opacity: 0.92,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});

const galaxyPoints = new THREE.Points(particleGeo, particleMat);
scene.add(galaxyPoints);

function setMorphTarget(shapeName) {
  activeMorphShape = shapeName;
  const src = shapeTargets[shapeName] || shapeTargets.galaxy;
  for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
    targetPositions[i] = src[i];
  }
}

// ============================================================================
// 5. CENTRAL 3D CRYSTAL HEART & ORBITING HOLOGRAPHIC PHOTO CARDS
// ============================================================================
const galaxyGroup = new THREE.Group();
scene.add(galaxyGroup);

const heartShape = new THREE.Shape();
const hx = 0, hy = 0;
heartShape.moveTo(hx + 0.5, hy + 0.5);
heartShape.bezierCurveTo(hx + 0.5, hy + 0.5, hx + 0.4, hy, hx, hy);
heartShape.bezierCurveTo(hx - 0.6, hy, hx - 0.6, hy + 0.7, hx - 0.6, hy + 0.7);
heartShape.bezierCurveTo(hx - 0.6, hy + 1.1, hx - 0.3, hy + 1.54, hx + 0.5, hy + 1.9);
heartShape.bezierCurveTo(hx + 1.2, hy + 1.54, hx + 1.6, hy + 1.1, hx + 1.6, hy + 0.7);
heartShape.bezierCurveTo(hx + 1.6, hy + 0.7, hx + 1.6, hy, hx + 1.0, hy);
heartShape.bezierCurveTo(hx + 0.7, hy, hx + 0.5, hy + 0.5, hx + 0.5, hy + 0.5);

const extrudeSettings = {
  depth: 0.45,
  bevelEnabled: true,
  bevelSegments: 5,
  steps: 2,
  bevelSize: 0.18,
  bevelThickness: 0.18
};
const centerHeartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
centerHeartGeo.center();
const centerHeartMat = new THREE.MeshStandardMaterial({
  color: 0xff2a75,
  emissive: 0xff1a66,
  emissiveIntensity: 0.65,
  metalness: 0.4,
  roughness: 0.15
});
const centerHeartMesh = new THREE.Mesh(centerHeartGeo, centerHeartMat);
centerHeartMesh.rotation.z = Math.PI;
centerHeartMesh.scale.set(3.2, 3.2, 3.2);
centerHeartMesh.position.set(0, 3.5, 0);
galaxyGroup.add(centerHeartMesh);

const ringGeo1 = new THREE.TorusGeometry(6.5, 0.07, 16, 100);
const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.6 });
const orbitRing1 = new THREE.Mesh(ringGeo1, ringMat1);
orbitRing1.position.copy(centerHeartMesh.position);
galaxyGroup.add(orbitRing1);

const orbitRing2 = new THREE.Mesh(ringGeo1, new THREE.MeshBasicMaterial({ color: 0xff4d8d, transparent: true, opacity: 0.45 }));
orbitRing2.position.copy(centerHeartMesh.position);
orbitRing2.scale.set(1.25, 1.25, 1.25);
galaxyGroup.add(orbitRing2);

// Create 18 Floating 3D Memory Cards in a Spiral Constellation
const memoryMeshes = [];
const textureLoader = new THREE.TextureLoader();

const videoEl3D = document.createElement('video');
videoEl3D.src = 'assets/memory_video.mp4';
videoEl3D.crossOrigin = 'anonymous';
videoEl3D.loop = true;
videoEl3D.muted = true;
videoEl3D.playsInline = true;
const videoTexture3D = new THREE.VideoTexture(videoEl3D);
videoTexture3D.minFilter = THREE.LinearFilter;
videoTexture3D.magFilter = THREE.LinearFilter;

MEMORIES.forEach((mem, index) => {
  const cardGroup = new THREE.Group();

  const frameGeo = new THREE.BoxGeometry(5.6, 7.2, 0.22);
  const isSpecial20 = index === 0;
  const isVideo = mem.type === 'video';
  const frameColor = isSpecial20 ? 0xffd166 : (isVideo ? 0x64dfdf : 0xff4d8d);

  const frameMat = new THREE.MeshStandardMaterial({
    color: frameColor,
    emissive: frameColor,
    emissiveIntensity: isSpecial20 ? 0.55 : 0.3,
    metalness: 0.7,
    roughness: 0.2
  });
  const frameMesh = new THREE.Mesh(frameGeo, frameMat);
  cardGroup.add(frameMesh);

  const photoGeo = new THREE.PlaneGeometry(5.1, 6.6);
  let tex;
  if (mem.type === 'video') {
    tex = videoTexture3D;
  } else {
    tex = textureLoader.load(mem.src);
  }

  const photoMat = new THREE.MeshBasicMaterial({
    map: tex,
    side: THREE.DoubleSide
  });

  const frontPlane = new THREE.Mesh(photoGeo, photoMat);
  frontPlane.position.z = 0.13;
  cardGroup.add(frontPlane);

  const backPlane = new THREE.Mesh(photoGeo, photoMat);
  backPlane.position.z = -0.13;
  backPlane.rotation.y = Math.PI;
  cardGroup.add(backPlane);

  const total = MEMORIES.length;
  const angle = (index / total) * Math.PI * 2;
  const radius = index % 2 === 0 ? 22 : 34;
  const yOffset = Math.sin(index * 1.1) * 7.5 + 3.5;

  cardGroup.position.set(
    Math.cos(angle) * radius,
    yOffset,
    Math.sin(angle) * radius
  );

  cardGroup.lookAt(0, yOffset, 0);
  cardGroup.rotateY(Math.PI);

  cardGroup.userData = {
    memoryIndex: index,
    baseY: yOffset,
    floatSpeed: 1.2 + (index % 5) * 0.25,
    floatPhase: index * 0.7
  };

  frontPlane.userData = { memoryIndex: index, parentGroup: cardGroup };
  backPlane.userData = { memoryIndex: index, parentGroup: cardGroup };
  frameMesh.userData = { memoryIndex: index, parentGroup: cardGroup };

  galaxyGroup.add(cardGroup);
  memoryMeshes.push(cardGroup);
});

// ============================================================================
// 6. INTERACTIVE 3D 20TH BIRTHDAY CAKE SCENE FOR SHOROUK
// ============================================================================
const cakeGroup = new THREE.Group();
cakeGroup.position.set(0, -4, 0);
cakeGroup.visible = false;
scene.add(cakeGroup);

const plateMesh = new THREE.Mesh(
  new THREE.CylinderGeometry(11.5, 10.5, 0.7, 48),
  new THREE.MeshStandardMaterial({ color: 0xfff0f6, metalness: 0.5, roughness: 0.2 })
);
plateMesh.position.y = 0;
cakeGroup.add(plateMesh);

const tier1 = new THREE.Mesh(
  new THREE.CylinderGeometry(8.5, 8.8, 4.5, 48),
  new THREE.MeshStandardMaterial({ color: 0xff8fab, roughness: 0.35 })
);
tier1.position.y = 2.5;
cakeGroup.add(tier1);

const tier2 = new THREE.Mesh(
  new THREE.CylinderGeometry(6.2, 6.5, 4.0, 48),
  new THREE.MeshStandardMaterial({ color: 0xffe5ec, roughness: 0.3 })
);
tier2.position.y = 6.6;
cakeGroup.add(tier2);

const tier3 = new THREE.Mesh(
  new THREE.CylinderGeometry(4.2, 4.4, 3.4, 48),
  new THREE.MeshStandardMaterial({ color: 0xff4d8d, roughness: 0.3 })
);
tier3.position.y = 10.2;
cakeGroup.add(tier3);

const creamGeo = new THREE.SphereGeometry(0.48, 16, 16);
const creamMatGold = new THREE.MeshStandardMaterial({ color: 0xffd166, metalness: 0.6, roughness: 0.2 });
const creamMatWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25 });

for (let i = 0; i < 24; i++) {
  const a = (i / 24) * Math.PI * 2;
  const pearl1 = new THREE.Mesh(creamGeo, i % 2 === 0 ? creamMatGold : creamMatWhite);
  pearl1.position.set(Math.cos(a) * 8.4, 4.7, Math.sin(a) * 8.4);
  cakeGroup.add(pearl1);

  const pearl2 = new THREE.Mesh(creamGeo, i % 2 === 0 ? creamMatWhite : creamMatGold);
  pearl2.position.set(Math.cos(a) * 6.1, 8.6, Math.sin(a) * 6.1);
  cakeGroup.add(pearl2);
}

const candleFlames = [];
const candleLights = [];
[-1.3, 1.3].forEach((xPos) => {
  const candle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 3.2, 24),
    new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffae00, emissiveIntensity: 0.25, metalness: 0.4 })
  );
  candle.position.set(xPos, 13.3, 0);
  cakeGroup.add(candle);

  const flameGeo = new THREE.ConeGeometry(0.42, 1.25, 16);
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffea79 });
  const flame = new THREE.Mesh(flameGeo, flameMat);
  flame.position.set(xPos, 15.5, 0);
  cakeGroup.add(flame);
  candleFlames.push(flame);

  const fLight = new THREE.PointLight(0xffae42, 2.2, 25);
  fLight.position.set(xPos, 15.8, 0);
  cakeGroup.add(fLight);
  candleLights.push(fLight);
});

function create20BadgeTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(255, 209, 102, 0.96)';
  ctx.beginPath();
  ctx.arc(128, 128, 112, 0, Math.PI * 2);
  ctx.fill();
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#fff';
  ctx.stroke();
  ctx.fillStyle = '#590d22';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '900 42px Cairo, sans-serif';
  ctx.fillText('دلوعتي', 128, 86);
  ctx.font = '900 92px Cairo, sans-serif';
  ctx.fillText('20', 128, 162);
  return new THREE.CanvasTexture(c);
}

const badgeMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(3.4, 3.4),
  new THREE.MeshBasicMaterial({ map: create20BadgeTexture(), transparent: true })
);
badgeMesh.position.set(0, 6.6, 6.55);
cakeGroup.add(badgeMesh);

// ============================================================================
// 7. 3D FIREWORKS SYSTEM
// ============================================================================
const fireworks = [];
function launchFirework() {
  const count = 120;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];
  const colors = new Float32Array(count * 3);

  const originX = (Math.random() - 0.5) * 35;
  const originY = 10 + Math.random() * 20;
  const originZ = (Math.random() - 0.5) * 30;

  const baseColor = [colorPink, colorGold, colorCyan, colorPurple][Math.floor(Math.random() * 4)];

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = originX;
    positions[i3 + 1] = originY;
    positions[i3 + 2] = originZ;

    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const speed = 0.35 + Math.random() * 0.65;

    velocities.push({
      vx: Math.sin(phi) * Math.cos(theta) * speed,
      vy: Math.sin(phi) * Math.sin(theta) * speed,
      vz: Math.cos(phi) * speed
    });

    colors[i3] = baseColor.r;
    colors[i3 + 1] = baseColor.g;
    colors[i3 + 2] = baseColor.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 1.4,
    map: particleTexture,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);
  fireworks.push({ points, velocities, life: 1.0 });
}

// ============================================================================
// 8. CAMERA FLY-TO & MEMORY SPOTLIGHT LOGIC (RESPONSIVE FOR MOBILE/TABLET/PC)
// ============================================================================
let currentMemoryIdx = 0;
let autoPilotTimer = null;
let isAutoPilot = false;
let currentMode = 'galaxy';

const cameraAnim = {
  active: false,
  targetPos: new THREE.Vector3(0, 18, 48),
  targetLookAt: new THREE.Vector3(0, 3.5, 0)
};

function flyCameraTo(posVec, lookAtVec) {
  cameraAnim.targetPos.copy(posVec);
  cameraAnim.targetLookAt.copy(lookAtVec);
  cameraAnim.active = true;
}

function focusOnMemory(index) {
  if (currentMode !== 'galaxy') {
    switchSceneMode('galaxy');
  }
  currentMemoryIdx = (index + MEMORIES.length) % MEMORIES.length;
  const mem = MEMORIES[currentMemoryIdx];
  const cardGroup = memoryMeshes[currentMemoryIdx];

  const { isMobile } = getViewportProfile();

  const cardPos = new THREE.Vector3();
  cardGroup.getWorldPosition(cardPos);

  const dirFromCenter = cardPos.clone().sub(new THREE.Vector3(0, cardPos.y, 0)).normalize();
  const dist = isMobile ? 15.5 : 9.5;
  const camPos = cardPos.clone().add(dirFromCenter.multiplyScalar(dist));
  camPos.y += isMobile ? 0.3 : 1.2;

  const lookTarget = cardPos.clone();
  if (isMobile) {
    lookTarget.y -= 2.6;
  }

  controls.autoRotate = false;
  flyCameraTo(camPos, lookTarget);

  const panel = document.getElementById('memory-panel');
  const imgEl = document.getElementById('memory-img');
  const vidEl = document.getElementById('memory-video');
  const tagEl = document.getElementById('memory-tag');
  const titleEl = document.getElementById('memory-title');
  const capEl = document.getElementById('memory-caption');

  tagEl.textContent = `✨ ذكرى #${currentMemoryIdx + 1} من ${MEMORIES.length}`;
  titleEl.textContent = mem.title;
  capEl.textContent = mem.caption;

  if (mem.type === 'video') {
    imgEl.style.display = 'none';
    vidEl.style.display = 'block';
    vidEl.play().catch(() => {});
    videoEl3D.play().catch(() => {});
  } else {
    vidEl.pause();
    vidEl.style.display = 'none';
    imgEl.style.display = 'block';
    imgEl.src = mem.src;
  }

  panel.classList.add('open');
}

function closeMemoryPanel() {
  document.getElementById('memory-panel').classList.remove('open');
  const vidEl = document.getElementById('memory-video');
  if (vidEl) vidEl.pause();
  controls.autoRotate = true;
  const preset = getCameraPreset('galaxy');
  flyCameraTo(preset.pos, preset.lookAt);
}

// Raycaster for clicking/tapping on 3D cards in space
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let pointerDownPos = { x: 0, y: 0 };

renderer.domElement.addEventListener('pointerdown', (e) => {
  pointerDownPos = { x: e.clientX, y: e.clientY };
});

renderer.domElement.addEventListener('pointerup', (e) => {
  const dx = Math.abs(e.clientX - pointerDownPos.x);
  const dy = Math.abs(e.clientY - pointerDownPos.y);
  if (dx > 8 || dy > 8) return;

  if (currentMode !== 'galaxy') return;

  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(galaxyGroup.children, true);

  for (const hit of intersects) {
    if (hit.object.userData && typeof hit.object.userData.memoryIndex === 'number') {
      focusOnMemory(hit.object.userData.memoryIndex);
      break;
    }
  }
});

// ============================================================================
// 9. SCENE MODE SWITCHER (GALAXY / MORPH / CAKE / FIREWORKS)
// ============================================================================
let fireworksInterval = null;
let targetPointsScale = 1.0;
let targetPointsOffsetY = 0.0;

function updateParticleCloudFraming() {
  if (currentMode === 'morph' || currentMode === 'fireworks') {
    const tf = getMorphTransformForScreen();
    targetPointsScale = tf.scale;
    targetPointsOffsetY = tf.offsetY;
  } else {
    targetPointsScale = 1.0;
    targetPointsOffsetY = 0.0;
  }
}

function showToast(msg) {
  const toast = document.getElementById('StatusToast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 4200);
}

function switchSceneMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.dock-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  const morphBar = document.getElementById('morph-controls');
  const cakeBar = document.getElementById('cake-controls');
  const memPanel = document.getElementById('memory-panel');

  morphBar.classList.remove('visible');
  cakeBar.classList.remove('visible');

  if (fireworksInterval) {
    clearInterval(fireworksInterval);
    fireworksInterval = null;
  }

  const preset = getCameraPreset(mode);
  updateParticleCloudFraming();

  if (mode === 'galaxy') {
    galaxyGroup.visible = true;
    cakeGroup.visible = false;
    setMorphTarget('galaxy');
    controls.autoRotate = true;
    flyCameraTo(preset.pos, preset.lookAt);
    showToast('🌌 اضغطي على أي كارت 3D في المجرة يا دلوعتي عشان تقربي منه!');
  } else if (mode === 'morph') {
    memPanel.classList.remove('open');
    galaxyGroup.visible = false;
    cakeGroup.visible = false;
    morphBar.classList.add('visible');
    setMorphTarget('daloaty');
    document.querySelectorAll('.morph-pill').forEach((p, i) => p.classList.toggle('active', i === 0));
    // Disable autoRotate so camera faces the 3D text dead-on and never views it sideways!
    controls.autoRotate = false;
    flyCameraTo(preset.pos, preset.lookAt);
    showToast('💫 اختاري من الأزرار تحت عشان النجوم تكتب اسمك ودلعك يا شروق!');
  } else if (mode === 'cake') {
    memPanel.classList.remove('open');
    galaxyGroup.visible = false;
    cakeGroup.visible = true;
    cakeBar.classList.add('visible');
    setMorphTarget('galaxy');
    candlesBlownOut = false;
    candleFlames.forEach((f) => (f.visible = true));
    candleLights.forEach((l) => (l.intensity = 2.2));
    document.getElementById('cake-status-text').textContent =
      '🎂 اتمني أمنية يا دلوعتي وانفخي في الموبايل أو اضغطي الزرار عشان تطفي شمعة الـ 20!';
    controls.autoRotate = true;
    flyCameraTo(preset.pos, preset.lookAt);
    showToast('🎂 اتمني أمنية حلوة لعيد ميلادك الـ 20 يا دلوعتي!');
  } else if (mode === 'fireworks') {
    memPanel.classList.remove('open');
    galaxyGroup.visible = false;
    cakeGroup.visible = false;
    setMorphTarget('daloaty');
    controls.autoRotate = false;
    flyCameraTo(preset.pos, preset.lookAt);
    launchFirework();
    launchFirework();
    fireworksInterval = setInterval(() => {
      launchFirework();
      if (Math.random() > 0.4) launchFirework();
    }, 650);
    showToast('🎆 كل سنة وإنتي دلوعتي وبنوتي وأحلى شروق في حياتي!');
  }
}

// ============================================================================
// 10. MICROPHONE BLOW DETECTION & CAKE CANDLE EXTINGUISH
// ============================================================================
let candlesBlownOut = false;
let micStream = null;
let micAnimFrame = null;

function extinguishCandles() {
  if (candlesBlownOut) return;
  candlesBlownOut = true;

  candleFlames.forEach((f) => (f.visible = false));
  candleLights.forEach((l) => (l.intensity = 0));

  document.getElementById('cake-status-text').textContent =
    '🎉 هييييه! كل سنة وإنتي طيبة يا دلوعتي ويا أحلى شروق في الكون! ❤️';

  if (micStream) {
    micStream.getTracks().forEach((t) => t.stop());
    micStream = null;
  }
  if (micAnimFrame) cancelAnimationFrame(micAnimFrame);
  document.getElementById('mic-meter-wrap').classList.remove('active');

  for (let i = 0; i < 6; i++) {
    setTimeout(() => launchFirework(), i * 300);
  }

  setTimeout(() => {
    document.getElementById('letter-modal').classList.add('open');
  }, 2200);
}

async function startMicrophoneBlowDetection() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micStream = stream;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioCtx();
    const source = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);
    const meterWrap = document.getElementById('mic-meter-wrap');
    const meterBar = document.getElementById('mic-level-bar');
    meterWrap.classList.add('active');
    document.getElementById('cake-status-text').textContent = '🎤 يلا انفخي بقوة في المايك يا دلوعتي... 💨';

    function checkVolume() {
      if (candlesBlownOut) return;
      analyser.getByteFrequencyData(data);
      let sum = 0;
      for (let i = 0; i < 40; i++) sum += data[i];
      const avg = sum / 40;
      const pct = Math.min(100, (avg / 110) * 100);
      meterBar.style.width = pct + '%';

      if (avg > 88) {
        extinguishCandles();
        return;
      }
      micAnimFrame = requestAnimationFrame(checkVolume);
    }
    checkVolume();
  } catch (err) {
    extinguishCandles();
  }
}

// ============================================================================
// 11. UI EVENT LISTENERS
// ============================================================================
document.getElementById('enter-galaxy-btn').addEventListener('click', () => {
  document.getElementById('intro-screen').classList.add('hidden');
  document.getElementById('hud-top').classList.add('visible');
  document.getElementById('bottom-dock').classList.add('visible');

  musicBox.start();
  videoEl3D.play().catch(() => {});

  const preset = getCameraPreset('galaxy');
  flyCameraTo(preset.pos, preset.lookAt);
  showToast('✨ أهلاً بيكي في مجرتك يا دلوعتي.. اضغطي على أي صورة أو جربي الجولة التلقائية!');
});

document.getElementById('prev-memory-btn').addEventListener('click', () => {
  focusOnMemory(currentMemoryIdx - 1);
});

document.getElementById('next-memory-btn').addEventListener('click', () => {
  focusOnMemory(currentMemoryIdx + 1);
});

document.getElementById('close-memory-btn').addEventListener('click', () => {
  if (isAutoPilot) toggleAutoPilot();
  closeMemoryPanel();
});

function toggleAutoPilot() {
  const btn = document.getElementById('btn-autopilot');
  isAutoPilot = !isAutoPilot;
  btn.classList.toggle('active', isAutoPilot);

  if (isAutoPilot) {
    showToast('🎬 بدأت الجولة السينمائية التلقائية بين كل ذكرياتنا يا دلوعتي!');
    focusOnMemory(currentMemoryIdx);
    autoPilotTimer = setInterval(() => {
      focusOnMemory(currentMemoryIdx + 1);
    }, 4500);
  } else {
    clearInterval(autoPilotTimer);
    showToast('⏸ تم إيقاف الجولة التلقائية');
  }
}

document.getElementById('btn-autopilot').addEventListener('click', toggleAutoPilot);

document.getElementById('btn-music').addEventListener('click', () => {
  const playing = musicBox.toggle();
  const btn = document.getElementById('btn-music');
  btn.classList.toggle('active', playing);
  document.getElementById('music-icon').textContent = playing ? '🎵' : '🔇';
});

document.getElementById('btn-letter').addEventListener('click', () => {
  document.getElementById('letter-modal').classList.add('open');
});

document.getElementById('close-letter-btn').addEventListener('click', () => {
  document.getElementById('letter-modal').classList.remove('open');
});

document.getElementById('btn-celebrate-from-letter').addEventListener('click', () => {
  document.getElementById('letter-modal').classList.remove('open');
  switchSceneMode('fireworks');
});

document.querySelectorAll('.dock-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (isAutoPilot) toggleAutoPilot();
    switchSceneMode(btn.dataset.mode);
  });
});

document.querySelectorAll('.morph-pill').forEach((pill) => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.morph-pill').forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    setMorphTarget(pill.dataset.shape);
    controls.autoRotate = false;
    updateParticleCloudFraming();
    const preset = getCameraPreset('morph');
    flyCameraTo(preset.pos, preset.lookAt);
    launchFirework();
  });
});

document.getElementById('btn-mic-blow').addEventListener('click', startMicrophoneBlowDetection);
document.getElementById('btn-tap-blow').addEventListener('click', extinguishCandles);

// ============================================================================
// 12. MAIN ANIMATION LOOP (60 FPS) & RESPONSIVE RESIZE
// ============================================================================
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();

  const posAttr = particleGeo.attributes.position;
  const posArr = posAttr.array;
  for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
    posArr[i] += (targetPositions[i] - posArr[i]) * 0.06;
  }
  posAttr.needsUpdate = true;

  // Smoothly scale & position particle cloud so 3D text always fits 100% of screen width on Mobile/Tablet/PC
  galaxyPoints.scale.lerp(new THREE.Vector3(targetPointsScale, targetPointsScale, targetPointsScale), 0.08);
  galaxyPoints.position.y += (targetPointsOffsetY - galaxyPoints.position.y) * 0.08;

  if (currentMode === 'galaxy') {
    galaxyPoints.rotation.y = elapsed * 0.05;
  } else {
    // Gentle front-facing sway so the 3D text stays 100% readable in front of the camera
    galaxyPoints.rotation.y = Math.sin(elapsed * 0.7) * 0.12;
  }

  const heartBeat = 3.2 + Math.sin(elapsed * 4.2) * 0.22 + Math.sin(elapsed * 8.4) * 0.1;
  centerHeartMesh.scale.set(heartBeat, heartBeat, heartBeat);
  centerHeartMesh.rotation.y = elapsed * 0.7;

  orbitRing1.rotation.x = elapsed * 0.6;
  orbitRing1.rotation.y = elapsed * 0.4;
  orbitRing2.rotation.x = -elapsed * 0.45;
  orbitRing2.rotation.z = elapsed * 0.5;

  memoryMeshes.forEach((card) => {
    const { baseY, floatSpeed, floatPhase } = card.userData;
    card.position.y = baseY + Math.sin(elapsed * floatSpeed + floatPhase) * 0.85;
  });

  if (cakeGroup.visible && !candlesBlownOut) {
    candleFlames.forEach((flame, idx) => {
      flame.scale.x = 1 + Math.sin(elapsed * 18 + idx) * 0.15;
      flame.scale.y = 1 + Math.cos(elapsed * 22 + idx) * 0.18;
      flame.rotation.z = Math.sin(elapsed * 14 + idx) * 0.08;
    });
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    const fw = fireworks[i];
    fw.life -= 0.016;
    if (fw.life <= 0) {
      scene.remove(fw.points);
      fw.points.geometry.dispose();
      fw.points.material.dispose();
      fireworks.splice(i, 1);
      continue;
    }
    const fPos = fw.points.geometry.attributes.position.array;
    for (let j = 0; j < fw.velocities.length; j++) {
      const j3 = j * 3;
      fPos[j3] += fw.velocities[j].vx;
      fPos[j3 + 1] += fw.velocities[j].vy;
      fPos[j3 + 2] += fw.velocities[j].vz;
      fw.velocities[j].vy -= 0.007;
    }
    fw.points.geometry.attributes.position.needsUpdate = true;
    fw.points.material.opacity = fw.life;
  }

  if (cameraAnim.active) {
    camera.position.lerp(cameraAnim.targetPos, 0.07);
    controls.target.lerp(cameraAnim.targetLookAt, 0.09);
    if (
      camera.position.distanceTo(cameraAnim.targetPos) < 0.2 &&
      controls.target.distanceTo(cameraAnim.targetLookAt) < 0.2
    ) {
      cameraAnim.active = false;
    }
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Responsive resize & orientation change handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  updateParticleCloudFraming();
  const panelOpen = document.getElementById('memory-panel').classList.contains('open');
  if (panelOpen && currentMode === 'galaxy') {
    focusOnMemory(currentMemoryIdx);
  } else {
    const preset = getCameraPreset(currentMode);
    flyCameraTo(preset.pos, preset.lookAt);
  }
});
