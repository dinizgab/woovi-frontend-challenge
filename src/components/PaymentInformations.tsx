import { useContext, useState } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";
import MensalPaymentInformation from "./MensalPaymentInformation";
import SeparationLine from "./SeparationLine";

import { moneyMask } from "../utils/moneyMask";
import infosArrow from "../assets/infos-arrow.svg";

import * as Accordion from "@radix-ui/react-accordion";

export default function PaymentInformations() {
  const { selectedValue, parcelQuantity } = useContext(ValueInfosContext);
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false)

  const formatedParcelValue = moneyMask(selectedValue / parcelQuantity);
  const formatedSelectedValue = moneyMask(selectedValue);
  const parcels = [];

  for (let i = 0; i < parcelQuantity; i++) {
    parcels.push(formatedParcelValue);
  }

  return (
    <>
      <div className="text-gray-text -mb-1">Prazo de pagamento:</div>
      <div className="text-base-text font-extrabold mb-5">
        15/12/2021 - 08:17
      </div>

      {parcels.map((parcelValue, parcelNumber) => (
        <MensalPaymentInformation
          parcelValue={parcelValue}
          parcelNumber={parcelNumber}
        />
      ))}

      <SeparationLine />

      <div className="w-full max-w-sm flex flex-row justify-between items-center text-base-text px-2">
        <div>CET: 0,5%</div>
        <div>Total: {formatedSelectedValue}</div>
      </div>

      <SeparationLine />
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-sm px-2"
      >
        <Accordion.Item value="how-it-works">
          <Accordion.Trigger className="w-full max-w-sm flex flex-row items-center justify-between" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
            <div className="font-extra">Como funciona?</div>
            <img src={infosArrow} className={`${isAccordionOpen && "rotate-180"} duration-300`}/>
          </Accordion.Trigger>
          <Accordion.Content className="text-gray-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <SeparationLine />

      <div className="text-gray-text -mb-1">Identificador:</div>
      <div className="text-base-text font-extrabold mb-10">
        2c1b951f356c4680b13ba1c9fc889c47
      </div>
    </>
  );
}
