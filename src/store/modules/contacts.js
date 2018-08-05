export default {
	state: {
		phone: '+7 (812) 555-05-55',
		address: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
	},
	getters: {
		getPhone(state) {
			return state.phone;
		},
		getAddress(state) {
			return state.address;
		}
	}
}
