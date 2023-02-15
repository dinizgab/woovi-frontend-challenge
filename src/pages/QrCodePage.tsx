import { useContext } from "react";
import { ValueInfosContext } from "../providers/ValueInfosProvider";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentInformations from "../components/PaymentInformations";

import { moneyMask } from "../utils/moneyMask";

import qrcode from "../assets/qrcode.svg";
import copyQrCode from "../assets/copy-qrcode.svg";
import { Link } from "react-router-dom";

export default function QrCodePage() {
  const { selectedValue, parcelQuantity } = useContext(ValueInfosContext);
  const parcelValue = moneyMask(selectedValue / parcelQuantity);

  const headerTitle = `João, pague a entrada de ${parcelValue} pelo Pix`;

  return (
    <div className="flex flex-col items-center font-nunito px-4">
      <Header title={headerTitle} />

      <div className="max-w-xs p-2 border-2 border-green rounded-xl -mt-3 transition-transform duration-150 hover:scale-105">
        <img src={qrcode} alt="QR-Code de pagamento" />
      </div>

      <Link to="/card" className="p-[.5rem] px-5 my-5 bg-blue hover:bg-blue-hover flex flex-row items-center justify-center text-white rounded-lg max-w-xs transition-colors duration-150 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue">
        Clique para copiar QR CODE
        <img className="ml-2" src={copyQrCode} alt="Copiar o QRCode" />
      </Link>

      <PaymentInformations howManyIsPayed={0} />

      <Footer />
    </div>
  );
}
