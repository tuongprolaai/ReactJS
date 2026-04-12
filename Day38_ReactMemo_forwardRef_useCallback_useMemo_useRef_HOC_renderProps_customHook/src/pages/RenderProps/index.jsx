import { useEffect, useState } from "react";

const Counter = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(counter + 1);
    };
    return children({ increase, counter });
};

const List = ({ data = [], children }) => {
    return <ul>{data.map((item) => children({ item }))}</ul>;
};

const RenderProps = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => setUser(res));
    }, []);
    return (
        <div>
            <h1>RenderProps</h1>
            <List data={users}>
                {({ item }) => <li key={item.id}>{item.name}</li>}
            </List>
            <Counter>
                {({ increase, counter }) => (
                    <button onClick={increase}>Counter is {counter}</button>
                )}
            </Counter>
        </div>
    );
};

export default RenderProps;
