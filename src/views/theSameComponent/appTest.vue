<template>
    <div id="app">
        <p>请输入单价: <input type="text" v-model="price"></p>
        <page1 :price="price" @downPrice="downPrice"></page1>
        <page2></page2>
        <span>测试vuex ：{{increase}}</span>
        <test-store></test-store>
        <test-store2></test-store2>
    </div>
</template>

<script>

    import Page1 from "./page1";
    import Page2 from "./page2";
    import TestStore from "./testStore";
    import TestStore2 from "./testStore2";
    export default {
        name: "app",
        components: {TestStore2, TestStore, Page2, Page1},
        data(){
            return{
              price:'100',
                count :10000
            }
        },
        methods:{
            downPrice(count) {
                this.price = (this.price - count).toString();
                // this.price = (this.price - count).toString();
            }
        },
        computed:{
          increase(){
              //return this.count++;
              return ;
          }
        },
    }
</script>

<style scoped>

</style>