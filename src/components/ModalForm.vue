<template>
    <form @submit.prevent="ajouterFilm({ _titre, _anneeDeSortie, _langue, _realisateur, _genre, _resume })" class="row g-3">
        <div class="col-md-6">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="_titre" required>
        </div>
        <div class="col-md-3">
            <label for="anneeDeSortie" class="form-label">Année sortie</label>
            <input type="number" class="form-control" id="anneeDeSortie" v-model.number="_anneeDeSortie" required>
        </div>
        <div class="col-md-3">
            <label for="langue" class="form-label">Langue</label>
            <input type="text" class="form-control" id="langue" v-model="_langue" required>
        </div>
        <div class="col-md-6">
            <label for="realisateur" class="form-label">Réalisateur</label>
                <select class="form-select" id="realisateur" v-model="_realisateur" required>
                <option v-for="real in props.realisateurs" :key="real._id" :value="real">{{ real._nom }}</option>
            </select>
        </div>
        <div class="col-md-6">
            <label for="genre" class="form-label">Genre</label>
            <input type="text" class="form-control" id="genre" v-model="_genre" required>
        </div>
        <div class="col-md-12">
            <label for="resume" class="form-label">Resumé</label>
            <textarea class="form-control" id="resume" v-model="_resume"></textarea>
        </div>
        <div class="col-md-12">
            <label for="image" class="form-label">Affiche</label>
            <input type="file" class="form-control" id="image" accept="image/*" @change="handleImageUpload">
        </div>
        <div class="modal-footer col-md-12">
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </div>
    </form>      
</template>

<script setup>
    import { defineProps } from 'vue';
    import Film from '@/class/Film';
    import router from '@/router';


    let image ='';

    const props = defineProps({
        realisateurs: Object
    })

    const ajouterFilm = ({ _titre, _anneeDeSortie, _langue, _realisateur, _genre, _resume}) => {
        const film = new Film(
            _titre,
            parseInt(_anneeDeSortie),
            _langue,
            _realisateur,
            _genre,
            image,
            _resume
        );

        let films = JSON.parse(localStorage.getItem('films')) || [];
        films.push(film);
        localStorage.setItem('films', JSON.stringify(films));
        const modal = document.querySelector('#addMovie'); // sélectionne l'élément du modal
        modal.classList.remove('show'); // enlève la classe 'show' qui affiche le modal
        modal.style.display = 'none'; // masque le modal
        document.body.removeAttribute('style');
        document.body.classList.remove('modal-open'); // enlève la classe 'modal-open' du body qui empêche le scroll
        const modalBackdrop = document.querySelector('.modal-backdrop'); // sélectionne l'élément du backdrop du modal
        modalBackdrop.parentNode.removeChild(modalBackdrop); // retire le backdrop du DOM
        router.push('/')
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            image = reader.result;
        };
    }
</script>

<style></style>