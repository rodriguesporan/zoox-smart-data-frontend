<template>
  <div class="state">
    <StateForm @add:state="addState" />
    <StateTable :states="states" />
  </div>
</template>

<script>
// @ is an alias to /src
import StateTable from '@/components/StateTable.vue'
import StateForm from '@/components/StateForm.vue'
import axios from 'axios'
import { format, parseISO } from 'date-fns'

export default {
  name: 'state',
  components: {
    StateTable,
    StateForm
  },
  data() {
    return {
      loading: false,
      error: null,
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
      const response = await this.api.get('/states')
      this.states = response.data.map(state => {
        const { createdAt, updatedAt } = state
        state.createdAt = format(parseISO(createdAt), 'dd/MM/yyyy H:m:s')
        state.updatedAt = format(parseISO(updatedAt), 'dd/MM/yyyy H:m:s')
        return state
      })
      this.loading = false
    },
    async addState(state) {
      this.error = null
      this.loading = true
      const { name, uf } = state
      const response = await this.api.post('/states', {
        name,
        uf
      })
      this.loading = false
      this.states = [...this.states, response.data]
    }
  }
}
</script>
