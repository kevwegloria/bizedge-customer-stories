import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo2 from './images/logo2.png';
import google from './images/google.png';
import apple from './images/apple.png'

export default function Section4() {
    return (
        <Box sx={{
            dispay: 'block',
            '@media (max-width: 768px)': {
                display: 'none'


            }

        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fafafa',
                paddingTop: '3em',
                paddingBottom: '2em'
            }}>
                <Box sx={{

                    display: 'flex',

                    justifyContent: 'space-between',
                    width: '57em',
                

                }}>
                    <Box>
                        <img
                            src={logo2}
                            alt="logo2"
                            className="logo2"
                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                            <img
                                src={apple}
                                alt="apple"
                                className="apple" />
                            <img
                                src={google}
                                alt="google"
                                className="google" />
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'blacksansbold',
                                color: '#333333',
                                paddingBottom: '1em'
                            }}>Home</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#333333',
                                    fontFamily: 'blacksans',
                                    fontSize: '0.8em',
                                    fontWeight: 600
                                }}>Company</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Product</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Pricing</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Support</Link>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontFamily: 'blacksansbold',
                                color: '#333333',
                                paddingBottom: '1em'
                            }}>Apps</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>People Management</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Time & Attendance</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Payroll</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Asset Management</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Vehicle Management</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Document Generation</Link>
                        </Box>

                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'blacksansbold',
                            color: '#333333',
                            paddingBottom: '1em'
                        }}>Contact</Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            lineHeight: '3em'
                        }}>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Get in touch</Link>
                            <Link href="#" sx={{
                                textDecoration: 'none',
                                color: '#333333',
                                fontFamily: 'blacksans',
                                fontSize: '0.8em',
                                fontWeight: 600
                            }}>Book a Demo</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}