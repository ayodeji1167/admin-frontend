'use client';
export const useAuth = () => {
  if (typeof window === 'undefined') {
    return {
      accessToken: null,
      refreshToken: null,
      user: null,
      isloggedIn: undefined,
    };
  }
  const accessToken = localStorage.getItem('access_token');
  const refreshToken = localStorage.getItem('refresh_token');
  const user = localStorage.getItem('user');
  const isloggedIn = Boolean(accessToken);
  const logout = () => {
    localStorage.removeItem('access_token');
  };

  return { accessToken, refreshToken, user, isloggedIn, logout };
};
