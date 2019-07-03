<template>
  <div id="city-form">
    <form @submit.prevent="handleSubmit">
      <label>City name</label>
      <input v-model="city.name" type="text" />
      <label>State</label>
      <select v-model="city.state">
        <option
          v-for="state in states"
          v-bind:value="state._id"
          :key="state._id"
        >
          {{ state.name }}
        </option>
      </select>
      <button>Add City</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'city-form',
  props: {
    states: Array
  },
  data() {
    return {
      city: {
        name: '',
        uf: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add:city', this.city)
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
