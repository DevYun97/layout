<template>
  <div class="about mainContain">
    <h1>This is an about page</h1>
    <input type="text" v-model="testContent" />
    <input type="button" @click="subBtn" value="전송"/>
    <!-- <p>{{a}}</p> -->
    <button @click="postBtn">post</button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data: () => ({
      testContent: '1234',
      testone: 'userID'
    }),
    methods: {
      subBtn() {
        const dd = new FormData();
        dd.append('demo', this.testContent)
        //http://localhost:8080/test 시 프론트는 문제없지만 백단에서 에러발생
        this.axios.get('http://localhost:8088/test', dd)
        .then(res =>{
          console.log("res:"+res)
          console.log("testContent:"+this.testContent)
        })
        .then(err=>{
          console.log("err:" + err);
        })
      },
      postBtn(){
        this.axios.post('/api/v1/posts', {
          title: this.testone,
          content: this.testContent
        })
        .then(res =>{
          console.log("res:"+res.data)
        })
        .catch(err=>{
          console.log(err.res)
        })
      }
    }
  }
</script>
