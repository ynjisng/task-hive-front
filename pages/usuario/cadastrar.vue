<template>
    <v-card class="mx-auto" max-width="344">
        <v-container>
            <v-text-field v-model="usuario.nome" color="primary" label="Nome" clearable></v-text-field>
            <v-text-field v-model="usuario.email" type="email" color="primary" label="Email" clearable></v-text-field>
            <v-text-field v-model="usuario.senha" type="password" color="primary" label="Senha" clearable></v-text-field>
        </v-container>

        <v-card-actions>
            <v-btn color="success" block size="large" @click="save" to="/papeis">Cadastrar<v-icon icon="mdi-chevron-right" end></v-icon></v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-btn color="success" block size="large" to="/usuario/login">Entrar</v-btn>
        </v-card-actions>
    </v-card>
</template>


<script setup>
import UsuarioService from '~/service/UsuarioService';
import { reactive } from 'vue';

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