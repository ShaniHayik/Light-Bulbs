import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useStateValue } from "../utlils/StateProvider";

const Homepage = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useStateValue();

  const addUser = () => {
    dispatch({
      type: "ADD_USER",
      name: name,
    });
  };

  return (
    <div>
      <h1 id="title"> Welcome To “Light Bulbs” Game</h1>
      <input
        placeholder="Name"
        className="joinInput"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />

      <Link
        // onClick={(e) => (!name ? e.preventDefault() : null)}
        onClick={(e) => (!name ? e.preventDefault() : addUser())}
        to={`/gameboard`}
      >
        <button className={"button mt-20"} type="submit">
          START
        </button>
      </Link>
    </div>
  );
};

export default Homepage;


//      <h1>Welcome To “Light Bulbs” Game</h1>