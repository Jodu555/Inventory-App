<template>
	<!-- <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
		<template v-slot:top>
			<v-toolbar flat>
				<v-toolbar-title>My CRUD</v-toolbar-title>
				<v-divider class="mx-4" inset vertical></v-divider>
				<v-spacer></v-spacer>
				<v-dialog v-model="dialog" max-width="500px">
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"> New Item </v-btn>
					</template>
					<v-card>
						<v-card-title>
							<span class="text-h5">{{ formTitle }}</span>
						</v-card-title>

						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
							<v-btn color="blue darken-1" text @click="save"> Save </v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialogDelete" max-width="500px">
					<v-card>
						<v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
							<v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-toolbar>
		</template>
		<template v-slot:item.actions="{ item }">
			<v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
			<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
		</template>
	</v-data-table> -->
	<v-card>
		<v-card-title>
			<v-layout align="center" justify="center">
				<v-text-field
					v-model="search"
					append-icon="mdi-magnify"
					label="Suche"
					single-line
					hide-details
					class="mr-10"
				></v-text-field>
				<v-dialog v-model="dialog" max-width="500px">
					<template v-slot:activator="{ on, attrs }">
						<v-btn color="primary" v-bind="attrs" v-on="on"> Neuer Eintrag </v-btn>
					</template>
					<v-card>
						<v-card-title>
							<span class="text-h5">{{ formTitle }}</span>
						</v-card-title>
						<v-card-text>
							<v-container>
								<v-row>
									<v-col cols="12" sm="6" md="4">
										<v-text-field v-model="editedItem.name" label="Name"></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field
											v-model="editedItem.chest"
											label="Kiste"
											type="number"
											min="0"
										></v-text-field>
									</v-col>
									<v-col cols="12" sm="6" md="4">
										<v-text-field
											v-model="editedItem.amount"
											label="Stückzahl"
											type="number"
											min="0"
										></v-text-field>
									</v-col>
								</v-row>
							</v-container>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
							<v-btn color="blue darken-1" text @click="save"> Save </v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-dialog v-model="dialogDelete" max-width="50vw">
					<v-card>
						<v-card-title class="text-h5"
							>Bist du dir sicher, dass du dieses Item löschen willst ?</v-card-title
						>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="blue darken-1" text @click="closeDelete">Nöö, nicht mehr!</v-btn>
							<v-btn color="blue darken-1" text @click="deleteItemConfirm">Ja mach jetzt!</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-layout>
		</v-card-title>
		<v-data-table :headers="headers" :items="items" :search="search">
			<template v-slot:item.actions="{ item }">
				<v-icon class="mr-2" @click="addStock(item)" color="primary"> mdi-plus </v-icon>
				<v-icon class="mr-10" @click="removeStock(item)" color="accent"> mdi-minus </v-icon>
				<v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
				<v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
			</template>
			<template v-slot:no-data>
				<v-btn
					color="primary"
					@click="
						() => {
							dialog = true;
						}
					"
				>
					Add Item
				</v-btn>
			</template>
		</v-data-table>
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
			editItemUUID: -1,
			dialog: false,
			dialogDelete: false,
			headers: [
				{
					text: 'Name',
					align: 'start',
					filterable: true,
					value: 'name',
				},
				{ text: 'Kiste', value: 'chest', filterable: true },
				{ text: 'Anzahl', value: 'amount' },
				{ text: 'Aktion', value: 'actions' },
			],
			editedItem: {},
			defaultItem: {
				name: '',
				chest: 1,
				amount: 1,
			},

			items: [],
		};
	},
	created() {
		this.editedItem = JSON.parse(JSON.stringify(this.defaultItem));
		this.fetchData();
	},
	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},
	computed: {
		formTitle() {
			return this.formType === -1 ? 'neuer Eintrag' : 'Eintrag Bearbeiten';
		},
	},
	methods: {
		async fetchData() {
			this.items = [];
			const response = await fetch('http://localhost:3100/items');
			this.items = await response.json();
		},
		async updateItem(item) {
			const UUID = item.UUID;
			const updateItem = JSON.parse(JSON.stringify(item));
			delete updateItem.UUID;
			await fetch(`http://localhost:3100/items/${UUID}`, {
				method: 'PATCH',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					name: updateItem.name,
					chest: Number(updateItem.chest),
					amount: Number(updateItem.amount),
				}),
			});
		},
		async createItem(item) {
			const response = await fetch(`http://localhost:3100/items/`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					name: item.name,
					chest: Number(item.chest),
					amount: Number(item.amount),
				}),
			});
			return await response.json();
		},
		addStock(item) {
			item.amount++;
			this.updateItem(item);
		},
		removeStock(item) {
			if (item.amount == 0) return;
			item.amount--;
			this.updateItem(item);
		},
		async save() {
			if (this.editItemUUID == -1) {
				//CREATED
				const item = await this.createItem(this.editedItem);
				this.items.push(item);
			} else {
				//EDITED
				this.updateItem({ UUID: this.editItemUUID, ...this.editedItem });
				this.items = this.items.map((e) => {
					return e.UUID == this.editItemUUID ? { UUID: e.UUID, ...this.editedItem } : e;
				});
			}
			this.close();
		},
		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = JSON.parse(JSON.stringify(this.defaultItem));
				this.editItemUUID = -1;
			});
		},
		editItem(item) {
			this.editItemUUID = item.UUID;
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			this.editItemUUID = item.UUID;
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},
		deleteItemConfirm() {
			this.items = this.items.filter((e) => e.UUID !== this.editItemUUID);
			this.closeDelete();
		},
		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},
	},
};
</script>
