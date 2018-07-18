<template lang="pug">
  Section(title="Apresentação")
    p O
      strong I Workshop em Criatividade, Inovação e Inteligência Artificial&nbsp;
      span é um evento científico e tecnológico de natureza interdisciplinar que
        | tem como objetivo principal promover a divulgação da produção científica,
        | das ações inovadoras e dos produtos desenvolvidos pelo grupo pesquisa
        | Inovames e pelos pesquisadores do laboratório de Inteligência artificial
        | Aplicada da UFPA por meio de apresentações orais, pôsteres e oficinas
        | temáticas. O evento é aberto à participação de docentes e discentes que
        | desenvolvam trabalhos de pesquisa, ensino ou extensão, inovadores e
        | criativos em Tecnologias Aplicadas ao ensino e aprendizagem.
    p Este Workshop é uma iniciativa do Laboratório de Inteligência Artificial
      | Aplicada (LAAI) do Instituto de Ciências Exatas e Naturais (ICEN) e do grupo
      | de pesquisa Inovames do Programa de Pós-Graduação em Criatividade e Inovação
      | em Metodologias no Ensino Superior (PPGCIMES) do Núcleo de Inovação em
      | Tecnologias Aplicadas a Ensino e Extensão (NITAE
      sup 2
      span ) com apoio da Coordenação de Inovação em Tecnologias em Ensino (CITE).
      | Ao longo dos últimos 04 (quatro) anos, estas sub-unidades têm desenvolvido
      | trabalhos científicos criativos e inovadores e ações extensionistas com 
      | ênfase em tecnologia aplicadas ao ensino e aprendizagem. Dentre as áreas 
      | em que estas sub-unidades atuam, destacam-se: inteligência artificial,
      | realidade virtual, Tecnologia assistiva, educação a distância, objetos
      | matemáticos, metodologias ativas, interdisciplinares&nbsp;envolvendo
      | Ciência, Tecnologia e Arte, produtos educacionais tais como livros
      | digitais iterativos, prototipagem de objetos de aprendizagem e aplicativos
      | de apoio ao ensino e aprendizagem.
    h5 Objetivos
    ul
      li Objetivo geral:
        ul
          li Promover a divulgação da produção científica, das ações inovadoras e dos produtos desenvolvidos pelo grupo pesquisa Inovames e pelos pesquisadores do laboratório de Inteligência Artificial Aplicada da UFPA.
      li Objetivos específicos:
        ul
          li Estabelecer parcerias para desenvolvimento de ferramentas computacionais destinadas ao ensino, pesquisa e extensão;
          li Introduzir conceitos de ferramentas através de oficinas mão na massa (hands-on);
          li Incentivar os alunos a desenvolverem atividades de pesquisa, ensino e extensão, bem como fomentar o empreendedorismo na área de ensino;
          li Divulgar e discutir as pesquisas realizadas na interface entre Inteligência Artificial, Matemática e Arte em suas múltiplas manifestações;
          li Divulgar e discutir ferramentas para uso na EAD.
</template>
<script>
  import Section from './Section.vue'
  export default {
    name: 'apresentacao',
    components: {
      Section
    }
  }
</script>