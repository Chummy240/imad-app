var button = document.getElementById('counter');


button.onclick = function () {
    //create request
    var request = new XMLHttpRequest();
 
    //catch response and store in variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //action
            if (request.status === 200) {
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
           }
        }
   //not done
    };
    
    
    //make request
    request.open('GET', 'http://ninavrajan.imad.hasura-app.io/counter', true);
    request.send(null);
    
 
 
};