import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

const fetchPost = async (id) => {
    const { data } = await instance.get("/posts/" + id);
    return data;
};

export { fetchPost };
export default instance;

