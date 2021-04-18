<template>
  <div id="about">
      <div class="name">
          <h1>About Us</h1>
          <span>Name   Lastname</span>
          <h3>Education</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
      </div>
      <div class="contact">
          <h1>Contact Us</h1>
          <div class="data">
              <i class="material-icons nav__icon">email</i>
              <span>mail</span>
          </div>
          <div class="data">
              <i class="material-icons nav__icon">school</i>
              <span>university</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
<style>
#about{
  height: 300px;
  background-color: #3B3B3B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.name {
  width: 610px;
  height: 200px;
  margin-left: 5%;
}
.name h1,h3,span {
  margin-bottom: 5px;
  margin-top: 20px;
}

.contact {
  width: 400px;
  height: 200px;
  margin-left: 5%;
}
.contact h1{
    margin-bottom: 10px;
}
.data{
    display: flex;
    margin-bottom: 10px;
    margin-left: 20px;
    align-items: center;
}
.data span{
    margin: 0px;
}
.nav__icon {
  font-size: 50px;
  color: #fff;
  margin-right: 20px;
}

@media (max-width:500px) {
#about{
  height: 500px;
  display: flex;
  flex-direction: column;
}
.name {
  width: 85%;
  margin: 20px auto;
}
.contact {
  width: 85%;
  margin: 20px auto;
}
}
</style>
