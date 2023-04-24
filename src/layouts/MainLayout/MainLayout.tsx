import React, { FC } from 'react';

import {
  AppBar,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

import { styles } from './styles';
import { useMainLayout } from './useMainLayout';

import type { ILayoutProps } from '@/types';

const MainLayout: FC<ILayoutProps> = ({ children }) => {
  const {
    user,
    anchorElUser,
    onLogoutClick,
    handleOpenUserMenu,
    onProfileClick,
    handleCloseUserMenu,
  } = useMainLayout();
  return (
    <Box sx={styles.container}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={styles.toolbar}>
          <IconButton onClick={handleOpenUserMenu} size="large">
            {user?.picture ? <Avatar src={user?.picture} alt="User Avatar" /> : <Avatar />}
          </IconButton>
          <Menu
            sx={styles.menu}
            anchorEl={anchorElUser}
            anchorOrigin={styles.menuAnchorOrigin}
            keepMounted
            transformOrigin={styles.menuTransformOrigin}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={onProfileClick}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={onLogoutClick}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={styles.main}>
        <Toolbar />
        <Box mt={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
