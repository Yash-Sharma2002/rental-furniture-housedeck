import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoginContext } from '../../../context/Context'
import { CollectionImgData, ProductsImgData } from '../../../constants/data';

export default function Categories() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} label="Products" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} label="Collections" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ProductTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CollectionTab />
                </TabPanel>
            </Box>
        </>
    )
}

function ProductTab() {
    const { toTitle } = React.useContext(LoginContext)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{
                width: '95%',
                m: '0px auto',
                overflowX: 'scroll'
            }}>
                <Box sx={{ mt: -2 }}>
                    <Tabs value={value} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto" >
                        {
                            ProductsImgData.map((data, idx) => {
                                return (
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} label={toTitle(data.name)} {...a11yProps(idx)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={value}>
                {value} not found
            </TabPanel>
        </>
    )
}

function CollectionTab() {
    const { toTitle } = React.useContext(LoginContext)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{
                width: '95%',
                m: '0px auto',
                overflowX: 'scroll'
            }}>
                <Box sx={{ mt: -2 }}>
                    <Tabs value={value} onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto" >
                        {
                            CollectionImgData.map((data, idx) => {
                                return (
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} label={toTitle(data.name)} {...a11yProps(idx)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>
            
            <TabPanel value={value} index={value}>
                {value} not found
            </TabPanel>
        </>
    )
}


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