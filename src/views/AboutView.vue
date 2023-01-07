<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="testContent" />
    <input type="button" @click="subBtn" value="전송"/>
    <!-- <p>{{a}}</p> -->
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'about',
    data: () => ({
      testContent: ' '
    }),
    methods: {
      subBtn() {
        const dd = new FormData();
        dd.append('demo', this.testContent)
        this.axios.get('http://localhost:8088/test', dd)
        .then(res =>{
          console.log(result.dd)
        })
        .then((err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
