<template>
  <div>
    <img class="h-7" alt="Vue logo" src="./assets/logo.png" />
    <a-button @click="info">
      {{ text }}
    </a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { message } from 'ant-design-vue'
  export default defineComponent({
    name: 'App',
    setup() {
      const text = ref(import.meta.env.VITE_APP_TITLE)
      const info = () => {
        message.info('This is a normal message')
      }
      return {
        info,
        text
      }
    }
  })
</script>
