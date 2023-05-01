<template>
    <form @submit.prevent="modifierFilm(props.movie)" class="row g-3">
        <div class="col-md-6">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="currentMovie._titre" required>
        </div>
        <div class="col-md-3">
            <label for="anneeDeSortie" class="form-label">Année sortie</label>
            <input type="number" class="form-control" id="anneeDeSortie" v-model.number="currentMovie._anneeDeSortie" required>
        </div>
        <div class="col-md-3">
            <label for="langue" class="form-label">Langue</label>
            <input type="text" class="form-control" id="langue" v-model="currentMovie._langue" required>
        </div>
        <div class="col-md-6">
            <label for="realisateur" class="form-label">Réalisateur</label>
                <select class="form-select" id="realisateur" v-model="currentMovie._realisateur" required>
                <option v-for="real in props.realisateurs" :key="real._id" :value="real">{{ real._nom }}</option>
            </select>
        </div>
        <div class="col-md-6">
            <label for="genre" class="form-label">Genre</label>
            <input type="text" class="form-control" id="genre" v-model="currentMovie._genre" required>
        </div>
        <div class="col-md-12">
            <label for="resume" class="form-label">Resumé</label>
            <textarea class="form-control" id="resume" v-model="currentMovie._resume"></textarea>
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
    import { ref } from 'vue';
    import router from '@/router';

    const props = defineProps({
        realisateurs: Object,
        movie: {
        type: String,
        required: true
        }
    })

    const findMovie = (id) => {
        const films = JSON.parse(localStorage.getItem('films')) || [];
        const film = ref(films.find(f => f._id == id));
        return film.value;
    }

    const currentMovie = findMovie(props.movie);
    
    let image = currentMovie._image;

    const modifierFilm = (id) => {
        const films = JSON.parse(localStorage.getItem('films')) || [];
        const index = films.findIndex(f => f._id == id);
        if (index === -1) {
            console.error(`Le film avec l'ID ${id} n'a pas été trouvé.`);
            return;
        }
        const updatedFilm = {
            ...films[index],
            _titre: currentMovie._titre,
            _anneeDeSortie: currentMovie._anneeDeSortie,
            _langue: currentMovie._langue,
            _realisateur: currentMovie._realisateur,
            _genre: currentMovie._genre,
            _resume: currentMovie._resume,
            _image: image
        };
        films.splice(index, 1, updatedFilm);
        localStorage.setItem('films', JSON.stringify(films));
        console.log(`Le film avec l'ID ${id} a été modifié.`);
        const modal = document.querySelector('#editMovie');
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.removeAttribute('style');
        document.body.classList.remove('modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modalBackdrop.parentNode.removeChild(modalBackdrop);
        router.push('/')
    }

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