<template>
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