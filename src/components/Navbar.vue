<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"> FileUpload </a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> -->
     <router-link to="/single" class="nav-link">Single File</router-link>
     <router-link to="/multiple" class="nav-link">Multiple Files</router-link>
     <router-link to="/" class="nav-link">Drag & Drop</router-link>
     
    </ul>
   
  </div>
</nav>
</template>

<script>
export default {
     name: 'Navbar',
     data(){
         return {

         }
     }
}
</script>
<style>
.navbar-brand{
   color: #17a2b8 !important;
    line-height: 44px;
    font-family: monospace;

}
</style>
