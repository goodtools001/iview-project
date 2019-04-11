<template>
    <div id="app">
        <p>请输入单价: <input type="text" v-model="price"></p>
        <page1 :price="price" @downPrice="downPrice"></page1>
        <page2></page2>
    </div>
</template>

<script>

    import Page1 from "./page1";
    import Page2 from "./page2";
    export default {
        name: "app",
        components: {Page2, Page1},
        data(){
            return{
              price:'100'
            }
        },
        methods:{
            downPrice(count) {
                this.price = (this.price - count).toString();
                // this.price = (this.price - count).toString();
            }
        },

    }
</script>

<style scoped>

</style>