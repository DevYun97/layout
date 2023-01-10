<template>
  <div class="home mainContain">
    <div>
      <h2>" Hello Vue.js ! "</h2>
      <smaill>Hello, this website is designed for the purpose of studying springboot using vue.js and JPA.</smaill>
      <p>
        안녕하세요. 이 웹 사이트는 vue.js와 JPA를 활용한 springboot 공부 목적으로 제작된 학습 목적의 테스트용 사이트 입니다. <br>
        하단의 버튼을 통해 웹 사이트의 기능을 이용하실 수 있습니다.
      </p>
    </div>
    <div class="routerNav">
      <router-link to="/user/user" class="routerBtn">
        <div class="routerText">
          <div>User</div>
          <small>Login / Join Or MyPage</small>
        </div>
        <p>마이 페이지</p>
      </router-link> 
      <router-link to="/posts/posts" class="routerBtn">
        <div class="routerText">
          <div>Posts</div>
          <small>Creating a Post</small>
        </div>
        <p>게시글</p>
      </router-link> 
      <router-link to="/about" class="routerBtn">
        <div class="routerText">
          <div>About</div>
          <small>about "프로젝트" site</small>
        </div>
        <p>사이트소개</p>
      </router-link>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
  .home {
    padding: 0px 40px;
  }
  h2 {
    font-size: 40px;
  }
  .routerNav{
    width: 100%;   
    padding: 20px 0;
    position: relative;
    position:fixed;
    bottom: 100px;
    display: flex;
    justify-content: center;
  }
  .routerBtn {
    width: 220px;
    height: 150px;
    padding: 20px;
    border: 1px solid  rgb(236, 236, 236);
    color: rgb(236, 236, 236);
  }
  .routerBtn:hover {
    background-color: rgb(236, 236, 236);
    border: 1px solid  rgb(236, 236, 236);
    color: rgb(14, 28, 14);
    font-weight: bold;
  }
  .routerText > div {
    font-size: 18px;
    /* margin-bottom: 80px; */
  }
  .routerText > small {
    margin-top: 5px;
    font-size: 12px; 
  }
  .routerBtn > p {
    margin-top: 80px;
    font-size: 20px;
    font-weight: bold;
  }
</style>
