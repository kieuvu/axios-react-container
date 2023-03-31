import axios from "./axios";

const fetchPost = async (id) => {
    const { data } = await axios.get("/posts/" + id);
    return data;
};

export { fetchPost };