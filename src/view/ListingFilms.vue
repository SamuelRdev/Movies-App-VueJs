<template>

    <div class="row">
        <div>
            <button @click="ajouterFilm">Ajouter un film</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ajouter un film</button>
        </div>
    </div>

    <div class="row">
        <div v-for="film in films" :key="film.titre" class="col-md-4">
            <MovieCard :film="film"/>
        </div>
    </div>

    <ModalForm/>
    
</template>
  
<script setup>
    import Film from '@/class/Film';
    import Realisateur from '@/class/Realisateur';
    import MovieCard from '@/components/MovieCard.vue';
    import ModalForm from '@/components/ModalForm.vue';

    const ajouterFilm = () => {
        const realisateur1 = new Realisateur("Samuel", "test", "française", "20/07/1996");
        const film = new Film("Le seigneur des Anneaux", "2012", "Anglais", realisateur1, "Dystopique");
        var films = JSON.parse(localStorage.getItem('films')) || [];
        films.push(film);
        localStorage.setItem('films', JSON.stringify(films));
    }
    const films = JSON.parse(localStorage.getItem('films')) || [];
</script>

<style>
</style>
  