import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../../css/globalStyleOverrides.css'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LoginMedium from '../login/Login';
import { LoginContext } from '../../../context/Context';
import SearchMedium from '../search/Search';
import City from '../dialogs/City';
import Products from '../home/Products';
import HeaderMedium from './Header'
import Banner from '../home/Banner';
import Categories from '../catalog/Categories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function BottomTabs() {
    const { userData, isLogin, decrypt } = React.useContext(LoginContext)
    const navigate = useNavigate()
    const { type, packages, tag} = useParams()
    const [value, setValue] = React.useState(type ? type : 'home');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirect = (name) => {
        navigate(`/${name}`)
    }

    return (
        <>
            <Box sx={{ pb: 7 }} >

                {
                    value === 'home' ?
                        <Box sx={{ mt: '4.3rem' }}>
                            <HeaderMedium />
                            <City />
                            <Products />
                            <Banner setValue={setValue} />
                        </Box>
                        : null
                }
                {
                    value === 'categories' ?
                        <Box>
                            <Categories category={packages} subCategory={tag} />
                        </Box>
                        : null
                }
                {
                    value === 'search' ?
                        <Box sx={{ mt: '5rem' }}>
                            <SearchMedium />
                        </Box>
                        : null
                }

                {
                    value === 'cart' ?
                        <Box>
                            This is empty now
                        </Box>
                        : null
                }

                {
                    value === 'me' ?
                        <Box sx={{ mt: '7rem' }}>
                            {
                                isLogin ?
                                    <Box>
                                        Name - {decrypt(userData.USERDATA_AS_USERNAME)}
                                        Email - {decrypt(userData.USERDATA_AS_EMAIL)}
                                        Number - {decrypt(userData.USERDATA_AS_NUMBER)}
                                    </Box>
                                    :
                                    <LoginMedium />
                            }
                        </Box>
                        : null
                }
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                    >
                        <BottomNavigationAction sx={{ width: '20%' }} onClick={() => redirect('home')} value='home' label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction sx={{ width: '20%' }} onClick={() => redirect('categories')} value='categories' label="Categories" icon={<CategoryIcon />} />
                        <BottomNavigationAction sx={{ width: '20%' }} onClick={() => redirect('search')} value='search' label="Search" icon={<SearchIcon />} />
                        <BottomNavigationAction sx={{ width: '20%' }} onClick={() => redirect('cart')} value='cart' label="Cart" icon={<ShoppingCartIcon sx={{ transform: 'rotateY(180deg)' }} />} />
                        <BottomNavigationAction sx={{ width: '20%' }} onClick={() => redirect('me')} value='me' label="Me" icon={<AccountCircleIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    );
}
