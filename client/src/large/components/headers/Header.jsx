import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PercentIcon from '@mui/icons-material/Percent';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from '../search/Search';
import Login from '../login/Login';
import { LoginContext } from '../../../context/Context'
import SearchIcon from '@mui/icons-material/Search'
import City from '../drawer/City';
import { CatalogHelper } from '../helper/Header';

const Header = ({ ifOtherHeader = false }) => {
    const { userData, isLogin, decrypt } = React.useContext(LoginContext)
    const [open, setOpen] = React.useState(false);
    const [display, setDisplay] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'mediumblue', boxShadow: '0px 2px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)' }}>
            <Container maxWidth="4000px">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', m: '0px auto' }}>

                    <Link href="/">
                        <img src={require("../../../assets/logos/houseDeck_copy1.png")} style={{ width: '150px' }} alt="Furnitures By HouseDeck" />
                    </Link>
                    {
                        ifOtherHeader && display ?
                            <Search />
                            :
                            <>
                                {
                                    ifOtherHeader ?
                                        null :
                                        <Search />
                                }
                            </>
                    }
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        {
                            ifOtherHeader && !display ?
                                <>
                                    <CatalogHelper />

                                </>
                                :
                                null
                        }

                        {
                            ifOtherHeader ?
                                <Box sx={{
                                    minWidth: '70px', m: '0px auto', textAlign: 'center', cursor: 'pointer', height: "64px", lineHeight: '78px', borderLeft: "1px solid #eee",
                                    '&:hover': {
                                        background: '#eee'
                                    }
                                }}
                                    onClick={() => setDisplay(!display)}>
                                    <SearchIcon sx={{ fontSize: '25px' }} />
                                </Box>
                                : null
                        }
                        <Box sx={{
                            minWidth: '70px', m: '0px auto', textAlign: 'center', cursor: 'pointer', height: "64px", lineHeight: '78px', borderRight: "1px solid #eee", borderLeft: "1px solid #eee",
                            '&:hover': {
                                background: '#eee'
                            }
                        }}>
                            <PercentIcon sx={{ fontSize: '25px' }} />
                        </Box>


                        <Box
                            onClick={isLogin ? null : handleClickOpen}
                            sx={{
                                minWidth: '70px', m: '0px auto', textAlign: 'center', cursor: 'pointer', height: "64px", lineHeight: '78px', borderRight: "1px solid #eee",
                                '&:hover': {
                                    background: '#eee'
                                }
                            }}>
                            {
                                isLogin ?
                                    <Box sx={{
                                        width: '130px', m: '0px auto', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: "1px solid #eee", height: "64px",
                                        '&:hover': {
                                            background: '#eee'
                                        }
                                    }}>
                                        <AccountCircleOutlinedIcon sx={{ fontSize: '25px' }} />
                                        <Typography sx={{ fontFamily: 'Jost', ml: 1 }}>
                                            {
                                                decrypt(userData.USERDATA_AS_USERNAME)
                                            }
                                        </Typography>
                                    </Box>
                                    :
                                    <AccountCircleOutlinedIcon sx={{ fontSize: '25px' }} />
                            }
                        </Box>


                        <Box sx={{
                            minWidth: '70px', m: '0px auto', textAlign: 'center', cursor: 'pointer', height: "64px", lineHeight: '78px', borderRight: "1px solid #eee",
                            '&:hover': {
                                background: '#eee'
                            }
                        }}>
                            <ShoppingCartIcon sx={{ fontSize: '25px', transform: 'rotateY(180deg)' }} />
                        </Box>


                        <City />

                    </Box>

                    <Login open={open} setOpen={setOpen} />
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;
