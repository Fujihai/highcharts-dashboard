<template>
  <a-layout-header class="header">
    <a-row type="flex" justify="space-between" align="middle">
      <a-col>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="triggerSidebarCollapsed"
        ></a-icon>
      </a-col>
      <a-col>
        <a-avatar
          src="https://avatars1.githubusercontent.com/u/28208916?s=460&u=f024d2b4cf238dd1cc7f2a2c2a91edaeb5a01bcc&v=4"
        />
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
export default {
  name: "GlobalHeader",
  data() {
    return {
      collapsed: true
    };
  },
  methods: {
    triggerSidebarCollapsed () {
      this.collapsed = !this.collapsed
      this.$emit('toggle', this.collapsed)
    }
  }
};
</script>

<style scoped>
.header {
  padding: 0 24px;
  background: #fff;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
