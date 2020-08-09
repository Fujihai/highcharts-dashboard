<script>
export default {
  name: "RouteView",
  props: {
    keepAlive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  render() {
    const {
      $route: { meta }
    } = this;
    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    );
    const notKeep = <route-view />;
    return meta.keepAlive ? inKeep : notKeep;
  }
};
</script>