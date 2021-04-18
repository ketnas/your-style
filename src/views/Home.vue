<template>
    <div id="home">
    <nav id="navigator" class="navbar" :class="{navbaropen: opened}">
      <div class="logo">LOGO</div>
      <ul class="navbar-nav">
        <li><a href="#Y">YOUR STYLE</a></li>
        <li><button @click="showModal = true">EXAMPLE</button></li>
        <li><a href="#P">PROJECT</a></li>
        <li><a href="#A">ABOUT US</a></li>
      </ul>
        <span class="open-slide"><i class="material-icons nav__icon" v-if="!opened" @click="opened = !opened">menu</i></span>
    </nav>
  <div id="side-menu" class="side-nav" :class="{sidenavopen: opened}" v-if="opened">
    <i class="material-icons nav__icon" @click="opened = !opened">close</i>
    <a href="#Y" class="one">YOUR STYLE</a>
    <button @click="showModal = true">EXAMPLE</button>
    <a href="#P">PROJECT</a>
    <a href="#A">ABOUT US</a>
  </div>
  <div class="popup" v-if="showModal">
    <div class="modal-vue">
    <div class="overlay" @click="showModal = false"></div>
    <div class="modal" v-if="showModal">
    <video width="400" controls autoplay><source src="../assets/vdo.mp4"></video>
    <h3>Example of use</h3>
    <button class="close" @click="showModal = false">CLOSE</button>
  </div>
      </div>
  </div>
  <div id="main" :class="{mainopen: opened}">
    <div id="Y"><yourstyle/></div>
    <div id="P"><project/></div>
    <div id="A"><about/></div>
  </div>
    </div>
</template>

<script>
import yourstyle from '../components/your-style.vue'
import project from '../components/project.vue'
import about from '../components/about.vue'
export default {
  name: 'home',
  components: {
    yourstyle,
    project,
    about
  },
  data: () => {
    return {
      opened: false,
      showModal: true
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.popup{
  height: 100%;
  width: 100%;
  position: fixed;
}
.modal-vue .overlay {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.modal-vue .modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;
  height: 600px;
  min-width: 350px;
  z-index: 1;
  margin: 100px auto;
  padding: 20px 30px;
  background-color: #fff;
}
.modal-vue .modal video{
  width: 100%;
}
.modal-vue .close{
  position: absolute;
  bottom: 50px;
  padding: 15px;
  font-size: 20px;
  color: #fff;
  background-color: #000;
  border: none;
}

nav .nav-title {
  display: inline-block;
  font-size: 22px;
  color: #fff;
}
#home{
  overflow-x: hidden;
}

.navbar{
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  overflow: hidden;
  height: 90px;
}

.logo{
  color: #fff;
  margin-left: 10%;
  font-weight:900;
  font-size: 30px;
}

.navbar a{
  font-family: 'Lato', sans-serif;
  font-weight: medium;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}
.navbar button{
  font-family: 'Lato', sans-serif;
  font-weight: medium;
  color: #fff;
  font-size: 20px;
  background-color: #000;
  border: none;
}
.navbar ul{
  display: flex;
  width: 600px;
  margin-right: 10%;
  margin-left: 5%;
  list-style: none;
  justify-content: space-between;
}

.navbar a:hover{
  color: #fff;
  text-decoration:underline;
}

#main{
  overflow: hidden;
  width: 100%;
}

@media (min-width:700px) {
.open-slide{
  display: none;
}
}
@media (max-width:700px) {
.modal-vue .modal {
  height: 400px;
}
.navbaropen{
  background-color: #000;
  overflow: hidden;
  height: 90px;
}

.logo{
  color: #fff;
  margin-left: 5%;
  font-weight:900;
  font-size: 30px;
}
.navbar-nav{
  display: none;
  visibility: hidden;
}

.navbar ul{
  display: none;
}

.sidenavopen{
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.3s;
}

.side-nav a{
  font-family: 'Lato', sans-serif;
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  display: block;
  transition: 0.3s;
}
.side-nav button{
  font-family: 'Lato', sans-serif;
  padding: 10px 10px 10px 30px;
  font-size: 22px;
  color: #fff;
  display: block;
  transition: 0.3s;
  font-size: 20px;
  background-color: #111;
  border: none;
}

.side-nav a:hover{
  color: #fff;
  text-decoration:underline;
}
.side-nav .nav__icon{
  position: fixed;
  right: 0;
  top: 10px;
}
.side-nav .one{
  margin-top: 20px;
}

/* .side-nav .btn-close{
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
} */

.open-slide{
  position: absolute;
  right: 5%;
  z-index: 2;
}

}
</style>
