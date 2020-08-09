<template>
  <a-layout-sider class="sider" v-model="collapsed" :trigger="null" collapsible :width="240">
    <logo title="Dashboard" :showTitle="!collapsed"/>
    <a-menu
      mode="inline"
      theme="dark"
      :style="{ height: '100vh', borderRight: 0 }"
      :default-open-keys="['Home']"
      :selected-keys="[path]"
    >
      <a-menu-item v-for="item in Menus" :key="item.path.substr(1)">
        <router-link :to="item.path">
          <a-icon :type="item.icon"/>
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Logo from "@/components/Logo";
import { Menus } from "@/config/menus.config";

export default {
  name: "Sidebar",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      Menus,
      path: "home"
    };
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>
