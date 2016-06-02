export default function Notes() {
    
    let notes = [];
    let self = this;



    }
    

Notes.prototype.add =    function add(note) {

        if (notes) {
            self.notes.push(note);
        } else {
            let notes = [];
            self.notes.push(note);
        }

    }

Notes.prototype.list = function list() {

        if (notes) {
            return notes;
        } else {
            let notes = [];
        }
        
}
