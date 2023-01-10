<template>
  <div class="window" v-if="postsModal == true">   
    <div class="modal">
      <h3>게시글 상세 모달창</h3>
      <div class="modalItem">
        <div class="form test">
          {{ user }}
          {{ modalDate }}
        </div>    
        <div class="form">
          <label for="UID">글제목</label>    
          <div> {{ modalTitle }} </div>
        </div>
        <div class="form">
          <label for="UID">글내용</label>
          <div> {{ modalContent }} </div>
        </div>
      </div>
      <input class="btn btnBlack" type="button" @click="psModalYN('close')" value="확인">
      <!-- <input type="button" class="btnBlack" @click="postsBtn" value="확인" /> -->
    </div>
  </div>  
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  data:() =>({
      postsList:[
        { idx:1, title : '테스트 게시글1', date: '22.00.01'},
        { idx:2, title : '테스트 게시글2', date:'23.00.02' },
        { idx:3 ,title : '테스트 게시글3', date:'23.00.03' }
      ],
      postsModal: true,
      modalIdx: 0,
      user:'testsetsd',
      modalTitle:'대충 테스트용 글 내용 작성',
      modalContent: '글 내용 씨부렁씨부렁 씨시나닒말ㄹㄴㅇㅁ',
      modalDate: '00.00.00'
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
      }
    }
})
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
  .test {
    font-size: 14px;
    text-align: end;
  }
</style>


