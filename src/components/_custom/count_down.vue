<!--获取验证码60秒倒计时-->
<template>
    <div>
        <div v-if="authTime <= 0" @click="getCode" class="blue">发送验证码</div>
        <div v-else>{{authTime + 'S后重发'}}</div>
    </div>
   
</template>
<script>
import {isPhone} from '@/utils/isCheck'

export default {
    name: "count_down",
    props: {
        imgCode: {
            type: String,
            required: false,
            default: ""
        },
        phone: {
            type: String,
            required: true, //必填
            default: ""
        },
        code: {
            type: [String, null],
            required: false,
            default: null
        }
    },
    components: {},
    data() {
        return {
            authTime: 0, // 倒计时
            timer: null
        };
    },

    methods: {
        //获取验证码
        getCode() {
            if (!!this.imgCode) {
                this.$toast("图形验证码错误");
                return;
            }
            if (this.phone == "" || this.phone == undefined) {
                this.$toast("请填写手机号");
                return;
            } else if (!isPhone(this.phone)) {
                this.$toast("手机号输入有误");
                return;
            }
            this.authTime = 60;
            this.timer = setInterval(() => {
                this.authTime--;
                if (this.authTime <= 0) {
                    window.clearInterval(this.timer);
                }
            }, 1000);
        }
    },
    destroyed() {
        window.clearInterval(this.timer);
    }
};
</script>