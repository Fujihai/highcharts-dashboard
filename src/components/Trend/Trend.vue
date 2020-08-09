<template>
  <div class="chart-trend">
    <span>
      <slot name="term"></slot>
    </span>
    <span class="mid">
      <slot name="rate"></slot>
    </span>
    <span :class="['trend-icon', trend]">
      <a-icon :type="'caret-' + trend"/>
    </span>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Trend",
  props: {
    term: {
      type: String,
      default: ""
    },
    trend: {
      type: String,
      default: "up"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.chart-trend {
  display: inline-block;
  font-size: 14px;
  line-height: 22px;

  .mid {
    margin: 0 4px;
  }

  .trend-icon {
    font-size: 12px;

    &.up,
    &.down {
      margin-left: 2px;
      position: relative;
      top: 1px;

      i {
        font-size: 14px;
        transform: scale(0.83);
      }
    }

    &.up {
      color: #f5222d;
    }
    &.down {
      color: #52c41a;
      top: -1px;
    }
  }
}
</style>
