<template>
  <div class="section">
    <div class="container">
        <simple-upload />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SimpleUpload from './components/SimpleUpload.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    SimpleUpload
  }
}
</script>

<style>

</style>
