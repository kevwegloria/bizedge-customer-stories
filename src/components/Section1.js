import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Section1() {
    return (
        <Box >
            <Box sx={{
                paddingTop: '10em',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingBottom: '2.5em',


            }}>
                <Typography variant="h3"
                    sx={{
                        fontFamily: "blacksansbold",
                        width: '12em',
                        '@media (max-width: 768px)': {
                            fontSize: '1.2em',
                            fontFamily: 'blacksansblack',

                        },
                        '@media (max-width: 1024px)': {
                            fontSize: '2em'
                        }

                    }}>Inspiring Stories from Our Customers</Typography>
                <Typography variant="p"
                    sx={{
                        fontFamily: "blacksans",
                        width: '44em',
                        fontSize: '0.86em',
                        paddingTop: '1em',
                        fontWeight: '400',
                        lineHeight: '1.5em',
                        '@media (max-width: 768px)': {
                            width: '25em',
                            fontSize: '0.75em',
                            paddingTop: '2em'
                        },
                        '@media (max-width: 1024px)': {
                            fontSize: '1em'
                        }


                    }}>We have great customers. They have great stories. Read, and watch how businesses are using BizEdge to get more done</Typography>
            </Box>
        </Box>
    )
}