<template>
    <div>
        <p><span>单价：</span><span>{{price}}</span> <button @click="downPrice">降价1元</button></p>
        <p>数量: {{count}} </p>

    </div>
</template>


<script>
    import bus from '../../assets/eventBus.js';
    export default {
        name: "page1",
        props:{
            price:{
                type:String,
                default:''
            }
        },
        data(){
            return{
                count:10
            }
        },
        methods:{
            downPrice(){
                this.$emit('downPrice','1')
            }
        },
        watch:{
            price(newPrice){
                bus.$emit('priceChange',newPrice,this.count)
            }
        }
    }
</script>

<style scoped>

</style>