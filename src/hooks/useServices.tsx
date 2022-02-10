import React, { createContext, useState } from 'react';

interface SelectedServiceValues {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<string[]>;
}

const initialSelectServicesValues: SelectedServiceValues = {
  selectedServices: [],
  setSelectedServices: (_: string[]) => {},
};
const ServiceContext = createContext(initialSelectServicesValues);

export const ServiceProvider: React.FC = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  return (
    <ServiceContext.Provider value={{ selectedServices, setSelectedServices }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => React.useContext(ServiceContext);
