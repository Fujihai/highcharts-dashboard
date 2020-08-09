<template>
  <div>
    <top />
    <middle />
    <bottom />
  </div>
</template>

<script>
import Top from './components/Top'
import Middle from './components/Middle'
import Bottom from './components/Bottom'

export default {
  name: "Home",
  components: {
    Top,
    Middle,
    Bottom
  }
};
</script>

