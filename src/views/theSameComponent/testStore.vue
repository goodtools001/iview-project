<template>
 <div id ="testStore">
     <div> testStore 累加：{{count}}</div>
     <div> 周报类型：{{reportType}}</div>
 </div>
</template>



<script>
    export default {
        name: "testStore",
        data(){
            return{
                //reportType:"默认报表类型"
            }
        },
        methods:{
            addCount(){
                return this.$store.commit("add")
            },
        },
        computed:{
            count(){
                return this.$store.state.count+10;
            },
            reportType(){
                return this.$store.state.paramMap.reportType;
            }


        }
    }
</script>

<style scoped>

</style>