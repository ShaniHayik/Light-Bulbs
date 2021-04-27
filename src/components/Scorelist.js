import React from "react";
import { useStateValue } from "../utlils/StateProvider";

function Scorelist() {
  const [{ historyScore }, dispatch] = useStateValue();

  console.log(historyScore);
  return (
    <div>
      {historyScore.map((player) => (
        <h1>
          {player.name} scored {player.currentScore}
        </h1>
      ))}
    </div>
  );
}

export default Scorelist;
