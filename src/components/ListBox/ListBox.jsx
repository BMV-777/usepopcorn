import { useState } from "react";

import MoveList from "../MoveList/MoveList";
import Button from "../Button/Button";

const ListBox = () => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <Button onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </Button>

      {isOpen1 && <MoveList />}
    </div>
  );
};

export default ListBox;
