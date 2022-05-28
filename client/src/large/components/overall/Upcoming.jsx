import { Typography, Box } from '@mui/material'
import React from 'react'

export default function Upcoming() {
    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <img src={require("../../../assets/banner/upcoming.webp")} style={{ width: '380px' }} alt="Upcoming" />
                <Typography sx={{
                    fontFamily: 'Jost', fontSize: '22px', fontWeight: '800', background: 'white', mt: 3,
                    color: 'mediumblue',
                }}>We are Coming Soon!</Typography>
                <Typography sx={{
                    fontFamily: 'Jost', fontSize: '15px', m:'0px auto',mt:2,width:'340px',
                }}>These products are not available for rent at the moment.
                    Please check back soon.</Typography>
            </Box>
        </>
    )
}
