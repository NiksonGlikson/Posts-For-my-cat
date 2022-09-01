import React, { useState } from 'react';

const Counter = function() {
    const [count, setCount] = useState(0);

    function like() {
        setCount(count + 1)
      }
    
      function dislike() {
        setCount(count - 1)
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Dislike</button>
        </div>
    );
}

export default Counter;

