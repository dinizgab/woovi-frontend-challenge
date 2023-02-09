import clsx from "clsx";
import checked from "../assets/checked.svg";

import { moneyMask } from "../utils/moneyMask";

interface PaymentOptionProps {
  totalValue: number;
  parcelQuantity: number;
  first?: boolean;
  last?: boolean;
  betterChoice?: boolean;
  isQuantitySelected: boolean;
  handleQuantityChange: (value: number) => void;
}

export default function PaymentOption({
  totalValue,
  parcelQuantity,
  first,
  last,
  betterChoice,
  isQuantitySelected,
  handleQuantityChange,
}: PaymentOptionProps) {
  const parceledValue = totalValue / parcelQuantity;
  const formatedParceledValue = moneyMask(parceledValue);
  const formatedTotalValue = moneyMask(totalValue);

  return (
    <div
      className={clsx(
        `-mb-[2px] border-2 w-full max-w-md p-5 hover:bg-green-bg cursor-pointer ${
          isQuantitySelected ? "z-10 bg-green-bg border-green" : "border-gray"
        }`,
        {
          "rounded-t-xl relative": parcelQuantity === 2,
          "rounded-b-xl": last,
        }
      )}
      onClick={() => handleQuantityChange(totalValue)}
    >
      {first ? (
        <div className="bg-gray px-5 text-lg text-center font-extrabold rounded-full absolute -top-4 left-5">
          Pix Parcelado
        </div>
      ) : null}

      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          <div>
            <strong>{parcelQuantity}x</strong> {formatedParceledValue}
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-6 h-6 border-2  appearance-none ${
              isQuantitySelected ? "bg-green border-green" : "border-gray"
            }`}
          >
            {isQuantitySelected ? (
              <img src={checked} alt="Checked value" />
            ) : null}
          </div>
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
