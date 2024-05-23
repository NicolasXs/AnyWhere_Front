import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
    address: z.string().nonempty({ message: "Endereço é obrigatório" }),
    reference: z.string(), // Removendo a validação de obrigatoriedade para a referência
});

export default function SpaceAddress() {
    const [initialValues, setInitialValues] = useState({
        address: "",
        reference: "",
    });

    useEffect(() => {
        const savedAddress = localStorage.getItem("address");
        const savedReference = localStorage.getItem("reference");

        if (savedAddress && savedReference) {
            setInitialValues({
                address: savedAddress,
                reference: savedReference,
            });
        }
    }, []);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: initialValues,
    });

    useEffect(() => {
        setValue("address", initialValues.address);
        setValue("reference", initialValues.reference);
    }, [initialValues, setValue]);

    const onSubmit = (data: { address: string; reference: string; }) => {
        localStorage.setItem("address", data.address);
        localStorage.setItem("reference_address", data.reference);
    };

    return (
        <div className="mt-20 text-center">
            <p className="text-2xl mb-5 font-[Poppins]">
                Onde fica a sua acomodação?
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                    type="text"
                    placeholder="Insira o endereço - Ex: Rua, número, bairro, cidade, UF."
                    {...register("address")}
                    onBlur={handleSubmit(onSubmit)}
                />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                <div className="mt-10 text-center">
                    <input
                        className="w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 mb-20 py-2 focus:outline-none shadow-md"
                        type="text"
                        placeholder="Insira a referência"
                        {...register("reference")}
                        onBlur={handleSubmit(onSubmit)}
                    />
                    {errors.reference && <p className="text-red-500">{errors.reference.message}</p>}
                </div>
                <button type="submit" className="hidden">Submit</button>
            </form>
        </div>
    );
}
