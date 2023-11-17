// import { useEffect } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './core/auth-context';

function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    logout();
    document.location.reload();
  }, [logout]);

  return <Navigate to='/auth/sign-in' />;
}

export { Logout };
