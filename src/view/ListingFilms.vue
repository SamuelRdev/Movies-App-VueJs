<template>

    <div class="row">
        <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addRealisateur" data-bs-whatever="@mdo">Ajouter un réalisateur</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMovie" data-bs-whatever="@mdo">Ajouter un film</button>
        </div>
    </div>

    <div class="row">
        <div v-for="film in films" :key="film.titre" class="col-md-4">
            <MovieCard :film="film"/>
        </div>
    </div>
    <div class="modal fade" id="addMovie" tabindex="-1" aria-labelledby="addMovieLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addMovieLabel">Ajouter un film</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ModalForm :realisateurs="realisateurs"/>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addRealisateur" tabindex="-1" aria-labelledby="addRealisateurLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="addRealisateurLabel">Ajouter un réalisateur</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ModalFormBis/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import MovieCard from '@/components/MovieCard.vue';
    import ModalForm from '@/components/ModalForm.vue';
    import ModalFormBis from '@/components/ModalFormBis.vue';
    const films = JSON.parse(localStorage.getItem('films')) || [];
    const realisateurs = JSON.parse(localStorage.getItem('realisateur')) || [];
</script>

<style>
</style>
  