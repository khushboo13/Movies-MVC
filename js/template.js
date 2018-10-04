export class Template {
	constructor() {
		this.movieTemplate = `
			<div id="{{id}}" class="movie">
				<div class="movie-title">{{title}}
					<div class="progress-container">
    				<div class="progress" style="width: {{voting}}%">
							{{rating}}
						</div>
					</div>
				</div>
				<img class="movie-image" src="{{src}}">
				<p class="movie-description">{{overview}}</p>
			</div>`;
	}
	fillMovieTemplate(movie) {
		let template = this.movieTemplate;
		template = template.replace('{{id}}', movie.id);
		template = template.replace('{{title}}', movie.title);
		template = template.replace('{{rating}}', movie.vote_average);
		template = template.replace('{{voting}}', movie.vote_average*10);
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
