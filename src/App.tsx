import logoImage from "./assets/logo.svg";
import grayLogoImage from "./assets/gray-logo.svg";
import secureShield from "./assets/secure-shield.svg";

import PaymentOption from "./components/PaymentOption";
import FirstPaymentOption from "./components/FirstPaymentOption";
import { parcelInformations } from "./utils/mocks/parcelValues";

import * as Dialog from "@radix-ui/react-dialog";
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

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="my-5 p-3 max-w-md rounded-xl bg-green hover:bg-green-hover text-lg text-white"
        >
          Confirmar
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0 z-20" />
          <Dialog.Content className="absolute p-5 bg-white rounded-xl w-2/3 max-w-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <Dialog.Title className="text-center mb-4 font-bold text-xl">Confirmar numero de parcelas?</Dialog.Title>

            <div className="flex justify-around">
              <Dialog.Close className="p-2 border-2 border-red-500 text-red-500 hover:border-red-400 hover:text-red-400  rounded-2xl w-2/5">
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="p-2 border-2 border-green bg-green hover:bg-green-hover hover:border-green-hover text-white rounded-2xl w-2/5 flex items-center justify-center"
              >
                Confirmar
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="text-gray-text flex flex-row gap-2 items-center justify-center">
        <img src={secureShield} alt="Escudo seguro" />
        Pagamento 100% seguro via:
        <img src={grayLogoImage} alt="Logo cinza Woovi" />
      </div>
    </div>
  );
}

export default App;
