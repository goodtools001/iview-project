<template>
    <div id ="reportList">
        <h2>这里是报表查看页面</h2>
        <report-panel></report-panel>
    </div>
</template>

<script>
    import ReportPanel from "./component/report-panel";
    export default {
        name: "report-list",
        components: {ReportPanel}
    }
</script>

<style scoped>

</style>