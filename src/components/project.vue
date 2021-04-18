<template>
  <div id="project">
    <div class="title">
      <h1>Title</h1>
      <h4>Abstract</h4>
      <span
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Et netus et
        malesuada fames ac. Lobortis mattis aliquam faucibus purus in massa
        tempor nec feugiat. Tellus rutrum tellus pellentesque eu tincidunt
        tortor aliquam. Aliquet nibh praesent tristique magna sit amet purus.
        Duis at tellus at urna condimentum mattis pellentesque id. Eget nullam
        non nisi est sit amet facilisis. Amet porttitor eget dolor morbi non
        arcu risus. Risus commodo viverra maecenas accumsan lacus vel facilisis
        volutpat. Felis donec et odio pellentesque diam volutpat commodo
        sed.</span
      >
    </div>
    <div class="style">
      <div class="fashion">
        <img src="../assets/photo.svg" alt="" />
        <div class="text">
          <h2>Kawaii Style</h2>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus
            et malesuada fames ac. Lobortis
          </span>
        </div>
      </div>
      <div class="fashion">
        <img src="../assets/photo.svg" alt="" />
        <div class="text">
          <h2>........ Style</h2>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus
            et malesuada fames ac. Lobortis
          </span>
        </div>
      </div>
      <div class="fashion">
        <img src="../assets/photo.svg" alt="" />
        <div class="text">
          <h2>......... Style</h2>
          <span
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus
            et malesuada fames ac. Lobortis
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project'
}
</script>
<style>
#project {
  height: 800px;
  display: flex;
  justify-content: center;
}

.title {
  width: 444px;
  margin-top: 100px;
  margin-left: 2%;
}
.title h1,h4{
  margin-bottom: 30px;
}

.style {
  width: 600px;
  margin-left: 5%;
  margin-right: 2%;
  margin-top: 50px;
}
.fashion{
    display: flex;
    margin-bottom: 50px;
    align-items: center;
}
.fashion img{
  width: 300px;
  height: 200px;
}
.fashion .text{
    margin-left: 30px;
}
.fashion .text h2,span{
    margin-bottom: 20px;
}

@media (max-width:800px) {
#project {
  height: 1200px;
  display: flex;
  flex-direction: column;
}

.title,.style{
  margin: 20px auto;
}
}

@media (max-width:500px) {
#project {
  height: 1700px;
  display: flex;
  flex-direction: column;
}

.title {
  width: 85%;
  margin: 20px auto;
}

.style{
  width: 85%;
  margin: 20px auto;
}
.fashion{
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
}
.fashion .text{
    margin-left: 20px;
}
}
</style>
