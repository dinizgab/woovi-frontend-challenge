import { moneyMask } from "../utils/moneyMask";
import checked from "../assets/checked.svg";
import clsx from "clsx";

interface FirstPaymentOptionProps {
  totalValue: number;
  parcelQuantity: number;
  isQuantitySelected: boolean;
  handleQuantityChange: (totalValue: number, parcelQuantity: number) => void;
}

export default function FirstPaymentOption({
  totalValue,
  parcelQuantity,
  isQuantitySelected,
  handleQuantityChange,
}: FirstPaymentOptionProps) {
  const formatedTotalValue = moneyMask(totalValue);
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleQuantityChange(totalValue, parcelQuantity);
  };

  return (
    <div
      className={clsx(
        `mb-8 border-2 relative w-full max-w-md p-5 rounded-xl hover:bg-green-bg cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-green`,
        {
          "border-gray": true,
          "bg-green-bg border-green": isQuantitySelected,
        }
      )}
      onClick={() => handleQuantityChange(totalValue, parcelQuantity)}
      onKeyDown={(event) => handleKeyDown(event)}
      tabIndex={parcelQuantity}
    >
      <div className="bg-gray px-5 text-lg text-center font-extrabold rounded-full absolute -top-4 left-5">
        Pix
      </div>

      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          <div>
            <strong>{parcelQuantity}x</strong> {formatedTotalValue}
          </div>
          <div
            className={`flex items-center justify-center rounded-full w-6 h-6 border-2 appearance-none ${
              isQuantitySelected ? "bg-green border-green" : "border-gray"
            }`}
          >
            {isQuantitySelected ? (
              <img src={checked} alt="Checked value" />
            ) : null}
          </div>
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
