import React from 'react'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../../../css/login.css'
import { LoginContext } from '../../../context/Context.jsx'
import { OTPSender } from '../../../api/OTPSender.js'
import { authenticateLogin, authenticateSignUp } from '../../../api/User';



const initialState = {
    Number: '',
    UserName: '',
    Email: '',
    OTP: '',
    RealOTP: '',
    ResendTime: 60
}

export default function LoginMedium() {

    const [data, setData] = React.useState(initialState)
    const { setMessage, setMessageType, setShow, encrypt } = React.useContext(LoginContext)
    const timeRef = React.useRef()
    const [display, setDisplay] = React.useState(0)
    var validRegexForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validRegexForUsername = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;




    async function NumberVerifier() {
        if (data.Number.length !== 10) {
            setMessage("Number is not Valid")
            setMessageType('error')
            setShow(true)
            return
        }
        clearInterval(timeRef.current);
        setData(prev => {
            return { ...prev, ResendTime: 60 }
        })
        const response = await OTPSender({ Number: `+91${data.Number}` })
        if (response) {
            setDisplay(1)
            setShow(true)
            setMessage('OTP sent')
            setMessageType('info')
            setData(prev => {
                return { ...prev, RealOTP: response }
            })
        }
        timeRef.current = setInterval(() => {
            setData(prev => {
                return { ...prev, ResendTime: parseInt(prev.ResendTime - 1) }
            })
        }, 1000);
    }

    if (data.ResendTime === 0) {
        clearInterval(timeRef.current)
    }


    const OTPVerifier = async () => {
        if (data.RealOTP === parseInt(data.OTP)) {
            setShow(true)
            setMessage('Number Verified')
            setMessageType('success')
            let response = await authenticateLogin({ Number: `+91${data.Number}` })
            if (response) {

                // ----------------info-------------------------
                // There are two ways to show the username 
                // 1 - By using window.location.reload(false) which refreshes the page and explicitly make Component to re-render and hence show the Username
                // 2 - By waiting for a while make header component re-render and makes Username visible but the minimum time is about 2-5 seconds which makes user thinks that he is not logged in 
                //     Hence user have to refresh the site expilicitly repeating step 1.
                //     Thats, why I am using Step-1 here. 

                window.location.reload(false)
                try {
                    localStorage.setItem('START_DATA', JSON.stringify({
                        USERDATA_AS_NUMBER: encrypt(response.Number),
                        USERDATA_AS_USERNAME: encrypt(response.Username),
                        USERDATA_AS_EMAIL: encrypt(response.Email),
                    }));
                    localStorage.setItem('INIT_DATA', JSON.stringify(true));
                } catch (err) {
                    return undefined;
                }
                return
            }
            else {
                setDisplay(2)
            }
        } else {
            setShow(true)
            setMessage('Entered OTP is incorrect')
            setMessageType('error')
        }
    }


    async function SignUp() {
        if (!data.Email.match(validRegexForEmail)) {
            setShow(true)
            setMessageType('error')
            setMessage("Invalid Email")
            return
        }
        if (!data.UserName.match(validRegexForUsername)) {
            setShow(true)
            setMessageType('error')
            setMessage("Username must be AlphaNumeric and only contains $ and _")
            return
        }
        const userData = {
            Number: `+91${data.Number}`,
            UserName: data.UserName,
            Email: data.Email
        }
        const response = await authenticateSignUp(userData)
        if (response) {
            localStorage.setItem('START_DATA', JSON.stringify({
                USERDATA_AS_NUMBER: encrypt(userData.Number),
                USERDATA_AS_USERNAME: encrypt(userData.UserName),
                USERDATA_AS_EMAIL: encrypt(userData.Email),
            }));
            localStorage.setItem('INIT_DATA', JSON.stringify(true));
            window.location.reload(false)
        }
    }


    return (
        <Box sx={{ textAlign: 'center' }} >
            <Box>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', marginTop: 3, color: 'mediumblue', fontFamily: "Jost" }}>Enter phone to continue</Typography>
                <Box sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid mediumblue', width: '80%', m: '0px auto', my: 2, textAlign: 'center',
                }}>
                    <Typography sx={{ fontSize: '14px', margin: '0px auto', color: 'mediumblue', fontFamily: "Jost" }}> +91 </Typography>
                    <input
                        placeholder='Enter Mobile Number'
                        type='number'
                        disabled={display === 2}
                        onChange={e => setData(prev => {
                            return { ...prev, Number: e.target.value }
                        })}
                        style={{
                            border: 'none',
                            userSelect: 'none',
                            fontFamily: "Jost",
                            width: '85%',
                            height: '40px',
                            fontSize: '14px',
                        }} />
                </Box>

                <Button sx={{
                    display: display === 0 ? 'block' : 'none',
                    boxShadow: 0,
                    margin: '0px auto',
                    my: 2,
                    background: 'white',
                    color: 'mediumblue',
                    padding: '8px 10px',
                    border: "1px solid mediumblue",
                    textTransform: 'none',
                    '&:hover': {
                        background: 'mediumblue', color: 'white',
                    }
                }}
                    onClick={() => NumberVerifier()}
                    type="submit">
                    Continue
                </Button>

                <Typography sx={{ fontSize: '12px', fontFamily: 'Jost', position: 'absolute', bottom: 10, left: 73 }}>
                    By continuing, you agree to the
                    <a href="/" style={{ color: 'black', textDecoration: 'none', fontWeight: '700', marginLeft: '4px' }}>
                        Terms & Conditions
                    </a>
                </Typography>


                <Box sx={{ display: display === 1 ? 'block' : 'none', margin: '0px auto', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '70%', margin: '0px auto', }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '600', color: 'mediumblue', fontFamily: "Jost" }}>Enter OTP : </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: data.ResendTime === 0 ? 'mediumblue' : 'black', fontFamily: "Jost", pointerEvents: data.ResendTime === 0 ? 'auto' : 'none', opacity: data.ResendTime === 0 ? '1' : '0.6', cursor: data.ResendTime === 0 ? 'pointer' : 'no-drop', fontSize: '16px', mr: 1 }}
                                onClick={() => {
                                    setData(prev => {
                                        return { ...prev, RealOTP: '', OTP: '' }
                                    })
                                    NumberVerifier()
                                }}
                            >
                                Resend {
                                    data.ResendTime === 0 ? null :
                                        <span> in  0:{data.ResendTime < 10 ? `0${data.ResendTime}` : data.ResendTime}</span>
                                }
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <input
                            placeholder='OTP'
                            type='number'
                            value={data.OTP}
                            onChange={e => setData(prev => {
                                return { ...prev, OTP: e.target.value }
                            })}
                            style={{
                                border: 'none',
                                borderBottom: "1px solid black",
                                userSelect: 'none',
                                width: '20%',
                                height: '35px',
                                color: 'mediumblue',
                                fontFamily: "Jost",
                                fontSize: '14px',
                                margin: '5px auto',
                                textAlign: 'center'
                            }} />
                    </Box>

                    <Button sx={{
                        boxShadow: 0,
                        px: 2,
                        margin: '0px auto',
                        my: 2,
                        background: 'white',
                        color: 'mediumblue',
                        padding: '8px 10px',
                        border: "1px solid mediumblue",
                        textTransform: 'none',
                        '&:hover': {
                            background: 'mediumblue',
                            color: 'white',
                        }
                    }}
                        onClick={() => OTPVerifier()}
                    >
                        Continue
                    </Button>

                </Box>


                <Box sx={{ display: display === 2 ? 'block' : 'none' }}>
                    <input
                        placeholder='Username'
                        type='text'
                        onChange={e => setData(prev => {
                            return { ...prev, UserName: e.target.value }
                        })}
                        style={{
                            border: '1px solid mediumblue',
                            userSelect: 'none',
                            fontFamily: "Jost",
                            width: '76%',
                            color: 'mediumblue',
                            height: '40px',
                            fontSize: '14px',
                            paddingLeft: '13px'
                        }} />
                    <Box sx={{ my: 1 }}></Box>
                    <input
                        placeholder='Email'
                        onChange={e => setData(prev => {
                            return { ...prev, Email: e.target.value }
                        })}
                        type='email'
                        style={{
                            border: '1px solid mediumblue',
                            userSelect: 'none',
                            fontFamily: "Jost",
                            width: '76%',
                            color: 'mediumblue',
                            height: '40px',
                            fontSize: '14px',
                            paddingLeft: '13px'
                        }} />
                    <Button sx={{
                        boxShadow: 0,
                        px: 2,
                        margin: '0px auto',
                        background: 'white',
                        my: 2,
                        color: 'mediumblue',
                        padding: '8px 10px',
                        border: "1px solid mediumblue",
                        textTransform: 'none',
                        '&:hover': {
                            background: 'mediumblue',
                            color: 'white',
                        }
                    }}
                        onClick={() => SignUp()}
                    >
                        Sign Up
                    </Button>

                </Box>
            </Box>
        </Box>
    )
}
