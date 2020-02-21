import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID EV9FVsbzsSszdb7Fl38O-ubUjsn7BqDP3yA-3aa9X3Y'
    } 
});
