import clsx from "clsx";
import { moneyMask } from "../utils/moneyMask";

interface PaymentOptionProps {
  totalValue: number;
  parcelQuantity: number;
  first?: boolean;
  last?: boolean;
  betterChoice?: boolean;
}

export default function PaymentOption({
  totalValue,
  parcelQuantity,
  first,
  last,
  betterChoice,
}: PaymentOptionProps) {
  const parceledValue = totalValue / parcelQuantity;
  const formatedParceledValue = moneyMask(parceledValue);
  const formatedTotalValue = moneyMask(totalValue);

  return (
    <div
      className={clsx("border-2 border-gray relative w-full p-5", {
        "rounded-t-xl": parcelQuantity === 2,
        "border-t-0": !first,
        "rounded-b-xl": last,
      })}
    >
      {first ? (
        <div className="bg-gray px-5 text-lg text-center font-extrabold rounded-full absolute -top-4 left-5">
          Pix Parcelado
        </div>
      ) : null}

      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          {" "}
          <div>
            <strong>{parcelQuantity}x</strong> {formatedParceledValue}
          </div>
          <div className="rounded-full w-6 h-6 border-2 border-gray"></div>
        </div>

        <div className="text-gray-text">Total: {formatedTotalValue}</div>

        {betterChoice ? (
          <div className="bg-blue text-sm text-white rounded-md pl-2 py-1 relative mt-1">
            <strong>-3% de juros: </strong>Melhor opção de parcelamento
          </div>
        ) : null}
      </div>
    </div>
  );
}
