<!--激活设备-->
<template>
    <div class="equipment">
        <div class="head-bg bg-darkblue"></div>
        <div class="container mglr-20 mgb-20">
            <div class="head flex vcenter pd-15">
                <div class="flex vcenter mgr-10">
                    <cy-image :src="require('@/assets/img/1.jpg')" round width="52px" height="52px"></cy-image>
                </div>
                <div class="white">
                    <div class="mgb-5 fs-14">Kaykay</div>
                    <span class="phone">135****323</span>
                </div>
            </div>
            <div class>
                <div class="pd-10 darkblue tc">- 设备信息 -</div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="card" class="mgr-5"></cy-icon>设备名称
                    </div>
                    <div class="black">途康设备名称</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="flag" class="mgr-5"></cy-icon>设备品牌
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="text" class="mgr-5"></cy-icon>设备型号
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="label" class="mgr-5"></cy-icon>设备ID
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="data" class="mgr-5"></cy-icon>设备状态
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="room" class="mgr-5"></cy-icon>代理商
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="man" class="mgr-5"></cy-icon>业务员
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="papers" class="mgr-5"></cy-icon>门店类型
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="heart" class="mgr-5"></cy-icon>门店名称
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="room" class="mgr-5"></cy-icon>门店简称
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="location" class="mgr-5"></cy-icon>门店地址
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="item">
                    <div class="flex vcenter darkgrey">
                        <cy-icon type="man" class="mgr-5"></cy-icon>负责人
                    </div>
                    <div class="black">设备品牌</div>
                </div>
                <div class="pd-10 tc">
                    当前设备未分配，请联系相关业务人员
                    <br />（kay 13223322323）
                </div>
                <div class="pdlr-30 pdb-20">
                    <cy-btn @click.native="onActivation" type="blue-img" round>激活设备</cy-btn>
                    <cy-btn type="blue-img" round>立即联系</cy-btn>
                </div>
            </div>
        </div>

        <!-- 该设备已激活 -->
        <cy-popup
            v-model="showSuccess"
            :closeIcon="false"
            :clickOverlayClose="true"
            closeIconPosition="bottom-center"
            round
            position="center"
            width="335px"
            height="auto"
            background="#172E3B"
        >
            <div class="popup-inner pd-20 tc">
                <cy-image :src="require('@/assets/img/sigh_bg.png')" width="83px" height="47px"></cy-image>
                <div class="mgt-20 fs-24 white">该设备已激活</div>
                <div class="mgt-10 mgb-15 fs-16 yellow">前往运营数据或者邀请同事加入</div>
                <div class="pdlr-30">
                    <cy-btn @click.native="onActivation" type="blue-img" round class="mgb-15">邀请同事</cy-btn>
                    <cy-btn @click.native="onActivation" type="blue" plain round>运营数据</cy-btn>
                </div>
            </div>
        </cy-popup>

        <!-- 该设备已激活 -->
        <cy-popup
            v-model="showSuccess"
            :closeIcon="false"
            :clickOverlayClose="true"
            closeIconPosition="bottom-center"
            round
            position="center"
            width="335px"
            height="auto"
            background="#172E3B"
        >
            <div class="popup-inner pd-20 tc">
                <cy-image :src="require('@/assets/img/question_bg.png')" width="83px" height="47px"></cy-image>
                <div class="mgt-20 fs-24 white">设备激活失败 ?</div>
                <div class="mgt-10 mgb-15 fs-14 white tl">
                    1.检查设备是否联网或确保设备连接的WiFi可用
                    <br />2.联系供应商检查设备是否损坏
                </div>
                <div class="pdlr-30 mgt-30">
                    <cy-btn
                        @click.native="onActivation"
                        type="blue-img"
                        round
                    >联系供应商 13223232323</cy-btn>
                </div>
            </div>
        </cy-popup>
    </div>
</template>

<script>
export default {
    name: "equipment",
    components: {},
    data() {
        return {
            showSuccess: true
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
.head-bg {
    position: relative;
    height: 100px;
}
.head {
    height: 80px;
    background: url("../../assets/img/blue_bg.png");
}
.container {
    position: relative;
    margin-top: -80px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}
.phone {
    display: inline-block;
    padding: 2px 10px;
    border: solid 1px rgba(255, 255, 255, 0.3);
    color: #eeeeee;
    background: rgba(255, 255, 255, 0.1);
    font-size: 12px;
    line-height: 1;
    border-radius: 50px;
}
.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 10px;
    border-bottom: 1px solid #ebedf0;
}
</style>
