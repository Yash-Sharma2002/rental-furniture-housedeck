import React from 'react'
import Catalog from '../components/catalog/Catalog'
import City from '../components/drawer/City'
import Header from '../components/headers/Header'
import Banner from '../components/home/Banner'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Zoom from '@mui/material/Zoom';
import { ProductsImgData } from '../../constants/data'

export default function Home() {
    return (
        <>
            <Header ifOtherHeader={false} />
            <ScrollTop >
                <AppBar sx={{ mt: 8.1,height:"37px",background:"white", boxShadow: '0px 2px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)' }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width:'90%',
                        m:'0px auto',
                        
                    }}>

                        {
                            ProductsImgData.map((data, index) => {
                                return (
                                    <Link href={data.url} key={index} sx={{textDecoration:'none'}}>
                                        <Typography sx={{
                                            fontFamily: 'Jost', fontSize: '14px', background: 'white',
                                            color: 'mediumblue',cursor:'pointer',mt:-3
                                        }}>
                                            {data.name.toUpperCase()}
                                        </Typography>
                                    </Link>
                                )
                            })
                        }
                    </Toolbar>
                </AppBar>
            </ScrollTop>
            <City />
            <Catalog />
            <Banner />
        </>
    )
}



function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor'
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box onClick={handleClick} role="presentation">
                {children}
            </Box>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
