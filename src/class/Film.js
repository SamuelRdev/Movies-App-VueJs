let idCounter = 0;
export default class Film {
  constructor(titre, anneeDeSortie, langue, realisateur, genre) {
    this._id = ++idCounter;
    this._titre = titre;
    this._anneeDeSortie = anneeDeSortie;
    this._langue = langue;
    this._realisateur = realisateur;
    this._genre = genre;
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
}