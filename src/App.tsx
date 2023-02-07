import logoImage from "./assets/logo.svg";
import grayLogoImage from "./assets/gray-logo.svg"
import secureShield from "./assets/secure-shield.svg"

import PaymentOption from "./components/PaymentOption";

const totalParcelValues = [30600, 30620, 30900, 31500, 31700, 31800];

function App() {
  return (
    <div className=" flex flex-col items-center px-5 py-10">
      <img src={logoImage} alt="Logo Woovi" className="mb-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8">
        João, como você quer pagar?
      </h1>
      <div className="w-full mb-8 ">
        <PaymentOption totalValue={30500} parcelQuantity={1} />
      </div>

      {totalParcelValues.map((totalValue, parcelQuantity) => (
        <PaymentOption
          key={totalValue}
          totalValue={totalValue}
          parcelQuantity={parcelQuantity + 2}
        />
      ))}

      <div className="text-gray-text flex flex-row gap-2 items-center justify-center mt-10">
        <img src={secureShield} alt="Escudo seguro" />
        Pagamento 100% seguro via:
        <img src={grayLogoImage} alt="Logo cinza Woovi" />
      </div>
    </div>
  );
}

export default App;
