<template>
  <div class="city">
    <CityForm @add:city="addCity" :states="states" />
    <CityTable :cities="cities" @delete:city="deleteCity" />
  </div>
</template>

<script>
// @ is an alias to /src
import CityTable from '@/components/CityTable.vue'
import CityForm from '@/components/CityForm.vue'
import axios from 'axios'
import { format, parseISO } from 'date-fns'

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
      const baseURL = 'https://zoox-smart-data-api.herokuapp.com'
      const { data } = await axios.post(`${baseURL}/sessions`)
      this.api = axios.create({
        baseURL,
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })
      this.error = null
      this.loading = true
      const resCities = await this.api.get('/cities')
      this.cities = resCities.data.map(city => {
        const { createdAt, updatedAt } = city
        city.createdAt = format(parseISO(createdAt), 'dd/MM/yyyy H:m:s')
        city.updatedAt = format(parseISO(updatedAt), 'dd/MM/yyyy H:m:s')
        return city
      })
      const resStates = await this.api.get('/states')
      this.states = resStates.data
      this.loading = false
    },
    async addCity(city) {
      this.error = null
      this.loading = true
      const { name, state } = city
      const response = await this.api.post('/cities', {
        name,
        state
      })
      this.loading = false
      this.cities = [...this.cities, response.data]
    },
    async deleteCity(id) {
      this.error = null
      this.loading = true
      await this.api.delete(`/cities/${id}`)
      this.loading = false
      this.cities = this.cities.filter(city => city._id !== id)
    }
  }
}
</script>
