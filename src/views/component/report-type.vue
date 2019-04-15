<template>
    <Row>
        <Col span="3" style="padding-right:10px">
            <div>
                报表类型:
                <div hidden>{{reportType}}</div>
                <!--<Select id="select" v-model="model11" filterable>-->
                <Select id="select" v-model="myValue" filterable>
                    <Option v-for="item in reportList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </Col>
    </Row>
</template>
<script>
    export default {
        name: "report-type",
        data() {
            return {
                reportList: [
                    {
                        value: 'XXX安全周报',
                        label: 'XXX安全周报'
                    },
                    {
                        value: 'XXX安全月报',
                        label: 'XXX安全月报'
                    }
                ],
                myValue:0
            }
        },
        computed:{
            reportType(){
                return this.$store.state.paramMap.reportType = this.myValue;
            }
        },

    }
</script>

<style scoped>

</style>