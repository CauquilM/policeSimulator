<template>
  <div>
    <div class="road">
      <div class="car1"
           @click="stopAnimation">
      </div>
      <div class="leftLine"></div>
      <div class="car2"
           @click="stopAnimation">
      </div>
      <div class="middleLine"></div>
      <div class="car3"
           @click="stopAnimation">
      </div>
      <div class="rightLine"></div>
      <div class="car4"
           @click="stopAnimation">
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background: blueviolet;
}

.road {
  position: relative;
  width: 30%;
  height: 100vh;
  margin: 0 auto;
  background-color: grey;
  box-sizing: border-box;
}

.leftLine, .rightLine {
  box-sizing: border-box;;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill=%27none%27 stroke=%27white%27 stroke-width='7' stroke-dasharray='1%2c 25' stroke-dashoffset='20' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
}

.leftLine {
  left: 25%;
}

.rightLine {
  left: 75%;
}

.middleLine {
  box-sizing: border-box;
  border: 3px solid gold;
  border-top: none;
  border-bottom: none;
  width: 9px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
}

.car1 {
  position: absolute;
  left: 7%;
  width: 40px;
  height: 50px;
  background-color: red;
  animation: moveDown 8s linear infinite;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  transition: transform 2s ease-out;
}

.car2 {
  position: absolute;
  left: 33%;
  width: 40px;
  height: 50px;
  background-color: red;
  animation: moveDown 10s linear infinite;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  transition: transform 2s ease-out;
}

.car3 {
  position: absolute;
  left: 58%;
  width: 40px;
  height: 50px;
  background-color: red;
  animation: moveUp 8s linear infinite;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  transition: transform 2s ease-out;
}

.car4 {
  position: absolute;
  left: 82%;
  width: 40px;
  height: 50px;
  background-color: red;
  animation: moveUp 10s linear infinite;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
  transition: transform 2s ease-out;
}

.paused {
  animation-play-state: paused;
}

@keyframes moveDown {
  0% {
    top: 0;
  }
  100% {
    top: calc(97% - 30px);
  }
}
@keyframes moveUp {
  0% {
    top: calc(97% - 30px);
  }
  100% {
    top: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    stopAnimation() {
      const playerElement = this.$el.querySelector('.player');
      playerElement.classList.toggle('paused');

      if (playerElement.classList.contains('paused')) {
        // Gradually slow down the animation
        playerElement.style.animationPlayState = 'paused';
        this.playerTransform = 'rotate(15deg)';
      } else {
        // Resume the animation
        playerElement.style.animationPlayState = 'running';
        this.playerTransform = 'rotate(0deg)';
      }
    },
  },
  mounted() {
    // You can add any additional logic or data manipulation here
  },
};
</script>
