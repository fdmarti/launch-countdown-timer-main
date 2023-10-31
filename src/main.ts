import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const date: Date = new Date();
const currentHour: number = date.getHours();
const body: HTMLElement = document.body;
body.classList.add('night');

if (currentHour >= 6 && currentHour <= 18) {
	body.classList.add('day');
	body.classList.remove('night');
} else {
	body.classList.add('night');
	body.classList.remove('day');
}

createApp(App).mount('#app');
