import { useCallback, useState } from "react";

const useFormValues = (init = {}) => {
    const [values, setValues] = useState(init);
    const handleChange = useCallback(
        (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        },
        [values],
    );
    return [values, handleChange];
};

export default useFormValues;
