<template>
  <div id="state-form">
    <form @submit.prevent="handleSubmit">
      <label>State name</label>
      <input v-model="state.name" type="text" />
      <label>State UF</label>
      <input v-model="state.uf" type="text" />
      <button>Add State</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'state-form',
  data() {
    return {
      state: {
        name: '',
        uf: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add:state', this.state)
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
