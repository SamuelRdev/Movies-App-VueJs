import { v4 as uuidv4 } from 'uuid';
export default class Film {
  constructor(titre, anneeDeSortie, langue, realisateur, genre, image, resume) {
    this._id = uuidv4();
    this._titre = titre;
    this._anneeDeSortie = anneeDeSortie;
    this._langue = langue;
    this._realisateur = realisateur;
    this._genre = genre;
    this._image = image;
    this._resume = resume;
  }

  get titre() {
    return this._titre;
  }

  set titre(titre) {
    this._titre = titre;
  }

  get anneeDeSortie() {
    return this._anneeDeSortie;
  }

  set anneeDeSortie(anneeDeSortie) {
    this._anneeDeSortie = anneeDeSortie;
  }

  get langue() {
    return this._langue;
  }

  set langue(langue) {
    this._langue = langue;
  }

  get realisateur() {
    return this._realisateur;
  }

  set realisateur(realisateur) {
    this._realisateur = realisateur;
  }

  get genre() {
    return this._genre;
  }

  set genre(genre) {
    this._genre = genre;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    this._image = image;
  }

  get resume() {
    return this._resume;
  }
  
  set resume(resume) {
    this._resume = resume;
  }
}