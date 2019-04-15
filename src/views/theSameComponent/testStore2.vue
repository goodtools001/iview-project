<template>
    <div id ="testStore2">
        <button @click="addCount">点击，数字+1</button>
        <button @click="setReportType">设置报表类型</button>
    </div>
</template>

<script>
    export default {
        name: "testStore2",
        methods:{
            addCount(){
                return this.$store.commit("add")
            },
            setReportType(){
                return this.$store.commit("setReportType","xxx安全周报")
            },
        },
    }
</script>

<style scoped>

</style>