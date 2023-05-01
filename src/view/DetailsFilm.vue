<template>
    <div class="row single-detail mt-5">
        <div class="col-6 pe-5">
            <img :src="film?._image" class="card-img-top" alt="...">
        </div>
        <div class="col-6">
          <div class="descriptif mb-5">
            <h1 class="mb-5">{{ film?._titre }}</h1>
            <p><strong>Année de sortie :</strong> {{ film?._anneeDeSortie }}</p>
            <p><strong>Langue :</strong> {{ film?._langue }}</p>
            <p><strong>Genre :</strong> {{ film?._genre }}</p>
            <p><strong>Réalisateur :</strong> {{ film?._realisateur?._nom }} {{ film?._realisateur?._prenom }}</p>
            <p><strong>Nationalité :</strong> {{ film?._realisateur?._nationalite }}</p>
            <p><strong>Date de naissance :</strong> {{ film?._realisateur?._date_naissance }}</p>
          </div>
          <div class="resume mt-5">
            <p><strong>Résumé :</strong></p>
            <p>{{ film?._resume }}</p>
          </div>
        </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const id = useRoute().params.id;
  const films = JSON.parse(localStorage.getItem('films')) || [];
  const film = ref(films.find(f => f._id == id));
</script>

<style scoped>
  .single-detail{
    display: flex;
  }
  h1::after{
    content: "";
    width: 75px;
    height: 4px;
    background-color: #0d6efd;
    display: block;
    margin-top: 20px;
  }
</style>


  