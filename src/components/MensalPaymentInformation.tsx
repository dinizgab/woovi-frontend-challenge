import { useContext } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

import smallerCheck from "../assets/smaller-check.svg";
import clsx from "clsx";

interface MensalPaymentInformationProps {
  parcelNumber: number;
  parcelValue: string;
  howManyIsPayed: number;
}

export default function MensalPaymentInformation({
  parcelNumber,
  parcelValue,
  howManyIsPayed,
}: MensalPaymentInformationProps) {
  const { parcelQuantity } = useContext(ValueInfosContext);
  const correctedParcelNumber = parcelNumber + 1;

  const isFirstParcel = correctedParcelNumber === 1
  const isLastParcel = parcelQuantity === correctedParcelNumber;
  const isPayed = howManyIsPayed > parcelNumber;
  const isNextToPay = howManyIsPayed + 1 === correctedParcelNumber

  return (
    <div className="relative mb-2 px-1 w-full max-w-sm flex flex-row justify-between items-center text-base-text">
      <div className="flex flex-row items-center">
        <div
          className={clsx(
            `mr-2 w-4 h-4 flex items-center justify-center border-2 rounded-full`,
            {
              "border-green": isNextToPay || isPayed,
              "bg-green": isPayed,
              "border-gray": true,
            }
          )}
        >
          {isPayed && <img src={smallerCheck} />}
        </div>
        {correctedParcelNumber}ª
        {isFirstParcel ? " entrada no Pix" : " no cartão"}
      </div>
      <div className="font-extrabold">{parcelValue}</div>

      {!isLastParcel && (
        <div
          className={clsx(
            `h-5 w-0 absolute border-2 left-2.5 -bottom-3.5 -z-10`,
            {
              "border-green": correctedParcelNumber <= howManyIsPayed,
              "border-gray": true,
            }
          )}
        />
      )}
    </div>
  );
}
