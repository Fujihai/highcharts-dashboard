<template>
  <div class="column-chart"></div>
</template>

<script>
import { chartMixin } from "@/mixins/chart_mixin";
var Highcharts = require("highcharts");

const mockData = [];
const beginDay = new Date().getTime();

for (let i = 0; i < 10; i++) {
  mockData.push({
    x: new Date(beginDay + 1000 * 60 * 60 * 24 * i).getTime(),
    y: Math.round(Math.random() * 100 + 20)
  });
}

export default {
  name: "ColumnChart",
  mixins: [chartMixin],
  data() {
    return {
      columnChartRef: undefined
    };
  },
  methods: {
    getChartOptions () {
      return Highcharts.chart(this.$el, {
         chart: {
            type: 'column',
            marginLeft: 0
          },
          title: {
            text: null
          },
          subtitle: {
            text: null
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          xAxis: {
            visible: false,
            type: 'datetime',
            dateTimeLabelFormats: {
              day: '%e. %b'
            }
          },
          yAxis: {
            min: 0,
            visible: false,
            title: {
              text: null
            }
          },
          series: [{
            color: '#3BA1FF',
            name: '数值',
            data: mockData
          }]
      });
    },
    initChart() {
      this.columnChartRef = this.getChartOptions();
      this.initChartRef(this.columnChartRef);
    },
    updateChartData() {}
  },
  mounted() {
    this.initChart();

    setTimeout(() => {
      this.columnChartRef.reflow();
    }, 5);
  }
};
</script>


