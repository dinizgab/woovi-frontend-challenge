import PaymentOption from "../components/PaymentOption";
import FirstPaymentOption from "../components/FirstPaymentOption";
import ConfirmationModal from "../components/ConfirmationModal";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { parcelInformations } from "../utils/mocks/parcelValues";

import { useContext, useState } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

export default function ParcelSelectionPage() {
  const headerTitle = "João, como você quer pagar?"

  const { selectedValue, setSelectedValue, setParcelQuantity } = useContext(ValueInfosContext)

  const isQuantitySelected = (value: number): boolean =>
    selectedValue === value;
  const handleQuantityChange = (
    totalValue: number,
    parcelQuantity: number,
  ): void => {
    setSelectedValue(totalValue);
    setParcelQuantity(parcelQuantity);
  };

  return (
    <div className=" flex flex-col items-center px-5 font-nunito">
      <Header title={headerTitle}/>

      <FirstPaymentOption
        totalValue={30500}
        parcelQuantity={1}
        isQuantitySelected={isQuantitySelected(30500)}
        handleQuantityChange={handleQuantityChange}
      />

      {parcelInformations.map(
        ({ total, first, last, betterChoice, parcelQuantity }) => (
          <PaymentOption
            key={total}
            totalValue={total}
            first={first}
            last={last}
            betterChoice={betterChoice}
            parcelQuantity={parcelQuantity}
            isQuantitySelected={isQuantitySelected(total)}
            handleQuantityChange={handleQuantityChange}
          />
        )
      )}

      <ConfirmationModal/>

      <Footer />
    </div>
  );
}
