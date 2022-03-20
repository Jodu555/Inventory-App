<template>
	<v-card>
		<v-card-title>
			<v-text-field
				v-model="search"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
		</v-card-title>
		<v-data-table :headers="headers" :items="items" :search="search"> </v-data-table>
	</v-card>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {},
	data() {
		return {
			search: '',
			headers: [
				{
					text: 'Name',
					align: 'start',
					filterable: true,
					value: 'name',
				},
				{ text: 'Chest', value: 'chest', filterable: true },
				{ text: 'Amount', value: 'amount' },
			],
			items: [
				{
					name: 'Noodles',
					chest: '#78',
					amount: 8,
				},
				{
					name: 'Tomatenmark',
					chest: '#69',
					amount: 420,
				},
			],
		};
	},
};
</script>
