const home = {
  namespaced: true,
  state: {
    bottomChartData: [],
    midTabIndex: 0
  },
  mutations: {
    updateBottomChartData(state, data) {
      state.bottomChartData = data;
    },
    updateMidTabIndex(state, idx) {
      state.midTabIndex = idx;
    }
  }
};

export default home;
