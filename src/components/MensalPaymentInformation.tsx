import { useContext } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

import smallerCheck from "../assets/smaller-check.svg";

interface MensalPaymentInformationProps {
  parcelNumber: number;
  parcelValue: string;
  isPayed: boolean;
}

export default function MensalPaymentInformation({
  parcelNumber,
  parcelValue,
  isPayed,
}: MensalPaymentInformationProps) {
  const { parcelQuantity } = useContext(ValueInfosContext);
  const correctedParcelNumber = parcelNumber + 1;
  const isLastParcel = parcelQuantity === correctedParcelNumber;

  return (
    <div className="relative mb-2 px-1 w-full max-w-sm flex flex-row justify-between items-center text-base-text">
      <div className="flex flex-row items-center">
        <div
          className={`mr-2 w-4 h-4 flex items-center justify-center 
          ${correctedParcelNumber === 1 ? "border-green" : "border-gray"} 
          ${isPayed && correctedParcelNumber === 1 && "bg-green"} 
          ${
            isPayed && correctedParcelNumber === 2
              && "border-green"
          } 
          border-2 rounded-full`}
        >
          {isPayed && <img src={smallerCheck} />}
        </div>
        {correctedParcelNumber}ª
        {correctedParcelNumber === 1 ? " entrada no Pix" : " no cartão"}
      </div>
      <div className="font-extrabold">{parcelValue}</div>

      {!isLastParcel && (
        <div
          className={`h-5 w-0 absolute border-2 left-2.5 -bottom-3.5 -z-10 
          ${
            isPayed && correctedParcelNumber === 1
              ? "border-green"
              : "border-gray"
          }
          `}
        />
      )}
    </div>
  );
}
