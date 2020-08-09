<template>
  <div class="footer">
    <div class="copyright">
      Copyright&nbsp;
      <a-icon type="copyright"/>&nbsp;2020&nbsp;
      <span>Leif</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  height: 64px;
  line-height: 64px;
  text-align: center;

  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>