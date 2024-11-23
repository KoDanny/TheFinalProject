import { Component } from '../core/Component';

const normalizeDate = (date) => {
	const day = `${date.getDay()}`.padStart(2, '0');
	const month = `${date.getMonth() + 1}`.padStart(2, '0');
	const year = date.getFullYear();

	const hours = `${date.getHours()}`.padStart(2, '0');
	const minutes = `${date.getMinutes()}`.padStart(2, '0');
	const seconds = `${date.getSeconds()}`.padStart(2, '0');

	const dateString = `${day}/${month}/${year}`;
	const timeString = `${hours}:${minutes}:${seconds}`;

	return `${dateString}, ${timeString}`;
};

export class ListItem extends Component {
	setup(props) {
		const container = document.querySelector('.donates-container__donates');
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donate-item';

		const date = this.props.date;

		this.$rootElement.innerHTML = `${normalizeDate(date)} -&nbsp<b>$${
			props.amount
		}</b>`;
	}
}
