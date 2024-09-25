// src/store/index.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCustomerStore = defineStore('customer', {
    state: () => ({
        customers: []
    }),
    actions: {
        async fetchCustomers() {
            const response = await axios.get('http://localhost:3000/customers')
            this.customers = response.data
        },
        async addCustomer(customer) {
            const response = await axios.post('http://localhost:3000/customers', customer)
            this.customers.push(response.data)
        },
        async deleteCustomer(id) {
            await axios.delete(`http://localhost:3000/customers/${id}`)
            this.customers = this.customers.filter(customer => customer.id !== id)
        }
    }
})
