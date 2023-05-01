<template>
    <div class="row mt-5 mb-5">
        <div class="col-12">
            <h1 class="text-center">Dawin liste de films Samuel RAPPY, Dawin B</h1>
            <p></p>
        </div>
    </div>
    <div class="row mt-5 mb-5">
        <div class="col-12">
            <div class="content">
                <div class="search-client">
                    <div>
                    </div>
                    <form class="d-flex ml-auto">
                        <input class="form-control" type="search" placeholder="Je cherche un film" aria-label="Search" @input="rechercherFilms" v-model="searchInput">
                    </form>
                    <div v-if="resultatsRecherche.length" class="search-result">
                        <ul>
                            <li v-for="film in resultatsRecherche" :key="film._id">
                                <router-link :to="'/movie/' + film._id">
                                    <div class="result-content">
                                        <div class="result-left">
                                            <img :src="film?._image" class="card-img-top" alt="...">
                                        </div>
                                        <div class="result-right">
                                            <h2>
                                                {{ film._titre }}
                                            </h2>
                                            <p>
                                                {{ film._realisateur?._nom }}&nbsp;{{ film._realisateur?._prenom }}
                                            </p>
                                            <p>
                                                {{ film._anneeDeSortie }}
                                            </p>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const searchInput = ref('');
    const resultatsRecherche = ref([]);

    const rechercherFilms = () => {
        if (searchInput.value.length > 3) {
            const films = JSON.parse(localStorage.getItem('films'));
            const resultats = films.filter(film => {
            const recherche = searchInput.value.toLowerCase();
            return film._titre.toLowerCase().includes(recherche) ||
                    film._anneeDeSortie.toString().includes(recherche) ||
                    film._realisateur._nom.toLowerCase().includes(recherche);
            });
            resultatsRecherche.value = resultats;
        } else {
            resultatsRecherche.value = [];
        }
    }
</script>

<style>
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content input{
        min-width: 400px;
    }
    .search-client{
        position: relative;
    }
    .search-client .search-result{
        position: absolute;
        width: 100%;
        max-height: 350px;
        overflow-y: scroll;
        background-color: #FFF;
    }
    .search-client .search-result ul{
        list-style-type: none;
        padding: 0;
    }
    .search-client .search-result ul li{
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
    }
    .search-client .search-result ul li a{
        color: black;
        text-decoration: none;
        transition: .3s;
        display: block;
    }
    .search-client .search-result ul li a:hover{
        color: white;
        background-color: #0d6efd;
    }
    .search-client .search-result ul li .result-content{
        display: flex;
        align-items: center;
    }
    .search-client .search-result ul li .result-content .result-left img{
        max-width: 100px;
        max-height: 100px;
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
    .search-client .search-result ul li .result-content .result-right{
       margin-left: 25px;
       flex-grow: 1;
    }
    .search-client .search-result ul li .result-content .result-right h2{
        font-size: 18px;
    }
    .search-client .search-result ul li .result-content .result-right p{
        margin-bottom: 5px;
        line-height: 1;
    }
</style>
