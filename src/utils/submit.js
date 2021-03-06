/**
 * @description 提交表单 + 验证
 * @param option
*/
import { validator } from "./validator";
import Toast from "@/components/_global/toast";

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

export {
    regular,
    submit
}

