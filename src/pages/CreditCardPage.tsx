import { useContext } from "react";
import CardInfosForm from "../components/CardInfosForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentInformations from "../components/PaymentInformations";

import { ValueInfosContext } from "../providers/ValueInfosProvider";

export default function CreditCardPage() {
  const { parcelQuantity } = useContext(ValueInfosContext);

  const headerTitle = `João, pague o restante em ${
    parcelQuantity - 1
  }x no cartão`;

  return (
    <div className="flex flex-col items-center px-5 font-nunito">
      <Header title={headerTitle} />

      <CardInfosForm />
      
      <PaymentInformations howManyIsPayed={1} />
      <Footer />
    </div>
  );
}
