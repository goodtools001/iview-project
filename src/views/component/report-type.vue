<template>
    <div class="typeStyle">
        <div><h2>报表类型:</h2></div>
        <div class="selectStyle">
            <Select id="select" v-model="myValue" placeholder="请选择报告类型" filterable>
                <Option v-for="item in reportList" :value="item.reportName" :key="item.id">{{ item.reportName }}
                </Option>
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
        mounted() {

            this.myValue = "XXX 安全周报"; //默认选中第一个值；
            /*测试使用*/
            //this.reportList = reportListTemp;

            var reportTypeUrl = "reportManage/reportTypes";

            this.$ajax({
                method: 'get',
                url: reportTypeUrl
            }).then(response => {
                this.reportList = response.data;
                this.myValue = this.reportList[0].reportName;
            }).catch(function (error) {
                console.log(error);
            })

        },
        created() { //在组件创建的时候，初始化选项
            var reportListTemp = [{
                value: 'XXX安全周报',
                label: 'XXX安全周报',
                reportName: 'XXX安全周报000'
            },
                {
                    value: 'XXX安全月报',
                    label: 'XXX安全月报',
                    reportName: 'XXX安全周报001'
                }];
        }

    }
</script>

<style scoped>
    div {
        float: left
    }

    .typeStyle {
        margin-top: 30px;
    }

    .selectStyle {
        position: relative;
        padding-left: 15px;
        width: 245px;
    }


</style>