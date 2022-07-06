<template>
  <ThemeHeader />
  <div class="main">
    <div class="main__content">
      <p id="welcome__text">Go to the header for using Application. Good luck!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
body{
  background-image: url("../assets/Background.jpg");
}
.main{
  margin-top: 150px;
  display: flex;
  justify-content: center;

  .main__content{
    width: 800px;
    #welcome__text{
      background: rgba(0, 0, 0, 0.35);
      color: #ffffff;
      font-size: 80px;
      padding: 20px 20px;
      text-align: center;
      border-radius: 50px;
      border: 2px solid #ffffff;
      box-shadow: 0 0 100px #ffffff;
    }
  }
}
@media (max-width: 1440px) {
  .main{
    .main__content{
      width: 700px;
      #welcome__text{
        color: #ffffff;
        font-size: 60px;
        padding: 20px 20px;
        text-align: center;
        border-radius: 50px;
        border: 2px solid #ffffff;
        box-shadow: 0 0 100px #ffffff;
      }
    }
  }
}
@media (max-width: 1024px) {
  .main{
    .main__content{
      width: 500px;
      #welcome__text{
        color: #ffffff;
        font-size: 40px;
        padding: 20px 20px;
        text-align: center;
        border-radius: 50px;
        border: 2px solid #ffffff;
        box-shadow: 0 0 100px #ffffff;
      }
    }
  }
}
@media (max-width: 600px) {
  .main{
    .main__content{
      width: 400px;
      #welcome__text{
        color: #ffffff;
        font-size: 25px;
        padding: 20px 20px;
        text-align: center;
        border-radius: 50px;
        border: 2px solid #ffffff;
        box-shadow: 0 0 100px #ffffff;
      }
    }
  }
}
@media (max-width: 450px) {
  .main{
    margin-top: 90px;
    .main__content{
      width: 270px;
      #welcome__text{
        color: #ffffff;
        font-size: 18px;
        padding: 20px 20px;
        text-align: center;
        border-radius: 50px;
        border: 2px solid #ffffff;
        box-shadow: 0 0 100px #ffffff;
      }
    }
  }
}
</style>