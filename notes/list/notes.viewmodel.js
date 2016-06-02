export default function NotesViewModel (view, model,selectedNote){
    
    this.view = view;
    this.model = model;
    this.selectedNote = selectedNote || null;
    
    
    function updateView(fields){
        // update all view fields with all model fields
    }
    

    
    function updateModel(fields){
        // iterate fields and update model fields with fields.value
    }
    
    function setSelectedNote(note){
        this.selectedNote = note;
    }
    
}