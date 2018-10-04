export class Controller {
	constructor(view, model) {
		this.view = view;
		this.model = model;
		this.currPage;
	}
	init() {
		this.view.bind('prev', () => {
			this.view.render('showLoader');
			this.getTrendingMovies(--this.currPage);
		});
		this.view.bind('next', () =>  {
			this.view.render('showLoader');
			this.getTrendingMovies(++this.currPage);
		});
		this.getTrendingMovies(1);
	}
	getTrendingMovies(page) {
		this.model.getTrendingMovies(page, (result) => {
			this.view.render('hideLoader', 'loader');
			this.view.render('showMovies', result.movies);
			this.currPage = result.currPage;
			if(this.currPage === 1) {
				this.view.render('disable', 'prevBtn');
			} else {
				this.view.render('enable', 'prevBtn');
			}
			if(result.total_pages > 1) {
				this.view.render('showFooter');
			}
		});
	}
}
