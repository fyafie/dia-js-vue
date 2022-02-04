<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : 'Header',
    // props : {
    //     title : {
    //         type: String,
    //         required: true
    // },
    //     description : String,
    //     isTitle : Boolean
    // },
    inject: ['titleFromParent'],
    computed:{
        title(){
            // return this.$store.state.title;
            return this.$store.getters.getTitle;
        }
    },
    mounted(){
        this.helloWorld();
    },

    methods : {
        helloWorld(){
            this.$emit('hello', 'Hello World');
        }
    }
}
</script>

<style scoped>
    .item {
        color: blue;
    }
</style>