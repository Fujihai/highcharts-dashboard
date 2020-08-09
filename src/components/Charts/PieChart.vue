<template>
  <div class="pie-chart"></div>
</template>

<script>
import { chartMixin } from "@/mixins/chart_mixin";
var Highcharts = require("highcharts");

export default {
  name: "PieChart",
  mixins: [chartMixin],
  props: {
    series: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      pieChartRef: undefined,
      seriesData: []
    };
  },
  methods: {
    initChart() {
      const self = this;
      this.pieChartRef = Highcharts.chart(this.$el, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
          },
          series: {
            events: {
              click: function(event) {
                // 通过 setTimeout 创建宏任务，在宏任务中通过 getSelectedPoints 饼图块
                setTimeout(() => {
                  // console.log('PieChart.vue(click event 回调) ', self.pieChartRef.getSelectedPoints())
                  self.$emit("sclick", self.pieChartRef.getSelectedPoints());
                }, 0);
              }
            }
          }
        },
        series: [
          {
            name: "占比",
            colorByPoint: true,
            data: [
              {
                name: "Edge",
                y: 4.67
              },
              {
                name: "Safari",
                y: 4.18
              },
              {
                name: "Opera",
                y: 1.6
              },
              {
                name: "QQ",
                y: 1.2
              }
            ]
          }
        ]
      });

      this.initChartRef(this.pieChartRef);
    },
    updateChartData(data) {
      this.pieChartRef.series[0].update({
        data: data
      });
    },
    getSelectedSliced() {
      return this.pieChartRef && this.pieChartRef.getSelectedPoints();
    }
  },
  watch: {
    series: {
      immediate: true,
      deep: true,
      handler(newVal) {
        this.seriesData = newVal;
        console.log('PieChart: ', newVal)

        setTimeout(() => {
          this.pieChartRef && this.updateChartData(this.seriesData);
          this.pieChartRef.reflow();
        }, 5);
      }
    }
  },
  mounted: function() {
    this.initChart();

    setTimeout(() => {
      this.pieChartRef.reflow();
    }, 5);
  }
};
</script>

<style lang="scss" scoped>
.pie-chart {
  width: 100%;
  height: 100%;
}
</style>
