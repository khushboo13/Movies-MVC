import util from './utils';
import { Template } from './template';

export class View {
	constructor() {
		this.template = new Template();
		this.moviesListContainer = util.qs('#movies-list-container');
		this.loader = util.qs('.mask');
		this.footer = util.qs('.footer');
		this.prevBtn = util.qs('#prev');
		this.nextBtn = util.qs('#next');
	}
	render(type, data) {
		let _self = this;
		let cmds = {
			'showMovies': function showMovies(movies) {
				_self.clearMoviesList();
				let moviesListView = _self.template.moviesListTemplate(movies);
				_self.moviesListContainer.insertAdjacentHTML('beforeend', moviesListView);
			},
			'hideLoader': function hideLoader() {
				_self.loader.classList.remove('show');
				_self.loader.classList.add('hide');
			},
			'showLoader': function hideLoader() {
				_self.loader.classList.remove('hide');
				_self.loader.classList.add('show');
			},
			'showFooter': function showFooter() {
				_self.footer.classList.remove('hide');
				_self.footer.classList.add('show');
			}
		}
		cmds[type](data);
	}
	clearMoviesList() {
		while(this.moviesListContainer.lastChild) {
			this.moviesListContainer.removeChild(this.moviesListContainer.lastChild);
		}
	}
	bind(event, handler) {
		let _self = this;
		if (event === 'prev') {
			util.on(_self.prevBtn, 'click', () => handler());
		} else if (event === 'next') {
			util.on(_self.nextBtn, 'click', () => handler());
		}
	}
}
