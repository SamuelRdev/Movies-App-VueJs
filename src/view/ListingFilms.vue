<template>
    <div>
      <p>Listing</p>
      <button @click="ajouterFilm">Ajouter un film</button>
      <div class="row">
        <div v-for="film in films" :key="film.titre" class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ film.titre }}</h5>
              <p class="card-text">Année de sortie : {{ film.anneeDeSortie }}</p>
              <p class="card-text">Langue : {{ film.langue }}</p>
              <p class="card-text">Genre : {{ film.genre }}</p>
              <p class="card-text">Réalisateur : {{ film.realisateur.nom }} {{ film.realisateur.prenom }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Film from '@/class/Film';
  import Realisateur from '@/class/Realisateur';
  
  const ajouterFilm = () => {
      const realisateur1 = new Realisateur("Sameul", "test", "française", "20/07/1996");
      const film = new Film("Titre", "Annee de sortie", "Langue", realisateur1, "Genre");
      const films = JSON.parse(localStorage.getItem('films')) || [];
      films.push(film);
      localStorage.setItem('films', JSON.stringify(films));
  }
  
  const films = JSON.parse(localStorage.getItem('films')) || [];
  </script>
  
  <style>
  </style>
  