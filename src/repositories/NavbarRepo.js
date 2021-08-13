import Client from './Clients/axiosClient';
const resource = '/home/navbar';

export default {
    get() {
        return Client.get(`${resource}`);
    }
}