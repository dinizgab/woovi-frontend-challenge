interface CardInfoInputProps {
  label: string;
}

export default function SmallerCardInfoInput({ label }: CardInfoInputProps) {
  return (
    <div className="relative">
      <div className="absolute ml-5 -top-[30%] bg-white border-2 border-white text-label-text">
        {label}
      </div>
      <input
        type="text"
        className="w-full p-2 pl-4 border-2 border-gray rounded-xl focus:border-green  focus:ring-1 focus:ring-green focus:outline-none"
      />
    </div>
  );
}
