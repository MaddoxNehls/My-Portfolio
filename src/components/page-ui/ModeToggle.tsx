'use client';

import { Brightness4 as MoonIcon, Brightness7 as SunIcon } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick} color="inherit">
                {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={() => { setTheme('light'); handleClose(); }}>
                    <SunIcon /> Light
                </MenuItem>
                <MenuItem onClick={() => { setTheme('dark'); handleClose(); }}>
                    <MoonIcon /> Dark
                </MenuItem>
                <MenuItem onClick={() => { setTheme('system'); handleClose(); }}>
                    <SunIcon /> System
                </MenuItem>
            </Menu>
        </>
    );
}
