<template>

    <div>
        报表格式：
        <!--<Radio v-model="disabledSingle" disabled>Radio</Radio>-->
        <RadioGroup v-model="disabledGroup">
            <Radio label="PDF"></Radio>
            <Radio label="WORD"></Radio>
            <Radio label="EXCEL"></Radio>
            <Radio label="HTML"></Radio>
        </RadioGroup>
    </div>

</template>
<script>
    export default {
        name: "report-radio",
        data() {
            return {
                /*disabledSingle: true,*/
                disabledGroup: '报表格式'
            }
        }
    }
</script>

<style scoped>

</style>