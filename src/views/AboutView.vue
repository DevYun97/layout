<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" :v-model="testContent" />
    <input type="button" @click="button" value="전송"/>
    <p>{{a}}</p>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data: () => ({
      testContent: "",
      a: ''
    }),
    methods: {
      button () {
        this.axios.get('/test', { 
          params: { tCont: this.testContent } 
        })
        .then(result => {
          console.log(result.data)
          this.a = result.data
        })
      }
    }
  }
</script>

