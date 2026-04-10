import { useRef, useState } from "react";

function Hooks() {
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    return (
        <div>
            {show && <input ref={inputRef} type="text" />}
            <button onClick={() => setShow(!show)}>Toggle</button>
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    );
}

export default Hooks;
