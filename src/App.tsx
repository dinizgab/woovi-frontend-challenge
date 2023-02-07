import logoImage from "./assets/logo.svg";
import grayLogoImage from "./assets/gray-logo.svg";
import secureShield from "./assets/secure-shield.svg";

import PaymentOption from "./components/PaymentOption";
import { parcelInformations } from "./utils/mocks/parcelValues";
import FirstPaymentOption from "./components/FirstPaymentOption";

function App() {
  return (
    <div className=" flex flex-col items-center px-5 py-10">
      <img src={logoImage} alt="Logo Woovi" className="mb-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8">
        João, como você quer pagar?
      </h1>
      <div className="w-full mb-8 ">
        <FirstPaymentOption totalValue={30500} parcelQuantity={1} />
      </div>

      {parcelInformations.map(({total, first, last, betterChoice}, parcelQuantity) => (
        <PaymentOption
          key={total}
          totalValue={total}
          first={first}
          last={last}
          betterChoice={betterChoice}
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
