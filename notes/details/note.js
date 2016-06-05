export default function Note(id,title,dueDate,description) {
    
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate =  dueDate || new Date();
    this.finished = false;
    
    function update(fields){
        
    }
    
    
}