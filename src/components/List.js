import { Component } from '../core/Component';

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donates-container';

		const $header = document.createElement('h2');
		$header.classList.add('donates-container__title');
		$header.textContent = 'Список донатов';

		const $donatesList = document.createElement('div');
		$donatesList.classList.add('donates-container__donates');

		this.$rootElement.append($header, $donatesList);

		// ...
	}

	addItem(item) {
		this.$rootElement.append(item.$rootElement);
	}
}
