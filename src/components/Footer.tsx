import grayLogoImage from "../assets/gray-logo.svg";
import secureShield from "../assets/secure-shield.svg";

export default function Footer() {
  return (
    <div className="mb-10 text-gray-text flex flex-row gap-2 items-center justify-center">
      <img src={secureShield} alt="Escudo seguro" />
      Pagamento 100% seguro via:
      <img src={grayLogoImage} alt="Logo cinza Woovi" />
    </div>
  );
}
