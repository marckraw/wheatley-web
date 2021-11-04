import {useForm} from "react-hook-form";
import {FormField} from "./FormField";

export interface InputTextProps {
    name: string
}

type Inputs = {
    example: string,
};

export const FormInputText = (props: InputTextProps) => {
    const {name} = props;
    const { register, formState: { errors } } = useForm<Inputs>();

    return (
        <FormField>
            <input defaultValue="placholder" {...register('example')} />
        </FormField>
    )
}

