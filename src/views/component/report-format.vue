<template>

    <div class="formatStyle">
        <div><h2>报表格式：</h2></div>
        <!--<Radio v-model="disabledSingle" disabled>Radio</Radio>-->
        <div >
            <RadioGroup v-model="reportFormateTemp">
                <Radio label="PDF"></Radio>
                <Radio label="WORD"></Radio>
                <Radio label="EXCEL"></Radio>
                <Radio label="HTML"></Radio>
            </RadioGroup>
            <span hidden>选中的值：{{reportFormate}}</span>
        </div>
    </div>

</template>
<script>
    export default {
        name: "report-format",
        data() {
            return {
                /*disabledSingle: true,*/
                /*disabledGroup: '报表格式'*/
                reportFormateTemp: "PDF"
            }
        },
        computed: {
            reportFormate() {
                return this.$store.state.paramMap.reportFormat = this.reportFormateTemp;
            },
        }
    }
</script>

<style scoped>
    div {
        float: left
    }

    .formatStyle {
        margin-top: 30px;
    }


</style>