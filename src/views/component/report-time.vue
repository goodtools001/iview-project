<template>
    <div>
        时间范围：
        <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px" :value="reportTimeTemp"
                    @on-change="handleChange"></DatePicker>
        <div hidden> 时间范围：{{reportTimeTemp}}</div>
    </div>

    <!---->
</template>

<script>
    export default {
        name: "report-time",
        data() {
            return {
                reportTimeTemp:'',
            }
        },
        methods: {
            handleChange(daterange) {
                this.reportTimeTemp = daterange;
                this.$store.state.paramMap.timeRange=this.reportTimeTemp;
            },
        },

    }
</script>

<style scoped>

</style>