import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import story1 from './images/7S9A2106-scaled 1.png';
import story2 from './images/272035429_682724012880443_2800446078448495875_n 1.png';
import story3 from './images/image 11.png';
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import story4 from './images/image 25.png';
import story5 from './images/image 19.png';
import story6 from './images/image 20.png';
import story7 from './images/Rectangle 4015.png';
import story8 from './images/image 24.png'


export default function Section2() {
    return (
        <Box sx={{
            paddingBottom: '3em'
        }}>
            <Typography sx={{
                display: 'none',
                '@media (max-width: 768px)': {
                    display: 'block',
                    paddingLeft: '1.6em',
                    fontFamily: 'blacksans',
                    fontSize: '0.7em',
                    paddingBottom: '0.5em'
                },


            }}>(60 Inspiring Stories)</Typography>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',

                    '@media (max-width: 1024px)': {

                    },


                }}>



                <Grid container spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',

                        '@media (max-width: 768px)': {
                            display: 'grid',
                            gridTemplateColumns: 'auto',

                        },
                     



                    }}




                >

                    <Grid item  >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',

                            '@media (max-width: 768px)': {
                                width: '21em',

                            },



                        }}>
                            <img
                                src={story1}
                                alt="story1"
                                className="story1" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    marginBottom: '0.7em'
                                }}>Lagos, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '18px',
                                        marginBottom: '0.7em',
                                        color: '#0A1329'
                                    }}>TerraKulture</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how TerraKulture uses the BizEdge Time & Attendance app to improve Efficiency & flexibility in their workforce </Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '0.7em'
                                    }}>Time & Attendance</Typography>
                                <Box>

                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                           
                        }}>
                            <img
                                src={story2}
                                alt="story2"
                                className="story2" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Abuja, Nigeria</Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'blacksansbold',
                                        fontSize: '18px',
                                        marginBottom: '0.5em',
                                        color: '#0A1329'
                                    }}>Hareem Instanbul</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Hareem Istanbul saves time with BizEdge by streamlining attendance & generating Reports in Minutes.</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        fontSize: '0.5em',
                                        marginBottom: '0.7em'
                                    }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none'
                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>


                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                            
                        }}>
                            <img
                                src={story3}
                                alt="story3"
                                className="story3" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329',
                                    width: '10em'
                                }}>Fox Business Development Ltd</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Fox Business Development Ltd uses BizEdge to automate HR.</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                         
                        }}>
                            <img
                                src={story4}
                                alt="story4"
                                className="story4" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329'
                                }}>Zara Investments Capital (ZCI)</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how ZCI uses BizEdge centralized platform to streamline HR processes in their organization</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>Time & Attendance</Typography>
                                <Box>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none'
                                    }}>Watch Video</Link>
                                    <Link href="#" sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        textDecoration: 'none',
                                        marginLeft: '1em'
                                    }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                           
                        }}>
                            <img
                                src={story5}
                                alt="story5"
                                className="story5" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Ibadan, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329',
                                    width: '10em'
                                }}>Salvo Agency International</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '1em'
                                    }}>See how Salvo Agency International streamlined payroll & timely payments with BizEdge</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '1em'
                                }}>Payroll</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                           
                        }}>
                            <img
                                src={story6}
                                alt="story6"
                                className="story6" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Abuja, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329'
                                }}>Cutstruct Technology Limited</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Cutstruct Technology Limited uses BizEdge to boost engagement and plan their workforce</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>People</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item >
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                           
                        }}>
                            <img
                                src={story7}
                                alt="story7"
                                className="story7" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329'
                                }}>Marv Media</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Marv Media streamlines attendance tracking with BizEdge's flexible Clock-In options</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item>
                        <Paper sx={{
                            height: '24.5em',
                            width: '18em',
                            borderRadius: '17px',
                            boxShadow: 'none',
                            border: '1px solid #e1e1e1',
                            '@media (max-width: 768px)': {
                                width: '21em',

                            },
                           
                        }}>
                            <img
                                src={story8}
                                alt="story8"
                                className="story8" />
                            <Box sx={{ padding: '1em' }}>
                                <Typography
                                    sx={{
                                        color: '#1E387B',
                                        fontSize: '0.7em',
                                        fontFamily: 'blacksansbold',
                                        marginBottom: '0.7em'
                                    }}>Lagos, Nigeria</Typography>
                                <Typography sx={{
                                    fontFamily: 'blacksansbold',
                                    fontSize: '18px',
                                    marginBottom: '0.7em',
                                    color: '#0A1329'
                                }}>Fox Business Development Ltd</Typography>
                                <Typography
                                    sx={{
                                        color: '#545454',
                                        fontSize: '12px',
                                        fontFamily: 'blacksans',
                                        fontWeight: 'bold',
                                        marginBottom: '0.7em'
                                    }}>See how Fox Business Development Ltd uses BizEdge to automate HR.</Typography>
                                <Typography sx={{
                                    color: '#545454',
                                    fontFamily: 'blacksans',
                                    fontWeight: 'bold',
                                    fontSize: '0.5em',
                                    marginBottom: '0.7em'
                                }}>Time & Attendance</Typography>
                                <Link href="#" sx={{
                                    color: '#1E387B',
                                    fontSize: '0.7em',
                                    fontFamily: 'blacksansbold',
                                    textDecoration: 'none',

                                }}>View Case Study<ArrowForwardIosIcon sx={{ height: '10px', width: '10px', paddingTop: '1px' }} /></Link>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>



            </Box>












        </Box>
    )
}
