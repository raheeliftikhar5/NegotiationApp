<template>
  <div class="modal fade" :class="{'show': show}" :visible="show">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div v-if="weatherData">
            <h3>{{weatherData.name}}</h3>
            <p class="mb-0" v-if="weatherData.weather.length">
              {{weatherData.main.temp}} F / {{weatherData.weather[0].main}}  
            </p>
          </div>
          <div v-else>
            No weather info
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="onClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h1 class="modal-heading mb-4">
            <span v-if="success"> Success! </span>
            <span v-else> Failure! </span>
          </h1>
          <p class="max-offered mb-1">Offered salary: {{maxOffer}}</p>
          <p class="min-expected mb-0">Expected salary: {{minExpected}}</p>

          <button type="button" class="btn btn-primary mt-4" @click="onClose">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherAPI from '../services/WeatherAPI';
export default {
  name: "ModalComponent",
  data() {
    return {
      weatherData: null,
      weatherAPI: new WeatherAPI(),
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    maxOffer: {
      type: Number,
      default: 0,
    },
    minExpected: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    success() {
      return this.minExpected <= this.maxOffer ? true : false;
    },
  },
  // watch: {
  //   show() {
  //     if(this.show) {
  //       this.refreshWeatherData()
  //     }
  //   }
  // },
  mounted() {
    this.refreshWeatherData()
  },
  methods: {
    refreshWeatherData() {
      this.weatherAPI.refreshWeatherData().then(resp => {
        this.weatherData = resp;
        console.log(resp);
      })
    },
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style type="scss">
.modal.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.41);
}
</style>
