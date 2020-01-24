import axios from 'axios';

const requests = (baseUrl = 'http://localhost:3090') => {
    const url = baseUrl + '/results';

    const list = async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            handleError(e);
        }
    };

    const create = async repoName => {
        try {
            const response = await axios.post(url, { repoName });
            return response.data;
        } catch (e) {
            handleError(e);
        }
    };

    const handleError = error => {
        const message = error.response ? error.response.data.message : error;
        throw new Error(message);
    };

    return { list, create };
};

export default Object.assign({}, { ...requests() });
