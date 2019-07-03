<template>
  <div class="state-table">
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
export default {
  name: 'state-table',
  props: {
    states: Array,
    loading: Boolean,
    error: String
  }
}
</script>

<style></style>
