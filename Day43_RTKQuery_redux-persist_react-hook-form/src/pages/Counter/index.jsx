import {
    increment,
    decrement,
    selectCount,
} from "@/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

// import avatar from "@/assets/images/avatar.png";
function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    // test();
    return (
        <div>
            {/* <img src={avatar} alt="" /> */}
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
