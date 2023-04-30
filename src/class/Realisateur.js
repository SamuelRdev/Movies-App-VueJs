import { v4 as uuidv4 } from 'uuid';
export default class Realisateur {
    constructor(nom, prenom, nationalite, date_naissance) {
      this._id = uuidv4();
      this._nom = nom;
      this._prenom = prenom;
      this._nationalite = nationalite;
      this._date_naissance = date_naissance;
    }
  
    get nom() {
      return this._nom;
    }
  
    set nom(nom) {
      this._nom = nom;
    }
  
    get prenom() {
      return this._prenom;
    }
  
    set prenom(prenom) {
      this._prenom = prenom;
    }
  
    get nationalite() {
      return this._nationalite;
    }
  
    set nationalite(nationalite) {
      this._nationalite = nationalite;
    }
  
    get date_naissance() {
      return this._date_naissance;
    }
  
    set date_naissance(date_naissance) {
      this._date_naissance = date_naissance;
    }
}
  