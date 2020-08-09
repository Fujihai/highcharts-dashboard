<template>
  <div class="linechart"></div>
</template>

<script>
import { chartMixin } from "@/mixins/chart_mixin";
var Highcharts = require("highcharts");

export default {
  name: "LineChart",
  mixins: [chartMixin],
  props: {
    series: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      lineChartRef: undefined
    }
  },
  methods: {
    getChartOption() {
      return Highcharts.chart(this.$el, {
        chart: {
          type: "spline",
          marginLeft: 0
        },
        title: {
          text: null
        },
        subtitle: {
          text: null
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            hour: '%W 时'
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
          enabled: true
        },
        series: [
          {
            marker: {
              enabled: false,
              radius: 1
            },
            name: "",
            color: "#ff77a9",
            data: [1, 2, 3, 4, 5, 6, 7]
          },
          {
            marker: {
              enabled: false,
              radius: 1
            },
            name: "",
            color: "#58a5f0",
            data: [8, 9, 10, 67, 8, 7]
          }
        ]
      });
    },
    initChart() {
      this.lineChartRef = this.getChartOption();
      this.initChartRef(this.lineChartRef);
    },
    updateChartData(data) {
      if (data && Object.prototype.toString.call(data) === '[object Array]' && data.length > 0) {
        console.log('折线图数据updateChartData：', data)
        this.lineChartRef.series[0].update({
          name: data[0].name,
          data: data[0].data
        })

        this.lineChartRef.series[1].update({
          name: data[1].name,
          data: data[1].data
        })
      }
    }
  },
  watch: {
    series: {
      immediate: true,
      handler (newVal) {
        if (newVal && newVal.length > 0) {
          setTimeout(() => {
            this.lineChartRef && this.updateChartData(newVal)
            this.lineChartRef && this.lineChartRef.reflow()
          }, 5)
        }
      }
    }
  },
  mounted: function () {
    this.initChart()
  },
  beforeDestroy: function () {
    this.lineChartRef.reflow()
  }
};
</script>


