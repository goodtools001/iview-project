<template>
    <div class="typeStyle">
        <div><h2>报表类型:</h2></div>
        <div class="selectStyle">
            <Select id="select" v-model="myValue" filterable>
                <Option v-for="item in reportList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <span hidden>{{reportType}}</span>
        </div>

    </div>

</template>

<script>
    export default {
        name: "report-type",
        data() {
            return {
                reportList: [],
                myValue: "",
            }
        },
        computed: { //将选项的值，绑定到状态管理器中
            reportType() {
                return this.$store.state.paramMap.reportType = this.myValue;
            }
        },
        created() { //在组件创建的时候，初始化选项
            var reportListTemp = [{
                value: 'XXX安全周报',
                label: 'XXX安全周报'
            },
                {
                    value: 'XXX安全月报',
                    label: 'XXX安全月报'
                }];

            this.myValue = "XXX安全周报"; //默认选中第一个值；
            this.reportList = reportListTemp;
        }

    }
</script>

<style scoped>
    div{float: left}

    .typeStyle{
        margin-top: 30px;
    }

    .selectStyle{
        position: relative;
        padding-left: 15px;
        width: 245px;
    }


</style>