import axios from 'axios';

const url = 'http://localhost:3000/api/v1/guilds/345753533141876737/suggestions';

export default class SugguestionService {
    // GET Suggestions
    static getSuggestions() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(s => ({
                        ...s,
                        createdAt: new Date(s.time)
                    }))
                );
            } catch (error) {
                reject(error);
            }
        })
    }
}