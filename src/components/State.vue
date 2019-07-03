<template>
  <div class="states">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>UF</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="state in states" :key="state._id">
          <td>{{ state.name }}</td>
          <td>{{ state.uf }}</td>
          <td>{{ state.createdAt }}</td>
          <td>{{ state.updatedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      error: null,
      states: []
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      axios
        .get('https://zoox-smart-data-api.herokuapp.com/states')
        .then(response => {
          this.states = response.data
          this.loading = false
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style></style>
