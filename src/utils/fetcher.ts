import axios from "../../axios.config";

// get
const get = (url: string,options?:any) => axios.get(url).then(res => res.data);
// post
const post = (url: string, options: any) => axios.post(url, { ...options }).then(res => res.data);
// patch
const patch = (url: string, options: any) => axios.patch(url, { ...options }).then(res => res.data);
// delete
const del = (url: string) => axios.delete(url).then(res => res.data);


export default {
    get,
    post,
    patch,
    del
};