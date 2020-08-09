<template>
  <a-row :gutter="32">
    <a-col :sm="24" :md="24" :xl="6">
      <chart-card
        title="日活跃用户数"
        :total="thousandthsFormatter(12378912689)"
        :style="{ marginBottom: '24px' }"
        :hasFooter="true"
      >
        <a-tooltip title="日活跃用户数" slot="action">
          <a-icon type="info-circle-o"/>
        </a-tooltip>
        <div style="padding: 19px 0;">
          <trend trend="up">
            <span slot="term">周同比</span>
            <span slot="rate">30%</span>
          </trend>
          <trend trend="down">
            <span slot="term">日环比</span>
            <span slot="rate">40%</span>
          </trend>
        </div>
        <span slot="footer">
          当前量 12364
        </span>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="24" :xl="6">
      <chart-card
        title="访问次数"
        :total="thousandthsFormatter(12378912689)"
        :style="{ marginBottom: '24px' }"
        :hasFooter="true"
      >
        <a-tooltip title="访问次数" slot="action">
          <a-icon type="info-circle-o"/>
        </a-tooltip>
        <div>
          <area-chart style="height: 60px;"/>
        </div>
        <span slot="footer">
          当前量 6666
        </span>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="24" :xl="6">
      <chart-card
        title="周活跃用户数"
        :total="thousandthsFormatter(179895453564)"
        :style="{ marginBottom: '24px' }"
        :hasFooter="true"
      >
        <a-tooltip title="周活跃用户数" slot="action">
          <a-icon type="info-circle-o"/>
        </a-tooltip>
        <div>
          <column-chart style="height: 60px;"/>
        </div>
        <span slot="footer">
         当前量 60%
        </span>
      </chart-card>
    </a-col>
    <a-col :sm="24" :md="24" :xl="6">
      <chart-card
        title="访问人数"
        :total="thousandthsFormatter(65645024)"
        :style="{ marginBottom: '24px' }"
        :hasFooter="true"
      >
        <a-tooltip title="访问人数" slot="action">
          <a-icon type="info-circle-o"/>
        </a-tooltip>
        <div>
          <area-chart style="height: 60px;"/>
        </div>
        <span slot="footer">
          当前量 2333
        </span>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script>
import ChartCard from "@/components/ChartCard";
import Trend from "@/components/Trend";
import AreaChart from "@/components/Charts/AreaChart";
import ColumnChart from "@/components/Charts/ColumnChart"

export default {
  name: "Top",
  components: {
    ChartCard,
    Trend,
    AreaChart,
    ColumnChart
  },
  methods: {
    thousandthsFormatter(value) {
      // 千分位数字格式化
      return value && value.toLocaleString("en");
    }
  }
};
</script>

