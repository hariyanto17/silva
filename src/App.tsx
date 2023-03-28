import { useEffect, useMemo, useState } from "react";
import { Firework, FriendsSay, Opening, ShowIf } from "./components";

const App = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [firework, setFirework] = useState(true);

  useEffect(() => {
    if (firework)
      setTimeout(() => {
        setFirework(false);
      }, 10000);
  }, [setFirework, firework]);

  const wrapClass = useMemo(
    () =>
      `bg-slate-900 max-w-3xl w-full rounded-2xl ${
        showOpening ? "h-screen" : " h-full"
      }`,
    [showOpening]
  );



  if(firework) return <Firework/>

  return (
    <div className={wrapClass}>
      <ShowIf show={showOpening}>
        <Opening onClick={() => setShowOpening((prev) => !prev)} />
      </ShowIf>
      <ShowIf show={!showOpening}>
        <FriendsSay />
      </ShowIf>
    </div>
  );
};

export default App;
