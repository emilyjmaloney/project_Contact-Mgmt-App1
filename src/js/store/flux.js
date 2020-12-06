const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/MLE_agenda")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => setStore({ contacts: data }));
				// .catch(error => console.log(error));
			},
			addContact: async (name, email, address, phone) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "MLE_agenda",
						address: address,
						phone: phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			editContact: async (name, email, address, phone, index) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + index, {
					method: "PUT",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "MLE_agenda",
						address: address,
						phone: phone,
						index: index
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
			},
			deleteContact: async id => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				getActions().loadSomeData();
			},
			deleteAll: async (name, email, address, phone, index) => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + index, {
					// add agenda slug: "MLE_agenda" here
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
			}
		}
	};
};
export default getState;
