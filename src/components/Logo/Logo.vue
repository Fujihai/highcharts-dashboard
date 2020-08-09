<template>
  <div class="logo-wrapper">
    <img src='../../assets/logo.png' alt="logo" class="img"/>
    <span class="title" v-if="showTitle">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: 'Dashboard'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    height: 28px;
    width: 32px;
  }

  .title {
    font-size: 20px;
    font-weight: bolder;
    color: #ffffff;
    padding-left: 8px;
  }
}
</style>


