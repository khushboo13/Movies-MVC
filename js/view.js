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
				console.log(movies);
				let moviesListView = _self.template.moviesListTemplate(movies);
				_self.moviesListContainer.insertAdjacentHTML('beforeend', moviesListView);
			},
			'hideLoader': function hideLoader() {
				util.hide(_self.loader);
			},
			'showLoader': function hideLoader() {
				util.show(_self.loader);
			},
			'showFooter': function showFooter() {
				util.show(_self.footer);
			},
			'disable': function disable(btn) {
				_self[btn].setAttribute('disabled', true);
			},
			'enable': function enable(btn) {
				_self[btn].removeAttribute('disabled');
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
