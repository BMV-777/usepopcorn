import { useState } from "react";

import Button from "../Button/Button";
import WatchedList from "../WatchedList/WatchedList";

const WatchedBox = () => {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div>
      <Button onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </Button>
      {isOpen2 && <WatchedList />}
    </div>
  );
};

export default WatchedBox;
