<!-- src/views/CustomerManagement.vue -->
<template>
  <div class="p-4 bg-transparent">
    <h1 class="text-2xl mb-4">Customer Management</h1>
    <form @submit.prevent="addCustomer" class="space-y-4">
      <input
        v-model="newCustomer.name"
        placeholder="Customer Name"
        class="border p-2 w-full"
        required
      />
      <input
        v-model="newCustomer.age"
        type="number"
        placeholder="Age"
        class="border p-2 w-full"
        required
        min="0"
      />
      <input
        v-model="newCustomer.address"
        placeholder="Address"
        class="border p-2 w-full"
        required
      />
      <input
        v-model="newCustomer.pincode"
        placeholder="Pincode"
        class="border p-2 w-full"
        required
        pattern="\d{6}"
      />
      <input
        v-model="newCustomer.email"
        type="email"
        placeholder="Email"
        class="border p-2 w-full"
        required
      />
      <button type="submit" class="bg-blue-500 text-white p-2 w-full">Add Customer</button>
    </form>
    <ul class="mt-4">
      <li
        v-for="customer in customers"
        :key="customer.id"
        class="flex justify-between items-center border-b py-2"
      >
        {{ customer.name }} - {{ customer.email }}
        <button @click="deleteCustomer(customer.id)" class="bg-red-500 text-white p-2">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCustomerStore } from '../store'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const store = useCustomerStore()
    const newCustomer = ref({ name: '', age: '', address: '', pincode: '', email: '' })

    onMounted(() => {
      store.fetchCustomers()
    })

    const addCustomer = () => {
      store.addCustomer(newCustomer.value)
      newCustomer.value = { name: '', age: '', address: '', pincode: '', email: '' }
    }

    const deleteCustomer = (id) => {
      store.deleteCustomer(id)
    }

    return {
      customers: store.customers,
      newCustomer,
      addCustomer,
      deleteCustomer
    }
  }
}
</script>
