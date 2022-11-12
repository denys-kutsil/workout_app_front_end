import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/context';

import type { MouseEvent } from 'react';

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
    navigate('/sign-in');
  };

  const onLogoutClick = () => {
    auth.logout();
    navigate('/sign-in');
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
