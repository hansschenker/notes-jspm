import Notes from './notes/list/notes';
import NotesViewModel from './notes/list/notes.viewmodel';
import notesView from './notes/list/notes.html!text';

import Note from './notes/details/note';
import NoteViewModel from './notes/details/note.viewmodel';

console.log(notesView);

let note = new Note('Note 1');
console.dir(note);

let notes = new Notes();

console.dir(notes);

//notes.list.add(note);



