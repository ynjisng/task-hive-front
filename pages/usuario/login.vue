<template>
    <div>
        <h1>Login de Usuario</h1>
        <v-form @submit.prevent>
            <v-text-field
                v-model="usuario.email"
                label="Email"
                type="email"
            ></v-text-field>
            <v-text-field
                v-model="usuario.senha"
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

const usuario = reactive({
    email: "",
    senha: "",
 });

function login() {
    console.log(usuario)
    UsuarioService.login(usuario).then(
       response => { console.log(response.status); }
    )
}

</script>