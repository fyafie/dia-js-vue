import { createStore } from "vuex";
import notes from './modules/notes';

const store = createStore({
    state: () =>({
        title: 'Belajar Vue 3'
    }),
    getters:{
        getTitle(state){
            return state.title;
        }
    },
    mutations: {
        SET_TITLE: (state, data) => {
            if (data || data !== ''){
                state.title = data;
            }
        }
    },
    actions:{
        //actions
    },
    modules: {
        notes
    }
});
export default store;