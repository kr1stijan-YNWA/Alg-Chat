import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import "../styles/MessageForm.css";

export function MessageForm(props) {
    const [ formState, setFormState ] = useState('');

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        props.onSubmit({
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form-content">
            <InputFormField label="Message"
                type="text"
                value={formState}
                onChange={handleChange}
            />
            <SubmitFormField label="Send" className="message-button" />
        </form>
    );
}