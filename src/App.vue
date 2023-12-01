<template>
  <div>
    <div class="road">
      <div class="leftLine"></div>
      <div class="middleLine"></div>
      <div class="rightLine"></div>
      <div v-for="car in traffic" :key="car.id">
        <div :id="car.id" :class="{ [car.id]: true, stopped: car.stopped }" @click="stopCar(car)"></div>
        <b-modal :id="car.id" centered title="BootstrapVue" hide-header-close no-close-on-backdrop hide-footer>
          <b-button block variant="success" @click="letGo(car)">Let go</b-button>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<style>
@import "assets/css/style.css";
</style>

<script>
export default {
  data() {
    return {
      traffic: [
        {id: "car1", stopped: false},
        {id: "car2", stopped: false},
        {id: "car3", stopped: false},
        {id: "car4", stopped: false}
      ]
    };
  },
  methods: {
    stopCar(car) {
      this.$bvModal.show(`${car.id}`);
      return car.stopped = !car.stopped;
    },
    letGo(car){
      car.stopped = !car.stopped
      this.$bvModal.hide(`${car.id}`);
    }
  },
  mounted() {
    // You can add any additional logic or data manipulation here
  },
};
</script>
