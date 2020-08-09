import { mapState } from "vuex";

export const chartMixin = {
  data() {
    return {
      chartRef: undefined
    };
  },
  computed: {
    ...mapState({
      collapseTriggerCount: state => state.app.collapseTriggerCount
    })
  },
  watch: {
    collapseTriggerCount: {
      immediate: true,
      deep: true,
      handler() {
        this.resizeChart(this.chartRef);
      }
    }
  },
  methods: {
    initChartRef(ref) {
      this.chartRef = ref;
    },
    resizeChart(ref) {
      setTimeout(() => {
        ref && ref.reflow();
      }, 100);
    }
  }
};
