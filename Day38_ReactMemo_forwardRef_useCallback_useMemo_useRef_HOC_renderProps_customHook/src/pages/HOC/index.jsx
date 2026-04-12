import { useState } from "react";

const withCounter = (Component) => {
    const WrappedComponent = () => {
        const [counter, setCounter] = useState(0);
        return (
            <Component
                counter={counter}
                increase={() => setCounter(counter + 1)}
            />
        );
    };
    return WrappedComponent;
};

const Component = withCounter(({ counter, increase }) => {
    return <button onClick={increase}>{counter}</button>;
});

const HOC = () => {
    return (
        <div>
            <h1>HOC</h1>
            <Component />
        </div>
    );
};

export default HOC;
