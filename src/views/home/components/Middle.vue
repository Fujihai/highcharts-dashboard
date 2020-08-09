<template>
  <a-row :gutter="32">
    <a-col :sm="24" :md="24" :xl="12">
      <!-- <a-spin :spinning="false" tip="数据加载中..."> -->
      <a-card>
        <a-tabs @change="onTabsChange">
          <a-tab-pane
            :forceRender="true"
            v-for="(tab, index) in LINE_CHART_DATA"
            :key="index"
            :tab="tab.name"
          >
            <div style="height: 250px;">
              <line-chart style="height: 250px;" :series="tab.line_chart.series || []"/>
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-card>
      <!-- </a-spin> -->
    </a-col>
    <a-col :sm="24" :md="24" :xl="12">
      <chart-card
        title="访问次数"
        :total="thousandthsFormatter(25678789440)"
        :style="{ marginBottom: '24px' }"
        :hasFooter="false"
      >
        <a-tooltip title="访问次数" slot="action">
          <a-icon type="info-circle-o"/>
        </a-tooltip>
        <div style="padding: 6px 0;">
          <trend trend="up">
            <span slot="term">周同比</span>
            <span slot="rate">30%</span>
          </trend>
          <trend trend="down">
            <span slot="term">日环比</span>
            <span slot="rate">50%</span>
          </trend>
        </div>
        <div>
          <area-chart style="height: 220px;"/>
        </div>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script>
import LineChart from "@/components/Charts/LineChart";
import ChartCard from "@/components/ChartCard";
import AreaChart from "@/components/Charts/AreaChart";
import Trend from "@/components/Trend";
import { mapMutations } from "vuex"

// 折线图数据生成
const LINE_CHART_DATA = [];
const beginDay = new Date().getTime();

for (let i = 0; i < 2; i++) {
  let obj = {
    name: "",
    line_chart: {
      series: []
    }
  };
  let curData = [];
  let cmpData = [];
  for (let j = 0; j < 50; j++) {
    let timestamp = new Date(beginDay + 1000 * 60 * 60 * j).getTime();
    curData.push({
      x: timestamp,
      y: Math.round(Math.random() * 1000)
    });

    cmpData.push({
      x: timestamp,
      y: Math.round(Math.random() * 1000)
    });
  }

  // obj["name"] = `标签 ${i + 1}`;
  obj['name'] = i === 0 ? "阅读时长" : "视频时长";
  obj["line_chart"]["series"].push({ name: "当前数据", data: curData });
  obj["line_chart"]["series"].push({ name: "对比数据", data: cmpData });

  LINE_CHART_DATA.push(obj);
}

export default {
  name: "Middle",
  components: {
    LineChart,
    AreaChart,
    ChartCard,
    Trend
  },
  data() {
    return {
      LINE_CHART_DATA
    };
  },
  methods: {
    ...mapMutations('home', {
      setMidTabIndex: "updateMidTabIndex"
    }),
    thousandthsFormatter(value) {
      return value && value.toLocaleString("en");
    },
    onTabsChange (key) {
      console.log('Middle.vue: ', key)
      this.setMidTabIndex(key)
    }
  }
};
</script>
