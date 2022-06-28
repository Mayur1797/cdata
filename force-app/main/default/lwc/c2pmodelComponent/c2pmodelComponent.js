import { LightningElement } from 'lwc';

export default class C2pmodelComponent extends LightningElement {


  closeHandler(){
    alert('jii');
    const myEvent = new CustomEvent('close' )
    this.dispatchEvent(myEvent)
  }

}