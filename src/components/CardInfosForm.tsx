import { inputLabels, smallerInputLabels } from "../utils/inputLabels";
import CardInfoInput from "./CardInfoInput";

export default function CardInfosForm() {
  return (
    <form className="w-full max-w-sm flex flex-col gap-5 mb-5">
      <label className="relative">
        <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
          Nome completo
        </div>
        <input
          type="text"
          placeholder="João Linaldo Dias Fraga Santos"
          className={
            "w-full p-2 pl-4 border-2 border-gray rounded-xl transition-colors focus:border-green focus:outline-none"
          }
        />
      </label>
      <label className="relative">
        <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
          CPF
        </div>
        <input
          type="text"
          placeholder="405.503.503-15"
          className={
            "w-full p-2 pl-4 border-2 border-gray rounded-xl transition-colors focus:border-green focus:outline-none"
          }
        />
      </label>
      <label className="relative">
        <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
          Número do cartão
        </div>
        <input
          type="text"
          maxLength={16 }
          placeholder="1234 5678 9101 1121"
          className={
            "w-full p-2 pl-4 border-2 border-gray rounded-xl transition-colors focus:border-green focus:outline-none"
          }
        />
      </label>

      <div className="grid grid-cols-2 gap-5">
        <label className="relative">
          <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
            Vencimento
          </div>
          <input
            type="text"
            placeholder="10/02"
            className={
              "w-full p-2 pl-4 border-2 border-gray rounded-xl transition-colors focus:border-green focus:outline-none"
            }
          />
        </label>
        <label className="relative">
          <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
            CVV
          </div>
          <input
            type="text"
            placeholder="123"
            className={
              "w-full p-2 pl-4 border-2 border-gray rounded-xl transition-colors focus:border-green focus:outline-none"
            }
          />
        </label>
      </div>

      <button
        type="submit"
        className="p-2 bg-blue hover:bg-blue-hover rounded-xl w-full text-white transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue"
      >
        Pagar
      </button>
    </form>
  );
}
