<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <TaskHiveLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">Bem-vindo ao Task Hive</v-card-title>
        <v-card-text>
          <p>
            Task Hive é um projeto de gerenciamento de tarefas simples.
          </p>
          <p>
            Veja no Github o código do <a href="https://github.com/ynjisng/task-hive-front" target="_blank" rel="noopener noreferrer" title="frontend">Frontend</a> e do <a href="https://github.com/ynjisng/task-hive-back" target="_blank" rel="noopener noreferrer" title="backend">Backend</a> do projeto.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/usuario"> Registrar/Entrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
