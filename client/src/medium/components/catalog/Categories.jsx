import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoginContext } from '../../../context/Context'
import { AvailabilityData, CollectionImgData, ProductsImgData } from '../../../constants/data';
import Upcoming from '../../../large/components/overall/Upcoming';
import NotAvalable from '../../../large/components/overall/NotAvalable';

// 0 => Not Available
// 1 => Coming Soon
// 2 => Data is available 


export default function Categories({ category = 'products', subCategory = 'electronics' }) {
    const [value, setValue] = React.useState(0);

    const { toTitle, city } = React.useContext(LoginContext)
    const editedCity = city.toLowerCase().replace(/ /, "_")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }}  label="Products" {...allyProps(0)}   />
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }}  label="Collections" {...allyProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ProductTab toTitle={toTitle} editedCity={editedCity} subCategory={subCategory} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CollectionTab toTitle={toTitle} editedCity={editedCity} subCategory={subCategory} />
                </TabPanel>
            </Box>
        </>
    )
}

function ProductTab({ toTitle, editedCity,subCategory }) {
    const [value, setValue] = React.useState(0);
    const [availabilty, setAvailability] = React.useState(0)
    const [tag, setTags] = React.useState(ProductsImgData[0].name)
    const packages = 'products'


    const getAvailableData = React.useCallback(() => {
        if (Object.keys(AvailabilityData).includes(editedCity)) {
            const cityData = AvailabilityData[editedCity]
            if (Object.keys(cityData).includes(packages)) {
                const packageData = cityData[packages]
                if (packageData['available'].includes(tag.replace(/_/, " "))) {
                    setAvailability(2)
                    return
                }
                else if (packageData['not_available'].includes(tag.replace(/_/, " "))) {
                    setAvailability(1)
                    return
                }
                else {
                    console.log('wrong url');
                    // Can Redirect to 404 not found
                    // navigate('/') 
                }
            }
        }
        else {
            // very less chance of this happening
            setAvailability(0)
            return
        }
    },
        [tag, editedCity,],
    );



    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTags(ProductsImgData[newValue].name)
        getAvailableData()
    };

    React.useEffect(() => {
        getAvailableData()
    }, [getAvailableData])


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
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} label={toTitle(data.name)}  {...allyProps(idx)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} index={value}>
                <Box sx={{ display: availabilty === 0 ? 'block' : 'none' }}>
                    <NotAvalable />
                </Box>
                <Box sx={{ display: availabilty === 1 ? 'block' : 'none' }}>
                    <Upcoming />
                </Box>
                <Box sx={{ display: availabilty === 2 ? 'block' : 'none' }}>
                    It is here
                </Box>

                {
                    toTitle(ProductsImgData[value].name)
                }
                <br />
                {
                    editedCity
                }
                <br />
                {
                    availabilty
                }
                <br />
                {
                    packages
                }
            </TabPanel>
        </>
    )
}

function CollectionTab({ toTitle, editedCity,subCategory }) {
    const [value, setValue] = React.useState(0);
    const [availabilty, setAvailability] = React.useState(0)
    const [tag, setTags] = React.useState(CollectionImgData[0].name)
    const packages = 'collections'


    const getAvailableData = React.useCallback(() => {
        if (Object.keys(AvailabilityData).includes(editedCity)) {
            const cityData = AvailabilityData[editedCity]
            if (Object.keys(cityData).includes(packages)) {
                const packageData = cityData[packages]
                if (packageData['available'].includes(tag.replace(/_/, " "))) {
                    setAvailability(2)
                    return
                }
                else if (packageData['not_available'].includes(tag.replace(/_/, " "))) {
                    setAvailability(1)
                    return
                }
                else {
                    console.log('wrong url');
                    // Can Redirect to 404 not found
                    // navigate('/') 
                }
            }
        }
        else {
            // very less chance of this happening
            setAvailability(0)
            return
        }
    },
        [tag, editedCity,],
    );



    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTags(CollectionImgData[newValue].name)
        getAvailableData()
    };

    React.useEffect(() => {
        getAvailableData()
    }, [getAvailableData])


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
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }}  label={toTitle(data.name)}  {...allyProps(idx)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>

            <TabPanel value={value} index={value}>
                <Box sx={{ display: availabilty === 0 ? 'block' : 'none' }}>
                    <NotAvalable />
                </Box>
                <Box sx={{ display: availabilty === 1 ? 'block' : 'none' }}>
                    <Upcoming />
                </Box>
                <Box sx={{ display: availabilty === 2 ? 'block' : 'none' }}>
                    It is here
                </Box>

                {
                    toTitle(CollectionImgData[value].name)
                }
                <br />
                {
                    editedCity
                }
                <br />
                {
                    availabilty
                }
                <br />
                {
                    packages
                }
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

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

