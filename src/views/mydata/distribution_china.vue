<!--客户/门店分布 全国-->
<template>
    <div class="distribution">
        <div class="head pdt-15 pdb-30 bg-darkblue white">
            <div class="flex vcenter between">
                <span class="pdl-20 fs-26">客户/门店分布</span>
                <span class="pdt-10 pdr-5 fs-12">(2020/02/12~2020/02/12)</span>
            </div>

            <div class="flex vcenter between">
                <span class="left-btn" @click="$router.push('subscribe')">
                    范围:全国
                    <cy-icon type="right" size="12px"></cy-icon>
                </span>
                <span class="right-btn" @click="$router.push('subscribe')">
                    <cy-icon type="calendar" size="14px"></cy-icon>自定义
                    <cy-icon type="right" size="12px"></cy-icon>
                </span>
            </div>
        </div>
        <div class="container pd-15 bg-white">
            <cy-echarts :option="mapOption"></cy-echarts>

            <cy-btn @click.native="showStartDate=true;showEndDate=true;">非联动</cy-btn>
            <!-- <cy-popup-picker
                ref="popupPicker"
                v-model="value2"
                :show.sync="show2"
                @onChange="onChange"
                :data="list2"
            >
                <div slot="header">
                    <cy-btn sm @click.native="onCancel">取消</cy-btn>
                    <cy-btn sm @click.native="onConfirm">确认</cy-btn>
                </div>
            </cy-popup-picker>-->
            {{startDate}}-- {{endDate}}
            <cy-popup-datetime
                clear-text="结束时间"
                v-model="endDate"
                :show.sync="showEndDate"
                format="YYYY-MM-DD"
                year-row="{value}年"
                month-row="{value}月"
                day-row="{value}日"
                @onChange="onChangeEndDate"
            ></cy-popup-datetime>
            <cy-popup-datetime
                clear-text="开始时间"
                v-model="startDate"
                :show.sync="showStartDate"
                format="YYYY-MM-DD"
                year-row="{value}年"
                month-row="{value}月"
                day-row="{value}日"
                @onChange="onChangeStartDate"
            ></cy-popup-datetime>

            <!-- <cy-popup-datetime v-model="value2" format="YYYY-MM-DD HH" @on-change="change2"></cy-popup-datetime> -->
        </div>
    </div>
</template>

<script>
import cyEcharts from "@/components/echarts/echarts";
import cyPopupPicker from "@/components/popup_picker";
import cyPopupDatetime from "@/components/popup_datetime";

export default {
    name: "distribution_china",
    components: {
        cyEcharts,
        cyPopupPicker,
        cyPopupDatetime
    },
    data() {
        return {
            showStartDate: false,
            startDate: "",
            showEndDate: false,
            endDate: "",

            mapOption: {
                title: {
                    // text: '在线设备分布',
                    left: "40%",
                    top: "0px",
                    textStyle: {
                        color: "#fff",
                        opacity: 0.7
                    }
                },
                // dataRange: {
                //     show: false,
                //     min: 0,
                //     max: 1000000,
                //     text: ["High", "Low"],
                //     realtime: true,
                //     calculable: true,
                //     color: ["orangered", "yellow", "lightskyblue"]
                // },
                tooltip: {
                    trigger: "item",
                    triggerOn: "click", //触发方式
                    enterable: true, // 鼠标可移入tooltip中
                    formatter: function(params) {
                        console.log("params", params);
                        return `<a class="link" href="#${params.data.link}">显示的文本</a>`;
                    }
                },
                // geo: {
                //     show:true,
                //     map: "china",
                //     label: {
                //         emphasis: {
                //             show: false
                //         }
                //     },
                //     roam:"scale",
                //     silent: true,
                //     itemStyle: {
                //         normal: {
                //             areaColor: "#37376e",
                //             borderColor: "#000"
                //         },
                //         emphasis: {
                //             areaColor: "#2a333d"
                //         }
                //     }
                // },

                visualMap: {
                    // 颜色的设置 dataRange
                    left: "left",
                    bottom: "0%",
                    itemWidth: 5, //图形的宽度，即长条的宽度。
                    itemHeight: 60, //图形的高度，即长条的高度。
                    min: 0,
                    max: 500,
                    calculable: true, // 颜色呈条状
                    text: ["高", "低"], // 文本，默认为数值文本
                    inRange: {
                        color: ["#FFE7B2", "#DE1F03"]
                    }
                },

                // visualMap: {
                //     type: 'piecewise',
                //     min: 0,
                //     max: 500,
                //     //range: [10,200], //指定手柄对应数值的位置。range 应在 min max 范围内
                //     itemWidth: 5, //图形的宽度，即长条的宽度。
                //     itemHeight: 10, //图形的高度，即长条的高度。
                //     text: ["High", "Low"],
                //     //realtime: false,
                //     //calculable: true,// 颜色呈条状

                //     //dimension: 2, //指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 series.data。 可以把 series.data 理解成一个二维数组,其中每个列是一个维度,默认取 data 中最后一个维度
                //     //seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
                //     hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
                //     categories: ['严重污染', '重度污染', '重度污染'],
                //     dimension: 7,
                //     inRange: {
                //         //定义 在选中范围中 的视觉元素
                //         color: ["#FFE7B2", "#DE1F03", "#111F03"],
                //         //symbolSize: [30, 100]
                //     },
                //     // outOfRange: {
                //     //     //定义 在选中范围外 的视觉元素。
                //     //     color: ["#FFE7B2", "#DE1F03"],
                //     //     //symbolSize: [30, 100]
                //     // },
                //     //zlevel: 0, //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
                //     //z: 2, //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                //     left: "0", //组件离容器左侧的距离,'left', 'center', 'right','20%'
                //     bottom: "0", //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                //     //orient: "vertical", //图例排列方向
                //     //padding: 5, //图例内边距，单位px 5 [5, 10] [5,10,5,10]
                //     //backgroundColor: "transparent", //标题背景色
                //     //borderColor: "#ccc", //边框颜色
                //     //borderWidth: 0, //边框线宽

                // },
                series: [
                    {
                        type: "map",
                        mapType: "china",
                        zoom: 1.2,
                        mapLocation: {
                            y: 100
                        },
                        roam: true, //缩放
                        scaleLimit: {
                            //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                            min: 1, //最小的缩放值
                            max: 3 //最大的缩放值
                        },

                        data: [
                            {
                                name: "广东",
                                value: 300,
                                link: "/home"
                            },
                            {
                                name: "湖北",
                                value: 30
                            }
                        ],
                        //symbolSize: 12,

                        // label: {
                        //     normal: {
                        //         show: false
                        //     },
                        //     emphasis: {
                        //         show: false
                        //     }
                        // },
                        itemStyle: {
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 1
                            }
                        }
                    }
                ]
            }
        };
    },
    created() {},
    computed: {},
    methods: {
        onChangeStartDate(v) {
            //this.showEndDate = true;
            console.log("v", v);
        },
        onChangeEndDate(v) {
            console.log("v", v);
        },

        onCancel() {
            this.$refs.popupPicker.onHide(false);
        },
        onConfirm() {
            this.$refs.popupPicker.onHide(true);
        }
    }
};
</script>
<style lang="scss">
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
.left-btn {
    padding: 5px 5px 5px 10px;
    border-radius: 0 20px 20px 0;
    background: #11212a;
}
</style>
