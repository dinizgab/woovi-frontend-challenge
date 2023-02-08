import logoImage from "./assets/logo.svg";
import grayLogoImage from "./assets/gray-logo.svg";
import secureShield from "./assets/secure-shield.svg";

import PaymentOption from "./components/PaymentOption";
import FirstPaymentOption from "./components/FirstPaymentOption";
import { parcelInformations } from "./utils/mocks/parcelValues";

import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState(30500);
  const isQuantitySelected = (value: number): boolean =>
    selectedValue === value;
  const handleQuantityChange = (value: number): void => setSelectedValue(value);

  return (
    <div className=" flex flex-col items-center px-5 py-10">
      <img src={logoImage} alt="Logo Woovi" className="mb-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8">
        João, como você quer pagar?
      </h1>

      <FirstPaymentOption
        totalValue={30500}
        parcelQuantity={1}
        isQuantitySelected={isQuantitySelected(30500)}
        handleQuantityChange={handleQuantityChange}
      />

      {parcelInformations.map(
        ({ total, first, last, betterChoice }, parcelQuantity) => (
          <PaymentOption
            key={total}
            totalValue={total}
            first={first}
            last={last}
            betterChoice={betterChoice}
            parcelQuantity={parcelQuantity + 2}
            isQuantitySelected={isQuantitySelected(total)}
            handleQuantityChange={handleQuantityChange}
          />
        )
      )}

      <div className="text-gray-text flex flex-row gap-2 items-center justify-center mt-10">
        <img src={secureShield} alt="Escudo seguro" />
        Pagamento 100% seguro via:
        <img src={grayLogoImage} alt="Logo cinza Woovi" />
      </div>
    </div>
  );
}

export default App;
