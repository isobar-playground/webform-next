import TextField from "./form/text-field";
import Checkbox from "./form/checkbox";
import TextArea from "./form/text-area";
import Button from "./form/button";

export default function SimpleForm() {
    const handlerSubmit = async (event) => {
        event.preventDefault();

        await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`, {
            method: "POST",
            body: JSON.stringify({
                webform_id: "contact",
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value,
                terms: event.target.terms.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    return (
        <form className="w-full max-w-sm" onSubmit={handlerSubmit}>
            <TextField name="name" label="Your name" type="text" required/>
            <TextField name="email" label="Your email" type="email" required/>
            <TextArea name="message" label="Your message" required/>
            <Checkbox name="terms" label="I accept T&C" required/>
            <Button name="submit" label="Submit!"/>
        </form>
    )
}
