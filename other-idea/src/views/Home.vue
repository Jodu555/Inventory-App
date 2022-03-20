<template>
	<div class="home">
		<button class="btn btn-primary" @click="toggle">Hello</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {},
	methods: {
		toggle: () => {
			document.body.classList.toggle('dark');
		},
	},
};
</script>
