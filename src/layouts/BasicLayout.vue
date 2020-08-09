<template>
  <a-layout>
    <sidebar :collapsed="collapsed"/>
    <a-layout>
      <!-- 头部 -->
      <global-header :collapsed="collapsed" @toggle="toggle"/>
      <!-- 内容区 -->
      <a-layout-content :style="{ height: '100%', margin: '24px 24px 0' }">
        <transition name="page-transition">
          <route-view/>
        </transition>
      </a-layout-content>
      <!-- 底部 -->
      <global-footer/>
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import RouteView from "./RouteView";
import { mapMutations } from 'vuex'

export default {
  name: "BasicLayout",
  components: {
    Sidebar,
    GlobalHeader,
    GlobalFooter,
    RouteView
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    ...mapMutations('app', {
      updateToggleCount: 'updateCollapseTriggerCount'
    }),
    toggle() {
      this.collapsed = !this.collapsed;
      this.updateToggleCount()
    }
  }
};
</script>

<style lang="scss" scoped>
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

