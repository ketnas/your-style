<template>
    <div id="yourstyle">
      <div class="import">
      <i class="material-icons nav__icon">add_photo_alternate</i>
      <label for="file-upload" class="input">
        Submit
      </label>
      <input id="file-upload" type="file" @change="onFileChange">
      </div>
      <div class="show">
        <div class="img-show"></div>
        <img v-if="url" :src="url" />
        <!-- <img src="../assets/style.svg" alt="kAWAII"> -->
        <div class="space" v-if="!url" :src="!url">></div>
        <h1 v-if="url" :src="url">{{style}}</h1>
      </div>
    </div>
</template>

<script>
export default {
  name: 'yourstyle',
  data: () => {
    return {
      opened: false,
      style: 'KAWAII STYLE',
      url: null
    }
  },
  methods: {
    onFileChange (e) {
      const file = e.target.files[0]
      this.url = URL.createObjectURL(file)
    }
  }
}
</script>
<style>
#yourstyle{
  height: 670px;
  background-color: #3B3B3B;
  display: flex;
  justify-content: center;
  align-items: center;
}

.import{
  width: 510px;
  height: 340px;
  border: 5px dashed white;
  margin: 0 10% 0 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.import .nav__icon {
  font-size: 80px;
  color: #fff;
  padding-left: 25px;
}
.import .input{
  margin-top: 20px;
  padding: 15px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
}
.import input[type="file"]{
  display: none;
}

.show{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.show .space{
  width: 340px;
  height: 435px;
}
.show img{
  width: 340px;
  height: 435px;
}
.show h1{
  margin-top: 30px;
  color: #fff;
}

@media (max-width:500px) {
#yourstyle{
  height: 900px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
}

.import{
  width: 85%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.show{
  width: 80%;
  height: 400px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.show img{
  width: 100%;
}
.show h1{
  margin-top: 20px;
  color: #fff;
}
}
</style>
