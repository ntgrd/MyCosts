<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "HelloWorld",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
   props:{
   categoryList: Array,
   paymentsList: Array
   },
  data() {
    return {
      option: {} //{
    //     title: {
    //       text: "Traffic Sources",
    //       left: "center"
    //     },
    //     tooltip: {
    //       trigger: "item",
    //       formatter: "{a} <br/>{b} : {c} ({d}%)"
    //     },
    //     // legend: {
    //     //   orient: "vertical",
    //     //   left: "left",
    //     //   data:['1']
    //     // },
    //     series: [
    //       {
    //         name: "Traffic Sources",
    //         type: "pie",
    //         radius: "55%",
    //         center: ["50%", "60%"],
    //         data: [
    //           { value: 335, name: "Food" },
    //           { value: 310, name: "Email" },
    //           { value: 234, name: "Ad Networks" },
    //           { value: 135, name: "Video Ads" },
    //           { value: 1548, name: "Search Engines" }
    //         ],
    //         emphasis: {
    //           itemStyle: {
    //             shadowBlur: 10,
    //             shadowOffsetX: 0,
    //             shadowColor: "rgba(0, 0, 0, 0.5)"
    //           }
    //         }
    //       }
    //     ]
    //   }
        }
    },
  methods: {
      getChartData() {
          const items = this.categoryList.map(item => {
              return {name: item, value: this.$store.getters.getValueByCategory(item)}
          })
          console.log('getChartData', items)
          return items
         
      }
  },
  watch: {
      categoryList: function(nv,ov) {
          console.log('watch', nv, ov,this.getChartData())
         this.option =  {
            title: {
                text: "Costs Pie",
                left: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data:['1']
        // },
            series: [
            {
                name: "Traffic Sources",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.getChartData(),
                // emphasis: {
                //   itemStyle: {
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: "rgba(0, 0, 0, 0.5)"
                //   }
                // }
            }
            ]
      }
    },
    paymentsList: function(nv,ov) {
          console.log('watch', nv, ov,this.getChartData())
         this.option =  {
            title: {
                text: "Costs Pie",
                left: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
        // legend: {
        //   orient: "vertical",
        //   left: "left",
        //   data:['1']
        // },
            series: [
            {
                name: "Traffic Sources",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: this.getChartData(),
                // emphasis: {
                //   itemStyle: {
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: "rgba(0, 0, 0, 0.5)"
                //   }
                // }
            }
            ]
      }
    }
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>