<template>
    <div class="cy-upload">
        <slot>
            <div v-for=" (item,index) in imgList" :key="index">
                <div class="cy-upload-item">
                    <cy-icon
                        type="close-circle-fill"
                        class="cy-upload-del"
                        color="#666"
                        size="20"
                        @click.native="onDelImg(index)"
                    ></cy-icon>
                    <cy-image :src="item"></cy-image>
                </div>
            </div>
        </slot>
        <div v-if="imgList.length < maxLen" class="cy-upload-edit">
            <cy-icon type="plus" class="cy-upload-plus" color="#bbbbbb"></cy-icon>
            <input
                type="file"
                @change="chooseImg($event)"
                class="cy-upload-file"
                :multiple="multiple"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "cy-upload",
    props: {
        imgList: {
            type: Array,
            default: () => []
        },
        maxLen: {
            type: Number,
            default: 1
        },
        multiple: {
            type: Boolean,
            default: true
        },
        maxSize: {
            type: Number,
            default: 5242880 //5M
        },
        acceptType: {
            type: Array,
            default: () => ["image/jpeg", "image/png", "image/gif", "image/bmp"]
        },
        typeError: {
            type: String,
            default: "不支持上传该类型"
        },
        limitError: {
            type: String,
            default: "文件大小超过限制"
        },
        otherFormData: {
            //其他参数
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            opt: {
                $e: {},
                formData: null,
                maxLen: this.maxLen,
                previewData: [], //预览
                maxSize: this.maxSize, //文件最大字节
                acceptType: this.acceptType //文件类型
            }
        };
    },
    methods: {
        chooseImg($event) {
            const tar = $event.target;
            const formData = new FormData();
            let previewData = [];
            for (let i = 0; i < tar.files.length; i++) {
                previewData.push(tar.files[i]);
            }
            this.opt.$e = tar;
            if (!this.check(previewData, this.opt)) return;

            if (this.otherFormData) {
                for (let key of Object.keys(this.otherFormData)) {
                    formData.append(key, this.otherFormData[key]);
                }
            }
            this.opt.formData = formData;
            this.preview(previewData);
        },

        check(file, opt) {
            for (let key in file) {
                if (opt.maxSize && file[key].size > opt.maxSize) {
                    this.$toast(this.limitError);
                    return false;
                }
                if (
                    opt.acceptType.length &&
                    opt.acceptType.indexOf(file[key].type) === -1
                ) {
                    this.$toast(this.typeError);
                    return false;
                }
            }
            return true;
        },
        //预览
        preview(previewData) {
            const file = previewData;
            let fileLen = 0;
            const reader = new FileReader();
            reader.readAsDataURL(file[fileLen]);
            this.opt.formData.append("image", file[0]); //上传的文件
            reader.onload = e => {
                if (e.target.result) {
                    this.imgList.push(e.target.result);
                    fileLen++;
                    if (
                        this.opt.maxLen > this.imgList.length &&
                        file.length > fileLen
                    ) {
                        reader.readAsDataURL(file[fileLen]);
                        this.opt.formData.append("image", file[fileLen]); //上传的文件
                    } else {
                        //this.$emit("preview", this.imgList);
                        //this.uploader();
                    }
                }
            };
        },
        //上传
        uploader() {
            const formData = this.opt.formData;
            for (var v of formData.values()) {
                console.log("v", v);
            }

            // this.$api
            //     .uploader(formData)
            //     .then(res => {
            //         console.log("成功");
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        },
        //删除
        onDelImg(index) {
            this.imgList.splice(index, 1);
        }
    }
};
</script>
<style lang="scss">
.cy-upload {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
}
.cy-upload-item {
    position: relative;
    margin: 10px;
    width: 70px;
    height: 70px;
    margin: 10px;
}
.cy-upload-del {
    position: absolute;
    z-index: 5;
    right: -10px;
    top: -10px;
}
.cy-upload-edit {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 70px;
    height: 70px;
    border: 1px solid #cecece;
    margin: 10px;
}
.cy-upload-edit .cy-upload-plus {
    width: 50%;
    height: 50%;
}
.cy-upload-edit .cy-upload-file {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
}
</style>