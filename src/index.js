// import { App } from './components/App';
//import { DemoCounter } from './components/Demo/DemoCounter';
import './index.css';
import { App } from './components/App';

// document.addEventListener('DOMContentLoaded', function () {
//   // document.body.appendChild(new App().$rootElement);
//   document.body.appendChild(new DemoCounter({ title: 'App counter' }).$rootElement);
// });

const app = new App();

const container = document.querySelector('body');
container.append(app.$rootElement);
