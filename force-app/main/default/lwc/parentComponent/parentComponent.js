import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    percentage=10

    changeHandler(event){
        this.percentage = event.target.value
      
    }

    handleClick(){
        this.template.querySelector('c-slider-component').resetSlider()
    }
}