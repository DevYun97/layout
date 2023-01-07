<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="testContent" />
    <input type="button" @click="subDate" value="전송"/>
    <!-- <p>{{a}}</p> -->
  </div>
</template>

<script>
  export default {
    name: 'about',
    data: () => ({
      testContent: ""
    }),
    methods: {
      subDate() {
        this.$axios.post('http://localhost:8088/test', { 
          params: { tCont: this.testContent } 
        })
        .then((err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
