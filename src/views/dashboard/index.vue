<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script setup>
import {useStore,mapGetters } from 'vuex'
import {computed} from 'vue'
 const store = useStore();
let name =computed(
mapGetters(['name']).name.bind({ $store: store })
)
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
