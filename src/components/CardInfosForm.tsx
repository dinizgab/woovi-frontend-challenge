import CardInfoInput from "./CardInfoInput";
import SmallerCardInfoInput from "./SmallerCardInfoInput";

export default function CardInfosForm() {
  const informationLabels = [
    "Nome completo",
    "CPF",
    "Número do cartão",
  ];

  const smallerInputLabels = [
    "Vencimento",
    "CVV"
  ]

  return (
    <form className="w-full max-w-sm flex flex-col gap-5 mb-5">
      {informationLabels.map((label) => (
        <CardInfoInput key={label} label={label} />
      ))}

      <div className="grid grid-cols-2 gap-5">
        {
          smallerInputLabels.map(label => <SmallerCardInfoInput label={label}/>)
        }
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
