<template>
    <v-container>
      <h1>Adicionar Comentário</h1>
      <v-text-field v-model="comentario" label="Comentário"></v-text-field>
      <v-btn color="primary" @click="saveComentario">Salvar Comentário</v-btn>
      <v-btn color="error" @click="deleteComentario">Excluir Comentário</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import comentarioService from "@/services/ComentarioService";
  
  let comentario = '';
  
  function saveComentario() {
    comentarioService.create({ comentario: comentario }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  
  function deleteComentario() {
    comentarioService.delete(id).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  </script>
  