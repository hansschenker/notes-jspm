import * as Handlebars from 'handlebars';
import $ from 'jquery';

import Note from './notes/details/note';

// Notes template, model , viewmodel
// load model data
//import {notes} from './notes/list/notes';



import NotesViewModel from './notes/list/notes.viewmodel';

// load template
import template from './notes/list/notes.html!text';
// import style for template
import './notes/list/notes.css!css';


let initialNotes = [];
let updatedNotes = [];
let currentNotes = [];
let selectedNote = null;
let isInital = true;
let renderCount = 0;
/*
import Note from './notes/details/note';
import NotetemplateModel from './notes/details/note.templatemodel';
import notetemplate from './notes/details/note.html!text';
*/

$(function () {
    renderNotesView();
    //isInital = false;

})

/*
function laodNotetemplate() {

    // compile template
    let template = Handlebars.compile(notetemplate);
    let note = new Note('Note 1');
    let noteHtml = template({ title: note.title });

    // insert into to DOM
    let noteInput = document.createElement('div');
    noteInput.innerHTML = noteHtml;
    document.body.appendChild(noteInput);
}
*/
function renderNotesView() {

    renderCount++;
    console.log('isInitial:', isInital, renderCount);

    if (isInital) {

        initialLoad();
        console.dir(initialNotes);
        currentNotes = initialNotes;
        isInital = false;

    } else {
        removeListElementFromDom();
        updateLoad();
        console.dir(updatedNotes);
        currentNotes = updatedNotes;
    }

    renderNotesTemplate(currentNotes);




    let notesViewModel = new NotesViewModel(null, null, selectedNote);
}

function renderNotesTemplate(notes){
    
    let notesListHtml = compileNotesTemplate(notes);

    addListElementToDom(notesListHtml);


    attachListenersToNotesList();

}

function initialLoad() {


    initialNotes.push(new Note(1, 'Note 1'));
    initialNotes.push(new Note(2, 'Note 2'));
    initialNotes.push(new Note(3, 'Note 3'));
    initialNotes.push(new Note(4, 'Note 4'));
    initialNotes.push(new Note(5, 'Note 5'));
}

function updateLoad() {
    updatedNotes = initialNotes.slice();
}

function loadJsonNotes(notes) {

    let data = {};
    data.notes = notes;
    //console.log('data:', data);

    return data;
}

function compileNotesTemplate() {

    // compile template
    console.log(template);

    let templateString = Handlebars.compile(template);

    // get data for template
    let jsonNotes = loadJsonNotes(currentNotes);
    console.log(jsonNotes);
    let compiledTemplate = templateString(jsonNotes);

    console.log('compiledTemplate', compiledTemplate);

    // create list element and add compiled Template (html)
    return compiledTemplate;

}
function addListElementToDom(html) {

    let listElement = document.createElement('ul');
    listElement.id = "notes";
    listElement.innerHTML = html;
    document.body.appendChild(listElement);
}

function removeListElementFromDom() {

    let listElement = document.getElementById('notes');
    console.dir(listElement.parentNode);
    listElement.parentNode.removeChild(listElement);
    
    //console.dir(listElement.parentNode);
    console.dir(document);
    //$('#notes').remove();
    isInital = false;
    
    //let item = document.all[listElement.parentNode];
    //console.dir(item);
    
}

function saveNotes(notesList) {

}

function selectNote(id) {

    selectedNote = notes[id];
    console.dir(selectedNote);
    // get note from notes array

    // set selectedNote on templatemodel


}
function deleteNote(id) {
    currentNotes.splice(id, 1);
    console.log(currentNotes);
    
    renderNotesView(false);
}

function attachListenersToNotesList() {

    $('#notes li').on('click', function onNotesListItemClick(event) {
        if (event.target.nodeName === 'LI') {

            let index = (parseInt(event.target.id) - 1);
            console.log('li index', index);
            selectNote(index);

        } else if (event.target.nodeName === 'SPAN') {
            let index = (parseInt(event.target.parentNode.id) - 1);
            console.log('span li index', index);
            deleteNote(index);
            //console.dir(event.target.parentNode); 
        }
    });
}






