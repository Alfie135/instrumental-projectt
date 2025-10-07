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

  return { ab, a, bb, b, c, db, d, eb, e, f, gb, g };
}
