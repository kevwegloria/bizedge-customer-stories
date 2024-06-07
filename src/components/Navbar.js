import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Hidden, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './images/Bizedge_ORIGINAL.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profile from './images/frame.png'


function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="absolute" sx={{
            backgroundColor: 'transparent', boxShadow: 'none', zIndex: '9999',
            '@media (max-width: 768px)': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)', paddingBottom: '0.3em' },
        }}>
            <Toolbar sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '2em',
                backgroundColor: 'transparent'

            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,

                }}>
                    <Box sx={{
                        width: { xs: 'auto', md: '50%' },
                        paddingLeft: { md: '2.5em' },



                    }}>

                        <a href="#">
                            <img
                                src={logo}
                                alt='logo'
                                className='logo'
                                style={{ maxHeight: '50px', }}
                            />
                        </a>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: { xs: 'auto', md: '65%' },


                }}>
                    <Hidden mdUp>
                        <IconButton
                            size="large"
                            edge="start"
                            color="#323232"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Product</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Resources</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
                            <MenuItem onClick={handleMenuClose}><img
                                src={profile}
                                style={{ marginRight: '0.5em' }} />Login</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                        </Menu>
                    </Hidden>

                    <Hidden mdDown>
                        <Button sx={{
                            mr: 5,
                            textTransform: 'none',
                            fontFamily: 'blacksansbold',
                            color: '#1E727B',
                            fontSize: '14px',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }}>Home</Button>
                        <Button sx={{
                            mr: 2,
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }}>Product <KeyboardArrowDownIcon /></Button>
                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            padding: '8px 35px',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }} >Resources</Button>
                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            padding: '8px 35px',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }} >Pricing</Button>
                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            padding: '8px 35px',
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white'
                            }
                        }} ><img
                                src={profile}
                                style={{ marginRight: '0.5em' }} />Login</Button>
                        <Button sx={{
                            textTransform: 'none',
                            fontFamily: 'blacksans',
                            fontWeight: 'bold',
                            color: '#545454',
                            fontSize: '14px',
                            padding: '8px 35px',
                            backgroundColor: '#eaf8fa',
                            '&:hover': {
                                backgroundColor: '#eaf8fa'
                            }
                        }} >Sign Up</Button>
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;
