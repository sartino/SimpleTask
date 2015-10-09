function alertMe() {
    alert("You clicked me!");
};

function showAlert(x) {
    var Message = document.getElementById(x).value;
    alert(Message);
}

function changeBackground(id, color) {
    document.getElementById(id).style.background = color;
}

function textChange() {
    document.getElementById("redText").style.color = "red";
}

function textRandom() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        document.getElementById("randomText").style.color = color;
    }
}

function clickMakeName() {
    var h = document.createElement("span");
    var t = document.createTextNode(" Steve Sartino");
    h.appendChild(t);
    document.getElementById("emptyDiv").appendChild(h);
}

var arr = [['Steve', 'Mike', ' James', ' Gene', ' Ralph', 'Daniel']];
function fireArray(arr) {
    var z = document.getElementById("arrayul");
    for (var i = 0; i < arr.length; i++) {
        var para = document.createElement('li');
        para.appendChild(document.createTextNode(arr[i]));
        z.appendChild(para);
    }
    return para
}
document.getElementById('arrayul').appendChild(fireArray(arr[0]));


// fireArray();

// var myObject = {
    
//     name: name,
//     getName: function () {
        
//         var sayHello = function () {
//             return 'Hello ' + this.name;
//         };
        
//         return sayHello();
//     }
    
// }

// function test() {
    
//     this.t = 'f';
//     this.b = '2';
    
//     function doStuff() {
        
//         var doMore = function() {
//             this;
//             var doEvenMore = function() {
//                 this.t;
//             }.bind(this);
            
//         }.bind(this);
//     }
    
// }