import { useContext } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

import { moneyMask } from "../utils/moneyMask";
import dropdownArrow from "../assets/dropdown-arrow.svg";

import MensalPaymentInformation from "./MensalPaymentInformation";
import SeparationLine from "./SeparationLine";

export default function PaymentInformations() {
  const { selectedValue, parcelQuantity } = useContext(ValueInfosContext);

  const formatedParcelValue = moneyMask(selectedValue / parcelQuantity);
  const formatedSelectedValue = moneyMask(selectedValue);
  const parcels = [];

  for (let i = 0; i < parcelQuantity; i++) {
    parcels.push(formatedParcelValue);
  }

  return (
    <>
      <div className="text-gray-text -mb-1">Prazo de pagamento:</div>
      <div className="text-base-text font-extrabold mb-5">
        15/12/2021 - 08:17
      </div>

      {parcels.map((parcelValue, parcelNumber) => (
        <MensalPaymentInformation
          parcelValue={parcelValue}
          parcelNumber={parcelNumber}
        />
      ))}

      <SeparationLine />

      <div className="w-full max-w-sm flex flex-row justify-between items-center text-base-text px-2">
        <div>CET: 0,5%</div>
        <div>Total: {formatedSelectedValue}</div>
      </div>

      <SeparationLine />

      <div className="w-full max-w-sm flex flex-row items-center justify-between px-2">
        <div className="font-extra">Como funciona?</div>
        <img src={dropdownArrow} />
      </div>

      <SeparationLine />

      <div className="text-gray-text -mb-1">Identificador:</div>
      <div className="text-base-text font-extrabold mb-10">
        2c1b951f356c4680b13ba1c9fc889c47
      </div>
    </>
  );
}
