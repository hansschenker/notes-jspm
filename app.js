import * as Handlebars from 'handlebars';
import $ from 'jquery';

// notes
import NotesList from './notes/list/notes';
import NotesViewModel from './notes/list/notes.viewmodel';
import notesView from './notes/list/notes.html!text';
import './notes/list/notes.css!css';


import Note from './notes/details/note';
import NoteViewModel from './notes/details/note.viewmodel';
import noteView from './notes/details/note.html!text';

$(function () {

    loadNotes();

})

function loadNote() {

    // compile view
    let template = Handlebars.compile(noteView);
    let note = new Note('Note 1');
    let noteHtml = template({ title: note.title });

    // insert into to DOM
    let noteInput = document.createElement('div');
    noteInput.innerHTML = noteHtml;
    document.body.appendChild(noteInput);
}

function loadNotes() {

    // compile view
    let template = Handlebars.compile(notesView);
    console.log('template', template);

    let notesList = new NotesList();
    console.dir('notesList:', notesList);
    

    // add 5 notes
    /*
    let note1 = new Note('Note 1');
    notesList.add(note1);
    let note2 = new Note('Note 2');
    notesList.add(note2);
    let note3 = new Note('Note 3');
    notesList.add(note3);
    let note4 = new Note('Note 4');
    notesList.add(note4);
    let note5 = new Note('Note 5');
    notesList.add(note5);
    */
    let jsonNotes = {
        notes: [
            { id: 1, title: "Note 1" },
            { id: 2, title: "Note 2" },
            { id: 3, title: "Note 3" }
        ]
    }
    let listHtml = template(jsonNotes);

    // insert into to DOM
    let listElement = document.createElement('ul');
    listElement.innerHTML = listHtml;
    document.body.appendChild(listElement);
}

//console.log('output:', noteHtml);

/*

console.log(noteView);


console.dir(note);

let notes = new Notes();

console.dir(notes);
*/





