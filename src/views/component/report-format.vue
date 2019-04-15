<template>

    <div>
        报表格式：
        <!--<Radio v-model="disabledSingle" disabled>Radio</Radio>-->
        <RadioGroup v-model="reportFormateTemp">
            <Radio label="PDF"></Radio>
            <Radio label="WORD"></Radio>
            <Radio label="EXCEL"></Radio>
            <Radio label="HTML"></Radio>
        </RadioGroup>
        <div hidden>选中的值：{{reportFormate}}</div>
    </div>

</template>
<script>
    export default {
        name: "report-format",
        data() {
            return {
                /*disabledSingle: true,*/
                /*disabledGroup: '报表格式'*/
                reportFormateTemp:"PDF"
            }
        },
        computed:{
            reportFormate(){
                return this.$store.state.paramMap.reportFormat=this.reportFormateTemp;
            },
        }
    }
</script>

<style scoped>

</style>