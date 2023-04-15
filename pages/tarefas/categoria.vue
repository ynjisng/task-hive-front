<template>
    <v-container>
      <h1>Adicionar Categoria</h1>
      <v-text-field v-model="category" label="Categoria"></v-text-field>
      <v-btn color="primary" @click="saveCategory">Salvar Categoria</v-btn>
      <v-btn color="error" @click="deleteCategory">Excluir Categoria</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import categoriaService from "@/services/CategoriaService";
  
  let category = '';
  
  function saveCategory() {
    categoriaService.create({ categoria: category }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  
  function deleteCategory() {
    categoriaService.delete(id).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
  </script>
  