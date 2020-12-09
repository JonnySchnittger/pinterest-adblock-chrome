const pattern = new RegExp('[a-zA-Z]');

// https://stackoverflow.com/a/14570614
var observeDOM = (function(){
   var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
 
   return function( obj, callback ){
     if( !obj || obj.nodeType !== 1 ) return; 
 
     if( MutationObserver ){
       // define a new observer
       var mutationObserver = new MutationObserver(callback)
 
       // have the observer observe foo for changes in children
       mutationObserver.observe( obj, { childList:true, subtree:true })
       return mutationObserver
     }
     
     // browser support fallback
     else if( window.addEventListener ){
       obj.addEventListener('DOMNodeInserted', callback, false)
       obj.addEventListener('DOMNodeRemoved', callback, false)
     }
   }
 })()
 
 let body = document.querySelector('body');

 observeDOM( body, function(m){ 
   // get all pins
   const elements = document.querySelectorAll("[data-test-pin-id]");
   elements.forEach(el => {
      let id = el.getAttribute('data-test-pin-id');

      if(pattern.test(id)) {
         el.remove();
      }
   });
});

