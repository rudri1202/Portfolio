let ctx = null;

function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  return ctx;
}

export function playClick() {
  try {
    const ac = getCtx();

    // short noise burst → mechanical keyboard feel
    const bufferSize = ac.sampleRate * 0.04; // 40ms
    const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1);

    const source = ac.createBufferSource();
    source.buffer = buffer;

    // bandpass to shape it into a click
    const filter = ac.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 0.8;

    const gain = ac.createGain();
    gain.gain.setValueAtTime(0.18, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.04);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    source.start(ac.currentTime);
  } catch (_) {
    // silently fail on browsers that block AudioContext
  }
}
