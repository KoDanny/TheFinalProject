import { Component } from '../core/Component';

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement('form');
		this.$rootElement.className = 'donate-form';
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

		this.$label = document.createElement('label');
		this.$label.classList.add('donate-form__input-label');
		this.$label.textContent = 'Введите сумму в $';

		this.$input = document.createElement('input');
		this.$input.classList.add('donate-form__donate-input');
		this.$input.name = 'amount';
		this.$input.type = 'number';
		this.$input.max = '100';
		this.$input.min = '1';
		this.$input.required = true;

		this.$input.addEventListener('input', this.handleInput.bind(this));

		this.$label.appendChild(this.$input);

		this.$button = document.createElement('button');
		this.$button.classList.add('donate-form__submit-button');
		this.$button.disabled = true;
		this.$button.textContent = 'Задонатить';

		this.$rootElement.append(this.$label, this.$button);
		// ...
	}

	handleInput(event) {
		const { value } = event.target;

		if (value <= 100 && value >= 1) {
			this.$button.disabled = false;
		} else {
			this.$button.disabled = true;
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		const { value } = this.$input;

		this.props.state.counter += Number(value);
		this.props.onItemCreate(value);

		this.$rootElement.reset();
		this.$button.disabled = true;
	}
}
