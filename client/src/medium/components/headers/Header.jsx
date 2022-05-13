import React from 'react'
import { AppBar, Container, Box, Typography } from '@mui/material'

export default function HeaderMedium() {
    return (<>
        <AppBar position="absolute" sx={{ backgroundColor: 'white', color: 'mediumblue', boxShadow: 1 }}>
            <Container maxWidth="4000px" >
                <Box
                    sx={{ textAlign:'center'}} >
                    <img src={require('../../../assets/logos/houseDeck_copy1.png')} style={{ width: '10rem' }} alt="Furnitures By HouseDeck Furnishing Pvt. Ltd." />
                </Box>
            </Container>
        </AppBar></>
    )
}


