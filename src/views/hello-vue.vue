<template>
    <div class="hello-vue">
        <span>hello vue! I am learning {{str}} !</span>
        <test-axios></test-axios>
    </div>
</template>

<script>
    import TestAxios from "./test-axios";
    export default {
        name: "hello-vue",
        components: {TestAxios},
        data: function(){
            return {str:"VUE"}
        }
    }
</script>

<style scoped>
.hello-vue{
    font-size: 20px;

}
</style>