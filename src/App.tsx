import logoImage from "./assets/logo.svg";
import PaymentOption from "./components/PaymentOption";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center px-5">
      <img src={logoImage} alt="Woovi logo" className="my-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8">
        João, como você quer pagar?
      </h1>
      <PaymentOption />
    </div>
  );
}

export default App;
