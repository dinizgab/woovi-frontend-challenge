import CardInfoInput from "./CardInfoInput";

export default function CardInfosForm() {
  const informationLabels = [
    "Nome completo",
    "CPF",
    "Número do cartão",
    "Vencimento",
    "CVV",
    "Parcelas",
  ];

  return (
    <form className="w-full max-w-sm flex flex-col gap-5 mb-5">
      {informationLabels.map((label) => (
        <CardInfoInput label={label} />
      ))}
      <button type="submit" className="p-2 bg-blue hover:bg-blue-hover rounded-xl w-full text-white">Pagar</button>
    </form>
  );
}
