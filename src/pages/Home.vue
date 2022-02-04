<template>
  <div>
    <DashboardLayout>
        <template #header>
        <header-component 
         
        :description="description" 
        @hello="ambilHelloWorld($event)"
        >
        <div>
            ini UI yang ada pada slot
        </div>
        </header-component>
        </template>
        <template #main>
        <button @click="changeTab('list-component')">List Note</button>
        <button @click="changeTab('add-component')">Add Note</button>
        
        <keep-alive>
            <component :is="tab"></component>
        </keep-alive>

        <!--<list-component v-if="tab === 'list'"></list-component>
        <add-component v-if="tab === 'add'"></add-component>-->
        </template>
        <template #footer>
        Copyright &copy; 2022
        </template>
    </DashboardLayout>
  </div>
</template>

<script>
import DashboardLayout from '../layouts/Dashboard.vue';
import List from '../components/List.vue';
import AddNote from '../components/AddNote.vue';
import { computed } from 'vue';

export default {
    name : 'Home',
    components: {
    DashboardLayout,
    'list-component' : List,
    'add-component' : AddNote
  },
  data(){
    return{
        title: 'My Notes',
        description: 'Catatan Harianku',
        tab: 'list-component'
    }
  },
  provide(){
    return {
      titleFromParent: computed(() => this.title)
    }
  },
  mounted(){
    this.$store.commit('SET_TITLE', 'Fauzan Notes');
  },
  methods:{
    ambilHelloWorld(value){
      console.log(value)
    },
    changeTab(tabname){
      this.tab= tabname;
    }
  }
}
</script>

<style>

</style>