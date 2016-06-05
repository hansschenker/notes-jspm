import LocalStorageService from './localStorage'
import Note from '../details/note'

export default class NotesService {


  constructor() {
    this.notes = [];
    //this.init();
    this.localStorageService = new LocalStorageService('hs-notes');
    console.dir(LocalStorageService);

    this.getFromStorage();


    console.dir(this.notes);
    //let stored = localStorage.getItem('hsr-notes');
    /*
        try {
          //stored = JSON.parse(stored);
          stored = this.notes;
          console.dir(stored);
        } catch (err) {
          stored = [];
        }
    
        this.notes = stored;
        console.log(this.notes);
      }
    */
  }

  getFromStorage() {

    this.notes = this.localStorageService.getNotes();
    console.log('getFromStorage', this.notes);
    return this.notes;
  }


  saveToStorage(notesToSave) {
    //localStorage.setItem('hsr-notes', JSON.stringify(notesToSave));
    this.localStorageService.saveNotes(notesToSave);
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