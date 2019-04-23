<template>
        <div  class="reportPanel">
            <!--报表类型-->
            <report-type></report-type>
            <!--报表时间-->
            <report-time></report-time>
            <!--报表格式-->
            <report-format></report-format>
            <!--提交按钮-->
            <report-generate-button></report-generate-button>
            <!--&lt;!&ndash;报表中的图片&ndash;&gt;
            <report-image></report-image>-->
        </div>
</template>

<script>


    import ReportType from "./component/report-type";
    import ReportFormat from "./component/report-format";
    import ReportGenerateButton from "./component/report-generate-button";
    import ReportTime from "./component/report-time";

    export default {
        name: "report-generate",
        components: {ReportTime, ReportGenerateButton, ReportFormat, ReportType},
    }
</script>

<style scoped>

   .reportPanel{
       width: 400px;
       height: 400px;
       padding-left: 20px;
       padding-top: 20px;

   }



</style>