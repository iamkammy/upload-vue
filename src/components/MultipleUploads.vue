<template>
   <form @submit.prevent="sendFile" enctype="multipart/form-data" >

   <div v-if="message"
    :class="`message ${error ? 'is-danger' : 'is-success'}`"
   >
       <div class="message-body">
           {{message}}
       </div>
   </div>


        <div class="field mt-4 ml-2">
            <div class="file is-boxed is-warning">
                <label class="file-label">
                    <input 
                    multiple
                    type="file"
                    ref="files"
                    @change="selectFile"
                    class="file-input"
                     />
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>

                        <span class="file-label">
                            Choose Multiple files...
                        </span>
                    </span>


                </label>
            </div>
        </div>

        <div class="field w-25">
            <div v-for="(file,index) in files" :key="index"
            
             :class="`level ${file.invalidMessage && 'has-text-danger'}`"
             
             >
                <div class="level-left">
                    <div class="level-item">
                        {{file.name}}
                       <span v-if="file.invalidMessage">&nbsp;- {{file.invalidMessage}} </span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a @click.prevent="files.splice(index,1); uploadFiles.splice(index,1)" class="delete"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="field ml-2">
            <button  :disabled="!selected" class="button is-info">Send</button>
        </div>
   </form>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
export default {
    name: "MultipleUploads",
    data(){
        return {
            files: [],
            selected : false,
            uploadFiles:[],
            message: "",
            error:false,
             baseUrl: 'https://fileupload-api.herokuapp.com/'
        }
    },
    methods:{
        selectFile(){
            this.selected = true;
            const files = this.$refs.files.files;
            this.uploadFiles = [...this.files, ...files];
            this.files = [
                ...this.files,
                ..._.map(files, file => ({
                    name: file.name,
                    size: file.size,
                    type : file.type,
                    invalidMessage : this.validate(file)
                }))
            ]

        },

        validate(file){
           
            const MAX_SIZE = 200000;
             const allowedTypes = ["image/jpeg","image/webp","pdf", "image/png", "image/gif"];

            if(file.size > MAX_SIZE){
                return `Max size is ${MAX_SIZE/1000}Kb`;
            }
            if(!allowedTypes.includes(file.type)){
                return "Not an image";
            }
            return "";
        },

        async sendFile(){
            const formData = new FormData();
            _.forEach(this.uploadFiles, file =>{
                if(this.validate(file) === ""){
                    formData.append('files', file);
                }
            });

            try {
                   const resp = await axios.post(this.baseUrl+ 'multiple', formData);
                   console.log(resp);
                   this.message = "Files has been uploaded";
                   this.files = [];
                   setTimeout(()=>{
                     this.message = "";
                 },3000)
                   this.selected = false;
                   this.error = false;
                   this.uploadFiles = []; 
            } catch (err) {
                this.message = err.response.data.error;
                this.error = true;
            }
        }


    }
}
</script>

<style>
.level{
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 5px !important;
}
</style>
