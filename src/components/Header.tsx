import logoImage from "../assets/logo.svg";

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {
  return (
    <>
      <img src={logoImage} alt="Logo Woovi" className="mb-10 mt-10" />
      <h1 className="text-2xl font-extrabold text-base-text mb-8 text-center">
        {title}
      </h1>
    </>
  );
}
