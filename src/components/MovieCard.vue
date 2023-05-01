<template>
    <div class="card">
        <div class="card-body">
            <!-- <router-link :to="'/movie/' + props.film?._id" class="global-card-link"> -->
                <div>
                    <img :src="props.film?._image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ props.film?._titre }}</h5>
                        <p class="card-text">{{ props.film?._anneeDeSortie }}</p>
                        <p class="card-text">{{ props.film?._langue }}</p>
                        <p class="card-text">{{ props.film?._genre }}</p>
                        <div class="author-informations">
                            <p class="card-text-author">{{ props.film?._realisateur?._nom }} {{ props.film?._realisateur?._prenom }}</p>
                            <div class="watch-more-author">
                                <p class="card-text">Nom : {{ props.film?._realisateur?._nom }} {{ props.film?._realisateur?._prenom }}</p>
                                <p class="card-text">Nationalité : {{ props.film?._realisateur?._nationalite }}</p>
                                <p class="card-text">Date de naissance {{ props.film?._realisateur?._date_naissance }}</p>
                            </div>
                        </div>
                        <router-link :to="'/movie/' + props.film?._id" class="btn btn-primary">Voir plus</router-link>
                        <button v-if="isListing" type="button" class="btn btn-warning ms-2" data-bs-toggle="modal" data-bs-target="#editMovie">Modifier</button>
                        <button v-if="isListing" type="button" class="btn btn-danger ms-2" @click="deleteFilm(props.film?._id)">Delete</button>
                    </div>
                </div>
            <!-- </router-link> -->
        </div>
    </div>
    <div class="modal fade" id="editMovie" tabindex="-1" aria-labelledby="editMovieLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editMovieLabel">Modifier un film</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ModalEdit :realisateurs="realisateurs" :movie="props.film?._id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useRoute } from "vue-router";
    import router from '@/router';
    import ModalEdit from '@/components/ModalEdit.vue';

    const route = useRoute();
    const realisateurs = JSON.parse(localStorage.getItem('realisateurs')) || [];

    var isListing = false

    if(route.path !== '/'){
        isListing = true
    }

    function deleteFilm(id) {
        const films = JSON.parse(localStorage.getItem("films"));
        const updatedFilms = films.filter(film => film._id !== id);
        localStorage.setItem("films", JSON.stringify(updatedFilms));
        router.push('/')
    }

    const props = defineProps({
        film: Object
    })
</script>

<style>
    .card{
        margin: 30px 0;
    }
    .card .card-img-top{
        max-height: 400px;
        object-fit: cover;
    }
    .card a.global-card-link{
        color: black;
        text-decoration: none;
    }
    .card-text-author::after{
        content: "i";
        display: inline-block;
        background: #0d6efd;
        color: white;
        line-height: 1;
        padding: 5px 11px;
        border-radius: 100%;
        margin-left: 20px;

    }
    .card-text-author:hover + .watch-more-author{
        display: block;
    }
    .author-informations{
        position: relative;
    }
    .watch-more-author{
        display: none;
        position: absolute;
        top: -180px;
        background-color: #f5f5f5;
        padding: 15px;
        color: black;
        border: 3px solid #0d6efd;
        transition: .3s;
    }
</style>

