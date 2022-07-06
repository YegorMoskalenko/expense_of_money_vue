<template>
  <div>
    <flatPickr v-model="date" @change="$emit('emitDate', this.date)"/>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    flatPickr
  },
  props: {
    date: {
      type: String,
      default: () => null
    }
  },
  mounted() {
     const flatpickrInput = document.querySelector('.flatpickr-input')
     flatpickrInput.setAttribute('placeholder', 'Choose Date')
     flatpickrInput.style.width = 110 + 'px'
  }
}
</script>