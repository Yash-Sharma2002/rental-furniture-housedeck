import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { CitiesImg } from '../../../constants/data';
import SearchIcon from '@mui/icons-material/Search'
import { LoginContext } from '../../../context/Context';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        // width: '600px'
    },
}));

export default function City() {
    const fullScreen = useMediaQuery('(max-width:1160px)');

    const { city, handleData } = React.useContext(LoginContext)
    const [query, SetQuery] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [data, setData] = React.useState(null)

    const Selector = (e) => {
        SetQuery(e.target.value.toLowerCase())
        const filteredData = CitiesImg.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value)
        })
        setData(filteredData)
    }
    const handleClose = () => {
        SetQuery('')
        setData(null)
        setOpen(false)
    };

    return (
        <div>
            <>
                <Box onClick={() => setOpen(true)} sx={{
                    width: '130px', m: '0px auto', textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: "1px solid mediumblue", p: 1, color: 'mediumblue',
                }}>
                    <LocationOnIcon sx={{ fontSize: '25px', transform: 'rotateY(180deg)', ml: -1 }} />
                    <Typography sx={{ fontFamily: 'Jost', fontWeight: '500' }}>
                        {city ? city : 'Your City'}
                    </Typography>
                </Box>
                <BootstrapDialog
                    fullScreen={fullScreen}
                    onClose={handleClose}
                    open={open}
                    maxWidth={false}
                >
                    <Box sx={{ textAlign: 'right' }} >
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer',mr:1,mt:1 }} />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ textAlign: 'center', m: 7 }}>
                            <img src={require("../../../assets/logos/houseDeck_copy1.png")} style={{ width: '200px' }} alt="Furnitures By HouseDeck" />
                        </Box>
                        <Box sx={{
                            textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '80%', m: '0px auto', height: '64px'
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
                        <Box onClick={handleClose} sx={{display: 'flex', flexWrap: 'wrap', padding: '15px', m: '10px auto', alignItems:"center", justifyContent: 'center' }}>
                            {
                                data ?
                                    <>
                                        {data.map((data, index) =>
                                            <Button key={index} sx={{ width: '20%', display: 'block', color: 'mediumblue', textTransform: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', boxShadow: 3, m:1}}
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
                                            <Button key={index} sx={{ width: '20%', display: 'block', color: 'mediumblue', textTransform: 'none', textAlign: 'center', padding: '20px 0px', cursor: 'pointer', boxShadow: 3, m:1}}
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
                </BootstrapDialog>
            </>
        </div>
    );
}
