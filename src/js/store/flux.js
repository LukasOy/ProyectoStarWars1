import { Context } from "./appContext";
import injectContext from "./appContext";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Planeta:[],
			PersonDetalle:[],
			favorites:[],


		actions: {
			AgrFavor:(title,id) => {
				const store = getStore();

				console.log("Agregado a Favoritos", name)
				setStore({favorites:[...store.favorites,name]})
			},
			ElimFavor:(index) => {
				const store = getStore();
				const NuevosFavs = [...store.favorites];
				NuevosFavs.splice(index, 1);
				setStore({ favorites: NuevosFavs});
			},
			getPersonDetalle:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
					console.log(data.results); 
					setStore({PersonDetalle:data.results})
				})
			},
			getPlaneta:()=>{
				fetch("https://www.swapi.tech/api/planets")
				.then(response=>response.json())
				.then(data=>{ setStore({Planeta:data.results}) 
				})
			},
			}
			
		}
	};
};

export default getState;
