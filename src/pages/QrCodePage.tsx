import { useContext } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

import { moneyMask } from "../utils/moneyMask";
import qrcode from "../assets/qrcode.svg";
import copyQrCode from "../assets/copy-qrcode.svg";
import PaymentInformations from "../components/PaymentInformations";

export default function QrCodePage() {
  const { selectedValue, parcelQuantity } = useContext(ValueInfosContext);
  const parcelValue = moneyMask(selectedValue / parcelQuantity);
  
  const headerTitle = `João, pague a entrada de ${parcelValue} pelo Pix`;

  return (
    <div className="flex flex-col items-center font-nunito px-10">
      <Header title={headerTitle} />

      <div className="p-2 border-2 border-green rounded-xl">
        <img src={qrcode} alt="QR-Code de pagamento" />
      </div>

      <button className="p-[.5rem] px-5 my-5 bg-blue hover:bg-blue-hover flex flex-row items-center justify-center text-white rounded-lg max-w-xs">
        Clique para copiar QR CODE
        <img className="ml-2" src={copyQrCode} alt="Copiar o QRCode" />
      </button>

      <PaymentInformations />
      
      <Footer />
    </div>
  );
}