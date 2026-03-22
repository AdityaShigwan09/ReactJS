import React, { useState } from "react";

function Display() {
    const [count, setcount] = useState(0);
    const [typeing, settyping] = useState("");

    const [add, setadd] = useState({
        num: 0,
        num2: 0,
        num3: 0
    });

    const increment = () => {
        setcount(count + 1);
    };

    const handle = () => {
        alert(typeing);
    };

    const accept = (e) => {
        const { name, value } = e.target;

        setadd({
            ...add,
            [name]: value
        });
    };

    const calculate = () => {
        const sum = Number(add.num) + Number(add.num2);

        setadd({
            ...add,
            num3: sum
        });
    };

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={increment}>Add</button>

            <h1>Input Box</h1>
            <input
                type="text"
                value={typeing}
                onChange={(e) => settyping(e.target.value)}
            />
            <button onClick={handle}>Click</button>
            <p>You Type : {typeing}</p>

            <h1>Add Number</h1>
            <input
                type="number"
                name="num"
                onChange={accept}
                placeholder="Enter First Number"
            />
            <input
                type="number"
                name="num2"
                onChange={accept}
                placeholder="Enter 2nd Number"
            />

            <button onClick={calculate}>Add</button>

            <input
                type="number"
                value={add.num3}
                disabled
            />

            <p>{add.num} + {add.num2} = {add.num3}</p>
        </>
    );
}

export default Display;