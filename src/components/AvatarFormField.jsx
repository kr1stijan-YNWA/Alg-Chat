import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";
import { useEffect } from "react";
import "../styles/AvatarFormField.css";

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        props.onChange(index);
    }, [index, props]);

    function handlePreviousClick() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return (
        <FormField>
        <div className="avatar-button">
        <button className="button-best" type="button" onClick={handlePreviousClick}>Previous</button>
        <img className="avatar" src={avatarImages[index]} alt={index} width={100} />
        <button className="button-best" type="button" onClick={handleNextClick}>Next</button>
        </div>
        </FormField>
    )
}
