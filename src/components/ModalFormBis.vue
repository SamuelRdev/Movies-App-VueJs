<template>
    <form @submit.prevent="ajouterrealisateur({ _nom, _prenom, _nationalite, _date_naissance })" class="row g-3">
        <div class="col-md-6">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="_nom" required>
        </div>
        <div class="col-md-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" v-model="_prenom" required>
        </div>
        <div class="col-md-3">
            <label for="nationalite" class="form-label">Nationalité</label>
            <input type="text" class="form-control" id="nationalite" v-model="_nationalite" required>
        </div>
        <div class="col-md-6">
            <label for="genre" class="form-label">Date de naissance</label>
            <VueDatePicker v-model="_date_naissance" />
        </div>
        <div class="modal-footer col-md-12">
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </div>
    </form>      
</template>

<script setup>
    // import { defineProps } from 'vue';
    import Realisateur from '@/class/Realisateur';
    // import { defineComponent } from 'vue'
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import router from '@/router';

    // const props = defineProps({
    //     editMode: Boolean
    // })

    function formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    const ajouterrealisateur = ({ _nom, _prenom, _nationalite, _date_naissance}) => {
        const realisateur = new Realisateur(
            _nom,
            _prenom,
            _nationalite,
            formatDate(_date_naissance)
        );

        let realisateurs = JSON.parse(localStorage.getItem('realisateurs')) || [];
        realisateurs.push(realisateur);
        localStorage.setItem('realisateurs', JSON.stringify(realisateurs));
        const modal = document.querySelector('#addMovie');
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.removeAttribute('style');
        document.body.classList.remove('modal-open');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        modalBackdrop.parentNode.removeChild(modalBackdrop);
        router.push('/')
    };
</script>

<style></style>