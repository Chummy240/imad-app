console.log('Loaded!');

var img = document.getElementById('maid');

img.onclick = function () { 
    var marginLeft = 0;
    function moveRight () {
        marginLeft = marginLeft = 1;
        img.style.marginLeft = marginLeft + 'px';
    }
    var interval = setInterval(moveRight, 50);
    
};
