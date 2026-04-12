import { Context as ThemeContext } from "@/contexts/ThemeContext";
import { useFormValues } from "@/hooks";
import { useContext, useState } from "react";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeigth: 600,
        marginBottom: 20,
    },
};

const A = () => {
    return <B />;
};
const B = () => {
    return <C />;
};
const C = () => {
    const { theme, toggle } = useContext(ThemeContext);
    return (
        <div>
            <h1>Current theme: {theme}</h1>
            <button onClick={toggle}>Toggle</button>
            {/* <button onClick={window.toggleTheme}>Toggle</button> */}
        </div>
    );
};

// One way binding

function ContextAPI() {
    const data = "My data";
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>ContextAPI Demo</h1>
            <A data={data} />
        </div>
    );
}

export default ContextAPI;
