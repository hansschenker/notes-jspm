export default class LocalStorageService {

    constructor(storageName) {
        
        this.storageName = storageName;
        this.supportsStorage = window.hasOwnProperty('localStorage');
        console.log('localStorage supported:',this.supportsStorage);
        
        this.getAll();
    }

    getAll() {
        let result = JSON.parse(window.localStorage.getItem(this.storageName));
        
        let emptyNote = "";
        
        if (result) {
            return result;
        } else {
            
            emptyNote = `{
                "notes" : [
                    {"id":0 , "title":"no note"}
                ]
            }
            `
        }
        console.log(emptyNote);
        return emptyNote;
    }

    saveAll(notes) {
        window.localStorage.setItem(this.storageName, JSON.stringify(notes));
    }

}