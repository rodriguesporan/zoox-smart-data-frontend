<template>
  <div id="state-form">
    <form @submit.prevent="handleSubmit">
      <label>Estado *</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="state.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>UF *</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidUf }"
        v-model="state.uf"
        @focus="clearStatus"
      />
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
  name: 'state-form',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      state: {
        name: '',
        uf: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.submitting = true
      this.clearStatus()

      if (this.invalidName || this.invalidUf) {
        this.error = true
        return
      }

      this.$emit('add:state', this.state)
      this.$refs.first.focus()
      this.state = {
        name: '',
        uf: ''
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
      return this.state.name === ''
    },

    invalidUf() {
      return this.state.uf === ''
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
