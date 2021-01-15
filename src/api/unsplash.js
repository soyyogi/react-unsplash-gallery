import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GaisIEgGuPKfttIUTXz2L9uo9D8_EBXfOcYAHjw0U8w'
    }
});