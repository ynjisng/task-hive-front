<template>
        <v-card class="mx-auto" max-width="344">
            <v-form @submit.prevent="loginUser">
                <v-container>
                    <v-text-field v-model="dados.email" type="email" label="Email" clearable></v-text-field>
                    <v-text-field v-model="dados.senha" type="password" label="Senha" clearable></v-text-field>
                </v-container>

                <v-card-actions>
                    <v-btn block color="success" size="large" type="submit">Entrar</v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn color="success" block size="large" to="/usuario/cadastrar">Cadastrar</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
</template>

<script setup>
  import { ref } from 'vue';
  import { reactive } from 'vue';
  import UsuarioService from '~/service/UsuarioService'

  const dados = {
    email: "",
    senha: ""
}
  const user = ref({})

  function loginUser() {
      UsuarioService.login(dados).then(
          response => {
            console.log(response.status);
            user.value = response.data;
        } 
      )
  }
</script>