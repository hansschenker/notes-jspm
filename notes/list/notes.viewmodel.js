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




export default class NotesViewModel {




    constructor(notes, listTemplate) {
        
        this.isInitial = true;
        this.template = listTemplate;
        this.notes = new NotesService().query();
        //this.selectedNote = selectedNote || null;
    }

/*
   renderNotesView() {


        loadChangedNotes()
        console.dir(changedNotes);

        if (isInital === false) {
            removeListElementFromDom();
        }

        renderNotes(changedNotes);

        isInital = false
    }
*/
    renderNotes() {

        let notesListHtml = compileNotesTemplate(this.notes);



    }



    convertNotesToJson() {

        let data = {};
        data.notes = this.notes;
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

        selectedNote = notes[id];
        console.dir(selectedNote);
        // get note from notes array

        // set selectedNote on templatemodel


    }
    deleteNote(id) {

        this.notes.splice(id, 1);
        console.log(this.notes);

        renderNotesView(false);
    }



}  // class