import { useAudioPlayer } from "expo-audio";

export function loadAudioPlayers() {
  const ab = useAudioPlayer(require('../helpers/notes/piano/Ab4.mp3'));
  const a = useAudioPlayer(require('../helpers/notes/piano/A4.mp3'));
  const bb = useAudioPlayer(require('../helpers/notes/piano/Bb4.mp3'));
  const b = useAudioPlayer(require('../helpers/notes/piano/B4.mp3'));
  const c = useAudioPlayer(require('../helpers/notes/piano/C4.mp3'));
  const db = useAudioPlayer(require('../helpers/notes/piano/Db4.mp3'));
  const d = useAudioPlayer(require('../helpers/notes/piano/D4.mp3'));
  const eb = useAudioPlayer(require('../helpers/notes/piano/Eb4.mp3'));
  const e = useAudioPlayer(require('../helpers/notes/piano/E4.mp3'));
  const f = useAudioPlayer(require('../helpers/notes/piano/F4.mp3'));
  const gb = useAudioPlayer(require('../helpers/notes/piano/Gb4.mp3'));
  const g = useAudioPlayer(require('../helpers/notes/piano/G4.mp3'));

  const snare = useAudioPlayer(require('../helpers/notes/drums/drum1.mp3'));
  const hihat = useAudioPlayer(require('../helpers/notes/drums/drum2.mp3'));
  const crashCymbal = useAudioPlayer(require('../helpers/notes/drums/drum3.mp3'));
  const smallTom = useAudioPlayer(require('../helpers/notes/drums/drum5.mp3'));
  const mediumTom = useAudioPlayer(require('../helpers/notes/drums/drum4.mp3'));
  const rideCymbal = useAudioPlayer(require('../helpers/notes/drums/drum6.mp3'));
  const floorTom = useAudioPlayer(require('../helpers/notes/drums/drum7.mp3'));

  return { ab, a, bb, b, c, db, d, eb, e, f, gb, g, snare, hihat, crashCymbal, smallTom, mediumTom, rideCymbal, floorTom };
}
