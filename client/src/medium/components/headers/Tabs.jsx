import * as React from 'react';
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



export default function BottomTabs() {
    const { userData, isLogin, decrypt } = React.useContext(LoginContext)
    const [value, setValue] = React.useState('home');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ pb: 7 }} >

                {
                    value === 'home' ?
                        <Box sx={{ mt: '4.3rem' }}>
                            <City />
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
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: "100%" }} elevation={3}>
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                    >
                        <BottomNavigationAction sx={{ width: '25%' }} value='home' label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction sx={{ width: '25%' }} value='categories' label="Categories" icon={<CategoryIcon />} />
                        <BottomNavigationAction sx={{ width: '25%' }} value='search' label="Search" icon={<SearchIcon />} />
                        <BottomNavigationAction sx={{ width: '25%' }} value='me' label="Me" icon={<AccountCircleIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </>
    );
}
