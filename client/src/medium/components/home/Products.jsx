import React from 'react'
import { Box, Typography,Link } from '@mui/material'
import { CollectionImgData, ProductsImgData } from '../../../constants/data'

export default function Products() {
    return (
        <>

            {/* products  */}
            <Typography sx={{ fontSize: '20px', fontFamily: 'Jost', mt: 4 }}>Explore Products</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '95%',
                m: '0px auto',
                mt: 3
            }}>
                {
                    ProductsImgData.map((data, index) => {
                        return (
                            <Link href={`type=categories&package=products&tag=${data.name.replace(/ /, "_")}`} key={index} sx={{
                                padding: '20px',
                                boxShadow: 1,
                                height: '100px',
                                width: '80px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                textDecoration: 'none',
                                m: '7px'
                            }}>
                                <img src={data.img} alt=""  />
                                <Typography sx={{
                                    fontFamily: 'Jost', fontSize: '14px', background: 'white',
                                    color: 'mediumblue',
                                }}>
                                    {data.name.toUpperCase()}
                                </Typography>
                            </Link>
                        )
                    })
                }
            </Box>

            {/* Collections  */}
            <Typography sx={{ fontSize: '20px', fontFamily: 'Jost', mt: 4 }}>Browse Collections</Typography>
            <Box sx={{
                width: '95%',
                m: '0px auto',
                overflowX:'scroll'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 3
                }}>
                    {
                        CollectionImgData.map((data, index) => {
                            return (
                                <Link href={`type=categories&package=collections&tag=${data.name.replace(/ /, "_")}`} key={index} sx={{
                                    padding: '20px',
                                    boxShadow: 1,
                                    height: '100px',
                                    width: '80px',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    m: '7px'
                                }}>
                                    <img src={data.img} alt=""  />
                                    <Typography sx={{
                                        fontFamily: 'Jost', fontSize: '14px', background: 'white',
                                        color: 'mediumblue',
                                    }}>
                                        {data.name.toUpperCase()}
                                    </Typography>
                                </Link>
                            )
                        })
                    }
                </Box>
            </Box>
        </>
    )
}
