import NotesViewModel from './notes/list/notes.viewmodel';
import Note from './notes/details/note'

//var listElement;



let notesViewModel = new NotesViewModel();


$(function () {



    render();
    //isInital = false;

})

function render() {

    removeListElementFromDom();
    notesViewModel.getAll();
    renderList();
    //setInterval( renderList ,2000);
}


function renderList() {


    var html;
    html = notesViewModel.buildNotesListHtml();

    console.log('listHtml:', html);

    addListElementToDom(html);


    attachListenersToNotesList();
}

function addListElementToDom(html) {

    let listElement = document.createElement('ul');
    listElement.id = "notes";
    listElement.innerHTML = html;
    document.body.appendChild(listElement);
    console.log('main addListElementToDom', listElement);
    //this.notesViewModel.setListElement(listElement);
}

function removeListElementFromDom() {

    let listElement = document.getElementById('notes');
    if (listElement) {

        //console.dir(listElement.parentNode);
        console.dir(listElement);
        listElement.parentNode.removeChild(listElement);
    }
    //listElement.parentNode.removeChild(listElement);
    //this.notesViewModel.setListElement(null);
}

function attachListenersToNotesList() {

    $('#notes li').on('click', function onNotesListItemClick(event) {
        if (event.target.nodeName === 'LI') {

            let index = (parseInt(event.target.id) - 1);
            console.log('li index', index);
            //selectNote(index);

        } else if (event.target.nodeName === 'SPAN') {

            let index = (parseInt(event.target.parentNode.id -1) ); //-1
            deleteNote(index);

            //console.dir(event.target.parentNode); 
        }
    });

    $('#new-title').on('blur', function (event) {
        console.log($(this).val());
    })

    $('#add-new-title').on('click', function (event) {
        addNewTitle($('#new-title').val());
    })



} //attachListenersToNotesList

function addNewTitle(text) {
    notesViewModel.addNote(new Note(1, text, new Date(), "test"));
    render();
}

function deleteNote(idx) {


    console.log('span li index', idx);
    notesViewModel.deleteNote(idx);
    render();
}

