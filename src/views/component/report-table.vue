<template>
    <div class="tableStyle">
        <Table height="700" width="900" :columns="columns1" :data="data2" border>

            <template slot-scope="{ row, index }" slot="downloadSlot">
                <Button type="primary" size="small" style="margin-right: 5px" @click="downloadReport(index)">下载报告
                </Button>
            </template>
        </Table>
    </div>
</template>

<script>
    export default {
        name: "report-table",
        data() {
            return {
                columns1: [],
                data2: []
            }
        },
        methods: {
            downloadReport(index) {
                var reportId = this.data2[index].num;
                var reportName = this.data2[index].reportName;
                var reportType = this.data2[index].reportType;
                var createDate = this.data2[index].createDate;

                this.$Modal.confirm({
                    title: '下载报告的信息！',
                    content: `报告名称：${reportName}<br>报告格式：${reportType}<br>创建时间：${createDate}`,
                    //content: `报告名称：${this.data2[index].reportName}<br>报告格式：${this.data2[index].reportType}<br>创建时间：${this.data2[index].createDate}`,
                    onOk: () => {
                        this.$Message.info('开始下载..');
                        console.log("reportId = " + reportId);
                        this.download(this.data2[index]);
                    },
                    onCancel: () => {
                        this.$Message.info('取消下载');
                    }
                })

            },
            // 下载文件
            download(row) {
                console.log("download 开始 执行")
                var reportTypeUrl = "reportManage/reportDownload?reportId=" + row.num;

                /*var paramMap = {};
                paramMap.reportId = row.num;
*/

                this.$ajax({
                    method: 'get',
                    url: reportTypeUrl,
                    /*headers: {
                        'Content-Type': 'application/json'
                    },
                    dataType: 'json',
                    data: paramMap,*/
                    responseType: 'blob'
                }).then(response => {

                    if (response.status == 200) {
                        // let fileName = row.reportName + "." + row.reportType.toLowerCase();
                        let url = response.config.url;
                        //let url = window.URL.createObjectURL(new Blob([data]))
                        let link = document.createElement('a')
                        link.style.display = 'none'
                        link.href = url + "&requestNum=2"

                        // 获取文件名
                        // download 属性定义了下载链接的地址而不是跳转路径
                        //link.setAttribute('download', fileName)
                        document.body.appendChild(link);
                        link.click();
                        console.log("下载成功!")


                        //一定时间之后，刷新表格
                        setTimeout(() => {
                            /*更新表格数据*/
                            this.refreshTabele();

                            console.log("表格刷新了")
                        }, 3000);


                    } else {
                        console.log("下载失败!")
                    }

                }).catch(function (error) {
                    console.log(error);
                })
            },
            /*更新表格数据*/
            refreshTabele() {
                var reportListUrl = "reportManage/reportList";
                this.$ajax({
                    method: 'get',
                    url: reportListUrl
                }).then(response => {
                    this.data2 = response.data;
                    console.log("data2 = " + this.data2[0].reportNum);

                }).catch(function (error) {
                    console.log(error);
                })

            }
        },
        created() {
            var columns1Temp = [
                {
                    title: '序号',
                    key: 'num',
                    "sortable": true
                },
                {
                    title: '报告名称',
                    key: 'reportName'
                },


                {
                    title: '报告类型',
                    key: 'reportType',
                    "sortable": true
                },

                {
                    title: '创建日期',
                    key: 'createDate',
                    "sortable": true
                },
                {
                    title: '创建人',
                    key: 'founder',
                    "sortable": true
                },
                {
                    title: '下载次数',
                    key: 'downloadNum',
                    "sortable": true
                },
                {
                    title: '操 作',
                    slot: 'downloadSlot',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.downloadReport(params.index)
                                    }
                                }
                            }, '下 载')


                        ]);
                    }
                }
            ];

            var data2Temp = [
                {
                    num: 1,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter1',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 2,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter2',
                    createDate: '2016-10-03',
                    downloadNum: 10
                },
                {
                    num: 3,
                    reportName: 'xxx安全报告',
                    reportType: "EXCEL",
                    founder: 'Peter3',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 4,
                    reportName: 'xxx安全报告',
                    reportType: "HTML",
                    founder: 'Peter4',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 5,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter5',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 6,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter6',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 7,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter7',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 8,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter8',
                    createDate: '2016-10-03',
                    downloadNum: 10
                },
                {
                    num: 9,
                    reportName: 'xxx安全报告',
                    reportType: "EXCEL",
                    founder: 'Peter9',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 10,
                    reportName: 'xxx安全报告',
                    reportType: "HTML",
                    founder: 'Peter10',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 11,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter11',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 12,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter12',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 13,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter13',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 14,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter14',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 15,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter15',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 16,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter16',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 17,
                    reportName: 'xxx安全报告',
                    reportType: "WORD",
                    founder: 'Peter17',
                    createDate: '2016-10-03',
                    downloadNum: 18
                },
                {
                    num: 18,
                    reportName: 'xxx安全报告',
                    reportType: "PDF",
                    founder: 'Peter18',
                    createDate: '2016-10-03',
                    downloadNum: 18
                }
            ];

            this.columns1 = columns1Temp;
            //this.data2 = data2Temp;
        },
        mounted() {
            /*var reportListUrl = "reportManage/reportList";
            this.$ajax({
                method: 'get',
                url: reportListUrl
            }).then(response => {
                this.data2 = response.data;
                console.log("data2 = " + this.data2[0].reportNum);

            }).catch(function (error) {
                console.log(error);
            })*/

            this.refreshTabele();

        }
    }
</script>

<style scoped>
    .tableStyle {
        margin-top: 20px;
    }
</style>