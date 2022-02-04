import axios from 'axios';

const state = () =>({
    listNotes: []
});

const getters = {
    getListNotes(state){
        return state.listNotes;
    },
    getCountNotes(state){
        return state.listNotes.length;
    }
};

const mutations = {
    SET_LIST_NOTES(state, data){
        state.listNotes = data;
    }
};

const actions = {
    async fetchNotes({ commit }){
        const res = await axios.get('/Sheet1');
        const { data } = res;
        commit('SET_LIST_NOTES', data);
    },
    async addNotes({}, payload){
        const { id, note, isCompleted } = payload;
        const res = await axios.post('/Sheet1', [{
            id,
            note,
            isCompleted,
        }]);
        if (res) {
            return true;
        }
        return false;
    },
    async updateNotes({}){

    },
    async deleteNotes({}){
        
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}