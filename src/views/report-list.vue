<template>
    <div id="reportList" class="reportListStyle">
        <div><h2>这里是报表查看页面</h2></div>
        <report-table></report-table>
    </div>
</template>

<script>
    import ReportTable from "./component/report-table";

    export default {
        name: "report-list",
        components: {ReportTable},
    }
</script>

<style scoped>
    .reportListStyle{
        text-align: center;
        width: 930px;
        height: 900px;
        padding-left: 300px;
        margin-top: 20px;
    }

</style>