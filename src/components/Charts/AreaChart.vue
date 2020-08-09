<template>
  <div class="area-chart"></div>
</template>

<script>
import { chartMixin } from "@/mixins/chart_mixin";
var Highcharts = require("highcharts");

//  面积图随机数据生成
const mockData = [];
const beginDay = new Date().getTime();

for (let i = 0; i < 50; i++) {
  mockData.push({
    x: new Date(beginDay + 1000 * 60 * 60 * 24 * i).getTime(),
    y: Math.round(Math.random() * 100 + 100)
  });
}

export default {
  name: "AreaChart",
  mixins: [chartMixin],
  data() {
    return {
      areaChartRef: undefined
    };
  },
  methods: {
    getChartOption() {
      return Highcharts.chart(this.$el, {
        chart: {
          type: "area",
          marginLeft: 0
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          visible: false,
          type: 'datetime',
          dateTimeLabelFormats: {
            day: '%e. %b'
          }
        },
        yAxis: {
          title: false,
          gridLineWidth: 0,
          visible: false
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        series: [
          {
            marker: {
              enabled: false,
              radius: 1
            },
            lineWidth: 0,
            name: "",
            color: "#975FE4",
            data: mockData
          }
        ]
      });
    },
    initChart() {
      this.areaChartRef = this.getChartOption();
      this.initChartRef(this.areaChartRef);
    },
    updateChartData() {}
  },
  mounted() {
    this.initChart();

    setTimeout(() => {
      this.areaChartRef.reflow();
    }, 5);
  }
};
</script>

