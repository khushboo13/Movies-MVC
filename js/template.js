export class Template {
	constructor() {
		//col col-xs-1 col-md-2 col-lg-4
		this.movieTemplate = `
			<div class="movie ">
				<div class="movie-title">{{title}}</div>
				<img class="movie-image" src="{{src}}">
				<p class="movie-description">{{overview}}</p>
			</div>`;
	}
	fillMovieTemplate(movie) {
		let template = this.movieTemplate;
		template = template.replace('{{title}}', movie.title);
		template = template.replace('{{src}}', `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`);
		template = template.replace('{{overview}}', movie.overview);
		return template;
	}
	moviesListTemplate(movies) {
		let moviesListView = '';
		movies.forEach(movie => {
			let movieTemp = this.fillMovieTemplate(movie);
			moviesListView += movieTemp;
		});
		return moviesListView;
	}
}
