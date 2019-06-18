const baseUrl = 'http://localhost:3001/api/fortune'

const getFortune = () => {
    const req = fetch(baseUrl);
    return req.then(res => res.json());
}

export default {
    getFortune
};