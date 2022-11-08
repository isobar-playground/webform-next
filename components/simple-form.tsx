import TextField from "components/form/text-field";
import Checkbox from "components/form/checkbox";
import TextArea from "components/form/text-area";
import Button from "components/form/button";

import { toast, ToastContainer } from 'react-nextjs-toast';

export default function SimpleForm() {
    const handlerSubmit = async (event) => {
        console.log(event);
        event.preventDefault();

        const data = {
            webform_id: "contact",
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        }

        if (event.target.terms.checked) {
            data["terms"] = true;
        }

        const send = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const response = await send.json();

        if (response.sid) {
            toast.notify(response.sid, {
                title: 'Success',
                type: 'success'
            })
        } else if (response.error) {
            toast.notify(<ul className="list-disc pl-5"> {Object.values(response.error).map((code, index) => <li key={index}>{code}</li>)} </ul>, {
                type: 'error',
                title: response.message
            })
        }
    }

    return (
        <>
            <ToastContainer />
            <form className="w-full max-w-sm" onSubmit={handlerSubmit}>
                <TextField name="name" label="Your name" />
                <TextField name="email" label="Your email" type="email" />
                <TextArea name="message" label="Your message" />
                <Checkbox name="terms" label="I accept T&C" />
                <Button name="submit" label="Submit!" />
            </form>
        </>
    )
}
