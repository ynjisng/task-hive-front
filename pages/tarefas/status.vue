<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Adicionar Status</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-checkbox v-model="status.pendente" label="Pendente"></v-checkbox>
          <v-checkbox v-model="status.completa" label="Completa"></v-checkbox>
          <v-checkbox v-model="status.atrasada" label="Atrasada"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="primary" @click="salvarStatus()">Salvar Status</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import StatusService from "@/service/StatusService";
  
  const status = {
    pendente: false,
    completa: false,
    atrasada: false,
  };
  
  const salvarStatus = async () => {
    const data = {
      pendente: status.pendente,
      completa: status.completa,
      atrasada: status.atrasada,
    };
  
    await StatusService.create(data);
  
    //Redirecionar para a pagina da tarefa? ... 
  };
  </script>
  