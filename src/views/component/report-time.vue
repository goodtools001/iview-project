<template>
    <div class="timeStyle">
        <div><h2>时间范围：</h2></div>
        <div class="datePickerStyle">
            <DatePicker type="daterange" split-panels placeholder="请选择日期范围" :value="reportTimeTemp" style="width: 230px"
                        @on-change="handleChange"></DatePicker>
            <!--<span hidden> 时间范围：{{reportTimeTemp}}</span>-->
        </div>
    </div>

</template>

<script>
    export default {
        name: "report-time",
        data() {
            return {
                reportTimeTemp: '',
            }
        },
        methods: {
            handleChange(daterange) {
                this.reportTimeTemp = daterange;
                this.$store.state.paramMap.timeRange = this.reportTimeTemp;
            },
        },

    }
</script>

<style scoped>
    div {
        float: left
    }

    .datePickerStyle {
        position: relative;
        padding-left: 2px;
    }

    .timeStyle {
        margin-top: 30px;
    }

</style>