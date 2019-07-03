<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Projeto de Avaliação do Desenvolvedor
    </p>
    <h3>
      <a
        href="https://documenter.getpostman.com/view/4046195/S1a8yjzF?version=latest"
        target="_blank"
        rel="noopener noreferrer"
        >Documentação da API</a
      >
    </h3>
    <h3>
      <a
        href="https://zoox-smart-data-api.herokuapp.com/postman"
        target="_blank"
        rel="noopener noreferrer"
        >Baixar arquivo Postman</a
      >
    </h3>
    <h3>
      <a
        href="https://github.com/rodriguesporan/zoox-smart-data-api"
        target="_blank"
        rel="noopener noreferrer"
        >Repositório da API</a
      >
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
