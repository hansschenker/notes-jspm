import * as Handlebars from 'handlebars';
import $ from 'jquery';

//note: import model
import Note from '../details/note';

//notes.viewmodel: import NotesViewModel from './notes/list/notes.viewmodel';

//notes: service - load/save from/to localstorage
//import NotesService from '../service/notes.service';
//var notesService = new NotesService();


//console.log('notes viewmodel service.getAll',notes);

//notes:import template and style 
import listTemplate from './notes.html!text';
import './notes.css!css';

//         var event = document.createEvent('Event');

export default class NotesViewModel {

    constructor(listTemplate) {
        
       // this.listElement = null;
        
        this.notes = [];
        this.jsonNotes = {};
        this.listElementHtml = "";
        this.storageName = "hs-notes";

        this.notesDocument = {};

        this.notesElement = {};

        //this.notes = this.getAll();
        //console.log('vm constructor getall',this.notes);
        //this.init();

        this.isInitial = true;

        this.template = listTemplate;

        //this.notesService = new NotesService();

        //this.selectedNote = this.notes[0];
        console.log('vm selectedNote', this.selectedNote);

    }
    

    
    getAll() {

        this.notes = JSON.parse(window.localStorage.getItem(this.storageName));
        this.jsonNotes = this.convertNotesToJson();
        
        console.log('vm getall', this.notes);
        this.listElementHtml = this.buildNotesListHtml();
        console.log(this.jsonNotes);
        console.log(this.listElementHtml);

    }


    convertNotesToJson() {

        let data = {};
        data.notes = this.notes; // this.notesService.getAll();
        console.log(data);
        //console.log('data:', data);
        this.jsonNotes = data;
        
        //return data;
    }

    buildNotesListHtml() {

        // the imported template
        //console.log(listTemplate);

        let templateFunction = Handlebars.compile(listTemplate);

        // get notes as for handlebars
        this.convertNotesToJson();
        
        let html = templateFunction(this.jsonNotes);

        console.log('compiledTemplate', html);
        
        // create list element and add compiled Template (html)
        return html;

    }


    saveAll() {
        window.localStorage.setItem(this.storageName, JSON.stringify(this.notes));
        this.getAll();
        //this.buildNotesListHtml();

    }

    selectNote(id) {

        this.selectedNote = notes[id];
        console.dir(selectedNote);
        // get note from notes array

        // set selectedNote on templatemodel


    }

    deleteNote(id) {

        this.notes.splice(id,1);
        this.saveAll();
        this.getAll();
        //this.notes.splice(id, 1);
        //console.log(this.notesService.query());
        //notesElement.dispatchEvent(domEvent);

        //this.renderNotes(false);
    }

    addNote(note) {

        this.notes.push(note);
        this.saveAll();
        this.getAll();

        //this.addEvent.dispatchEvent();
    }


}  // class