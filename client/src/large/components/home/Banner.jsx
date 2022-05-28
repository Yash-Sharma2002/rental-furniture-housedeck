import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Menu } from '@mui/material'
import { LoginContext } from '../../../context/Context'
import { ProductsImgData } from '../../../constants/data'

export default function Banner() {
    const { city } = React.useContext(LoginContext)
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Typography sx={{ fontSize: '18px', mt: 4, fontFamily: 'Jost', opacity: '0.9', textAlign: 'center' }}>Rent Furniture & Appliances in {city}</Typography>
            <Box sx={{ textAlign: 'center',}}>
                <img src={require("../../../assets/banner/banner.webp")} alt="Banner" style={{ width: '85%', boxShadow: '0px 2px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 2px 9px 0px rgb(0 0 0 / 12%)', borderRadius: 6, margin: "0px auto", marginTop: '10px' }} />
            </Box>
            <Typography sx={{ fontSize: '20px', letterSpacing: "5px", mt: 4, fontFamily: 'Jost', opacity: '0.9', textAlign: 'center' }}>WHY YOU SHOULD RENT!</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'baseline',
                mt: 5
            }}>
                <Card sx={{ maxWidth: 445 }}>
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
                            onMouseEnter={handleClick}>

                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 445 }}>
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
                            onMouseEnter={handleClick}>
                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 445 }}>
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
                            onMouseEnter={handleClick}>
                            Explore Products
                        </Typography>
                    </CardContent>
                </Card>
            </Box>


            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: -3, }}
                onClose={handleClose}
            >
                <Box sx={{
                    height: '150px',
                    width: window.innerWidth,
                }}
                    onMouseLeave={() => handleClose()}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '150px',
                        width: '85%',
                        m: "0px auto"
                    }}
                    >
                        {
                            ProductsImgData.map((data, idx) => {
                                return (
                                    <Box key={idx} sx={{
                                        padding: '20px',
                                        height: '100px',
                                        boxShadow: 1,
                                        cursor: 'pointer',
                                        transition: '.2s all',
                                        '&:hover': {
                                            transform: 'scale(1.1)',
                                        }
                                    }}>
                                        <img src={data.img} alt="" srcset="" />
                                        <Typography sx={{
                                            fontFamily: 'Jost', fontSize: '14px', background: 'white',
                                            color: 'mediumblue',
                                        }}>
                                            {data.name.toUpperCase()}
                                        </Typography>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Menu>
        </>
    )
}
