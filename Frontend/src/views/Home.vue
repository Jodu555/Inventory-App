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
				{ text: 'Chest', value: 'chest' },
				{ text: 'Amount', value: 'amount' },
				// { text: 'Carbs (g)', value: 'carbs' },
				// { text: 'Protein (g)', value: 'protein' },
				// { text: 'Iron (%)', value: 'iron' },
			],
			items: [
				{
					name: 'Noodles',
					chest: '#78',
					amount: 8,
				},
			],
		};
	},
};
</script>
