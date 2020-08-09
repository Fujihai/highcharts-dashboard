const app = {
  namespaced: true,
  state: {
    collapseTriggerCount: 0
  },
  mutations: {
    updateCollapseTriggerCount(state) {
      state.collapseTriggerCount++;
    }
  }
};

export default app;
