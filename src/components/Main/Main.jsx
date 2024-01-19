import { useState } from "react";

import Button from "../Button/Button";
import ListBox from "../MoveList/MoveList";
import WatchedBox from "../WatchedList/WatchedList";
import MoveList from "../MoveList/MoveList";

const Main = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className="main">
      <div className="box">
        <Button onClick={() => setIsOpen1((open) => !open)}>
          {isOpen1 ? "–" : "+"}
        </Button>
        {isOpen1 && <MoveList />}
      </div>
      <div className="box">
        <WatchedBox />
      </div>
    </main>
  );
};

export default Main;
