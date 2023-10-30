<script setup lang="ts">
	import { reactive } from 'vue';
	import type Time from './interfaces/Time';

	import BackgroundFooter from './components/BackgroundFooter/BackgroundFooter.vue';
	import CardNumber from './components/CardNumber/CardNumber.vue';

	const time: Time = reactive({
		difference: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const getCurrentTime = (): void => {
		const date: any = new Date();
		const newYearDate: any = new Date('January 1, 2024, 00:00:00');

		time.difference = newYearDate - date;

		time.days = Math.floor(time.difference / (1000 * 60 * 60 * 24));
		time.difference %= 1000 * 60 * 60 * 24;
		time.hours = Math.floor(time.difference / (1000 * 60 * 60));
		time.difference %= 1000 * 60 * 60;
		time.minutes = Math.floor(time.difference / (1000 * 60));
		time.difference %= 1000 * 60;
		time.seconds = Math.floor(time.difference / 1000);
	};

	setInterval(() => getCurrentTime(), 1000);

	getCurrentTime();
</script>

<template>
	<h1>Days until 2024</h1>
	<div class="timer">
		<CardNumber :code="time.days" text="days" />
		<CardNumber :code="time.hours" text="hours" />
		<CardNumber :code="time.minutes" text="minutes" />
		<CardNumber :code="time.seconds" text="seconds" />
	</div>

	<BackgroundFooter />
</template>
