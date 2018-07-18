<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarColor03" aria-controls="navbarColor03"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li v-for="link in links" class="nav-item">
          <a class="nav-link" href="#">{{link.toUpperCase()}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'topbar',
    data () {
      return {
        links: [
          "Início",
          "Apresentação",
          "Cronograma",
          "Oficinas",
          "Inscrições",
          "Submissões",
          "Concurso",
          "Sobre",
          "Contato"
        ]
      };
    }
  }
</script>