<template>
  <div class="mainContain">
    <div class="itemContain">
      <h3>POSTS</h3>
      <button id="postsBtn" class="btn" @click="writeModalYN('open')">글 작성</button>      
    </div>
    <div class="listContain">
      <div class="listLabel">
        게시글 리스트
      </div>
      <div v-for="(a, i) in postsList" :key="i" class="list">
        <div @click="postsIDX(i)"> 
          <span style=" width: 10px; margin:0 3px;"> {{ i+1 }} </span> 
          {{ postsList[i].title }}
        </div>
        <div>{{ postsList[i].date }}</div>
      </div>
    </div>
  </div>
  <div class="window" v-if="postsModal == true">   
    <div class="modal">
      <h3>게시글 상세 모달창</h3>
      <div class="modalItem">
        <div class="form test">
          {{ user }}
          {{ modalDate }}
        </div>    
        <div class="form">
          <label for="">글제목</label>    
          <div> {{ modalTitle }} </div>
        </div>
        <div class="form">
          <label for="">글내용</label>
          <div> {{ modalContent }} </div>
        </div>
      </div>
      <input type="button" class="btn btnBlack" @click="psModalYN('close')" value="확인">
      <!-- <input type="button" class="btnBlack" @click="postsBtn" value="확인" /> -->
    </div>
  </div>

  <div class="window" v-if="writeModal == true">   
    <div class="modal">
      <h3>게시글 작성 모달창</h3>
      <div class="modalItem">  
        <div class="form">
          <label for="posts_title"> - 제목 - </label>
          <input type="text" id="posts_title" v-model="posts_title" />
        </div>
        <div class="form">
          <label for="posts_content"> - 내용 - </label>
          <textarea rows="1" id="posts_content" @input="textareaHeight" v-model="posts_content"></textarea>
        </div>
      </div>
      <div class="btnBox">
        <input type="button" class="btn btnDesign_White" @click="writeModalYN('close')" value="확인">
        <input type="button" class="btn btnDesign_Dark" @click="writeSubBtn()" value="작성" />
      </div>
      
    </div>
  </div>
</template>

<script>

  export default {

    data:() =>({
      postsList:[
        { idx:1, title : '테스트 게시글1', date: '22.00.01'},
        { idx:2, title : '테스트 게시글2', date:'23.00.02' },
        { idx:3 ,title : '테스트 게시글3', date:'23.00.03' }
      ],
      postsModal: false,
      modalIdx: 0,
      user:'testsetsd',
      modalTitle:'대충 테스트용 글 내용 작성',
      modalContent: '테스트용 글 작성 내용 글 내용 글 내용 더미데이터 작성',
      modalDate: '00.00.00',
      writeModal: false,
      posts_title:'',
      posts_content:''
    }),
    methods: {
      postsWriteBtn(){
        let pBtn = document.getElementById('postsBtn');
        if( pBtn.classList.contains('btnClick')){
          pBtn.classList.remove(String('btnClick'));
        } else {
          pBtn.classList.add(String('btnClick'));
        }       
      },
      postsIDX(idx){
        console.log(idx)
        this.postsModal = true,
        this.modalIdx = this.postsList[idx].idx,
        this.modalTitle = this.postsList[idx].title,
        this.modalDate = this.postsList[idx].date
      },
      psModalYN(data){
        if(data == 'open') {
          this.postsModal = true
        } else if(data == 'close') {
          this.postsModal = false
        }
      },
      writeModalYN(data) {
        if(data == 'open') {
          this.writeModal = true
        } else if(data == 'close') {
          this.writeModal = false
        }
      },
      writeSubBtn(){
        this.axios.post('/api/v1/posts', {
          title: this.posts_title,
          content: this.posts_content
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

<style>
  .itemContain {
    display: flex;
    justify-content: space-between;    
    align-items: center;
    max-width: 700px;
    margin: 10px;
    padding: 10px 25px;
    border: 1px solid;
    border-radius: 10px;
  }
  .listContain {
    max-width: 700px;
    margin: 30px 10px;
    padding: 20px 25px;
    border: 1px solid;
    border-radius: 10px;
  }
  .listLabel {
    font-size: 14px;
    margin-bottom: 25px;
    padding: 0 10px 5px;
    border-bottom: 1px solid;
  }
  .list {
    display: flex;
    justify-content: space-between;
    margin :10px 0;
  }

  .window {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(14, 28, 14, 0.484);
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
    margin: 40px 0 0;
  }
  .modalItem {
    padding: 10px;
  }
  .form {
    width: 340px;
    margin: 20px auto;
    text-align: start;
    display: block;
    font-size: 12px;
  }
  .form > div {
    padding: 7px 8px 3px;
    width: 320px;
    height: auto;
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
  .btnDesign_Dark {
    width: 135px;
    height: 40px;
    margin: 10px 0 30px;
    border: 1px solid rgba(14, 28, 14, 0.472);
    border-radius: 30px;
    background-color: rgb(14, 28, 14);
    color: rgb(236, 236, 236);
    font-size: 18px;
  }
  .btnDesign_White {
    width: 135px;
    height: 40px;
    margin: 10px 0 30px;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 30px;
    background-color: rgb(236, 236, 236);
    color: rgba(14, 28, 14);
    font-size: 18px;
    font-weight: bold;
  }
  .btn {
    margin-left: 5px;
    margin-right: 5px;
  }
  .test {
    font-size: 14px;
    text-align: end;
  }
  .form > input {
    padding: 7px 8px 3px;
    width: 320px;
    border: 0px solid white;
    border-bottom: 1px solid black;
    /* background-color에 쓰이는 값으로 배경색 없애기  */
    background: transparent;
    border-radius: 3px;
    font-size: 18px;
  }
  .form > textarea {
    padding: 7px 8px 3px;
    width: 320px;
    border: 0px solid white;
    border-bottom: 1px solid black;
    /* background-color에 쓰이는 값으로 배경색 없애기  */
    background: transparent;
    border-radius: 3px;
    font-size: 18px;
  }
  .form > input:focus, textarea:focus {
    outline: none;
  }
</style>
