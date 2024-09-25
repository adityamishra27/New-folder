<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/components/AppSidebar.vue -->
<template>
  <div class="flex">
    <div class="fixed top-0 left-0 p-2 bg-gray-800 text-white z-50">
      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
    <div
      :class="{ 'w-64': isOpen, 'w-0': !isOpen }"
      class="h-screen bg-gray-800 text-white overflow-hidden transition-width duration-00"
    >
      <nav class="mt-10" v-if="isOpen">
        <router-link
          to="/customers"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          @click="scrollToSection"
        >
          Customer Management
        </router-link>
        <router-link
          to="/stats"
          class="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          @click="scrollToSection"
        >
          Customer Stats
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    scrollToSection(event) {
      event.preventDefault()
      const targetId = event.target.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>