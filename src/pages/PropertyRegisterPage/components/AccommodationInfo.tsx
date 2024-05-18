import { useState } from "react";
import NumberInputMinus from "../img/AccommodationInfo/NumberInputMinus.svg";
import NumberInputPlus from "../img/AccommodationInfo/NumberInputPlus.svg";

export default function AccommodationInfo() {
    const [guests, setGuests] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [beds, setBeds] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);

    const incrementGuests = () => {
        if (guests < 200) {
            setGuests(guests + 1);
        }
    };

    const decrementGuests = () => {
        if (guests > 1) {
            setGuests(guests - 1);
        }
    };

    const incrementRooms = () => {
        if (rooms < 20) {
            setRooms(rooms + 1);
        }
    };

    const decrementRooms = () => {
        if (rooms > 1) {
            setRooms(rooms - 1);
        }
    };

    const incrementBeds = () => {
        if (beds < 20) {
            setBeds(beds + 1);
        }
    };

    const decrementBeds = () => {
        if (beds > 1) {
            setBeds(beds - 1);
        }
    };

    const incrementBathrooms = () => {
        if (bathrooms < 20) {
            setBathrooms(bathrooms + 1);
        }
    };

    const decrementBathrooms = () => {
        if (bathrooms > 1) {
            setBathrooms(bathrooms - 1);
        }
    };

    return (
        <div className={`flex ${window.innerWidth < 500 ? "p-5" : "p-0"}`}>
            <div className="w-full flex-col justify-start">
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                        <div className="flex items-center justify-center md:justify-start">
                            <p className="text-2xl mb-0 font-[Poppins]">Hóspedes</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={decrementGuests} className="mr-0">
                                <img
                                    src={NumberInputMinus}
                                    alt="Minus"
                                    className={guests === 1 ? "opacity-20" : ""}
                                />
                            </button>
                            <input
                                disabled
                                type="number"
                                value={guests}
                                onChange={(e) =>
                                    setGuests(Math.max(1, parseInt(e.target.value)))
                                }
                                className="w-20 text-center pr-0 bg-white border-none"
                            />
                            <button onClick={incrementGuests} className="ml-0">
                                <img
                                    src={NumberInputPlus}
                                    alt="Plus"
                                    className={guests === 200 ? "opacity-20" : ""}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Quartos */}
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                        <div className="flex items-center justify-center md:justify-start">
                            <p className="text-2xl mb-0 font-[Poppins]">Quartos</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={decrementRooms} className="mr-0">
                                <img
                                    src={NumberInputMinus}
                                    alt="Minus"
                                    className={rooms === 1 ? "opacity-20" : ""}
                                />
                            </button>
                            <input
                                disabled
                                type="number"
                                value={rooms}
                                onChange={(e) =>
                                    setRooms(Math.max(1, parseInt(e.target.value)))
                                }
                                className="w-20 text-center pr-0 bg-white border-none"
                            />
                            <button onClick={incrementRooms} className="ml-0">
                                <img
                                    src={NumberInputPlus}
                                    alt="Plus"
                                    className={rooms === 200 ? "opacity-20" : ""}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Camas */}
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-2/4 flex justify-between items-center mb-16">
                        <div className="flex items-center justify-center md:justify-start">
                            <p className="text-2xl mb-0 font-[Poppins]">Camas</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={decrementBeds} className="mr-0">
                                <img
                                    src={NumberInputMinus}
                                    alt="Minus"
                                    className={beds === 1 ? "opacity-20" : ""}
                                />
                            </button>
                            <input
                                disabled
                                type="number"
                                value={beds}
                                onChange={(e) =>
                                    setBeds(Math.max(1, parseInt(e.target.value)))
                                }
                                className="w-20 text-center pr-0 bg-white border-none"
                            />
                            <button onClick={incrementBeds} className="ml-0">
                                <img
                                    src={NumberInputPlus}
                                    alt="Plus"
                                    className={beds === 200 ? "opacity-20" : ""}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Banheiros */}
                <div className="flex items-center justify-center">
                    <div className="w-full md:w-2/4 flex justify-between items-center mb-0">
                        <div className="flex items-center justify-center md:justify-start">
                            <p className="text-2xl mb-0 font-[Poppins]">Banheiros</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={decrementBathrooms} className="mr-0">
                                <img
                                    src={NumberInputMinus}
                                    alt="Minus"
                                    className={bathrooms === 1 ? "opacity-20" : ""}
                                />
                            </button>
                            <input
                                disabled
                                type="number"
                                value={bathrooms}
                                onChange={(e) =>
                                    setBathrooms(Math.max(1, parseInt(e.target.value)))
                                }
                                className="w-20 text-center pr-0 bg-white border-none"
                            />
                            <button onClick={incrementBathrooms} className="ml-0">
                                <img
                                    src={NumberInputPlus}
                                    alt="Plus"
                                    className={bathrooms === 200 ? "opacity-20" : ""}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
