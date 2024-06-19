import React, {
    createContext, 
    ReactNode, 
    useContext, 
    useEffect, 
    useState 
} from 'react';


interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }

  interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

//eslint-disable-next-line
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(
      () => localStorage.getItem('theme') || 'dark'
    );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
