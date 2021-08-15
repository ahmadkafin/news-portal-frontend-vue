import Client from './Clients/axiosClient';
const resource = '/home/navbar';
const re_child = '/home/child-cat'

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getChild(id) {
        return Client.get(`${re_child}/${id}`)
    }
}