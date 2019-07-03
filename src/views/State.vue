<template>
  <div class="state">
    <img alt="Vue logo" src="../assets/logo.png" />
    <State />
  </div>
</template>

<script>
// @ is an alias to /src
import State from '@/components/State.vue'

export default {
  name: 'state',
  components: {
    State
  }
}
</script>
