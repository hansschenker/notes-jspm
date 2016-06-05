import * as Handlebars from 'handlebars';
import $ from 'jquery';

//note: import model
import Note from '../details/note';

//notes.viewmodel: import NotesViewModel from './notes/list/notes.viewmodel';

//notes: service - load/save from/to localstorage
import NotesService from '../service/notes';



//notes:import template and style 
import listTemplate from './notes.html!text';
import './notes.css!css';

//         var event = document.createEvent('Event');

export default class NotesViewModel {

    constructor( notes, listTemplate) {

        this.notesDocument = {};

        this.notesElement = {};
        
        //events
        /*
        this.domEvent = document.createEvent('Event');

        this.notesElement.addEventListener('notedeleted', function (e) {
            console.log('event notedeleted attached');
        }, false);

        this.addEvent = new CustomEvent('add', { 'note': this.selectNote.id });
        this.deleteEvent = new CustomEvent('delete', { 'note': this.selectedNote.id });

        createDeleteEvent();
        // end events
        */
        this.isInitial = true;

        this.template = listTemplate;

        this.notesService = new NotesService();

        this.selectedNote = { id: 0, title: "empty note" };

    }
    /*
    set notesElement(elem){
        this.notesElement = elem;
        this.notesElement.addEventListener('notedeleted', function (e) {
            console.log('event notedeleted attached');
        }, false);
    } 
    createDeleteEvent() {
        // Create the event.
        //var event = document.createEvent('Event');

        // Define that the event name is 'build'.
        domEvent.initEvent('domdelete', true, true);

        // Listen for the event.
        notesElement.addEventListener('domdelete', function (e) {
            console.log('createDeleteEvent - domdelete event attached', e.target.id);
        }, false);

        // target can be any Element or other EventTarget.
        notesElement.dispatchEvent(domEvent);
    }
*/
    renderNotes() {

        let notesListHtml = this.compileNotesTemplate(this.notes);

    }

    convertNotesToJson() {

        let data = {};
        data.notes = this.notesService.getFromStorage();
        //console.log('data:', data);

        return data;
    }

    compileNotesTemplate() {

        // the imported template
        console.log(listTemplate);

        let templateFunction = Handlebars.compile(listTemplate);

        // get notes as for handlebars
        let jsonNotes = this.convertNotesToJson(this.notes);

        console.log(jsonNotes);
        let compiledTemplate = templateFunction(jsonNotes);

        console.log('compiledTemplate', compiledTemplate);

        // create list element and add compiled Template (html)
        return compiledTemplate;

    }



    saveNotes(notesList) {

    }

    selectNote(id) {

        this.selectedNote = notes[id];
        console.dir(selectedNote);
        // get note from notes array

        // set selectedNote on templatemodel


    }

    deleteNote(id) {
        
        this.notesService.delete(id);
        //this.notes.splice(id, 1);
        console.log(this.notesService.query());
        //notesElement.dispatchEvent(domEvent);

        this.renderNotes(false);
    }

    addNote(note) {
        this.addEvent.dispatchEvent();
    }


}  // class