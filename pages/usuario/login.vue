<template>
    <div>
        <h1>Login de Usuario</h1>
        <v-form @submit.prevent>
            <v-text-field
                v-model="dadosUsuario.email"
                label="Email"
                type="email"
            ></v-text-field>
            <v-text-field
                v-model="dadosUsuario.senha"
                label="Senha"
                type="password"
            ></v-text-field>

            <v-btn @click="login" to="/projetos">Entrar</v-btn>
            <v-btn to="/usuario/cadastrar">Cadastrar</v-btn>
        </v-form>
    </div>
</template>


<script setup>
import UsuarioService from '~/service/UsuarioService';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { reactive } from 'vue';

const dadosUsuario = reactive({
    email: "",
    senha: "",
 });

 const user = ref({});

function login() {
    UsuarioService.login(dadosUsuario).then(
        response => {
            console.log(response.status);
            user.value = response.data;
        }
    )
}

onMounted(
      () => {login();} 
  )


</script>