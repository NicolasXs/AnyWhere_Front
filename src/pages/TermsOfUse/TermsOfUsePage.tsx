import React from "react";

const TermsOfUsePage: React.FC = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-2xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
                <p className="text-gray-700 mb-4">
                    Bem-vindo aos nossos Termos de Uso. Estes termos são importantes e
                    afetam seus direitos legais, por isso, leia-os com atenção.
                </p>
                <h2 className="text-xl font-bold mb-2">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 mb-4">
                    Ao acessar ou usar o serviço, você concorda em ficar vinculado a
                    estes termos. Se você não concordar com algum destes termos, você
                    não pode acessar ou usar o serviço. Além disso, ao concordar com estes termos, você também concorda em vender sua alma ao tinhoso.
                </p>
                <h2 className="text-xl font-bold mb-2">2. Uso do Serviço</h2>
                <p className="text-gray-700 mb-4">
                    Você concorda em usar o serviço apenas para fins legais e de acordo
                    com estes termos. Você concorda em não usar o serviço de qualquer
                    forma que viole as leis aplicáveis.
                </p>
                <h2 className="text-xl font-bold mb-2">3. Alterações nos Termos</h2>
                <p className="text-gray-700 mb-4">
                    Reservamos o direito de modificar estes termos a qualquer momento. Se
                    fizermos alterações, iremos notificá-lo através de uma atualização
                    do serviço ou por outros meios.
                </p>
                <h2 className="text-xl font-bold mb-2">4. Contato</h2>
                <p className="text-gray-700">
                    Se você tiver alguma dúvida sobre estes termos, por favor, entre em
                    contato conosco.
                </p>
            </div>
            <div className="flex justify-center">
                <button
                    className="w-96 h-14 bg-azulLogo text-white text-lg font-[Poppins] font-medium rounded-xl px-4 py-2 mt-6 focus:outline-none shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
                    onClick={handleGoBack}
                >
                    Retornar à página anterior
                </button>
            </div>
        </div>
    );
};

export default TermsOfUsePage;
