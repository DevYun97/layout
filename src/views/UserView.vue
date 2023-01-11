<template>
  <div class="mainContain">
    <div class="UserPartA">
      <h1>로그인 / 회원가입</h1>
      <div class="loginPart">
        <button @click="lgModalYN('open')">Login</button>
      </div>
      <div class="JoinPart">
        <button @click="jModalYN(true)">JOIN</button>
      </div>
    </div>
    <div class="UserPartB">
      <h1>마이 페이지</h1>
    </div>
  </div>
  
  <div class="window" v-if="loginModal == true">   
    <div class="modal">
      <span class="modalCloseBtn" @click="lgModalYN('close')">X</span>
      <h3>로그인</h3>
      <div class="form">
        <label for="UID">아이디</label>    
        <input type="text" id="UID" class="" v-model="user_id" />
      </div>
      <div class="form">
        <label for="UPW">비밀번호</label>    
        <input type="password" id="UPW" class="" v-model="user_pw" />
      </div>
      <input type="button" class="btnBlack" @click="loginBtn" value="로그인" />
    </div>
  </div>

  <div class="window" v-if="joinModal == true">   
    <div class="modal">
      <span class="modalCloseBtn" @click="jModalYN(false)" >X</span>
      <h3>회원가입</h3>
      <div class="form">
        <label for="user_id">아이디</label>    
        <input type="text" id="user_id" v-model="UID" />
      </div>
      <div class="form">
        <label for="user_pw">비밀번호</label>    
        <input type="password" id="user_pw" v-model="user_pw" />
      </div>
      <div class="form">
        <label for="user_name">이름</label>    
        <input type="text" id="UPW" v-model="user_name" />
      </div>
      <div class="form">
        <label for="user_email">이메일</label>    
        <input type="email" id="user_email" v-model="user_email" />
      </div>
      <div class="form">
        <label for="user_phone">전화번호</label>    
        <input type="phone" id="user_phone" v-model="user_phone" />
      </div>
      <div class="form" >
        <label for="joinChk" style="font-size: 16px;" >  
          <input type="checkbox" id="joinChk" style="margin:0n auto;" v-model="joinChk" />
          회원가입에 동의합니다.
        </label>  
      </div>
      <input type="button" class="btnBlack" @click="joinBtn" value="회원가입" />
    </div>
  </div>
</template>

<script>
  
  export default {

    data:() =>({
      UID: user_id,
      user_pw: user_pw,
      user_name: user_name,
      user_email: user_email,
      user_phone: user_phone,
      // UID: '',
      // user_pw: '',
      // user_name: '',
      // user_email: '',
      // user_phone: '',
      joinChk: '',
      loginModal: false,
      joinModal: false
    }),
    methods: {
      lgModalYN(data){
        if(data == 'open') {
          this.loginModal = true
        } else if(data == 'close') {
          this.loginModal = false
        }
      },
      jModalYN(join){
        if( join == true ) {
          this.joinModal = true
        } else if( join == false ) {
          this.joinModal = false
        }
      },
      loginBtn(){
      this.axios.post('/api/user/login', {
        UID: this.UID,
        UPW: this.user_pw
      })
      .then(res => {
        console.log( "UID: "+ UID + " UPW: "+UPW + " res: " + res.data)
      })
      .catch(err => {
        console.log("err: " + err.res);
      })
      },
      joinBtn(){
        console.log(this.$data)
        if(!this.UID || this.UID == ""){
          console.log("id false")
          return false
        }
        if(!this.user_pw || this.user_pw == ""){
          console.log("pw false")
          return false
        }
        if(!this.user_name || this.user_name == ""){
          console.log("user_name false")
          return false
        }
        if(!this.user_email || this.user_email == ""){
          console.log("user_email false")
          return false
        }
        if(!this.user_phone || this.user_phone == ""){
          console.log("user_phone false")
          return false
        }
        if(!this.joinChk || this.joinChk == ""){
          console.log("joinChk false")
          return false }
         else {
          this.axios.post('/api/user/join', {
            UID: this.UID,
            UPW: this.user_pw,
            UName: this.user_name,
            UEmail: this.user_email,
            UPhone: this.user_phone
          })
          .then(res => {
            console.log( "UID: "+ UID + " UPW: "+UPW + " res: " + res.data)
          })
          .catch(err => {
            console.log("err: " + err.res)
          })
        }      
      }
    }
  }
</script>

<style>
  .window {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    width: 500px;
    text-align: center;
    border: 2px solid  rgb(255, 255, 255);
    border-radius: 15px;
    /* background-color: rgb(236, 236, 236); */
    color: rgb(14, 28, 14);
    background-color: rgba(223, 231, 249, 0.809);
  }
  .modal > h3 {
    font-size: 20px;
    margin-top : 0;
  }
  /* 이름을 지어주세요 */
  .modalCloseBtn { 
    position: relative;
    top: -35px;
    left: 230px;
    font-size: 30px;
    color: white;
  }
  .modalCloseBtn:hover {
   cursor: pointer;
  }
  .form {
    width: 340px;
    margin: 20px auto;
    text-align: start;
    display: block;
    font-size: 12px;
  }
  .form > input {
    padding: 7px 8px 3px;
    width: 320px;
    height: 25px;
    border: 0px solid white;
    border-bottom: 1px solid black;
    /* background-color에 쓰이는 값으로 배경색 없애기  */
    background: transparent;
    border-radius: 3px;
    font-size: 18px;
  }
  .form > input:focus {
    outline: none;
  }
  .btnBlack {
    width: 150px;
    height: 40px;
    margin: 10px 0 30px;
    border: 1px solid rgba(14, 28, 14, 0.472);
    border-radius: 30px;
    background-color: rgb(14, 28, 14);
    color: rgb(236, 236, 236);
    font-size: 18px;
  }
</style>
