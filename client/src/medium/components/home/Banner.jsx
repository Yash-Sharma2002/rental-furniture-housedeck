import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
// import { LoginContext } from '../../../context/Context'


export default function Banner({ setValue }) {
    // const { city } = React.useContext(LoginContext)
    return (
        <>
            {/* <Typography sx={{ fontSize: '18px', mt: 4, fontFamily: 'Jost', opacity: '0.9', textAlign: 'center' }}>Rent Furniture & Appliances in {city}</Typography>
            <img src={require("../../../assets/banner/banner.webp")} alt="Banner" style={{ width: '100%', marginTop: '10px' }} /> */}
            <Typography sx={{ fontSize: '20px', letterSpacing: "5px", mt: 4, fontFamily: 'Jost', opacity: '0.9', textAlign: 'center' }}>WHY YOU SHOULD RENT!</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                mt: 5
            }}>
                <Card sx={{ maxWidth: 345, my: 2, m: '10px' }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={require("../../../assets/banner/why_rent_1.webp")}
                        alt="Paella dish"
                    />
                    <CardContent sx={{ width: '70%', textAlign: 'start', m: '0px auto' }}>
                        <Typography sx={{ fontSize: '17px', fontFamily: 'Jost', my: 4 }}>
                            LIVE BETTER NOW
                        </Typography>
                        <Typography sx={{ fontSize: '15px', fontFamily: 'Jost', opacity: '0.9', my: 4 }}>
                            With our award-winning furniture, create your dream home today. Without waiting for that elusive tomorrow.
                        </Typography>
                        <Typography sx={{
                            background: 'white',
                            color: 'mediumblue',
                            fontSize: '15px',
                            fontFamily: 'Jost',
                            opacity: '0.9',
                            my: 4,
                            cursor: 'pointer'
                        }}
                            onClick={() => setValue('categories')}
                        >
                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={require("../../../assets/banner/why_rent_2.webp")}
                        alt="Paella dish"
                    />
                    <CardContent sx={{ width: '70%', textAlign: 'start', m: '0px auto' }}>
                        <Typography sx={{ fontSize: '17px', fontFamily: 'Jost', my: 4 }}>
                            HAVE EVERYTHING, WITHOUT BUYING
                        </Typography>
                        <Typography sx={{ fontSize: '15px', fontFamily: 'Jost', opacity: '0.9', my: 4 }}>
                            Bed or sofa? It’s not a choice anymore. With our wallet-friendly packages, you can have that perfect home at a fraction of
                        </Typography>
                        <Typography sx={{
                            background: 'white',
                            color: 'mediumblue',
                            fontSize: '15px',
                            fontFamily: 'Jost',
                            opacity: '0.9',
                            my: 4,
                            cursor: 'pointer'
                        }}
                            onClick={() => setValue('categories')}
                        >
                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345, my: 2 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={require("../../../assets/banner/why_rent_3.webp")}
                        alt="Paella dish"
                    />
                    <CardContent sx={{ width: '70%', textAlign: 'start', m: '0px auto', }}>
                        <Typography sx={{ fontSize: '17px', fontFamily: 'Jost', my: 4 }}>
                            CHANGE, AS YOUR NEEDS EVOLVE
                        </Typography>
                        <Typography sx={{ fontSize: '15px', fontFamily: 'Jost', opacity: '0.9', my: 4 }}>
                            Keep things flexible and change your furniture as your needs change.
                        </Typography>
                        <Typography sx={{
                            background: 'white',
                            color: 'mediumblue',
                            fontSize: '15px',
                            fontFamily: 'Jost',
                            opacity: '0.9',
                            my: 4,
                            cursor: 'pointer'
                        }}
                            onClick={() => setValue('categories')}
                        >
                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
            </Box>


        </>
    )
}
