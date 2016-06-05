import NotesViewModel from './notes/list/notes.viewmodel';

let notesViewModel = new NotesViewModel();


$(function () {



    render();
    //isInital = false;

})

function render() {
    


    
    renderList();
}


function renderList() {

    
    var html;
    html = notesViewModel.compileNotesTemplate();

    console.log('listHtml:', html);

    addListElementToDom(html);


    attachListenersToNotesList();
}

function addListElementToDom(html) {

    let listElement = document.createElement('ul');
    listElement.id = "notes";
    listElement.innerHTML = html;
    document.body.appendChild(listElement);
    //this.notesViewModel.notesElement(listElement);
}

function removeListElementFromDom() {

    let listElement = document.getElementById('notes');
    console.dir(listElement.parentNode);
    listElement.parentNode.removeChild(listElement);

}

function attachListenersToNotesList() {

    $('#notes li').on('click', function onNotesListItemClick(event) {
        if (event.target.nodeName === 'LI') {

            let index = (parseInt(event.target.id) - 1);
            console.log('li index', index);
            //selectNote(index);

        } else if (event.target.nodeName === 'SPAN') {
            let index = (parseInt(event.target.parentNode.id) - 1);
            console.log('span li index', index);
            notesViewModel.deleteNote(index);
            //console.dir(event.target.parentNode); 
        }
    });


} //attachListenersToNotesList

