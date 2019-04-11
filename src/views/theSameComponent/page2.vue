<template>
    <div>
        <p>
            <span>总金额：{{totalMoney}}元 </span>剩余金额：
            <span>{{balance}}元</span>
        </p>
    </div>
</template>

<script>
    import bus from '../../assets/eventBus.js';
    export default {
        name: "page2",
        data() {
            return {
                balance: 1000,
                totalMoney: 1000
            };
        },
        mounted() {
            bus.$on("priceChange", (price, count) => {
                this.balance = this.totalMoney - price * count;
            });
        }
    }
</script>

<style scoped>

</style>