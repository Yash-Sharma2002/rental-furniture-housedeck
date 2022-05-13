import React from 'react'
import '../../../css/search.css'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
    const [query, SetQuery] = React.useState('')
    return (
        <>
            <Box sx={{
                textAlign: 'center', display: "flex", justifyContent: 'center', alignItems: 'center', width: '40%', m: '0px auto', height: '64px',
                '&:hover': {
                    background: '#eee'
                }
            }}>
                <input
                    placeholder='What are you Searching for?'
                    type='text'
                    value={query}
                    onChange={e => SetQuery(e.target.value)}
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

            {/* when someone search comment out this below code */}

            {/* {
        search ?
            <Box sx={{ position: 'absolute', zIndex: 1000, width: '40%', background: 'white', m: '0px auto', left: '50%', transform: 'translate(-50%)', border: '1px solid black', mt: 1 }}>
                {data.map((datas, index) => {
                    return (
                        <Link key={index} href={`/other=employer=${datas.User_id}`} sx={{
                            textDecoration: 'none',
                        }}>
                            <Box sx={{
                                p: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: 'mediumblue', background: 'white',
                                '&:hover': {
                                    color: "white",
                                    background: 'mediumblue'
                                }
                            }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '700', fontFamily: 'Fredoka', color: 'inherit' }}>{toTitle(search)}</Typography>
                                <Typography sx={{ fontSize: '16px', fontWeight: '500', fontFamily: 'Fredoka', color: 'inherit', }}>{datas.Organization_Name.slice(search.length,)}</Typography>
                            </Box>
                        </Link>
                    )
                })}
            </Box>
            : null
    } */}
        </>
    )
}