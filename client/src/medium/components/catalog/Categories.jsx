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
import { useNavigate } from 'react-router-dom';

// 0 => Not Available
// 1 => Coming Soon
// 2 => Data is available 


export default function Categories({ category = 'products', subCategory = 'electronics' }) {
    const [value, setValue] = React.useState(category);
    const navigate = useNavigate()

    const { toTitle, city } = React.useContext(LoginContext)
    const editedCity = city.toLowerCase().replace(/ /, "_")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const redirect = (name, subName) => {
        navigate(`/categories/${name}/${subName}`)
        window.location.reload()
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} onClick={() => redirect('products', 'electronics')} value='products' label="Products" />
                        <Tab sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} onClick={() => redirect('collections', 'binge_watch_collections')} value='collections' label="Collections" />
                    </Tabs>
                </Box>
                <TabPanel value='products' name={category}>
                    <ProductTab toTitle={toTitle} editedCity={editedCity} subCategory={subCategory} />
                </TabPanel>
                <TabPanel value='collections' name={category}>
                    <CollectionTab toTitle={toTitle} editedCity={editedCity} subCategory={subCategory} />
                </TabPanel>
            </Box>
        </>
    )
}

function ProductTab({ toTitle, editedCity, subCategory }) {
    const [value, setValue] = React.useState(subCategory);
    const [availabilty, setAvailability] = React.useState(0)
    const packages = 'products'
    const navigate = useNavigate()

    const redirect = (name) => {
        navigate(name)
    }


    const getAvailableData = React.useCallback(() => {
        if (Object.keys(AvailabilityData).includes(editedCity)) {
            const cityData = AvailabilityData[editedCity]
            if (Object.keys(cityData).includes(packages)) {
                const packageData = cityData[packages]
                if (packageData['available'].includes(subCategory.replace(/_/g, " "))) {
                    setAvailability(2)
                    return
                }
                else if (packageData['not_available'].includes(subCategory.replace(/_/g, " "))) {
                    setAvailability(1)
                    return
                }
                else {
                    console.log('wrong url');
                    // Can Redirect to 404 not found
                    // navigate('/') 
                }
            }
            return
        }
        else {
            // very less chance of this happening
            setAvailability(0)
            return
        }
    },
        [packages, subCategory, editedCity,],
    );


    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} onClick={() => redirect(data.url)} value={data.name.replace(/ /g, "_")} label={toTitle(data.name)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={value} name={subCategory} >
                <Box sx={{ display: availabilty === 0 ? 'block' : 'none' }}>
                    <NotAvalable />
                </Box>
                <Box sx={{ display: availabilty === 1 ? 'block' : 'none' }}>
                    <Upcoming />
                </Box>
                <Box sx={{ display: availabilty === 2 ? 'block' : 'none' }}>
                    It is here
                </Box>
                {toTitle(subCategory.replace(/_/g, " "))}
                <br />
                {editedCity}
                <br />
                {availabilty}
                <br />
                {packages}
            </TabPanel>
        </>
    )
}

function CollectionTab({ toTitle, editedCity, subCategory }) {
    const [value, setValue] = React.useState(subCategory);
    const [availabilty, setAvailability] = React.useState(0)
    const packages = 'collections'

    const navigate = useNavigate()

    const redirect = (name) => {
        navigate(name)
    }


    const getAvailableData = React.useCallback(() => {
        if (Object.keys(AvailabilityData).includes(editedCity)) {
            const cityData = AvailabilityData[editedCity]
            if (Object.keys(cityData).includes(packages)) {
                const packageData = cityData[packages]
                if (packageData['available'].includes(subCategory.replace(/_/g, " "))) {
                    setAvailability(2)
                    return
                }
                else if (packageData['not_available'].includes(subCategory.replace(/_/g, " "))) {
                    setAvailability(1)
                    return
                }
                else {
                    console.log('wrong url');
                    // Can Redirect to 404 not found
                    // navigate('/') 
                }
            }
            return
        }
        else {
            // very less chance of this happening
            setAvailability(0)
            return
        }
    },
        [packages, subCategory, editedCity,],
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                                    <Tab key={idx} sx={{ textTransform: 'none', fontFamily: "Jost", fontSize: '18px' }} onClick={() => redirect(data.url)} value={data.name.replace(/ /g, "_")} label={toTitle(data.name)} />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </Box>

            <TabPanel value={value} name={subCategory}>
                <Box sx={{ display: availabilty === 0 ? 'block' : 'none' }}>
                    <NotAvalable />
                </Box>
                <Box sx={{ display: availabilty === 1 ? 'block' : 'none' }}>
                    <Upcoming />
                </Box>
                <Box sx={{ display: availabilty === 2 ? 'block' : 'none' }}>
                    It is here
                </Box>
                {toTitle(subCategory.replace(/_/g, " "))}
                <br />
                {editedCity}
                <br />
                {availabilty}
                <br />
                {packages}
            </TabPanel>
        </>
    )
}


function TabPanel(props) {
    const { children, value, name, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== name}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
        </div>
    );
}



TabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};