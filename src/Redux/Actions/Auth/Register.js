import config from '../../../utils/Config';
import axios from 'axios';

export const isRegister = data => async distpach => {
  try {
    const res = await axios.post(
      config.APP_BACKEND.concat('user/register'),
      data,
    );
    delete res.data.token;
    distpach({
      type: 'SET_REGISTER',
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
