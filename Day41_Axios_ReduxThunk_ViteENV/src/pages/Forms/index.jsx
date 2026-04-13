import { Form, TextInput } from "@/components/Forms";
import { useFormValues } from "@/hooks";
import { useState } from "react";

const styles = {
    wrapper: { margin: 20 },
    heading: {
        fontSize: 20,
        fontWeigth: 600,
        marginBottom: 20,
    },
};

// One way binding

function Forms() {
    const initValues = {
        email: "",
        password: "",
    };
    const handleSubmit = (formValue) => {
        console.log(formValue);
    };
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.heading}>Forms Demo</h1>
            <Form initValues={initValues} onSubmit={handleSubmit}>
                <TextInput placeholder="Enter email..." name="email" />
                <TextInput
                    placeholder="Enter password..."
                    name="password"
                    type="password"
                />
                <button type="submit">Login</button>
            </Form>
        </div>
    );
}
export default Forms;
