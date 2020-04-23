/**
 * @description 表单验证
*/
import schema from "async-validator";
import Toast from "@/components/_global/toast";
import { dialog } from "@/components/_global/dialog";

const validator = (option) => {
    return new Promise((resolve, reject) => {
        let data = option.data || {},
            rules = option.rules || {},
            confirmMsg = option.confirmMsg

        const validator = new schema(rules);
        validator.validate(data, (errors, fields) => {
            if (errors) {
                Toast(errors[0].message)
            } else {
                if (confirmMsg) { //有确认消息
                    setTimeout(() => { Toast.clear() }, 0)
                    dialog({
                        title: '提示',
                        content: confirmMsg,
                        confirm() {
                            Toast.loading("加载中…")
                            resolve()
                        },
                        cancel() {
                            reject()
                        }
                    })
                } else {
                    console.log('resolve');
                    resolve()
                }
            }
        });

    })
}

/**
 * @description 提交表单 + 验证
 * @param option
*/
//import { validator } from "./validator";
//import Toast from "@/components/_global/toast";

const submit = (option) => {
    const data = option.data || {},
        api = option.api
    return new Promise((resolve, reject) => {
        validator(option)
            .then(() => {
                Toast.loading("加载中…")
                console.log('data', data);
                api(data)
                    .then(res => {
                        Toast.success("成功")
                        !!res && resolve(res)
                    })
                    .catch(err => { //接口报错
                        Toast.fail("发送失败");
                        reject(err)
                    })
            })
            .catch(() => { //有提示信息时的 取消 on cancel
                reject()
            })
    })
}

export default submit

