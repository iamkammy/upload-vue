<template>
   <form @submit.prevent="sendFile" enctype="multipart/form-data" >

   <div v-if="message"
    :class="`message ${error ? 'is-danger' : 'is-success'}`"
   >
       <div class="message-body">
           {{message}}
       </div>
   </div>


        <div class="dropzone">
            <input
                type="file"
                class="input-file"
                ref="file"
                @change="sendFile"
            />
            <p v-if="!uploading" class="call-to-action">
              Browse or Drag Your Files here
            </p>

            <p v-if="uploading" class="progress-bar">
                <progress
                class="progress is-primary"
                :value="progress"
                max="100"
                >
                {{progress}} %
                </progress>
            </p>
        </div>

        <div class="content">
            <ul v-if="uploadedFiles.length" class="list is-hoverable">
                <li class="list-item"   v-for="file in uploadedFiles" :key="file.originalname">
                    {{file.originalname}} 
                   <i class="fas pull-right fa-check"></i>
                     </li>

            </ul>
        </div>

   </form>
</template>

<script>
import axios from 'axios';
export default {
    name: "Dropzone",
    data(){
        return {
            file: '',
            message: "",
            error:false,
            baseUrl: 'http://128.199.59.139/vue-api/',
            uploading: false,
            uploadedFiles:[],
            progress: 0
        }
    },
    methods:{
        selectFile(){
            const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
            const MAX_SIZE = 20000000;
              const file = this.$refs.file.files[0];
            const tooLarge = file.size > MAX_SIZE;

          
            if(allowedTypes.includes(file.type) && !tooLarge){
                this.file = file;
                this.error = false;
                this.message = "";
                // this.sendFile();
            
            } else{
                this.error = true;
                this.message = tooLarge ? `Too Large Max Size is ${MAX_SIZE/1000}Kb` : "Only images are allowed";
            }
            
        },

        async sendFile(){

            const file = this.$refs.file.files[0];

            const formData = new FormData();
            formData.append('file', file)
            try{
                this.uploading = true;
                const res =  await  axios.post( this.baseUrl+ 'dropzone', formData, {
                    onUploadProgress: e => this.progress = Math.round(e.loaded * 100 / e.total )
                });
                this.uploadedFiles.push(res.data.file);
                this.uploading = false; 
                 this.message = "File has been uploaded";
                 this.file = "";
                 this.error = false;
            } catch(err){
                // console.log(err);
                this.uploading = false;
                // this.message = err.response.data.error;
                this.message = "File not uploaded";
                this.error = true;
            }

          
        }


    }
}
</script>

<style scoped>
.dropzone{
    min-height: 200px;
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    outline: 2px dashed grey;
    outline-offset: -10px;
    background-color: lightcyan;
    color: dimgray; 
    transition: 0.3s;
}
.dropzone:hover{
    background-color: lightblue;
}
.dropzone:hover .call-to-action{
    color: white;
}

.dropzone .call-to-action{
    font-size: 1.2rem;
    text-align: center;
    padding: 70px 0;
    /* position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%,-50%); */

}
.dropzone .progress-bar{
    text-align: center;
    padding: 70px 10px;
}
.input-file{
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;

}
.pull-right{
    float: right !important;
    color: green;
    margin-right: 20px;
    margin-top: 4px;
}
</style>

