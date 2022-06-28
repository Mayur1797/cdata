import { LightningElement } from 'lwc';

export default class C2pparentComponent extends LightningElement {

    showmodel=false
    clickHandler(){
        this.showmodel = true
    }

    closeHandler1(){
        this.showmodel = false
    }
}