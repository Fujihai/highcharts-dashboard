<template>
  <div>
    <a-card>
      <a-row>
        <a-tabs>
          <a-tab-pane v-for="(tab) in TAB_DATA" :tab="tab.name" :key="tab.key">
            <a-row :gutter="16">
              <a-col :sm="24" :md="24" :xl="8">
                <pie-chart :series="pieChartData(tab.key)"/>
              </a-col>
              <a-col :sm="24" :md="24" :xl="16">
                <stack-column-chart :series="stackColumnChartData(tab.key)"/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import PieChart from "@/components/Charts/PieChart";
import StackColumnChart from "@/components/Charts/StackColumnChart";
import BOTTOM_CHART_DATA from "@/mock/bottom_chart_data";
import { mapState } from "vuex";

const TAB_DATA = [
  {
    key: "city",
    name: "城市"
  },
  {
    key: "age",
    name: "年龄"
  },
  {
    key: "gender",
    name: "性别"
  }
];

export default {
  name: "Bottom",
  data() {
    return {
      TAB_DATA,
      BOTTOM_CHART_DATA
    };
  },
  components: {
    PieChart,
    StackColumnChart
  },
  computed: {
    ...mapState({
      midTabIndex: state => state.home.midTabIndex
    }),
    pieChartData(tabKey) {
      return tabKey => BOTTOM_CHART_DATA[this.midTabIndex]["pie_chart"][tabKey];
    },
    stackColumnChartData() {
      return tabKey => BOTTOM_CHART_DATA[this.midTabIndex]["column_chart"][tabKey];
    }
  },
  mounted() {
    console.log("当前数据：", BOTTOM_CHART_DATA);
  }
};
</script>
 