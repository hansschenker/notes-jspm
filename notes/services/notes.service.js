//import LocalStorageService from './localstorage'

import Note from '../details/note'

//var localStorageService = new LocalStorageService('hs-notes');

export default class NotesService {


  constructor() {

    this.notes = [];

    //this.localStorageService = localStorageService;
    //console.dir(localStorageService);
    
    this.getAll();
    
    console.dir(this.notes);

  }

  getAll(localStorageService) {
    //console.dir(this.localStorageService);    
    this.notes = this.localStorageService.getAll();
    
    if (this.notes) {
      console.log('getAll', this.notes);
    } else {
      console.log('empty storage');
    }


    return this.notes;
  }

  addNote(newNote) {
    this.notes.push(newNote);
    this.saveAll();
    this.getAll();
  }

  saveAll() {
    //localStorage.setItem('hsr-notes', JSON.stringify(notesToSave));
    this.localStorageService.saveAll(this.notes);
  }

  delete(id) {
    this.notes.splice(id, 1);
  }

  init() {
    this.notes.push(new Note(1, 'Note 1'));
    this.notes.push(new Note(2, 'Note 2'));
    this.notes.push(new Note(3, 'Note 3'));
    this.notes.push(new Note(4, 'Note 4'));
    this.notes.push(new Note(5, 'Note 5'));
  }
}