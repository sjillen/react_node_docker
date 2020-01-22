import axios from 'axios';

const requests = (baseUrl = 'http://localhost:3090') => {
    const url = baseUrl + '/results';

    const listResults = async () => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            console.log(e);
            throw new Error('could not fetch scan, there is likely a problem with the server');
        }
    };

    const postResult = async repoName => {
        try {
            const response = await axios.post(url, { repoName });
            return response.data;
        } catch (e) {
            throw new Error('The name you entered does not contain authorized characters!');
        }
    };
    return { listResults, postResult };
};

export default Object.assign({}, { ...requests() });
