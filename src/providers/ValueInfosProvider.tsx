import { createContext, ReactNode, useState } from "react";

interface ValueInfosProviderProps {
  children: ReactNode;
}

type ValueInfosContextType = {
  selectedValue: number;
  setSelectedValue: (value: number) => void;
  parcelQuantity: number;
  setParcelQuantity: (parcels: number) => void;
};

export const ValueInfosContext = createContext<ValueInfosContextType>({
  selectedValue: 0,
  setSelectedValue: () => {},
  parcelQuantity: 0,
  setParcelQuantity: () => {},
});

export function ValueInfosProvider({ children }: ValueInfosProviderProps) {
  const [selectedValue, setSelectedValue] = useState(30500);
  const [parcelQuantity, setParcelQuantity] = useState(1);

  return (
    <ValueInfosContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        parcelQuantity,
        setParcelQuantity,
      }}
    >
      {children}
    </ValueInfosContext.Provider>
  );
}
