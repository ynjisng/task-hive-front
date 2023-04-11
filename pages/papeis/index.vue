<template>
    <div></div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import PapelService from '~/service/PapelService'
  
    const projetoList = ref([])
  
    function loadAll() {
        PapelService.list(null).then(
            response => {
                papelList.value = response.data;
            }
        )
    }
  
    onMounted(
        () => {loadAll();} 
    )
  
  </script>