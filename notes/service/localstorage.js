export default class LocalStorageService {
    
    constructor(storageName) {
        this.storageName = storageName;
        this.supportsStorage = window.hasOwnProperty('localStorage');
    }

    getNotes() {
        return JSON.parse(window.localStorage.getItem(this.storageName));
    }

    saveNotes(notes) {
        window.localStorage.setItem(this.storageName, JSON.stringify(notes));
    }

}