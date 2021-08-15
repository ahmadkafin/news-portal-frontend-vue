import Client from './Clients/axiosClient';
const resource = '/home/artikel-terbaru';
const resourceChild = '/home/artikel-terbaru-child';
const resourcerandom = '/home/random-small-artikel';
const imagescroll = '/home/image-scroll';


export default {
    get(id) {
        return Client.get(`${resource}/${id}`);
    },
    getChild(id) {
        return Client.get(`${resourceChild}/${id}`);
    },
    getrandom(id) {
        return Client.get(`${resourcerandom}/${id}`);
    },
    getImageScroll(id) {
        return Client.get(`${imagescroll}/${id}`);
    }
}