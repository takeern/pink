const env = 'dev';
const url = env === 'dev' ? 'http://localhost:2111/api' : 'api';
export default {
    'getPageList': `${url}/getPageList`,
};