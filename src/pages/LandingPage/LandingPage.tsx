import { useState } from 'react';
import Header from "../../components/Header/Header";
import landingPagePpl from "./assets/img/landingPagePpl.svg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function LandingPage() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);

  const handleExploreClick = () => {
    console.log({
      location,
      startDate,
      guests
    });
  };

  return (
    <>
      <Header />
      <div className="LandingPageContainer">
        {/* topo */}
        <div className="LandingPageStart flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 pr-4">
            <p className="p-4 md:p-16 md:pb-0 md:pr-0 pb-2 text-3xl md:text-5xl font-bold font-[volkhov]">
              Comece sua jornada emocionante conosco, em <span className="text-customAzul">Any</span><span className="text-customVermelho">where.</span>
            </p>
            <p className="p-4 md:pl-16 md:pr-0 text-lg md:text-xl text-[#666666] font-poppins">Descubra novas aventuras conosco, em qualquer lugar.</p>

            <div className="filterDiv grid grid-cols-1 md:grid-cols-4 items-center gap-4 rounded-xl bg-white shadow-2xl w-full mt-8 md:mt-56 md:pt-4 md:pr-0 md:pl-4 md:mr-4 md:ml-16 h-auto md:h-28 px-4">
              <div className='col-span-1'>
                <select
                  className="w-full p-1 rounded border focus:outline-none"
                  value={location || ''}
                  onChange={(e) => setLocation(e.target.value || null)}
                >
                  <option value="" disabled>Escolha uma localização</option>
                  <option>BRASIL</option>
                  <option>Bahia</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Ceará</option>
                  <option>Acre</option>
                  <option>Alagoas</option>
                  <option>Amapá</option>
                  <option>Amazonas</option>
                  <option>Distrito Federal</option>
                  <option>Espírito Santo</option>
                  <option>Goiás</option>
                  <option>Maranhão</option>
                  <option>Mato Grosso</option>
                  <option>Mato Grosso do Sul</option>
                  <option>Minas Gerais</option>
                  <option>Pará</option>
                  <option>Paraíba</option>
                  <option>Paraná</option>
                  <option>Pernambuco</option>
                  <option>Piauí</option>
                  <option>Rio Grande do Norte</option>
                  <option>Rio Grande do Sul</option>
                  <option>Rondônia</option>
                  <option>Roraima</option>
                  <option>Santa Catarina</option>
                  <option>Sergipe</option>
                  <option>Tocantins</option>
                </select>
                <p className='text-[#666666] font-poppins pl-3 text-sm'>Onde você deseja ficar?</p>
              </div>

              <div className="col-span-1">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  placeholderText="DD/MM/YYYY"
                  className="w-full p-1 text-base rounded border focus:outline-none focus:ring-2"
                />
                <p className='text-[#666666] font-poppins font-normal text-sm pl-2'>Quando deseja se hospedar</p>
              </div>
              <div className='col-span-1'>
                <select
                  className="w-full p-1 rounded border focus:outline-none"
                  value={guests || ''}
                  onChange={(e) => setGuests(e.target.value || null)}
                >
                  <option value="" disabled>Convidados</option>
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7-8</option>
                </select>
                <p className='text-[#666666] font-poppins text-sm pl-3'>Número de convidados</p>
              </div>
              <div className="col-span-1 flex justify-center md:justify-center">
                <button
                  className="p-2 w-full md:w-36 h-14 bg-customAzul text-white rounded-lg"
                  onClick={handleExploreClick}
                >
                  Explorar
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 mt-8 md:mt-0 md:mr-10 flex justify-center">
            <img src={landingPagePpl} alt="Imagem de pessoas na landing page" className="max-w-full h-auto" />
          </div>
        </div>
        <div className="LandingPageMiddle text-center mt-44">
          <div className='textOffers'>
            <p className='text-4xl font-bold font-[volkhov] mb-2'>Ofertas <span className='text-customAzul'>exclusivas & descontos</span></p>
            <p className=' font-poppins text-[#666666]'>Descubra nossos fantásticos descontos para reservas</p>
            <p className=' font-poppins text-[#666666]'>antecipadas e comece a planejar sua jornada.</p>
          </div>
          <div className='AccomodationsCarousel'>

          </div>
        </div>
      </div>
    </>
  );
}
