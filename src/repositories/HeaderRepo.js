import Client from './Clients/axiosClient';
const resource = '/home/headline';

export default {
    get() {
        return Client.get(`${resource}`);
    }
}