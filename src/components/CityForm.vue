<template>
  <div id="city-form">
    <form @submit.prevent="handleSubmit">
      <label>Cidade *</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="city.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Estado *</label>
      <select
        :class="{ 'has-error': submitting && invalidState }"
        v-model="city.state"
        @focus="clearStatus"
      >
        <option value="">Selecione um estado</option>
        <option
          v-for="state in states"
          v-bind:value="state._id"
          :key="state._id"
        >
          {{ state.name }}
        </option>
      </select>
      <p v-if="error && submitting" class="error-message">
        ❗Por favor preencha todos os campos obrigatórios
      </p>
      <p v-if="success" class="success-message">
        ✅ Adicionado com sucesso
      </p>
      <button>Adicionar</button>
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
      submitting: false,
      error: false,
      success: false,
      city: {
        name: '',
        state: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidState) {
        this.error = true
        return
      }

      this.$emit('add:city', this.city)
      this.city = {
        name: '',
        state: ''
      }
      this.error = false
      this.success = true
      this.submitting = false
    },

    clearStatus() {
      this.success = false
      this.error = false
    }
  },
  computed: {
    invalidName() {
      return this.city.name === ''
    },

    invalidState() {
      return this.city.state === ''
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*='-message'] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
