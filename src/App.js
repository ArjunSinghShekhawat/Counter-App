import React, { useState } from "react";
const App = () => {
  let [counter, setCounter] = useState(0);

  function plusClickHandler() {
    setCounter((counter) => counter + 1);
  }
  function minusClickHandler() {
    setCounter((counter) => counter - 1);
  }
  function resetHandler() {
    setCounter(0);
  }

  return (
    <div className=" w-[100vw] h-[100vh] bg-[#344151] flex flex-col justify-center items-center gap-10">
      <div className=" text-3xl text-[#0398d4] font-serif">
        Increment & Decrement
      </div>
      <div className=" flex gap-12 justify-center items-center bg-white text-[25px] text-[#344151]  py-3 rounded">
        <button
          className=" w-20  border-r-2  border-[#bfbfbf] text-5xl font-bold text-center"
          onClick={minusClickHandler}
        >
          -
        </button>
        <div className=" font-bold text-center text-3xl">{counter}</div>
        <button
          className="w-20 border-l-2  border-[#bfbfbf] text-5xl font-bold text-center"
          onClick={plusClickHandler}
        >
          +
        </button>
      </div>
      <button
        type="reset"
        className=" font-bold text-2xl bg-white px-3 py-2 rounded text-[#344151]"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
