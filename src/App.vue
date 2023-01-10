<template>
  <nav>
    <router-link to="/" id="projectName">프로젝트명</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  /* background-color: rgb(4, 38, 4); */
  background-color: rgb(14, 28, 14);
  color: rgb(236, 236, 236);
}
a {
  text-decoration-line: none;
}
nav {
  margin: 40px 30px;
}
#projectName {
  font-size: 20px;
  color: rgb(255, 255, 255);
}
.btnClick {
  background-color: rgb(236, 236, 236);
  border: 1px solid  rgb(236, 236, 236);
  color: rgb(14, 28, 14);
  font-weight: bold;
}
.btn {
    height: 40px; 
    padding: 3px 15px;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 20px;
    color: rgb(236, 236, 236);   
    background: transparent;
  }
  .btn:hover {
    cursor: pointer;
  }
</style>
