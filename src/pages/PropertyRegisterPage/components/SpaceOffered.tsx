import { useEffect, useState } from "react";
import Quarto from "../img/SpaceForGuests/Quarto.svg"; // Import your images
import EspaçoInteiro from ".././img/SpaceForGuests/EspaçoInteiro.svg"; // Import your images

export default function SpaceOffered() {
    const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
    const [selectedSpaceValue, setSelectedSpaceValue] = useState("");

    // Load selection from localStorage on component mount
    useEffect(() => {
        const savedSpace = localStorage.getItem("selectedSpace");
        const savedSpaceValue = localStorage.getItem("selectedSpaceValue");
        if (savedSpace !== null && savedSpaceValue !== null) {
            setSelectedSpace(Number(savedSpace));
            setSelectedSpaceValue(savedSpaceValue);
        }
    }, []);

    // Handle button click and save selection to localStorage
    const handleSpaceClick = (index: number, label: string) => {
        setSelectedSpace(index);
        setSelectedSpaceValue(label);
        localStorage.setItem("accommodation_type", index.toString());
        localStorage.setItem("accommodation_type", label);
    };

    return (
        <div className="mt-20 text-center">
            <p className="text-2xl mb-10">
                Que tipo de espaço você oferece aos hóspedes?
            </p>
            <div className="flex justify-center items-center gap-8">
                {[
                    { img: Quarto, label: "Quarto" },
                    { img: EspaçoInteiro, label: "Espaço Inteiro" },
                ].map((item, index) => (
                    <button
                        key={index}
                        className={`flex flex-col items-center justify-center w-60 bg-white border border-solid font-[inter] border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${selectedSpace === index
                            ? "border-red-300 border-2 font-semibold"
                            : ""
                            }`}
                        type="button"
                        onClick={() => handleSpaceClick(index, item.label)}
                    >
                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-17 h-16 mb-2"
                        />
                        <span
                            className={`${selectedSpace === index ? "text-red-500" : "text-black"
                                }`}
                        >
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
            <input type="hidden" name="spaceOffered" value={selectedSpaceValue} />
        </div>
    );
}