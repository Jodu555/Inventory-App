<template>
	<v-app>
		<AppNavbar />

		<v-main>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
export default {
	name: 'App',
	components: {
		AppNavbar,
	},
	data: () => ({}),
};
</script>
