<!--订阅运营数据-->
<template>
    <div class="subscribe">
        <cy-cell title="全部" class="pdtb-15">
            <div slot="sub-title" class="fs-12">订阅所有数据3</div>
            <cy-switch v-model="all" slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="汇总数据" titleIcon="papers" class="pdtb-15">
            <cy-switch v-model="form.v1" slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="代理商排行榜" titleIcon="data" class="pdtb-15">
            <cy-switch v-model="form.v2" slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="业绩排行榜" titleIcon="list" class="pdtb-15">
            <cy-switch v-model="form.v3" slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="分享效果报表" titleIcon="relay" class="pdtb-15">
            <cy-switch slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="分享效果详情" titleIcon="flag" class="pdtb-15">
            <cy-switch slot="desc"></cy-switch>
        </cy-cell>
        <cy-cell title="门店分布详情" titleIcon="room" class="pdtb-15">
            <cy-switch slot="desc"></cy-switch>
        </cy-cell>

        <div class="fixed-bt pd-30">
            <cy-btn @click.native="onSubmit" :disabled="disabled" type="blue-img" round>订阅</cy-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "subscribe",
    components: {},
    data() {
        return {
            disabled: false,
            //all: true,
            form: {
                v1: false,
                v2: false,
                v3: true
            }
        };
    },
    created() {},
    computed: {
        all: {
            get() {
                return Object.keys(this.form).every((item, index, array) => {
                    return this.form[item] === true;
                });
            },
            set(val) {
                for (let key in this.form) {
                    this.form[key] = val;
                }
            }
        }
    },
    methods: {
        // onChangeAll(v) {
        //     if (v) {
        //         for (let key in this.form) {
        //             this.form[key] = v;
        //         }
        //     }
        // },
        onSubmit() {
            this.disabled = true;
            this.$toast("订阅成功，即将跳转去查看运营数据!");
            setTimeout(() => {
                this.$router.push("equipment");
            }, 2000);
        }
    }
};
</script>
<style lang="scss">
</style>
