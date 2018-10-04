import api from './ajax';

export class Model {
	constructor() {
		this.movies = [];
	}
	getTrendingMovies(page=1, fn) {
		let promise = api.ajax(`https://api.themoviedb.org/3/trending/movie/day?api_key=7b2ed70f3b8338f080fe4e4f5b835fd6&page=${page}`);
		promise.then(response => {
			this.movies = response.results;
			fn({movies: this.movies, total_pages: response.total_pages, currPage: response.page});
		});
	}
}
