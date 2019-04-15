<template>
    <div>
        <Button :size="buttonSize" type="primary" @click="postImage">生成报表</Button>

        <div id="reportImages" hidden>加载报表中的图片（隐藏域）
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div id="main" style="width: 600px;height:400px;"></div>
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
        </div>
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
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },
            postImage() {
                /*获得echart的实例*/
                var myChart = this.$echarts.getInstanceByDom(document.getElementById('myChart'))

                var imageName = "image2.png";
                /*获得图片的base64编码*/
                var image = myChart.getDataURL({
                    pixelRatio: 2, // double pixel
                    backgroundColor: '#fff'
                });

                /*设置参数*/
                var params = new URLSearchParams();
                params.append("picInfo", image);
                params.append("imageName", imageName);

                // 向后台发起请求保存图片到指定目录.
                var url = "http://localhost:9002/saveImage"

                var reportType = this.$store.state.paramMap.reportType;
                console.log(" [ reportType = " + reportType + " ]")

                var reportFormat = this.$store.state.paramMap.reportFormat;
                console.log(" [ reportFomate = " + reportFormat + " ]")

                var timeRange = this.$store.state.paramMap.timeRange;
                console.log(" [ timeRange = " + timeRange + " ]")

                /*this.$http.post(url,params).then(res =>{
                    console.log("wbliu   = "+JSON.stringify(res.data));
                    return "请求成功！"
                });*/


            },//end postImage

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

</style>