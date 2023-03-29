import { useCallback, useEffect, useMemo, useState } from "react";
import { audioback } from "./assets/audio";
import { Firework, FriendsSay, Opening, ShowIf } from "./components";

const App = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [firework, setFirework] = useState(false);
  const [audio] = useState(new Audio(audioback));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (firework)
      setTimeout(() => {
        setPlaying(false);
      }, 10000);
  }, [setFirework, firework]);

  const wrapClass = useMemo(
    () =>
      `bg-black max-w-3xl w-full rounded-2xl ${
        showOpening ? "h-screen" : " h-full"
      }`,
    [showOpening]
  );

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = playing;
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const handleCLick = useCallback(() => {
    setShowOpening((prev) => !prev);
    setFirework(true);
    setPlaying(true);
  }, [setShowOpening, setFirework]);

  if (firework) return <Firework showOpening={showOpening} />;

  return (
    <div className={wrapClass}>
      <ShowIf show={showOpening}>
        <Opening onClick={handleCLick} />
      </ShowIf>
    </div>
  );
};

export default App;
