import { useContext } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

interface MensalPaymentInformationProps {
  parcelNumber: number;
  parcelValue: string;
}

export default function MensalPaymentInformation({
  parcelNumber,
  parcelValue,
}: MensalPaymentInformationProps) {
  const { parcelQuantity } = useContext(ValueInfosContext);
  const correctedParcelNumber = parcelNumber + 1;
  const isLastParcel = parcelQuantity === correctedParcelNumber;

  return (
    <div className="relative mb-2 px-1 w-full max-w-sm flex flex-row justify-between items-center text-base-text">
      <div className="flex flex-row items-center">
        <div
          className={`mr-2 w-4 h-4 ${
            correctedParcelNumber === 1 ? "border-green" : "border-gray"
          } border-2 rounded-full`}
        />
        {correctedParcelNumber}ª
        {correctedParcelNumber === 1 ? " entrada no Pix" : " no cartão"}
      </div>
      <div className="font-extrabold">{parcelValue}</div>

      {!isLastParcel ? (
        <div className="h-5 w-0 absolute  border-2 border-gray left-2.5 -bottom-3.5 -z-10" />
      ) : null}
    </div>
  );
}
