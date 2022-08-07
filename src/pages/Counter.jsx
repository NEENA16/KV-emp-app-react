import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../store/slices/counterSlice";

export function Counter(){
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            {count}
        </div>
    );
}

export default Counter;