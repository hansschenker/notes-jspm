export default class NoteViewModel {
    
       constructor(document,  localStorageService, uuid){
           this.notes = [];
           this.document = document;
           this.localStorageService = localStorageService;
           this.localStorageSupported = localStorageService.supportsStorage();;
       }
        
        //this.localStorageSupported = localStorageService.supportsStorage();

        if (localStorageSupported) {
            this.notes = localStorageService.getNotes() || [];
            this.currentNote = this.notes[0] || {};

            this.edited = false;
            this.showModal = false;

            this.preSaveNote = function () {
                if (!this.currentNote.title) {
                    this.showModal = true;
                    timeout(function () {
                        var field = $document[0].getElementById('title');
                        field.focus();
                    }, 0);
                } else {
                    this.saveNote();
                }
            };

            this.hideModal = function (event) {
                this.showModal = !event.target.classList.contains('overlay');
            };

            this.saveNote = function () {
                this.showModal = false;
                this.edited = false;

                if (!this.currentNote.id) {
                    this.currentNote.id = uuid.generate();
                    this.notes.push(this.currentNote);
                } else {
                    this.notes.some(function (note, index) {
                        if (note.id === this.currentNote.id) {
                            this.notes.splice(index, 1, this.currentNote);
                        }
                    });
                }

                localStorageService.saveNotes(this.notes);

                timeout(function () {
                    var newActive = $document[0].getElementById(this.currentNote.id);
                    newActive.classList.add('active');
                });
            };

            this.newNote = function () {
                var currentActive = $document[0].getElementsByClassName('active')[0],
                    editor = $document[0].getElementsByTagName('textarea')[0];

                this.currentNote = {};

                if (currentActive) {
                    currentActive.classList.remove('active');
                }

                editor.focus();
            };

            this.openNote = function (event) {
                var hash = event.target.id,
                    currentActive = $document[0].getElementsByClassName('active')[0];

                this.notes.some(function (note) {
                    if (note.id === hash) {
                        this.currentNote = note;

                        return true;
                    }
                });

                currentActive.classList.remove('active');
                event.target.classList.add('active');
            };

            this.deleteNote = function () {
                var hash = this.currentNote.id;

                this.notes.some(function (note, index) {
                    var newNote, newActive;

                    if (note.id === hash) {

                        newNote = this.notes[index - 1] || this.notes[index + 1] || {};
                        newActive = $document[0].getElementById(newNote.id);

                        if (newActive) {
                            newActive.classList.add('active');
                        }

                        this.notes.splice(index, 1);
                        this.currentNote = newNote;

                        return true;
                    }
                });

                localStorageService.saveNotes(this.notes);
            };

        }

    }