<template>
    <div>
        <h1>Gerenciamento de Usuario</h1>
        <h3 :key="user.id"> {{ user.nome }}</h3>
        <p><v-btn to="/usuario/cadastrar">Cadastrar</v-btn><v-btn to="/usuario/login">Login</v-btn></p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import UsuarioService from '~/service/UsuarioService'

    const user = ref({})

    function load() {
        UsuarioService.getPorId(id).then(
            response => {
                user.value = response.data;
            }
        )
    }

    onMounted(
        () => {load();} 
    )

</script>