<template>
    <form @submit.prevent="ajouterrealisateur({ _nom, _prenom, _nationalite, _date_naissance })" class="row g-3">
        <div class="col-md-6">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" v-model="_nom" required>
        </div>
        <div class="col-md-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" v-model.number="_prenom" required>
        </div>
        <div class="col-md-3">
            <label for="nationalite" class="form-label">Nationalité</label>
            <input type="text" class="form-control" id="nationalite" v-model.number="_nationalite" required>
        </div>
        <div class="col-md-6">
            <label for="genre" class="form-label">Date de naissance</label>
            <datepicker v-model="_date_naissance" :locale="fr" format="dd/MM/yyyy" required />
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
    import Datepicker from 'vue3-datepicker'
    import 'vue3-datepicker/dist/vue3-datepicker.css'
    import router from '@/router';

    // const props = defineProps({
    //     editMode: Boolean
    // })

    const ajouterrealisateur = ({ _nom, _prenom, _nationalite, _date_naissance}) => {
        const realisateur = new Realisateur(
            _nom,
            _prenom,
            _nationalite,
            _date_naissance
        );

        let realisateurs = JSON.parse(localStorage.getItem('realisateurs')) || [];
        console.log(realisateurs)
        console.log(realisateur)
        realisateurs.push(realisateur);
        localStorage.setItem('realisateurs', JSON.stringify(realisateurs));
        const modal = document.querySelector('#addMovie'); // sélectionne l'élément du modal
        modal.classList.remove('show'); // enlève la classe 'show' qui affiche le modal
        modal.style.display = 'none'; // masque le modal
        document.body.removeAttribute('style');
        document.body.classList.remove('modal-open'); // enlève la classe 'modal-open' du body qui empêche le scroll
        const modalBackdrop = document.querySelector('.modal-backdrop'); // sélectionne l'élément du backdrop du modal
        modalBackdrop.parentNode.removeChild(modalBackdrop); // retire le backdrop du DOM
        router.push('/')
    };
</script>

<style></style>