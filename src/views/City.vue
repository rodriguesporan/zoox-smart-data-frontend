<template>
  <div class="city">
    <CityForm @add:city="addCity" :states="states" />
    <CityTable :cities="cities" />
  </div>
</template>

<script>
// @ is an alias to /src
import CityTable from '@/components/CityTable.vue'
import CityForm from '@/components/CityForm.vue'
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://zoox-smart-data-api.herokuapp.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjIxNTg5MDEsImV4cCI6MTU2MjQxODEwMX0.4VqH3YnAu_-jKrFjS97yS-E-2eRSCSso4TxQjMkJLb4'
  }
})

export default {
  name: 'city',
  components: {
    CityTable,
    CityForm
  },
  data() {
    return {
      loading: false,
      error: null,
      cities: [],
      states: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.error = null
      this.loading = true
      const resCities = await api.get('/cities')
      this.cities = resCities.data
      const resStates = await api.get('/states')
      this.states = resStates.data
      this.loading = false
    },
    async addCity(city) {
      this.error = null
      this.loading = true
      const { name, state } = city
      const response = await api.post('/cities', {
        name,
        state
      })
      this.loading = false
      this.cities = [...this.cities, response.data]
    }
  }
}
</script>
