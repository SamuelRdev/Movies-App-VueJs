<template>
    <div>
        <h2>{{ film?._id }}</h2>
        <h2>{{ film?._titre }}</h2>
        <p><strong>Année de sortie :</strong> {{ film?._anneeDeSortie }}</p>
        <p><strong>Langue :</strong> {{ film?._langue }}</p>
        <p><strong>Genre :</strong> {{ film?._genre }}</p>
        <p><strong>Réalisateur :</strong> {{ film?._realisateur?._nom }} {{ film?._realisateur?._prenom }}</p>
        <p><strong>Nationalité :</strong> {{ film?._realisateur?._nationalite }}</p>
        <p><strong>Date de naissance :</strong> {{ film?._realisateur?._date_naissance }}</p>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const id = useRoute().params.id;
  const films = JSON.parse(localStorage.getItem('films')) || [];
  const film = ref(films.find(f => f._id == id));
</script>


  