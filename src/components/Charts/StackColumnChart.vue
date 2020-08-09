<template>
  <div class="stack-column-chart"></div>
</template>

<script>
import { chartMixin } from "@/mixins/chart_mixin";
var Highcharts = require("highcharts");

export default {
  name: "StackColumnChart",
  mixins: [chartMixin],
  props: {
    series: {
      type: [Array, Object],
      required: true
    }
  },
  data() {
    return {
      stackColumnChartRef: undefined,
      seriesData: []
    };
  },
  watch: {
    series: {
      immediate: true,
      handler(newVal) {
        setTimeout(() => {
          if (newVal && newVal.length > 0) {
            const seriesData = [...newVal];
            this.seriesData = seriesData;
            this.stackColumnChartRef && this.updateChartData(this.seriesData);
            this.stackColumnChartRef && this.stackColumnChartRef.reflow();
          }
        }, 0);
      }
    }
  },
  methods: {
    generateChartOptions() {
      return Highcharts.chart(this.$el, {
        chart: {
          type: "column",
          marginLeft: 0
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          visible: true,
          type: "datetime",
          dateTimeLabelFormats: {
            day: "%e. %b"
          }
        },
        yAxis: {
          min: 0,
          title: {
              text: null
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
        },
        series: [
          {
            name: "John",
            data: [5, 3, 4, 7, 2]
          },
          {
            name: "Jane",
            data: [2, 2, 3, 2, 1]
          },
          {
            name: "Joe",
            data: [3, 4, 4, 2, 5]
          }
        ]
      });
    },
    removeChartSeries() {
      // 移除历史 series
      if (this.stackColumnChartRef) {
        while (this.stackColumnChartRef.series.length) {
          this.stackColumnChartRef.series[0].remove();
        }
      }
    },
    initChart() {
      this.stackColumnChartRef = this.generateChartOptions(this.chartType);
      this.initChartRef(this.stackColumnChartRef);
    },
    updateChartData(data) {
      const start = new Date().getTime();
      // 移除历史 series
      this.removeChartSeries();

      // 方式一
      // const len = data.length || 0
      // for (let i = 0; i < len; i++) {
      //   this.stackColumnChartRef &&
      //   this.stackColumnChartRef.addSeries({
      //     name: data[i].name,
      //     data: data[i].data
      //   })
      // }

      // // 方式二(默认 addSeries 操作会触发 redraw 重绘，置为 false 则将不会触发重绘)
      const len = data.length || 0;
      for (let i = 0; i < len; i++) {
        this.stackColumnChartRef &&
          this.stackColumnChartRef.addSeries(
            {
              name: data[i].name,
              data: []
            },
            false
          );

        this.stackColumnChartRef &&
          this.stackColumnChartRef.series[i].update(
            {
              data: data[i].data
            },
            false
          );
      }

      // 单独触发一次重绘
      this.stackColumnChartRef.redraw();

      const end = new Date().getTime();
      console.log("column chart draw time: ", end - start);

      this.$emit("update");
    }
  },
  mounted() {
    this.initChart();

    setTimeout(() => {
      this.stackColumnChartRef.reflow();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
.column-chart {
  width: 100%;
  height: 100%;
}
</style>
