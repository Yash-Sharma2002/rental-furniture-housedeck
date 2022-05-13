import axios from 'axios';

const URL = 'http://localhost:8000';


export const OTPSender = async (num) => {
  try {
    const response = await axios.post(`${URL}/otp-sender`, num)
    return response.data
  } catch (error) {
    console.log('Error while calling otp-sender api' + error);
  }
}
