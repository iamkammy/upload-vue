<template>

  <div class="section">
    <!-- <img id="logo" src="./assets/logo.png" alt="not loaded"> -->
    <!-- <navbar  /> -->


        <div class="container">
              
    
          <div class="columns">
            <div class="column">
              <simple-upload />
            </div>
            <div class="column">
              <multiple-uploads />
            </div>
          </div>
          

          <dropzone  id="drop"  />
          
        </div>
  </div>

  
</template>

<script>
import SimpleUpload from './components/SimpleUpload.vue'
import MultipleUploads from './components/MultipleUploads.vue'
import Dropzone from './components/Dropzone.vue';
import navbar from './components/navbar.vue';

export default {
  name: 'app',
  components: {
    SimpleUpload,
    MultipleUploads,
    Dropzone,
    navbar
  }
}
</script>

<style>
#drop{
  margin-top: 20vh;
}
</style>
