import * as Handlebars from 'handlebars';
import $ from 'jquery';


//text-input: import template and style
import inputtemplate from './notes/text-input/text-input.html!text';
import './notes/text-input/text-input.css!css';


export default function NoteViewModel (view, model){
    
    this.view = view;
    this.note = model;
    
    
    
    function updateView(fields){
        // update all view fields with all model fields
    }
    

    
    function updateModel(fields){
        // iterate fields and update model fields with fields.value
    }
        
}