import axios from 'axios';

const requests = () => {
    const req = axios.create({ baseURL: 'http://localhost:3090' });

    const listResults = async () => {
        try {
            const response = await req.get('/results');
            return response.data;
        } catch (e) {
            console.log(e);
            throw new Error('could not fetch scan, there is likely a problem with the server');
        }
    };

    const postResult = async repoName => {
        try {
            const response = await req.post('/results', { repoName });
            return response.data;
        } catch (e) {
            throw new Error('The name you entered does not contain authorized characters!');
        }
    };
    return { listResults, postResult };
};

export default Object.assign({}, { ...requests() });
