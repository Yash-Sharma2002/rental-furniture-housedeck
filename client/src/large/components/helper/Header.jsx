import React from 'react'
import { Box, Typography, Menu, Button, Divider } from '@mui/material';
import { CollectionImgData, ProductsImgData } from '../../../constants/data';

import Essentials from "../../../assets/collections/ic-essentials.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Appliances from '../../../assets/products/ic-appliances.svg'
import Storage_Combos from '../../../assets/collections/ic-storage.svg'

// Main function 
export function CatalogHelper() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>

                <Products />
                <Collections />
                <BuildYourOwn />
            </Box>
        </>
    )
}

export function Products() {
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
            <Box onMouseEnter={handleClick} sx={{
                px: 3, height: "64px", textAlign: 'center', cursor: 'pointer', background: open ? '#eee' : 'unset', borderRight: "1px solid #eee", borderLeft: "1px solid #eee",
                '&:hover': {
                    background: '#eee'
                }
            }}>
                <Typography sx={{ fontFamily: 'Jost', marginTop: '18px', }}>
                    Products
                </Typography>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: 3, }}
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




export function Collections() {
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
            <Box onMouseEnter={handleClick} sx={{
                px: 3, height: "64px", textAlign: 'center', cursor: 'pointer', background: open ? '#eee' : 'unset',
                '&:hover': {
                    background: '#eee'
                }
            }}>
                <Typography sx={{ fontFamily: 'Jost', marginTop: '18px', }}>
                    Collections
                </Typography>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: 3, }}
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
                            CollectionImgData.map((data, idx) => {
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



export function BuildYourOwn() {
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
            <Box onMouseEnter={handleClick} sx={{
                px: 3, height: "64px", textAlign: 'center', cursor: 'pointer', background: open ? '#eee' : 'unset', borderLeft: "1px solid #eee",
                '&:hover': {
                    background: '#eee'
                }
            }}>
                <Typography sx={{ fontFamily: 'Jost', marginTop: '18px', }}>
                    Build Your Own
                </Typography>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{ mt: 3, }}
                onClose={handleClose}
            >
                <Box sx={{
                    height: '210px',
                    width: window.innerWidth,
                }}
                    onMouseLeave={() => handleClose()}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '85%',
                        m: "0px auto",
                        height: '150px',
                        py: 4
                    }}>
                        <Box sx={{ width: '25%' }}>
                            <Typography sx={{ textAlign: 'start', color: 'mediumblue', fontSize: "16px", fontFamily: "Jost" }}>Unleash the designer in you and create a package that suits your needs.</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem light={false} />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            width: "60%"
                        }}>
                            <Box sx={{
                                width: '33%',
                                transition: '.2s all',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                }
                            }}>
                                <img src={Essentials} style={{ padding: '20px', borderRadius: '50%', background: '#eee' }} alt="" />
                                <Typography sx={{ fontFamily: 'Jost', opacity: "0.8", mt: 3 }}>
                                    Choose a furniture
                                </Typography>
                            </Box>
                            <ArrowForwardIcon />
                            <Box sx={{
                                width: '33%',
                                transition: '.2s all',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                }
                            }}>
                                <img src={Storage_Combos} style={{ padding: '20px', borderRadius: '50%', background: '#eee' }} alt="" />
                                <Typography sx={{ fontFamily: 'Jost', opacity: "0.8", mt: 3 }}>
                                    Add soft-furnishings
                                </Typography>
                            </Box>
                            <ArrowForwardIcon />

                            <Box sx={{
                                width: '33%',
                                transition: '.2s all',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                }
                            }}>
                                <img src={Appliances} style={{ padding: '20px', borderRadius: '50%', background: '#eee' }} alt="" />
                                <Typography sx={{ fontFamily: 'Jost', opacity: "0.8", mt: 3 }}>
                                    Add Appliances
                                </Typography>
                            </Box>
                        </Box>
                        <Button variant='outlined' sx={{
                            boxShadow: 0,
                            background: 'mediumblue',
                            color: 'white',
                            textTransform: 'none',
                            fontSize: '14px',
                            borderRadius: 5,
                            '&:hover': {
                                background: 'white',
                                color: 'mediumblue',
                            }
                        }}>
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Menu>
        </>
    )
}

