<template>
    <Row>
        <Col span="3" style="padding-right:10px">
            <div>
                报表类型:

                <Select id="select" v-model="model11" filterable>
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </Col>
    </Row>
</template>
<script>
    export default {
        name: "report-select",
        data() {
            return {
                cityList: [
                    {
                        value: 'XXX安全周报',
                        label: 'XXX安全周报'
                    },
                    {
                        value: 'XXX安全月报',
                        label: 'XXX安全月报'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>

<style scoped>

</style>