import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useDiscordAuth } from '../hooks/useDiscordAuth';

interface DiscordAuthContextType {
  user: any;
  loading: boolean;
  error: string | null;
  login: () => void;
  logout: () => void;
  handleCallback: (code: string) => Promise<void>;
}

const DiscordAuthContext = createContext<DiscordAuthContextType | undefined>(undefined);

export const DiscordAuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useDiscordAuth();

  return (
    <DiscordAuthContext.Provider value={auth}>
      {children}
    </DiscordAuthContext.Provider>
  );
};

export const useDiscordAuthContext = () => {
  const context = useContext(DiscordAuthContext);
  if (context === undefined) {
    throw new Error('useDiscordAuthContext must be used within a DiscordAuthProvider');
  }
  return context;
}; 