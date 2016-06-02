export default function NotesList() {
    
    let notes = [];
    let self = this;



    }
    

NotesList.prototype.add =    function add(note) {

        if (notes) {
            self.notes.push(note);
        } else {
            let notes = [];
            self.notes.push(note);
        }

    }

NotesList.prototype.list = function list() {

        if (notes) {
            return notes;
        } else {
            let notes = [];
        }
        
}
