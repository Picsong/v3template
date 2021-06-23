<template>
  <div>
    <img class="h-7" alt="Vue logo" src="./assets/logo.png" />
    <a-button @click="info">123</a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { message } from 'ant-design-vue'
  export default defineComponent({
    name: 'App',
    setup() {
      const info = () => {
        message.info('This is a normal message')
      }
      return {
        info
      }
    }
  })
</script>
