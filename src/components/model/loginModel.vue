<template>
  <div class="window" v-if="loginModal == true">   
    <div class="model">
      <span class="popNO" @click="lgModalYN('close')">X</span>
      <h3>로그인</h3>
      <div class="form">
        <label for="UID">아이디</label>    
        <input type="text" id="UID" class="" v-model="user_id" />
      </div>
      <div class="form">
        <label for="UPW">비밀번호</label>    
        <input type="password" id="UPW" class="" v-model="user_pw" />
      </div>
      <input type="button" class="btn" @click="loginBtn" value="로그인" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    data:()=>({
      user_id: '',
      user_pw: '',
      loginModal: false
  }),
    methods: {
      lgModalYN(data){
        if(data == 'open') {
          this.loginModal = true
        } else if(data == 'close') {
          this.loginModal = false
        }
      }
    },
    loginBtn(){
      this.axios.post('/api/user/login', {
        UID: this.user_id,
        UPW: this.user_pw
      })
      .then(res => {
        console.log( "UID: "+ UID + " UPW: "+UPW + " res: " + res.data)
      })
      .catch(err => {
        console.log("err: " + err.res);
      })
    }
  }
</script>

<style>

</style>