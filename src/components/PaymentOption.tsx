export default function PaymentOption() {
  return (
    <div className="border-2 border-gray rounded-xl relative w-full p-5">
      <div className="bg-gray text-lg text-center font-extrabold w-16 rounded-full absolute -top-4 left-5">
        Pix
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-xl text-base-text flex flex-row justify-between">
          {" "}
          <div><strong>1x</strong> R$ 30.500,00</div>
          <div className="rounded-full w-6 h-6 border-2 border-gray"></div>
        </div>
        <div className="text-green mb-1">
          Ganhe <strong>3%</strong> de Cashback
        </div>
        <div className="bg-blue text-sm text-white rounded-md pl-2 py-1 relative">
          <div>
            🤑{" "} <strong>R$ 300,00</strong> de volta no seu Pix na hora
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
