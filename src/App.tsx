import logoImage from "./assets/logo.svg";
import grayLogoImage from "./assets/gray-logo.svg";
import secureShield from "./assets/secure-shield.svg";

import PaymentOption from "./components/PaymentOption";
import FirstPaymentOption from "./components/FirstPaymentOption";
import { parcelInformations } from "./utils/mocks/parcelValues";

import { useState } from "react";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [selectedValue, setSelectedValue] = useState(30500);
  const [parcelQuantity, setParcelQuantity] = useState(1)
  const [parcelValue, setParcelValue] = useState("R$ 30.500,00")

  console.log(parcelQuantity, parcelValue)
  const isQuantitySelected = (value: number): boolean =>
    selectedValue === value;
  const handleQuantityChange = (totalValue: number, parcelQuantity: number, parcelValue: string): void => {
      setSelectedValue(totalValue)
      setParcelQuantity(parcelQuantity)
      setParcelValue(parcelValue)
  };

  return (
    <div className=" flex flex-col items-center px-5 py-10 font-nunito">
      <img src={logoImage} alt="Logo Woovi" className="mb-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8 text-center">
        João, como você quer pagar?
      </h1>

      <FirstPaymentOption
        totalValue={30500}
        parcelQuantity={1}
        isQuantitySelected={isQuantitySelected(30500)}
        handleQuantityChange={handleQuantityChange}
      />

      {parcelInformations.map(
        ({ total, first, last, betterChoice, parcelQuantity }) => (
          <PaymentOption
            key={total}
            totalValue={total}
            first={first}
            last={last}
            betterChoice={betterChoice}
            parcelQuantity={parcelQuantity}
            isQuantitySelected={isQuantitySelected(total)}
            handleQuantityChange={handleQuantityChange}
          />
        )
      )}

      <ConfirmationModal parcelValue={parcelValue} parcelQuantity={parcelQuantity}/>

      <div className="text-gray-text flex flex-row gap-2 items-center justify-center">
        <img src={secureShield} alt="Escudo seguro" />
        Pagamento 100% seguro via:
        <img src={grayLogoImage} alt="Logo cinza Woovi" />
      </div>
    </div>
  );
}

export default App;
