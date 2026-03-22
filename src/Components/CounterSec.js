import React, { useEffect, useState } from "react";

function AutoCounter() {
    const [count, setcount] = useState(0);
    const [running, setrunning] = useState(false);

    useEffect(() => {
        let interval;

        if (running) {
            interval = setInterval(() => {
                setcount(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [running]);

    return (
        <>
            <h2>Count : {count}</h2>

            <button onClick={() => setrunning(true)}>Start</button>
            <button onClick={() => setrunning(false)}>Stop</button>
            <button onClick={() => {
                setcount(0);
                setrunning(false);
            }}>
                Reset
            </button>
        </>
    );
}

export default AutoCounter;