import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from 'react';
  import { UserProfile } from '@/types';
  
  
  interface UserContextType {
    profile: UserProfile | null;
    loading: boolean;
    getUserProfile: () => void;
  }
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  const UserProfileContext = createContext<UserContextType | undefined>(undefined);

  //eslint-disable-next-line
  export const useUser = (): UserContextType => {
    const context = useContext(UserProfileContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
  
  export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    const getUserProfile = async () => {
      try {
        const response = await fetch(`/api/userprofiles/`, {
          method: 'GET',
        });
        const data = await response.json();
        setProfile(data[0]);
        setLoading(false);
        //eslint-disable-next-line
      } catch (err: any) {
        console.log('Fetch user profile failed', err.message);
      }
    };
  
    useEffect(() => {
      if (!profile) {
        getUserProfile();
      }
    }, [profile]);
  
    return (
      <UserProfileContext.Provider value={{ profile, loading, getUserProfile }}>
        {children}
      </UserProfileContext.Provider>
    );
  };
  