<template>
    <div>
        <Button :size="buttonSize" type="primary" @click="reportGenerate">生成报表</Button>
    </div>
</template>

<script>
    export default {
        name: "report-generate-button",
        data() {
            return {
                buttonSize: 'large'
            }
        },
        methods: {
            reportGenerate() {
                var url = "reportManage/reportGenerate"

                /*设置参数*/
                var params = {};

                var reportType = this.$store.state.paramMap.reportType;
                console.log(" [ reportType = " + reportType + " ]")
                params.reportType = reportType;


                var reportFormat = this.$store.state.paramMap.reportFormat;
                console.log(" [ reportFormat = " + reportFormat + " ]")
                params.reportFormat = reportFormat;


                var timeRange = this.$store.state.paramMap.timeRange;
                console.log(" [ timeRange = " + timeRange + " ]")
                params.timeRange = timeRange;

                this.$ajax({
                    method: 'post',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    dataType: 'json',
                    data: params
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                })

            },//end reportGenerate

        },

    }


    /*mounted() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }],
                    animation: false
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);


                /!*!/!**
                 * 此处为关键代码，ajax传输图片信息.
                 *!/
                postImage();

                function postImage() {
                    var imageName = "image1.png";

                    /!* var image = encodeURIComponent(myChart.getDataURL({
                         pixelRatio: 2, // double pixel
                         backgroundColor: '#fff'
                     }));*!/

                    var image = myChart.getDataURL({
                        pixelRatio: 2, // double pixel
                        backgroundColor: '#fff'
                    });

                    // 向后台发起请求保存图片到指定目录.
                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        url: "http://localhost:9002/saveImage?imageName=" + imageName,
                        data: {"picInfo": image},
                        success: function () {
                            alert('通过post请求传输数据成功!');
                        }
                    });
                }
    *!/






            }*/

</script>

<style scoped>
    div {
        display: block;
        float: left;
        margin-top: 30px;
    }

</style>