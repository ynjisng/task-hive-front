<template>
    <div>
        <h1>Cadastro de Usuario</h1>
        <v-form @submit.prevent>
            <v-text-field
                v-model="usuario.nome"
                label="Nome"
            ></v-text-field>
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

            <v-btn @click="save">Cadastrar</v-btn>
            <v-btn to="/usuario/login">Login</v-btn>
        </v-form>
    </div>
</template>


<script setup>
import UsuarioService from '~/service/UsuarioService';
import { reactive } from 'vue'
const usuario = reactive({
    nome: "",
    email: "",
    senha: "",
 });

function save() {
    UsuarioService.create(usuario).then(
        response => {
            console.log(response.status);
            if (response.status == 200) {
                console.log(response.data);
                alert("Conta cadastrada com sucesso!");
            } else {
                alert("Conta ja existe!");
            }
        }
    )
}

</script>