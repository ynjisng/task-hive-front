<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Adicionar Lembrete</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Hora" v-model="hora" />
        </v-col>
        <v-col>
          <v-date-picker v-model="data" label="Data" />
        </v-col>
        <v-col>
          <v-text-field label="Título" v-model="titulo" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="adicionarLembrete">Salvar Lembrete</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select label="Lembrete a ser deletado" v-model="lembreteSelecionado" :items="lembretes" />
        </v-col>
        <v-col>
          <v-btn @click="deletarLembrete">Deletar Lembrete</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import LembreteService from '@/service/LembreteService';
  
  let hora = '';
  let data = new Date().toISOString().substr(0, 10);
  let titulo = '';
  let lembretes = [];
  let lembreteSelecionado = null;
  
  const carregarLembretes = async () => {
    const response = await LembreteService.loadAll();
    lembretes = response.data;
  };
  
  const adicionarLembrete = async () => {
    const lembrete = {
      hora: hora,
      data: data,
      titulo: titulo
    };
    await LembreteService.create(lembrete);
    await carregarLembretes();
  };
  
  const deletarLembrete = async () => {
    if (lembreteSelecionado !== null) {
      await LembreteService.delete(lembreteSelecionado);
      await carregarLembretes();
    }
  };
  //Carregar a lista de lembretes no momento em que o componente é criado
  carregarLembretes();
  </script>
  