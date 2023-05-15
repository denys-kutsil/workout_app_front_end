import { useState } from 'react';
import type { MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { ClientRoutes } from '@/constants';
import { useAuthContext } from '@/context';

export const useMainLayout = () => {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const authContext = useAuthContext();

  const user = authContext.user;

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onProfileClick = () => {
    navigate(user ? ClientRoutes.Profile : ClientRoutes.SignIn);
  };

  const onLogoutClick = () => {
    authContext.logout();
    navigate(ClientRoutes.SignIn);
  };

  return {
    user,
    anchorElUser,
    onLogoutClick,
    handleOpenUserMenu,
    onProfileClick,
    handleCloseUserMenu,
  };
};
