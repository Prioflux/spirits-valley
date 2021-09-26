import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('VSelect', {
  extends: vSelect,
  props: {
    filterable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false,
    }
  }
})