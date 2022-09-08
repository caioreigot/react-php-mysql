import axios from "axios";
import config from './config.json';

const getMessages = setter =>
  axios(config['server_ip'])
    .then(res => setter(res.data));

export default getMessages;