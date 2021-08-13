import Client from './Clients/axiosClient';
const resource = '/home/secondsection';
const resourcerandom = '/home/random-small-artikel';

export default {
    get(id) {
        return Client.get(`${resource}/${id}`);
    },
    getrandom() {
        return Client.get(`${resourcerandom}`);
    }
}