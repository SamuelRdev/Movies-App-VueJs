<template>
    <div class="row single-detail">
        <div class="col-6">
          <img :src="film?._image" class="card-img-top" alt="...">
        </div>
        <div class="col-6">
          <div class="descriptif">
            <h2>{{ film?._titre }}</h2>
            <p><strong>Année de sortie :</strong> {{ film?._anneeDeSortie }}</p>
            <p><strong>Langue :</strong> {{ film?._langue }}</p>
            <p><strong>Genre :</strong> {{ film?._genre }}</p>
            <p><strong>Réalisateur :</strong> {{ film?._realisateur?._nom }} {{ film?._realisateur?._prenom }}</p>
            <p><strong>Nationalité :</strong> {{ film?._realisateur?._nationalite }}</p>
            <p><strong>Date de naissance :</strong> {{ film?._realisateur?._date_naissance }}</p>
          </div>
          <div class="resume">
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

<style>
  .single-detail{
    display: flex;
  }
</style>


  