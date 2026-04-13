import styles from "./Forms.module.scss";
import { useFormValues } from "@/hooks";

import Context from "./Context";

function Form({ children, initValues, onSubmit }) {
    const [formValues, handleChange] = useFormValues(initValues);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };
    const values = {
        formValues,
        handleChange,
    };
    return (
        <Context.Provider value={values}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {children}
            </form>
        </Context.Provider>
    );
}

export default Form;
