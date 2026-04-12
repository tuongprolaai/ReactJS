import { useCounter } from "@/hooks";

const CustomHook = () => {
    const [counter, increase] = useCounter(5);
    return (
        <div>
            <h1>CustomHook</h1>
            <button onClick={increase}>{counter}</button>
        </div>
    );
};

export default CustomHook;
