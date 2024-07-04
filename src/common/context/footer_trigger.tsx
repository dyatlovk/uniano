import { createContext, useState } from "react";

export const FooterTriggerContext = createContext(null);

export const FooterTriggerProvider = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <FooterTriggerContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </FooterTriggerContext.Provider>
  );
};

export default FooterTriggerProvider;