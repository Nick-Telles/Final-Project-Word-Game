// // dependencies / things imported
//    impor// dependencies / things imported
//    import { LitElement, html, css } from 'lit';

//    // EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
//    // which has the magic life-cycles and developer experience below added
   
//    /**
//     * @todo For lab 2 see homework for week two of class
//     */

//    export class woordle extends LitElement {
//      // a convention I enjoy so you can change the tag name in 1 place
//      static get properties() {
       
    
//      return{
//        endpoint: {type: String},
//        word: {type: String}
   
//      }
//    }
//        constructor() {
//          super();
//          this.endpoint ='/api/wordGenerate';
//          this.word = [];
//        }
//        async getData() {
//          return fetch(`${this.endpoint}?myDay=${this.date}`)
//            .then(resp => resp.json())
//            .then(responseData => {
//              this.word = responseData.word;
//            });
 
 

//        }
//      render() {
       
//      // word = await fetch(url).then(res => res.json());
//        // filter array to just 5 letter words
//        //word = wordList.filter(item => item.length === 5);
      
//    //return html`word:${this.word} `;
//       //return html  `<iframe> word:${this.word} </iframe> `;
//        // var wordList = await fetch(url).then(res => res.json());
//        // filter array to just 5 letter words
//        //wordList = wordList.filter(item => item.length === 5);
//        return html`word:${this.word}
    
//     <word-game-board .word="${this.word}"></word-game-board>
//     `;

   
   
//        //return html  `<iframe title="Word" src = ${url}></iframe> `;
//      }}
     
     
//    customElements.define('woord-le', woordle);


   // dependencies / things imported
   import { LitElement, html, css } from 'lit';

 
   export class woordle extends LitElement {
    
     static get properties() {
    
     return{
       endpoint: {type: String},
       word: {type: String, reflect: true},
   
     }
   }
       constructor() {
         super();
         this.endpoint ='/api/wordGenerate';
         this.word = null;
       }
      
       firstUpdated(changedProperties) {
      
         if (super.firstUpdated) {
           super.firstUpdated(changedProperties);
         }
   
         if (this.word === null) {
           this.updateWord();
         }
       }
       async updateWord() {
         return fetch(this.endpoint)
           .then(resp => {
             if (resp.ok) {
               return resp.json();
             }
             return false;
           })
           .then(data => {
             console.log(data);

             this.word = data.word;
             return data;
           });}

 
     render() {
     
      const url = `https://random-word-api.herokuapp.com/word?number=1&swear=0&length=5`;
     
   
       return html  `<li>${this.word}</li> 
       <li>${this.endpoint}</li>
       <iframe title="Word" src = ${url}></iframe> 
       `;
     }}
     
     
   customElements.define('woord-le', woordle);