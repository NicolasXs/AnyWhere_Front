import { useState } from "react";

import ArCondicionado from "../img/OfferedServices/ArCondicionado.svg";
import Churrasqueira from "../img/OfferedServices/Churrasqueira.svg";
import Cozinha from "../img/OfferedServices/Cozinha.svg";
import Estacionamento from "../img/OfferedServices/Estacionamento.svg";
import MaquinaDeLavar from "../img/OfferedServices/MaquinaDeLavar.svg";
import Piscina from "../img/OfferedServices/Piscina.svg";
import TV from "../img/OfferedServices/TV.svg";
import Wifi from "../img/OfferedServices/Wifi.svg";

export default function AmenitiesOffered() {
    const [selectedServices, setSelectedServices] = useState<number[]>([]);

    const handleServiceClick = (index: number) => {
        const selectedIndex = selectedServices.indexOf(index);
        if (selectedIndex === -1) {
            setSelectedServices([...selectedServices, index]);
        } else {
            const updatedServices = [...selectedServices];
            updatedServices.splice(selectedIndex, 1);
            setSelectedServices(updatedServices);
        }
    };

    return (
        <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
            <div className="w-full flex-col justify-start">
                <div className={`mt-20 mb-10 text-center`}>
                    <p className="text-2xl mb-10">
                        Quais comodidades são oferecidas no seu espaço?
                    </p>
                    <div className="inline-grid grid-cols-4 justify-center items-center gap-8">
                        {[
                            { img: Wifi, label: "Wifi" },
                            { img: TV, label: "TV" },
                            { img: Piscina, label: "Piscina" },
                            { img: MaquinaDeLavar, label: "Máquina de Lavar" },
                            { img: Estacionamento, label: "Estacionamento" },
                            { img: Cozinha, label: "Cozinha" },
                            { img: Churrasqueira, label: "Churrasqueira" },
                            { img: ArCondicionado, label: "Ar Condicionado" },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className={`flex flex-col items-center justify-center w-52 bg-white border border-solid font-[inter] border-gray-300 rounded-lg p-6 transition duration-300 ease-in-out hover:border-opacity-25 hover:border-red-500 hover:transform hover:scale-110 ${selectedServices.includes(index)
                                    ? "border-red-300 border-2 font-semibold"
                                    : ""
                                    }`}
                                type="button"
                                onClick={() => handleServiceClick(index)}
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-17 h-16 mb-2"
                                />
                                <span
                                    className={`${selectedServices.includes(index)
                                        ? "text-red-500"
                                        : "text-black"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
