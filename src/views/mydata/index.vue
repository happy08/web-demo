<!--我的数据-->
<template>
    <div class="mydata">
        <cy-pullup-loading
            @loadmore="onLoadmore"
            :isShowMod="true"
            :hasMore="isHasMore"
            :isLoading="isLoading"
        >
            <div ref="data0" class="pdt-15 pdb-30 bg-darkblue white">
                <div class="flex vcenter between">
                    <span class="pdl-20 fs-26">我的数据</span>
                    <span class="right-btn" @click="$router.push('subscribe')">
                        修改订阅
                        <cy-icon type="right" size="12px"></cy-icon>
                    </span>
                </div>
                <div class="pdlr-20">尊敬的kaykay，您使用“车内大健康” 123天</div>
            </div>
            <div class="container bg-white">
                <cy-row wrap="wrap" :gutter="8" class="pdlr-20 pdtb-15">
                    <cy-col :span="12" class="mgb-10">
                        <cy-image
                            @click.native="scrollTo('1')"
                            :src="require('@/assets/img/pool_bg.png')"
                        ></cy-image>
                    </cy-col>
                    <cy-col :span="12" class="mgb-10">
                        <cy-image
                            @click.native="scrollTo('2')"
                            :src="require('@/assets/img/pool_bg.png')"
                        ></cy-image>
                    </cy-col>
                    <cy-col :span="12" class="mgb-10">
                        <cy-image
                            @click.native="scrollTo('3')"
                            :src="require('@/assets/img/pool_bg.png')"
                        ></cy-image>
                    </cy-col>
                    <cy-col :span="12" class="mgb-10">
                        <cy-image :src="require('@/assets/img/pool_bg.png')"></cy-image>
                    </cy-col>
                </cy-row>
            </div>

            <div class="all-data">
                <!--数据汇总-->
                <div ref="data1" v-if="showData1">
                    <distribution-china></distribution-china>
                </div>

                <!--数据汇总-->
                <div ref="data2" v-if="showData2">
                    <distribution-china></distribution-china>
                </div>

                <!--数据汇总-->
                <div ref="data3" v-if="showData3">
                    <distribution-china></distribution-china>
                </div>
            </div>

            <div class="fixed-bt tc">
                <cy-image
                    v-show="pageNum <= totle"
                    @click.native="scrollTo(pageNum++)"
                    :src="require('@/assets/img/lower_btn.png')"
                    width="20px"
                    height="20px"
                ></cy-image>
                <cy-image
                    v-show="pageNum > totle"
                    @click.native="scrollTo(0)"
                    :src="require('@/assets/img/upper_btn.png')"
                    width="20px"
                    height="20px"
                ></cy-image>
            </div>
        </cy-pullup-loading>
    </div>
</template>

<script>
import cyPullupLoading from "@/components/pullup_loading";
import distributionChina from "./distribution_china";

export default {
    name: "mydata",
    components: {
        cyPullupLoading,
        distributionChina
    },
    data() {
        return {
            pageNum: 1,
            totle: 3, //总页
            isHasMore: true,
            isLoading: false,

            showData1: false,
            showData2: false,
            showData3: false
        };
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        onLoadmore() {
            this.isLoading = true;
            if (this.pageNum <= this.totle) {
                this.scrollTo(this.pageNum);
            } else {
                this.isHasMore = false;
            }
            this.isLoading = false;
        },
        scrollTo(v) {
            this.pageNum = v * 1 + 1;
            this["showData" + v] = true;

            //const offsetTop = document.querySelector(".data" + v).getBoundingClientRect().top
            this.$nextTick(() => {
               //console.log("v", this.$refs, this.$refs.data1.offsetTop);
                this.$refs["data" + v].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start"
                });
                //window.scrollTo({"behavior":"smooth","top":offsetTop});
            });
        }

        // destroyed() {
        //     clearTimeout(this.timer);
        //     this.timer = null;
        // }
    }
};
</script>
<style lang="scss" scoped>
.container {
    min-height: 100vh;
    margin-top: -15px;
    border-radius: 15px 15px 0 0;
}
.right-btn {
    padding: 5px 5px 5px 10px;
    border-radius: 20px 0 0 20px;
    background: #11212a;
}
.all-data {
}
/deep/.cy-pulldown-loading-more {
    display: none;
}
</style>
