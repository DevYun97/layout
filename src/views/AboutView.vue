<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="testContent" />
    <input type="button" @click="subBtn" value="전송"/>
    <!-- <p>{{a}}</p> -->
  </div>
</template>

<script>
  export default {
    name: 'about',
    data: () => ({
      testContent: '1234'
    }),
    methods: {
      subBtn() {
        const dd = new FormData();
        dd.append('demo', this.testContent)
        this.axios.get('http://localhost:8080/test', dd)
        .then(res =>{
          console.log("res:"+res)
          console.log("testContent:"+this.testContent)
        })
        .then(err=>{
          console.log("err:" + err);
        })
      }
    }
  }
</script>
