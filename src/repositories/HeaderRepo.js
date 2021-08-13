import Client from './Clients/axiosClient';
const resource = '/home/header';

export default {
    get() {
        return Client.get(`${resource}`);
    }
}