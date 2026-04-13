import { Context } from "@/contexts/ReduxContext";
import store from "@/store/store";
import { useContext, useEffect, useState } from "react";

function useStore() {
    const store = useContext(Context);
    return store;
}

function useDispatch() {
    const store = useStore();
    return store.dispatch;
}

function useSelector(selector) {
    const store = useStore();
    const [state, setState] = useState(() => {
        return selector(store.getState());
    });
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const nextState = selector(store.getState());
            if (state !== nextState) setState(nextState);
        });
        return unsubscribe;
    }, [selector, state, store]);
    return state;
}

export { useDispatch, useSelector, useStore };
