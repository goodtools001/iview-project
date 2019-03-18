<template>
    <div class="testAxios">

        <button class="-primary" @click="doGet">发送get请求</button>
        <p v-if="doGetIsOK">{{respstr}}</p>
    </div>
</template>
<script>

    export default {
        name: "test-axios",
        data: function () {
            return {
                doGetIsOK: false,
                respstr: ''
            }
        },

        methods: {
            doGet: function () {
                alert("发送get请求！");

                this.$http.get('http://localhost:9001/statistics/titotalNum', {}).then(resp => {
                    console.log("resp = " + resp.toString())
                });


                this.doGetIsOK = true;
                this.respstr = "get请求已发送";
                return "doGet is OK ";
            }
        }
    }
</script>

<style scoped>

</style>