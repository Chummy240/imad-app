
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //create request
    var request = new XMLHttpRequest();
 
    //catch response and store in variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //action
            if (request.status === 200) {
                console.log('user logged in');
                alert('Login successful :D');
            } else if (request.status === 403) {
                alert('Username/passowrd is incorrect :(');
            } else if (request.status === 500) {
                alert('Something has gone wrong...');
            }
        }
   //not done
    };
    
    
    //make request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://ninavrajan.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
   
};
