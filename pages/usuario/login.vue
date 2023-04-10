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

            <v-btn @click="login">Entrar</v-btn>
            <v-btn to="/usuario/cadastrar">Nao tem conta? Cadastrar</v-btn>
        </v-form>
    </div>
</template>


<script setup>
import UsuarioService from '@/service/UsuarioService';
import { reactive } from 'vue'

const dadosUsuario = reactive({
    email: "",
    senha: "",
 });

function login() {
    UsuarioService.login(dadosUsuario).then(
        response => {
            console.log(response.status);
            console.log(response.data);
        }
    )
}

</script>