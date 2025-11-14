// Simple audio module for interaction sounds
let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
}

export const audio = {
  click() {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Friendly, soft beep with gentle pitch rise
      oscillator.frequency.setValueAtTime(520, ctx.currentTime); // C5 note
      oscillator.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.05); // E5 note
      oscillator.type = 'sine';

      // Soft attack and decay
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.12);
    } catch (e) {
      // Audio not supported or blocked
    }
  },
  collision(intensity: number) {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Gentle, muted collision sounds
      const freq = 300 + (intensity * 5);
      oscillator.frequency.value = Math.min(freq, 450);
      oscillator.type = 'sine';

      const volume = Math.min(intensity / 150, 0.06);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Audio not supported or blocked
    }
  }
};
