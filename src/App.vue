<!-- src/App.vue -->
<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
