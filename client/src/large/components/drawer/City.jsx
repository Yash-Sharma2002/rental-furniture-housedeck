import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import { CitiesImg } from '../../../constants/data';
import SearchIcon from '@mui/icons-material/Search'
import { LoginContext } from '../../../context/Context';

export default function City() {
    const { city, handleData } = React.useContext(LoginContext)
    const [query, SetQuery] = React.useState('')
    const [data, setData] = React.useState(null)

    const Selector = (e) => {
        SetQuery(e.target.value.toLowerCase())
        const filteredData = CitiesImg.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value)
        })
        setData(filteredData)
    }
    const [state, setState] = React.useState({
        'right': false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        SetQuery('')
        setData(null)
        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <>
                <Box onClick={toggleDrawer('right', true)} sx={{
                    width: '130px', m: '0px auto', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: "1px solid #eee", height: "64px",
                    '&:hover': {
                        background: '#eee'
                    }
                }}>
                    <LocationOnIcon sx={{ fontSize: '25px', transform: 'rotateY(180deg)' }} />
                    <Typography sx={{ fontFamily: 'Jost', fontWeight: '500' }}>
                        {city ? city : 'Your City'}
                    </Typography>
                </Box>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
                >
                    <Box sx={{ width: "100vh", overflow: 'hidden' }}>
                        <Box sx={{ textAlign: 'center', m: 7 }}>
                            <img src={require("../../../assets/logos/houseDeck_copy1.png")} style={{ width: '200px' }} alt="Furnitures By HouseDeck" />
                        </Box>
                        <Box sx={{
                            textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '80%', m: '0px auto', height: '64px',
                            '&:hover': {
                                background: '#eee'
                            }
                        }}>
                            <input
                                placeholder='Search Your City'
                                type='text'
                                value={query}
                                onChange={e => Selector(e)}
                                style={{
                                    borderTop: "1px solid mediumblue",
                                    borderLeft: "1px solid mediumblue",
                                    borderBottom: "1px solid mediumblue",
                                    borderRight: "none",
                                    userSelect: 'none',
                                    width: '85%',
                                    height: '35px',
                                    fontSize: '14px',
                                    paddingLeft: '20px',
                                    color: 'mediumblue',
                                    fontFamily: "Jost",
                                }} />
                            <SearchIcon onClick={Selector} sx={{ background: 'mediumblue', color: 'white', cursor: 'pointer', px: 1, height: '39.4px', }} />
                        </Box>
                        <Box onClick={toggleDrawer('right', false)} sx={{ display: 'flex', flexWrap: 'wrap', padding: '15px', m: '10px auto', textAlign: 'center', justifyContent: 'center' }}>
                            {
                                data ?
                                    <>
                                        {data.map((data, index) =>
                                            <Button key={index} sx={{ width: '20%', display: 'block', color: 'mediumblue', textTransform: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', boxShadow: 3, mr: 3, mb: 3 }}
                                                onClick={() => handleData(data.name)}
                                            >
                                                <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                                                <Typography sx={{ fontSize: '14px', fontFamily: 'Jost', }}>{data.name}</Typography>
                                            </Button>
                                        )}
                                    </>
                                    :
                                    <>
                                        {CitiesImg.map((data, index) =>
                                            <Button key={index} sx={{ width: '20%', display: 'block', color: 'mediumblue', textTransform: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', boxShadow: 3, mr: 3, mb: 3 }}
                                                onClick={() => handleData(data.name)}
                                            >
                                                <img style={{ width: '50px', height: '50px' }} src={data.url} alt={data.id} />
                                                <Typography sx={{ fontSize: '14px', fontFamily: 'Jost', }}>{data.name}</Typography>
                                            </Button>
                                        )}
                                    </>
                            }
                        </Box>
                    </Box>
                </SwipeableDrawer>
            </>
        </div>
    );
}
