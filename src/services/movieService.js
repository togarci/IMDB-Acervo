import axios from 'axios';

export class movieService {
    constructor () {}
    
    getMovies() {
        let url = 'https://api.themoviedb.org/3/movie/popular';
        return axios.get(url, {
            params: {
                api_key: `${process.env.VUE_APP_API_KEY}`,
                language:'pt-BR'
            }
        }).then(response => response.data)
    }

    getGenre() {
        let url = 'https://api.themoviedb.org/3/genre/movie/list';
        return axios.get(url, {
            params: {
                api_key: `${process.env.VUE_APP_API_KEY}`,
                language:'pt-BR'
            }
        }).then(response => response.data)
    }

    getSearchMovie(query) {
        let url = `https://api.themoviedb.org/3/search/movie`;
        return axios.get(url, {
            params: {
                api_key: `${process.env.VUE_APP_API_KEY}`,
                language:'pt',
                page: 1,
                include_adult: false,
                query: query
            }
        }).then(response => response.data)
    }
}