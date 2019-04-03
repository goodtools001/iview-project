<template>
    <div id="reportImages">加载报表中的图片（隐藏域）
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main" style="width: 600px;height:400px;"></div>


    </div>
</template>


<!-- 引入 ECharts 文件 -->
<script src="https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts-en.common.js"></script>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>

<script type="text/javascript">
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

    /**
     * 此处为关键代码，ajax传输图片信息.
     */
    postImage()

    }

</script>

<script>
    export default {
        name: "report-image",
        methods: {
            postImage: function () {
                var imageName = "image1.png";
                /* var image = encodeURIComponent(myChart.getDataURL({
                     pixelRatio: 2, // double pixel
                     backgroundColor: '#fff'
                 }));*/

                var image = myChart.getDataURL({
                    pixelRatio: 2, // double pixel
                    backgroundColor: '#fff'
                });

                // 向后台发起请求保存图片到指定目录.
                /*$.ajax({
                    type: 'POST',
                    dataType: "json",
                    url: "http://localhost:9002/saveImage?imageName=" + imageName,
                    data: {"picInfo": image},
                    success: function () {
                        alert('通过post请求传输数据成功!');
                    }
                });*/




            }
        }
    }


</script>

<style scoped>

</style>