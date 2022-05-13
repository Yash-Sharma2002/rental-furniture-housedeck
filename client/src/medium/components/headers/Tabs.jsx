import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../../css/globalStyleOverrides.css'


function TabPanel(props) {
    const { children, value, change, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: change ? '2px 3px' : 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function BottomTabs() {
    const [value, setValue] = React.useState(0);
    // const [open, setOpen] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <TabPanel value={value} index={0}>
                boom0
            </TabPanel>

            <TabPanel value={value} index={1}>
                boom1
            </TabPanel>

            <TabPanel value={value} index={2}>
                boom2
            </TabPanel>
            <TabPanel value={value} index={3}>
                boom3
            </TabPanel>
            <Tabs  onChange={handleChange} value={value} >
                <Tab sx={{ width: "25%", }} icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
                <Tab sx={{ width: "25%", }} icon={<CategoryIcon />} label="Categories" {...a11yProps(1)} />
                <Tab sx={{ width: "25%", }} icon={<SearchIcon />} label="Search" {...a11yProps(2)} />
                <Tab sx={{ width: "25%", }} icon={<AccountCircleIcon />} label="Me" {...a11yProps(3)} />
            </Tabs>

        </>
    );
}
