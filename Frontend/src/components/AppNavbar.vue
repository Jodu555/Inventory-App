<template>
	<v-app-bar absolute app>
		<v-toolbar-title>Inventory App</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn @click="toggleTheme" depressed outlined color="primary">
			<v-icon dark>{{ themeIcon }}</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	computed: {
		themeIcon() {
			return this.$vuetify.theme.isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent';
		},
	},
	methods: {
		toggleTheme() {
			this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark;
		},
	},
};
</script>
