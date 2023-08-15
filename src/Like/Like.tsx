import { useState } from "react";
import "./Like.css";

const Like = function () {
  const [click, setClick] = useState(false);
  const [shake, setShake] = useState(false);
  return (
    <div
      className={`box ${click ? "click" : ""} ${shake ? "shake" : ""}`}
      onClick={() => setClick(!click)}
      onMouseEnter={() => setShake(true)}
      onMouseLeave={() => setShake(false)}
    ></div>
  );
};

export default Like;
