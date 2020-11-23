<template>
    <div class="login">
        <cy-swiper :autoPlay="4000" :pagination="true" :swiperData="swiperImgItem">
            <div v-for="(item,index) in swiperImgItem" :key="index" class="cy-swiper-slide">
                <cy-image :src="item.src"></cy-image>
            </div>
        </cy-swiper>
        <div class="pdl-20 pdr-20">
            <div class="invite flex vcenter">
                <div class="flex vcenter mgr-10">
                    <cy-image :src="require('@/assets/img/1.jpg')" round width="35px" height="35px"></cy-image>
                </div>
                <div class="yellow fs-12">
                    <div>
                        飞翔蓝天
                        <cy-btn type="yellow" xs plain round background="#FFF9ED">135****323</cy-btn>
                    </div>
                    <div>邀请您加入车内大健康</div>
                </div>
            </div>
            <cy-field
                class="pdl-0 pdr-0"
                v-model="form.phone"
                labelIcon="telephony"
                placeholder="账号/手机号"
            ></cy-field>
            <cy-field
                class="pdl-0 pdr-0"
                v-model="form.password"
                type="password"
                labelIcon="lock"
                placeholder="密码"
            >
                <count-down :phone="form.phone"></count-down>
            </cy-field>
            <div class="mgtb-15">
                <cy-btn v-show="!disabled" @click.native="onSubmit" disabled round>登录</cy-btn>
                <cy-btn type="blue-img" v-show="disabled" @click.native="onSubmit" round>登录</cy-btn>
            </div>
            <div class="grey">如无账号，自动注册账号</div>
        </div>
    </div>
</template>

<script>
import cySwiper from "@/components/swiper";
import countDown from "@/components/_custom/count_down.vue";
import submit from "@/utils/validator";
import { isPhone } from "@/utils/isCheck";

export default {
    name: "login",
    components: {
        cySwiper,
        countDown
    },
    data() {
        return {
            swiperImgItem: [
                { src: require("@/assets/img/1.jpg") },
                { src: require("@/assets/img/2.jpg") },
                { src: require("@/assets/img/3.jpg") }
            ],
            form: {
                phone: "",
                password: ""
            },
            rules: {
                phone: {
                    type: "string",
                    required: true,
                    message: "手机号输入有误",
                    validator: (rule, value) => isPhone(value)
                },
                password: [
                    {
                        type: "string",
                        required: true,
                        message: "密码不能为空"
                    },
                    {
                        min: 6, //最小长度
                        max: 12, //最大长度
                        message: "密码长度6-12位"
                    }
                ]
            }
        };
    },
    created() {},
    computed: {
        disabled() {
            return this.form.phone && this.form.password;
        }
    },
    methods: {
        onSubmit() {
            let option = {
                rules: this.rules,
                data: this.form,
                api: this.$api.qu
                //confirmMsg: "确定提交？"
            };
            submit(option)
                .then(res => {
                    console.log("then", res);
                    //this.$toast.success("成功");
                })
                .catch(err => {
                    if (err) {
                        console.log("catch");
                    }
                })
                .finally(() => {
                    console.log("finally");
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.invite {
    height: 50px;
}
</style>
