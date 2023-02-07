interface PaymentOptionProps {
  totalValue: number;
  parcelQuantity: number;
}

export default function PaymentOption({
  totalValue,
  parcelQuantity,
}: PaymentOptionProps) {
  const parceledValue = totalValue / parcelQuantity;

  return (
    <div
      className={`border-2 border-gray 
      ${parcelQuantity == 1 ? "rounded-xl" : null
    } ${parcelQuantity == 2 ? "rounded-t-xl" : null}
      ${parcelQuantity !== 1 && parcelQuantity !== 2 ? "border-t-0" : null}
      ${parcelQuantity === 7 ? "rounded-b-xl": null}
      relative w-full p-5`}
    >
      {parcelQuantity == 1 || parcelQuantity == 2 ? (
        <div className="bg-gray px-5 text-lg text-center font-extrabold rounded-full absolute -top-4 left-5">
          {parcelQuantity == 1 ? "Pix" : "Pix Parcelado"}
        </div>
      ) : null}

      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          {" "}
          <div>
            <strong>{parcelQuantity}x</strong> {parceledValue.toFixed(2)}
          </div>
          <div className="rounded-full w-6 h-6 border-2 border-gray"></div>
        </div>
        {parcelQuantity == 1 ? (
          <div className="text-green mb-1">
            Ganhe <strong>3%</strong> de Cashback
          </div>
        ) : (
          <div className="text-gray-text">Total: R$ {totalValue}</div>
        )}

        {parcelQuantity == 1 || parcelQuantity == 4 ? (
          <div className="bg-blue text-sm text-white rounded-md pl-2 py-1 relative mt-1">
            🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora
          </div>
        ) : null}
      </div>
    </div>
  );
}
