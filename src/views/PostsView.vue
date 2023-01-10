<template>
  <div class="mainContain">
    <div class="itemContain">
      <h3>POSTS</h3>
      <button id="postsBtn" class="btn" @click="postsWriteBtn">글 작성</button>      
    </div>
    <div class="itemContain"></div>
  </div>
</template>

<script>

  export default {

    data:() =>({
    }),
    methods: {
      postsWriteBtn(){
        let pBtn = document.getElementById('postsBtn');
        if( pBtn.classList.contains('btnClick')){
          pBtn.classList.remove(String('btnClick'));
        } else {
          pBtn.classList.add(String('btnClick'));
        }       
      }
    }
  }
</script>

<style>
  .mainContain{
    margin: 0 50px;
  }
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
</style>
