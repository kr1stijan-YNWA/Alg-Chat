import { useState } from "react";
import { AvatarFormField } from "../components/AvatarFormField";
import { Button } from "../components/Button";
import { FormField } from "../components/FormField";
import { InputFormField } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";

export function SignInForm(props) {
    const [ formState, setFormState ] = useState(getRandomName());
    const [ avatar, setAvatar ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) { //ažurira ovaj gore fromstate na ime koje smo mi postavili
        setFormState(value.substring(0, 20));  //limita username na 20 char
    }

    function handleAvatarChange(value) { //postavlja avatar. isto kao handleusername funkcija
        setAvatar(value);
    }

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <AvatarFormField onChange={handleAvatarChange} />
            <InputFormField label="Username"
                type="text"
                onChange={handleUsernameChange}
                value={formState} />
            <FormField>
                <RandomNameButton onRandomName={handleUsernameChange} /> 
            </FormField>
            <FormField>
                <Button type="submit" label="Sign in" />
            </FormField>
        </form>
    );
}

//obrazac za prijavu. unos imena i avatara. Avatarformfield jsx koristi za odabir avatar a inputformfield za unos mena. 
/**RandomNameButon za kreiranje random usera */