import { useState } from 'react';
import type { MouseEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { Routes } from '@/constants';
import { useAuthContext } from '@/context';

export const useMainLayout = () => {
  const navigate = useNavigate();
  const auth = useAuthContext();

  const user = auth.user;
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onProfileClick = () => {
    navigate(Routes.SignIn);
  };

  const onLogoutClick = () => {
    auth.logout();
    navigate(Routes.SignIn);
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
