<template>

  <div class="mb-4">
    <!-- <img id="logo" src="./assets/logo.png" alt="not loaded"> -->
    <Navbar  />
<router-view />

        <!-- <div class="container">
              
    
          <div class="columns">
            <div class="column">
              <simple-upload />
            </div>
            <div class="column">
              <multiple-uploads />
            </div>
          </div>
          

          <dropzone  id="drop"  />
          
        </div> -->
  </div>

  
</template>

<script>
import SimpleUpload from './components/SimpleUpload.vue'
import MultipleUploads from './components/MultipleUploads.vue'
import Dropzone from './components/Dropzone.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    SimpleUpload,
    MultipleUploads,
    Dropzone,
    Navbar
  }
}
</script>

<style>
#drop{
  margin-top: 20vh;
}
</style>
