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
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElemenetById('namelist');
    ul.innerHTML = list;
    
};
