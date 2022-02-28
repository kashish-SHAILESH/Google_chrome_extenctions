document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick,false)
    function onclick(){
        var text = document.getElementById('text').value
      chrome.tabs.query({currentWindow:true, active:true} , 
        function(tabs){
         chrome.tabs.sendMessage(tabs[0].id,text)

      })
 
    }
     
    
 
    },false ) 
