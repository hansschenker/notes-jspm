import * as Handlebars from 'handlebars';
import $ from 'jquery';

//note: import model
import Note from './notes/details/note';

//notes.viewmodel: import NotesViewModel from './notes/list/notes.viewmodel';

//notes:import template and style 
import template from './notes/list/notes.html!text';
import './notes/list/notes.css!css';


let notes = [];
let changedNotes = [];
let selectedNote = null;

let isInital = true;
let renderCount = 0;


$(function () {
    
    // fill notes array
    initNotes();
    
    renderNotesView();
    //isInital = false;

})


function renderNotesView() {
    
    
    loadChangedNotes()
    console.dir(changedNotes);
    
    if(isInital === false){
        removeListElementFromDom();
    }
    
    renderNotes(changedNotes);
    
    isInital = false
}

function renderNotes(notes){
    
    let notesListHtml = compileNotesTemplate(notes);

    addListElementToDom(notesListHtml);


    attachListenersToNotesList();

}

function initNotes(){
    
    notes.push(new Note(1, 'Note 1'));
    notes.push(new Note(2, 'Note 2'));
    notes.push(new Note(3, 'Note 3'));
    notes.push(new Note(4, 'Note 4'));
    notes.push(new Note(5, 'Note 5'));
}

function loadChangedNotes() {
   notes.forEach(n => changedNotes.push(n));

}



function convertNotesToJson(notes) {

    let data = {};
    data.notes = notes;
    //console.log('data:', data);

    return data;
}

function compileNotesTemplate() {

    // the imported template
    console.log(template);

    let templateFunction = Handlebars.compile(template);

    // get notes as for handlebars
    let jsonNotes = convertNotesToJson(notes);
    console.log(jsonNotes);
    let compiledTemplate = templateFunction(jsonNotes);

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
    
    notes.splice(id, 1);
    console.log(notes);
    
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






