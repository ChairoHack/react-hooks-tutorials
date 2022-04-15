import React, { useState } from "react";

const App = () => {
  const initValue = 0;
  const [count, setCount] = useState(initValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(initValue);
  };

  const twice = () => {
    setCount((previousCount) => previousCount * 2);
  };

  const oneThird = () => {
    setCount((previousCount) => {
      return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
    });
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={twice}>x2</button>
        <button onClick={oneThird}>3の倍数のとき3割るボタン</button>
      </div>
    </>
  );
};

export default App;
