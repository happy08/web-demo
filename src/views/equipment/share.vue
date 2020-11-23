<!--激活分享二维码-->
<template>
    <div>
        <div class="container pd-30 white tc">
            <div class="pdt-30 fs-26">邀请同事加入车内大健康</div>
            <div class="pdt-5 fs-12">共享1000元微信红包，查看门店项目信息</div>
            <div class="qrcode">
                <cy-image :src="require('@/assets/img/1.jpg')"></cy-image>
            </div>
            <div class="pdb-30 fs-12">截图让同事扫码也可以加入</div>
            <cy-btn @click.native="onActivation" type="blue-img" round>邀请同事，领取红包</cy-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "equipment_share",
    components: {},
    data() {
        return {
             
        };
    },
    created() {},
    computed: {},
    methods: {
        //激活设备
        onActivation() {}
    }
};
</script>
<style lang="scss" scoped>
.container {
    position: relative;
    min-height: 100vh;
    background: url("../../assets/img/code_bg.png") top center no-repeat #183647;
    background-size: 100%;
}
.qrcode{
    width: 190px;
    height: 190px;
    margin: 38px auto 30px auto;
    padding: 10px;
    // background-image: linear-gradient(270deg, #4DD4F7 0%, #1C71FA 100%);
}
</style>
