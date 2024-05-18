import { useState } from "react";

export default function SpaceAddress() {
    const [address, setAddress] = useState("");
    const [reference, setReference] = useState("");

    const handleReferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReference(e.target.value);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    return (
        <div className="mt-20 text-center">
            <p className="text-2xl mb-5 font-[Poppins]">
                Onde fica a sua acomodação?
            </p>
            <form>
                <input
                    className="w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 py-2 focus:outline-none shadow-md"
                    type="text"
                    placeholder="Insira o endereço - Ex: Rua, número, bairro, cidade, UF."
                    value={address}
                    onChange={handleAddressChange}
                />
            </form>
            <div className="mt-10 text-center">
                <form>
                    <input
                        className="w-3/5 h-20 text-lg text-center border border-solid border-gray-300 rounded-xl px-4 mb-20 py-2 focus:outline-none shadow-md"
                        type="text"
                        placeholder="Insira a referência"
                        value={reference}
                        onChange={handleReferenceChange}
                    />
                </form>
            </div>
        </div>
    );
}
