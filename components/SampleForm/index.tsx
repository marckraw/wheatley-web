import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: string,
    description: string,
    priceInfo: number,
    suspended: boolean
};

const CreateItemForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = (data: unknown) => console.log(data);

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" defaultValue="title" {...register("title", {
                    required: "This is required",
                    maxLength: {value: 4, message: "You exceeded the max length."}
                })} />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input id="description" type="text" defaultValue="description" {...register("description", { required: "This is required", })} />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
                <label htmlFor="priceInfo">Price Info: </label>
                <input id="priceInfo" type="number" defaultValue={123} {...register("priceInfo", { required: "This is required", valueAsNumber: true })} />
                {errors.priceInfo && <p>{errors.priceInfo.message}</p>}
            </div>
            <div>
                <label htmlFor="suspended">Suspended: </label>
                <input id="suspended" type="checkbox" {...register("suspended")} />
            </div>

            <input type="submit" />
        </form>
    );
}

export { CreateItemForm }