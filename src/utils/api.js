import axios from "axios";
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get( url, {
            params,

        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};