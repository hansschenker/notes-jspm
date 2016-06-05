import Note from '../details/note'

export default class NotesService {


  constructor() {
    this.notes = [];
    this.init();
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
  
  query() {
    console.log(this.notes);
    return this.notes;
  }
  
  
  save(notesToSave) {
    localStorage.setItem('hsr-notes', JSON.stringify(notesToSave));
  }
  
  
  init() {
    this.notes.push(new Note(1, 'Note 1'));
    this.notes.push(new Note(2, 'Note 2'));
    this.notes.push(new Note(3, 'Note 3'));
    this.notes.push(new Note(4, 'Note 4'));
    this.notes.push(new Note(5, 'Note 5'));
  }
}