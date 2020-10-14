import React, { useState, useEffect, useCallback, useMemo, useContext, createContext } from 'react';

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

function getStorageData() {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  return { user, token };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = useCallback((user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, login, logout }),
    [user, login, logout]
  );

  useEffect(() => {
    const storagedData = getStorageData();

    if (!storagedData.user && !storagedData.token) {
      console.log('Precisa fazer login');
    } else {
      const user = JSON.parse(storagedData.user);
      setUser(user);
    }

    setIsLoading(false);
  }, []);

  return !isLoading && (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

