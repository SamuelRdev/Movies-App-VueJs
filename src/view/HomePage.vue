<template>
    <div class="row">
        <div v-for="film in films" :key="film.titre" class="col-md-4">
            <MovieCard :film="film"/>
        </div>
    </div>
</template>

<script setup>
    // import Film from '@/class/Film';
    // import Realisateur from '@/class/Realisateur';
    import MovieCard from '@/components/MovieCard.vue';
    const films = JSON.parse(localStorage.getItem('films')) || [];

</script>

<style>

</style>
