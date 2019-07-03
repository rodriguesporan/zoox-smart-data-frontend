<template>
  <div class="cities">
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
          <th>Estado</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in cities" :key="city._id">
          <td>{{ city.name }}</td>
          <td>{{ city.state.name }}</td>
          <td>{{ city.createdAt }}</td>
          <td>{{ city.updatedAt }}</td>
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
      cities: []
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
        .get('https://zoox-smart-data-api.herokuapp.com/cities')
        .then(response => {
          this.cities = response.data
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
