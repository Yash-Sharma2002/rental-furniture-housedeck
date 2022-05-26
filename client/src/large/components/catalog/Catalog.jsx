import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Essentials from "../../../assets/collections/ic-essentials.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Appliances from '../../../assets/products/ic-appliances.svg'
import Storage_Combos from '../../../assets/collections/ic-storage.svg'
import { CollectionImgData, ProductsImgData } from '../../../constants/data';
import { Button } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function Catalog() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ border: 1, borderColor: 'divider' }}>
                    <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="PRODUCTS" {...a11yProps(0)} />
                        <Tab label="COLLECTIONS" {...a11yProps(1)} />
                        <Tab label="BUILD YOUR OWN" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '150px',
                        width: '85%',
                        m: "0px auto"
                    }}>

                        {
                            ProductsImgData.map((data, idx) => {
                                return (
                                    <Box key={idx} sx={{
                                        padding: '20px',
                                        boxShadow: 1,
                                        height:'100px',
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
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        height: '150px',
                        textAlign: 'center',
                        width: '80%',
                        m: "0px auto"
                    }}>

                        {
                            CollectionImgData.map((data, idx) => {
                                return (
                                    <Box key={idx} sx={{
                                        padding: '20px',
                                        boxShadow: 1,
                                        height:'100px',
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
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '85%',
                        m: "0px auto",
                        height: '150px'
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
                </TabPanel>
            </Box>
        </>
    )
}


