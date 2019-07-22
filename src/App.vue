<template>
  <div class="section">
    <div class="container">

      <!-- <div class="columns">
        <div class="column">
           <simple-upload />
        </div>
        <div class="column">
          <multiple-uploads />
        </div>
      </div> -->

      <dropzone   />
       
    </div>
  </div>
</template>

<script>
// import SimpleUpload from './components/SimpleUpload.vue'
// import MultipleUploads from './components/MultipleUploads.vue'
import Dropzone from './components/Dropzone.vue';

export default {
  name: 'app',
  components: {
    // SimpleUpload,
    // MultipleUploads,
    Dropzone,
  }
}
</script>

<style>

</style>
