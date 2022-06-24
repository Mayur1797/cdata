import { LightningElement } from 'lwc';

export default class Quizapp extends LightningElement {

    selected={}
    correctAnswer = 0
    isSubmitted= false

    myQuestion=[
        {
        id:"Question1",
        question:"Which on of the following is not template loop?",
        answer:{
            a:"for:each",
            b:"iterator",
            c:"map loop"
        },
        correctAnswer:"c"
    },
    {
        id:"Question2",
        question:"Which one of the file is invalid in LWC folder?",
        answer:{
            a:".svg",
            b:".apex",
            c:".js"
        },
        correctAnswer:"b"
    },
    {
        id:"Question3",
        question:"Which one of the following is not  directive?",
        answer:{
            a:"for:each",
            b:"if:true",
            c:"@track"
        },
        correctAnswer:"c"
    }
    ]
    
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }

    get isScoredfull(){
        return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswer ? 
        'slds-text-color_success': 'slds-text-color_error'}`
    }

    changeHandler(event)
         {
                  console.log("name",event.target.name)
                  console.log("value",event.target.value)
                  const{name, value}= event.target
                  this.selected={...this.selected, [name]:value}
         }
         submitHandler(event){
            event.preventDefault()
            let correct =  this.myQuestion.filter(item=>this.selected[item.id] ===item.correctAnswer)
            this.correctAnswer = correct.length
            this.isSubmitted= true
            console.log("this.correctAnswer", this.correctAnswer)

         }
         resetHandler(){
            this.selected= {}
            this.correctAnswer=0
            this.isSubmitted = false

         }
}