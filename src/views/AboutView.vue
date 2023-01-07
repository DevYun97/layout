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
      testContent: ' '
    }),
    methods: {
      subDate() {
        const dd = new FormData();
        dd.append('demo', this.testContent)
        this.axios.post('/test', dd)
        .then(result =>{
          console.log(result.data)
        })
        .then((err)=>{
          console.log(err);
        })
      }
    }
  }
</script>
