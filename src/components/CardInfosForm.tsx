import { inputLabels, smallerInputLabels } from "../utils/inputLabels";
import CardInfoInput from "./CardInfoInput";
import SmallerCardInfoInput from "./SmallerCardInfoInput";

export default function CardInfosForm() {
  return (
    <form className="w-full max-w-sm flex flex-col gap-5 mb-5">
      {inputLabels.map(({ label, placeholder }) => (
        <CardInfoInput key={label} label={label} placeholder={placeholder} />
      ))}

      <div className="grid grid-cols-2 gap-5">
        {smallerInputLabels.map(({ label, placeholder }) => (
          <SmallerCardInfoInput
            key={label}
            label={label}
            placeholder={placeholder}
          />
        ))}
      </div>

      <button
        type="submit"
        className="p-2 bg-blue hover:bg-blue-hover rounded-xl w-full text-white"
      >
        Pagar
      </button>
    </form>
  );
}
