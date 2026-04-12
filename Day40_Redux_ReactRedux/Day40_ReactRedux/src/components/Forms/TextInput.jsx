import { useContext } from "react";
import styles from "./Forms.module.scss";
import Context from "./Context";
function TextInput({ label, type = "input", name, ...passProps }) {
    const { formValues, handleChange } = useContext(Context);
    return (
        <label className={styles.textInputWrapper}>
            <span className={styles.label}>{label}</span>
            <input
                {...passProps}
                type={type}
                className={styles.textInput}
                name={name}
                value={formValues[name]}
                onChange={handleChange}
            />
        </label>
    );
}

export default TextInput;
