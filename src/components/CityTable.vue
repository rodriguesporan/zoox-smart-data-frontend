<template>
  <div class="city-table">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <p v-if="cities.length < 1" class="empty-table">
      Nenhuma cidade cadastrada
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Estado</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in cities" :key="city._id">
          <td>{{ city.name }}</td>
          <td>{{ city.state.name }}</td>
          <td>{{ city.createdAt }}</td>
          <td>{{ city.updatedAt }}</td>
          <td>
            <button>Editar</button>
            <button @click="$emit('delete:city', city._id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'city-table',
  props: {
    cities: Array,
    loading: Boolean,
    error: String
  }
}
</script>

<style></style>
