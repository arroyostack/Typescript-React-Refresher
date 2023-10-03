import { useState } from "react";

interface Props {
    initialValue?: number;
}

export const Counter = ( { initialValue = 0 }: Props ) => {

    const [counter, setcounter] = useState( initialValue );

    const increment = () => {
        setcounter( item => item + 1 );
    };

    return (
        <>
            <h1>Counter: {counter}</h1>

            <button onClick={increment}>+1</button>
        </>
    );
};
