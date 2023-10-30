<script setup lang="ts">
	import './CardNumber.css';

	interface Props {
		code: number;
		text?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		code: 0,
		text: 'days',
	});
</script>
<template>
	<div class="block-card">
		<div class="card">
			{{ props.code.toString().length === 1 ? '0' + props.code : props.code }}
		</div>
		<span class="text-card">{{ props.text }}</span>
	</div>
</template>
