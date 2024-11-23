import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
	setup(props) {
		this.state = {
			counter: 0,
		};

		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'app';

		this.$header = document.createElement('h1');
		this.$header.classList.add('total-amount');
		this.$header.innerHTML = `Итого: $<span>${this.state.counter}</span>`;
		this.$rootElement.append(this.$header);

		// ...

		const donateForm = new Form({
			onItemCreate: this.onItemCreate.bind(this),
			state: this.state,
		});
		this.$rootElement.append(donateForm.$rootElement);
		this.donateList = new List();
		this.$rootElement.append(this.donateList.$rootElement);
	}

	onItemCreate(amount) {
		const item = new ListItem({ date: new Date(), amount });
		this.$header.innerHTML = `Итого: $<span>${this.state.counter}</span>`;
		this.donateList.addItem(item);
	}
}
