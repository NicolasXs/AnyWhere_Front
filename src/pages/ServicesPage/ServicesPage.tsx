import { useState } from 'react';
import servicesData from './dataFake.json';
import "./style.css";

interface Service {
    id: number;
    name: string;
    description: string;
    value: number;
}

interface PixData {
    qrecode: string;
    value: string;
}

interface BoletoData {
    barcode: string;
    value: string;
}

export default function ServicesPage() {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [payment, setPayment] = useState<boolean>(false);
    const [paymentType, setPaymentType] = useState<string | number | boolean | null>(null);
    const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);
    const [pixData, setPixData] = useState<PixData>({ qrecode: '', value: '' });
    const [boletoData, setBoletoData] = useState<BoletoData>({ barcode: '', value: '' });
    const [step, setStep] = useState<number>(0);

    const toggleServiceSelection = (service: Service) => {
        const isSelected = selectedServices.some((s) => s.id === service.id);
        if (isSelected) {
            setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleHireSelectedServices = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPayment(true);
        setIsLoading(false);
    };

    const startPayment = async() => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        setPaymentSuccess(true);
    }

    const getPixData = async() => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPixData({
            qrecode: 'data:image/png;base64,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',
            value: 'ABDBSDJSKM MSAKDMSK KASMDKASMD KASMDKSADM AMSD'
        });
        setStep(1);
        setIsLoading(false);
    }

    const getBoletoData = async() => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setBoletoData({
            barcode: 'https://barcode.tec-it.com/barcode.ashx?data=ABC-abc-1234&code=Code128&translate-esc=on',
            value: 'ABDBSDJSKM MSAKDMSK KASMDKASMD KASMDKSADM AMSD'
        });
        setStep(1);
        setIsLoading(false);
    }

    const backServices = () => {
        setStep(0);
        setPaymentType(null);
        setPayment(false);
        setPixData({ qrecode: '', value: '' });
        setBoletoData({ barcode: '', value: '' });
        setPaymentSuccess(null);
    }

    const handlePayment = () => {
        if(paymentType === 'CREDIT_CARD') {
            startPayment();
        }else if(paymentType === 'PIX') {
            getPixData();
        }else if(paymentType === 'BOLETO') {
            getBoletoData();
        }
    }

    const copyToClipboard = async (text: string) => {
        navigator.clipboard.writeText(text);
        alert('Código copiado!');
    };

    return (
        <div>
            {paymentSuccess == null && (
                <div>
                    {isLoading && (
                        <div className="h-screen w-full flex justify-center items-center flex-col p-6">
                            <svg className="animate-spin h-16 w-16 text-[#176bef]" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>
                    )}
                    {!isLoading && (
                        <div>
                            {!payment && (
                                <div className='container mx-auto p-6'>
                                    <div className="flex">
                                        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                            {servicesData.services.map((service: Service) => (
                                                <div key={service.id} className={`max-w-sm p-6 bg-white border rounded-lg shadow ${selectedServices.some((s) => s.id === service.id) ? 'border-[#176bef]' : 'border-gray-200'}`}>
                                                    <h5 className="mb-2 text-lg 2xl:text-xl font-bold tracking-tight text-gray-900">{service.name}</h5>
                                                    <p className="mb-3 font-normal text-sm text-gray-700 h-[5rem]">{service.description}</p>
                                                    <div className='flex justify-between gap-2 items-center'>
                                                        <p className="font-semibold text-gray-900 text-base h-fit text-ellipsis overflow-hidden">{service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                                        <button
                                                            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none ${selectedServices.some((s) => s.id === service.id) ? 'bg-[#176bef]' : 'bg-gray-700 hover:bg-opacity-80'
                                                                }`}
                                                            onClick={() => toggleServiceSelection(service)}
                                                        >
                                                            {selectedServices.some((s) => s.id === service.id) ? 'Selecionado' : 'Selecionar serviço'}
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {selectedServices.length > 0 && (
                                        <button
                                            className="w-full max-w-xs h-14 text-xl flex justify-center items-center bg-customAzul shadow-md text-white px-4 py-3 rounded-3xl mt-5 hover:scale-105 transition-transform fixed bottom-2 left-1/2 -translate-x-1/2"
                                            onClick={handleHireSelectedServices}
                                            disabled={isLoading}
                                        >
                                            <span className='w-6 h-6 text-xs flex rounded-full mr-4 font-bold items-center justify-center bg-white text-[#176bef]'>
                                                {selectedServices.length}
                                            </span>
                                            {isLoading ? "Carregando..." : "Contratar serviços"}
                                            <svg className="w-5 h-5 ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            )}
                            {payment && (
                                <div className='container mx-auto p-6 pb-28'>
                                    <div className='flex items-center justify-center w-full relative'>
                                        <div className='absolute left-6 top-1/2 -translate-y-1/2'>
                                            <button className='w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-100' onClick={() => backServices()}>
                                                <svg className="w-5 h-5 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </button>
                                        </div>
                                        <h1 className='text-2xl font-bold text-center'>Pagamento</h1>
                                    </div>
                                    {step == 0 && (
                                        <div>
                                            <div className='mt-10 lg:mt-20'>
                                                <h4 className='text-lg text-gray-600 mb-6 font-bold'>Selecione o método de pagamento</h4>

                                                <div className="grid sm:grid-cols-3 gap-6">
                                                    <button className={`p-6 flex items-center justify-center flex-col rounded-2xl ${paymentType === 'BOLETO' ? 'bg-blue-600 text-white' : 'bg-transparent border border-blue-600 text-blue-600'}`} onClick={() => setPaymentType('BOLETO')}>
                                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M25.0003 47.3957C23.3753 47.3957 21.792 46.5623 20.7087 45.104L18.6045 42.2915C18.167 41.7082 17.5837 41.3748 16.9587 41.3332C16.3337 41.3123 15.7087 41.5832 15.2087 42.104L14.0212 41.0415L15.167 42.104C12.167 45.3123 9.85449 45.0623 8.75032 44.6248C7.62532 44.1873 5.72949 42.7498 5.72949 38.1248V14.6665C5.72949 5.4165 8.39616 2.604 17.1253 2.604H32.8753C41.6045 2.604 44.2711 5.4165 44.2711 14.6665V38.1248C44.2711 42.729 42.3753 44.1665 41.2503 44.6248C40.1461 45.0623 37.8545 45.3123 34.8337 42.104C34.3337 41.5623 33.7295 41.2707 33.0628 41.3332C32.4378 41.3748 31.8337 41.7082 31.3962 42.2915L29.292 45.104C28.2087 46.5623 26.6253 47.3957 25.0003 47.3957ZM16.8337 38.1873C16.917 38.1873 17.0212 38.1873 17.1045 38.1873C18.6462 38.2707 20.1045 39.0832 21.0837 40.3957L23.1878 43.2082C24.2087 44.5623 25.7712 44.5623 26.792 43.2082L28.8962 40.3957C29.8962 39.0832 31.3337 38.2707 32.8962 38.1873C34.4378 38.104 35.9795 38.7498 37.1045 39.9582C38.6878 41.6457 39.7295 41.854 40.0836 41.7082C40.5836 41.4998 41.1253 40.2915 41.1253 38.1248V14.6665C41.1253 7.14567 39.8128 5.729 32.8545 5.729H17.1253C10.167 5.729 8.85449 7.14567 8.85449 14.6665V38.1248C8.85449 40.3123 9.39616 41.5207 9.89616 41.7082C10.2503 41.854 11.292 41.6457 12.8753 39.9582C14.0003 38.8123 15.3962 38.1873 16.8337 38.1873Z"
                                                                fill={`${paymentType == 'BOLETO' ? '#ffffff' : '#135EB5'}`} />
                                                            <path
                                                                d="M33.3337 16.146H16.667C15.8128 16.146 15.1045 15.4377 15.1045 14.5835C15.1045 13.7293 15.8128 13.021 16.667 13.021H33.3337C34.1878 13.021 34.8962 13.7293 34.8962 14.5835C34.8962 15.4377 34.1878 16.146 33.3337 16.146Z"
                                                                fill={`${paymentType == 'BOLETO' ? '#ffffff' : '#135EB5'}`} />
                                                            <path
                                                                d="M31.25 24.479H18.75C17.8958 24.479 17.1875 23.7707 17.1875 22.9165C17.1875 22.0623 17.8958 21.354 18.75 21.354H31.25C32.1042 21.354 32.8125 22.0623 32.8125 22.9165C32.8125 23.7707 32.1042 24.479 31.25 24.479Z"
                                                                fill={`${paymentType == 'BOLETO' ? '#ffffff' : '#135EB5'}`} />
                                                        </svg>
                                                        <span className="text-xs mt-2">Boleto bancário</span>
                                                    </button>
                                                    <button className={`p-6 flex items-center justify-center flex-col rounded-2xl ${paymentType === 'CREDIT_CARD' ? 'bg-blue-600 text-white' : 'bg-transparent border border-blue-600 text-blue-600'}`} onClick={() => setPaymentType('CREDIT_CARD')}>
                                                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M45.8336 19.271H4.16699C3.31283 19.271 2.60449 18.5627 2.60449 17.7085C2.60449 16.8543 3.31283 16.146 4.16699 16.146H45.8336C46.6878 16.146 47.3961 16.8543 47.3961 17.7085C47.3961 18.5627 46.6878 19.271 45.8336 19.271Z"
                                                                fill={`${paymentType == 'CREDIT_CARD' ? '#ffffff' : '#135EB5'}`} />
                                                            <path
                                                                d="M16.6667 35.9375H12.5C11.6458 35.9375 10.9375 35.2292 10.9375 34.375C10.9375 33.5208 11.6458 32.8125 12.5 32.8125H16.6667C17.5208 32.8125 18.2292 33.5208 18.2292 34.375C18.2292 35.2292 17.5208 35.9375 16.6667 35.9375Z"
                                                                fill={`${paymentType == 'CREDIT_CARD' ? '#ffffff' : '#135EB5'}`} />
                                                            <path
                                                                d="M30.2083 35.9375H21.875C21.0208 35.9375 20.3125 35.2292 20.3125 34.375C20.3125 33.5208 21.0208 32.8125 21.875 32.8125H30.2083C31.0625 32.8125 31.7708 33.5208 31.7708 34.375C31.7708 35.2292 31.0625 35.9375 30.2083 35.9375Z"
                                                                fill={`${paymentType == 'CREDIT_CARD' ? '#ffffff' : '#135EB5'}`} />
                                                            <path
                                                                d="M36.5837 44.2707H13.417C5.12533 44.2707 2.60449 41.7707 2.60449 33.5623V16.4373C2.60449 8.229 5.12533 5.729 13.417 5.729H36.5628C44.8545 5.729 47.3753 8.229 47.3753 16.4373V33.5415C47.3962 41.7707 44.8753 44.2707 36.5837 44.2707ZM13.417 8.854C6.87533 8.854 5.72949 9.979 5.72949 16.4373V33.5415C5.72949 39.9998 6.87533 41.1248 13.417 41.1248H36.5628C43.1045 41.1248 44.2503 39.9998 44.2503 33.5415V16.4373C44.2503 9.979 43.1045 8.854 36.5628 8.854H13.417Z"
                                                                fill={`${paymentType == 'CREDIT_CARD' ? '#ffffff' : '#135EB5'}`} />
                                                        </svg>
                                                        <span className="text-xs mt-2">Cartão de crédito</span>
                                                    </button>
                                                    <button className={`p-6 flex items-center justify-center flex-col rounded-2xl ${paymentType === 'PIX' ? 'bg-blue-600 text-white' : 'bg-transparent border border-blue-600 text-blue-600'}`} onClick={() => setPaymentType('PIX')}>
                                                        <svg width="49" height="50" viewBox="0 0 49 50" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_756_8077)">
                                                                <path
                                                                    d="M8.65085 36.0683C7.89161 36.0683 7.43857 35.6123 7.20736 35.3791C6.09923 34.2638 4.96193 33.1392 3.86109 32.0508C3.38826 31.5834 2.91543 31.116 2.44364 30.6476C-0.807856 27.4224 -0.814105 22.5629 2.4301 19.3449C2.97688 18.8022 3.52469 18.2606 4.07147 17.7189C5.15877 16.6428 6.28253 15.5306 7.38129 14.4318C7.74477 14.0686 8.15823 13.9077 8.68314 13.9262C9.55069 13.9562 10.4422 13.9479 11.3045 13.9386H11.4514C13.1313 13.918 14.5862 14.5164 15.7839 15.7101C17.5117 17.4321 19.275 19.1757 20.9809 20.8626L22.5754 22.4401C23.7367 23.5895 25.2416 23.5874 26.4081 22.435L26.5403 22.305C28.7264 20.1456 30.9874 17.9129 33.1985 15.706C34.3566 14.5515 35.7782 13.9654 37.4259 13.9654C37.455 13.9654 37.4842 13.9654 37.5144 13.9654C38.233 13.9654 39.0683 13.9603 39.891 13.9304C40.3993 13.9128 40.7044 14.1481 40.9148 14.3565C41.4689 14.9064 42.0375 15.4635 42.5874 16.0011C43.7841 17.1731 45.0214 18.3854 46.2076 19.6152C49.1446 22.6609 49.1092 27.4214 46.1285 30.4516C45.0464 31.5524 43.9299 32.6523 42.8509 33.716C42.2167 34.3412 41.5824 34.9664 40.9523 35.5948C40.6305 35.9156 40.2576 36.0549 39.7775 36.0343C39.3349 36.0147 38.8777 36.0116 38.434 36.0085C37.8872 36.0044 37.3217 36.0002 36.7562 35.9662C35.4502 35.8888 34.265 35.3296 33.2339 34.3051C31.2572 32.3427 29.244 30.3494 27.2975 28.4232L26.4778 27.6122C25.2708 26.4175 23.7148 26.4123 22.5161 27.5998C21.8818 28.2282 21.2454 28.8534 20.6101 29.4797C19.1 30.9664 17.5378 32.5027 16.0329 34.0389C14.6112 35.4885 12.9897 36.1447 11.0744 36.0425C10.8879 36.0322 10.6932 36.0353 10.487 36.0384C10.3849 36.0394 10.2828 36.0415 10.1808 36.0415C10.0298 36.0415 9.88188 36.0364 9.7392 36.0312C9.45279 36.0209 9.18201 36.0116 8.94767 36.0467C8.84457 36.0621 8.74563 36.0694 8.65189 36.0694L8.65085 36.0683ZM8.5415 15.4759C8.5415 15.4759 8.52379 15.4883 8.4915 15.5203C7.38962 16.6232 6.26378 17.7364 5.17544 18.8136C4.62866 19.3542 4.08189 19.8959 3.53511 20.4375C2.26138 21.7014 1.56047 23.3192 1.56255 24.9926C1.56463 26.6661 2.26971 28.286 3.54761 29.554C4.0194 30.0213 4.49119 30.4887 4.96402 30.9551C6.06694 32.0456 7.20736 33.1733 8.3207 34.2927C8.56337 34.5372 8.60815 34.53 8.71646 34.5145C9.09244 34.4588 9.44862 34.4712 9.79231 34.4836C10.0308 34.4918 10.2443 34.4929 10.463 34.4898C10.6859 34.4867 10.9171 34.4836 11.1566 34.496C12.6147 34.5734 13.8072 34.0853 14.9112 32.9597C16.4265 31.4142 17.9929 29.8717 19.5083 28.3809C20.1436 27.7556 20.7778 27.1314 21.411 26.5041C23.2232 24.7089 25.7613 24.7141 27.5818 26.5165L28.4014 27.3275C30.349 29.2547 32.3632 31.2481 34.34 33.2115C35.1034 33.9698 35.924 34.3649 36.8499 34.4207C37.3738 34.4516 37.8945 34.4557 38.4455 34.4599C38.9027 34.463 39.3745 34.4671 39.8463 34.4877C39.8515 34.4877 39.8556 34.4877 39.8598 34.4877C40.4888 33.8615 41.1294 33.23 41.7501 32.6182C42.8249 31.5586 43.9361 30.4629 45.0099 29.3713C47.4011 26.9406 47.4313 23.1252 45.0786 20.6841C43.908 19.4698 42.6791 18.2657 41.4897 17.1009C40.9481 16.5706 40.3899 16.0227 39.841 15.48C38.9964 15.5089 38.1507 15.512 37.43 15.512H37.4269C36.1938 15.512 35.1742 15.9319 34.3077 16.7955C32.0935 19.0044 29.8314 21.2392 27.6433 23.3996L27.511 23.5296C25.7301 25.2888 23.2461 25.2908 21.4704 23.5338L19.8769 21.9573C18.17 20.2694 16.4057 18.5237 14.6758 16.8007C13.7739 15.902 12.722 15.4708 11.467 15.4842H11.3202C10.4401 15.4945 9.52986 15.5038 8.6269 15.4718C8.56962 15.4697 8.54566 15.4738 8.54045 15.4749L8.5415 15.4759Z"
                                                                    fill={`${paymentType == 'PIX' ? '#ffffff' : '#135EB5'}`} />
                                                                <path
                                                                    d="M24.4911 21.8047C23.9193 21.8047 23.3475 21.523 22.7789 20.9597C22.1373 20.3242 21.4947 19.6907 20.8521 19.0572C19.3357 17.5612 17.7683 16.0146 16.2415 14.4753C14.8136 13.037 13.2181 12.3798 11.3601 12.4623C11.1112 12.4737 10.8706 12.4675 10.6383 12.4623C10.5519 12.4603 10.4655 12.4582 10.379 12.4562C10.2384 12.4541 9.97284 12.4108 9.76142 12.1497L9.53125 11.9042L9.57499 11.5482C9.62915 11.1035 9.92285 10.8642 10.0645 10.7486C10.0791 10.7373 10.0936 10.7259 10.1072 10.7135C12.5713 8.2673 15.4989 5.36296 18.515 2.38228C20.0648 0.849119 22.0779 0.00309521 24.1828 0C24.1869 0 24.1911 0 24.1953 0C26.2959 0 28.3039 0.840865 29.8505 2.3668C31.8845 4.37456 33.9154 6.38645 35.9546 8.40555C36.8534 9.29594 37.7543 10.1874 38.6572 11.0808L39.3227 11.7401L38.5458 12.2673C38.1636 12.5263 37.7918 12.4974 37.5918 12.4819C37.5699 12.4799 37.5491 12.4788 37.5283 12.4778C35.6953 12.4221 34.1393 13.0659 32.7698 14.4443C31.2148 16.0084 29.6203 17.5828 28.0779 19.1047C27.4499 19.7237 26.8229 20.3438 26.196 20.9638C25.6304 21.5241 25.0607 21.8037 24.4911 21.8037V21.8047ZM12.1047 10.9199C14.0679 11.0272 15.8312 11.8557 17.3548 13.3899C18.8764 14.923 20.4407 16.4665 21.955 17.9594C22.5987 18.594 23.2413 19.2285 23.8828 19.864C24.4046 20.3809 24.5744 20.3809 25.092 19.8692C25.719 19.2481 26.348 18.628 26.976 18.0079C28.5164 16.4882 30.1077 14.9168 31.6575 13.3579C33.0166 11.9908 34.5903 11.1954 36.3493 10.9839C35.8494 10.4886 35.3495 9.99443 34.8506 9.50023C32.8114 7.48112 30.7816 5.47026 28.7476 3.46251C26.148 0.895547 22.2227 0.901737 19.6169 3.47798C16.9591 6.10478 14.37 8.67174 12.1047 10.9199Z"
                                                                    fill={`${paymentType == 'PIX' ? '#ffffff' : '#135EB5'}`} />
                                                                <path
                                                                    d="M24.1977 49.9998C24.1842 49.9998 24.1696 49.9998 24.1561 49.9998C22.1273 49.9895 20.2089 49.2126 18.7539 47.8136C16.648 45.7883 14.5463 43.6928 12.5144 41.6655C11.6541 40.8071 10.7939 39.9497 9.9305 39.0933C9.52536 38.7374 9.5514 38.334 9.60243 38.1256L9.73262 37.5901L10.2867 37.5375C10.6783 37.5003 11.0584 37.5034 11.4271 37.5076C11.8708 37.5117 12.2905 37.5158 12.6863 37.4477C13.9787 37.2238 15.0806 36.6461 16.0544 35.6804C18.3061 33.4487 20.5588 31.2181 22.8115 28.9875C23.878 27.932 25.0986 27.93 26.1619 28.9813C26.7223 29.5353 27.2836 30.0894 27.845 30.6434C29.4645 32.2416 31.1402 33.8944 32.7722 35.5359C34.1438 36.9153 35.6998 37.5571 37.5286 37.4983C37.6776 37.4942 37.8203 37.4993 37.9473 37.5045L38.0494 37.5086C38.1941 37.5138 38.4629 37.5643 38.6691 37.8398L39.1284 38.3701L38.618 38.8777C37.7036 39.7877 36.7788 40.7163 35.8841 41.6139C33.8293 43.6763 31.7047 45.8079 29.5665 47.8559C28.122 49.2394 26.2161 50.0009 24.1967 50.0009L24.1977 49.9998ZM12.0947 39.0521C12.604 39.5597 13.1133 40.0673 13.6225 40.5749C15.6493 42.5971 17.7458 44.6874 19.8412 46.7034C21.0056 47.8229 22.5407 48.444 24.1633 48.4522H24.1967C25.8089 48.4522 27.3284 47.8456 28.4803 46.7426C30.6059 44.707 32.7233 42.5816 34.7718 40.5254C35.2759 40.0198 35.7894 39.504 36.3049 38.9881C34.5667 38.7714 33.0076 37.9791 31.6578 36.6213C30.03 34.985 28.3584 33.3342 26.741 31.7391C26.1797 31.1851 25.6173 30.631 25.0569 30.076C24.5945 29.6189 24.381 29.6199 23.9144 30.0822C21.6617 32.3117 19.41 34.5424 17.1584 36.774C15.9659 37.9564 14.5515 38.6951 12.9539 38.9716C12.6602 39.0222 12.3738 39.0438 12.0947 39.0521ZM37.989 39.0552C37.989 39.0552 37.99 39.0552 37.9911 39.0552H37.989Z"
                                                                    fill={`${paymentType == 'PIX' ? '#ffffff' : '#135EB5'}`} />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_756_8077">
                                                                    <rect width="48.3871" height="50" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <span className="text-xs mt-2">Pix</span>
                                                    </button>
                                                </div>

                                                <div className='mt-10 space-y-10'>
                                                    <div>
                                                        <div className='space-y-4'>
                                                            <div>
                                                                <h2 className="text-lg 2xl:text-2xl text-black mb-4 font-bold">Dados pessoais</h2>
                                                            </div>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                                <div>
                                                                    <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-2 block">Nome</label>
                                                                    <input
                                                                        type="text"
                                                                        id="name"
                                                                        name="name"
                                                                        // value={name}
                                                                        // onChange={(e) => setName(e.target.value)}
                                                                        className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="cpf" className="text-sm font-semibold text-gray-600 mb-2 block">CPF</label>
                                                                    <input
                                                                        type="text"
                                                                        id="cpf"
                                                                        name="cpf"
                                                                        // value={cpf}
                                                                        // onChange={(e) => setCPF(e.target.value)}
                                                                        className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="email" className="text-sm font-semibold text-gray-600 mb-2 block">E-mail</label>
                                                                    <input
                                                                        type="email"
                                                                        id="email"
                                                                        name="email"
                                                                        // value={email}
                                                                        // onChange={(e) => setEmail(e.target.value)}
                                                                        className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {paymentType == 'CREDIT_CARD' && (

                                                        <div>

                                                            <div className='space-y-4'>
                                                                <div>
                                                                    <h2 className="text-lg 2xl:text-2xl text-black mb-4 font-bold">Dados do cartão</h2>
                                                                </div>
                                                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                                                    <div>
                                                                        <label htmlFor="cardNumber" className="text-sm font-semibold text-gray-600 mb-2 block">Número do cartão</label>
                                                                        <input
                                                                            type="text"
                                                                            id="cardNumber"
                                                                            name="cardNumber"
                                                                            // value={cardNumber}
                                                                            // onChange={(e) => setCardNumber(e.target.value)}
                                                                            className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="expiryDate" className="text-sm font-semibold text-gray-600 mb-2 block">Data de expiração</label>
                                                                        <input
                                                                            type="text"
                                                                            id="expiryDate"
                                                                            name="expiryDate"
                                                                            // value={expiryDate}
                                                                            // onChange={(e) => setExpiryDate(e.target.value)}
                                                                            className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <label htmlFor="cvv" className="text-sm font-semibold text-gray-600 mb-2 block">Código de segurança</label>
                                                                        <input
                                                                            type="text"
                                                                            id="cvv"
                                                                            name="cvv"
                                                                            // value={cvv}
                                                                            // onChange={(e) => setCVV(e.target.value)}
                                                                            className="w-full h-14 px-4 py-3 text-xl text-gray-800 bg-gray-200 rounded-3xl focus:outline-none"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )}
                                                </div>
                                            </div>
                                            {paymentType && (
                                                <button
                                                    className="w-full max-w-xs h-14 text-xl flex justify-center items-center bg-customAzul shadow-md text-white px-4 py-3 rounded-3xl mt-5 hover:scale-105 transition-transform fixed bottom-2 left-1/2 -translate-x-1/2"
                                                    onClick={handlePayment}
                                                    disabled={isLoading}
                                                >
                                                    {paymentType == 'CREDIT_CARD' ? "Enviar" : "Avançar"}
                                                    {!(paymentType == 'CREDIT_CARD') && (
                                                        <svg className="w-5 h-5 ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                        </svg>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                    {step == 1 && (
                                        <div className="flex justify-center mt-20">
                                            {pixData?.qrecode && (
                                                <div className='flex flex-col justify-center gap-10 items-center'>
                                                    <div className='p-6 bg-gray-100 rounded-xl border'>
                                                    leia o código QR abaixo com o aplicativo do seu banco para efetuar o pagamento  
                                                    </div>
                                                    <div className='w-fit'>
                                                        <img src={pixData?.qrecode} alt="Qr Code" className="w-full max-w-md" />
                                                        <div className='flex justify-center mt-6'>
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-6 rounded-xl" onClick={() => copyToClipboard(pixData.value)}>Copiar PIX</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {boletoData?.barcode && (
                                                <div className='flex flex-col justify-center gap-10 items-center'>
                                                    <div className='p-6 bg-gray-100 rounded-xl border'>
                                                        leia o código de barras abaixo para efetuar o pagamento em qualquer banco
                                                    </div>
                                                    <div className='w-fit'>
                                                        <img src={boletoData?.barcode} alt="Barcode" className="w-full max-w-md" />
                                                        <div className='flex justify-center mt-6'>
                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-6 rounded-xl" onClick={() => copyToClipboard(boletoData.value)}>Copiar Boleto</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
            {!isLoading && paymentSuccess == true && (
                <div className="h-screen w-full flex justify-center items-center flex-col p-6 animation-check">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                        <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                        <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                    </svg>

                    <h2 className='text-xl font-bold text-center mt-6'>Pagamento efetuado com sucesso</h2>

                    <div className='flex justify-center mt-10'>
                        <a href='/' className="bg-blue-500 hover:bg-blue-700 text-white mx-auto py-2 px-6 rounded-xl">Ver meus serviços contratados</a>
                    </div>
                </div>
            )}
        </div>
    );
}
