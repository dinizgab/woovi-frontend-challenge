import { ChangeEvent } from "react";
import { moneyMask } from "../utils/moneyMask";

interface FirstPaymentOptionProps {
  totalValue: number;
  parcelQuantity: number;
  isQuantitySelected: boolean
  handleQuantityChange: (value: number) => void
}

export default function FirstPaymentOption({
  totalValue,
  parcelQuantity,
  isQuantitySelected,
  handleQuantityChange,
}: FirstPaymentOptionProps) {
  const formatedTotalValue = moneyMask(totalValue);

  return (
    <div className="border-2 border-gray relative w-[27rem] p-5 rounded-xl hover:bg-green-bg">
      <div className="bg-gray px-5 text-lg text-center font-extrabold rounded-full absolute -top-4 left-5">
        Pix
      </div>

      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          {" "}
          <div>
            <strong>{parcelQuantity}x</strong> {formatedTotalValue}
          </div>
          <input
            type="radio"
            name={`${totalValue}`}
            checked={isQuantitySelected}
            value={totalValue}
            onChange={() => handleQuantityChange(totalValue)}
            className="rounded-full w-6 h-6 border-2 border-gray"
          />
        </div>
        <div className="text-green ">
          Ganhe <strong>3%</strong> de Cashback
        </div>
        <div className="text-gray-text">Total: {formatedTotalValue}</div>

        <div className="bg-blue text-sm text-white rounded-md pl-2 py-1 relative mt-1">
          <p>
            🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora
          </p>
        </div>
      </div>
    </div>
  );
}
