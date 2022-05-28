import React from 'react'
import { useParams } from 'react-router-dom'
import { AvailabilityData } from '../../constants/data'
import { LoginContext } from '../../context/Context'
import Header from '../components/headers/Header'
import NotAvalable from '../components/overall/NotAvalable'
import Upcoming from '../components/overall/Upcoming'
import { Box,AppBar,Toolbar,Typography } from '@mui/material'

// 0 => Not Available
// 1 => Coming Soon
// 2 => Data is available 

export default function Packages() {
    const { city, toTitle } = React.useContext(LoginContext)
    const { packages, tag } = useParams()
    // const navigate = useNavigate()
    const [availabilty, setAvailability] = React.useState(0)
    const editedCity = city.toLowerCase().replace(/ /, "_")

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
                    setAvailability(0)
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
            setAvailability(1)
            return
        }
    },
        [packages, tag, editedCity,],
    );


    React.useEffect(() => {
        getAvailableData()
    }, [getAvailableData])

    return (
        <>
            <Header ifOtherHeader={true} />
            <div style={{ marginTop: '11rem' }}>

                {/* {
                    packages === 'collections' ? */}
                        <AppBar sx={{ mt: 8.1, height: "100px", background: "white", boxShadow: '0px 2px 0px -1px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)' }}>
                            <Toolbar sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                width: '90%',
                                m: '0px auto',

                            }}>

                                <Typography sx={{
                                    fontFamily: 'Jost', fontSize: '33px', background: 'white',
                                    color: 'mediumblue', cursor: 'pointer',mt:3
                                }}>
                                    {tag.replace(/_/," ").toUpperCase()}
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        {/* :
                        null
                } */}
                
                <Box sx={{ display: availabilty === 0 ? 'block' : 'none' }}>
                    <NotAvalable />
                </Box>
                <Box sx={{ display: availabilty === 1 ? 'block' : 'none' }}>
                    <Upcoming />
                </Box>
                <Box sx={{ display: availabilty === 2 ? 'block' : 'none' }}>
                    It is here
                </Box>
                {packages}
                {editedCity}
                {tag}
            </div>
            {availabilty}
        </>
    )
}
