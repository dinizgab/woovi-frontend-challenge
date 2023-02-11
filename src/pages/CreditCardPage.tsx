import { useContext } from "react";
import Header from "../components/Header";
import PaymentInformations from "../components/PaymentInformations";

import { ValueInfosContext } from "../providers/ValueInfosProvider";

export default function CreditCardPage() {
  const { parcelQuantity, setParcelQuantity } = useContext(ValueInfosContext);
  setParcelQuantity(4)
  const headerTitle = `João, pague o restante em ${
    parcelQuantity - 1
  }x no cartão`;

  return (
    <div className="flex flex-col items-center px-5 font-nunito">
      <Header title={headerTitle} />

      <PaymentInformations isPayed={true} />
    </div>
  );
}
