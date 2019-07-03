<template>
  <div class="city">
    <img alt="Vue logo" src="../assets/logo.png" />
    <City />
  </div>
</template>

<script>
// @ is an alias to /src
import City from '@/components/City.vue'

export default {
  name: 'city',
  components: {
    City
  }
}
</script>
