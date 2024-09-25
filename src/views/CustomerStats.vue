<!-- src/views/CustomerStats.vue -->
<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Customer Stats</h1>
    <p>Total Customers: {{ totalCustomers }}</p>
  </div>
</template>

<script>
import { useCustomerStore } from '../store'
import { computed, onMounted } from 'vue'

export default {
  setup() {
    const store = useCustomerStore()

    onMounted(() => {
      store.fetchCustomers()
    })

    const totalCustomers = computed(() => store.customers.length)

    return {
      totalCustomers
    }
  }
}
</script>
