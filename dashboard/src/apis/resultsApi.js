import axios from 'axios';

const requests = (baseUrl = 'http://localhost:3090') => {
    const url = baseUrl + '/results';

    const listResults = async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            handleError(e);
        }
    };

    const postResult = async repoName => {
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

    return { listResults, postResult };
};

export default Object.assign({}, { ...requests() });
