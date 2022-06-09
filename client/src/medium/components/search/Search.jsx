import React from 'react'
import '../../../css/search.css'
import { Box, Link, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { LoginContext } from '../../../context/Context'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { SearchData } from '../../../constants/data'

export default function SearchMedium({ placeholder = 'What are you Searching for?' }) {
    const [query, SetQuery] = React.useState('')
    const { toTitle } = React.useContext(LoginContext)
    const [data, setData] = React.useState(null)
    const handleChange = (e) => {
        SetQuery(e.target.value)
        if (e.target.value.length === 0) return setData(null)
        const filterData = SearchData.filter((data) => {
            return data.name.includes(e.target.value.toLowerCase())
        })
        setData(filterData);
    }

    return (
        <>
            <Box sx={{
                textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '80%', m: '0px auto', height: '64px',
            }}>
                <input
                    placeholder={placeholder}
                    type='text'
                    value={query}
                    onChange={e => handleChange(e)}
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
                <SearchIcon sx={{ background: 'mediumblue', color: 'white', cursor: 'pointer', px: 1, height: '39.4px', }} />
            </Box>


            {
                data ?
                    <Box>
                        {
                            data.map((data, idx) => {
                                return (
                                    <Link href={`/${data.type}/${data.package}/${data.name.replace(/ /g, " ")}`} key={idx} sx={{
                                        textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', m: '0px auto', textDecoration: 'none', p: 1, color: 'mediumblue'
                                    }} >
                                        <Typography sx={{ fontFamily: "Jost", fontWeight: "800" }}>{toTitle(data.name.slice(0, query.length))}</Typography>
                                        <Typography sx={{ fontFamily: "Jost", }}>{data.name.slice(query.length,)}</Typography>
                                        <ArrowRightAltIcon />
                                        <Typography>{toTitle(data.package)}</Typography>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                    :
                    null
            }
        </>
    )
}