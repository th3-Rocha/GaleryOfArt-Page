var StyleType, OrderType;
var Arts = document.querySelectorAll("art");
console.log(Arts[0].getAttribute("ArtStyle"));

function reOrganize(){
    var i=0;
    Arts.forEach(() =>{
        if(Arts[i].getAttribute("ArtStyle") == StyleType || StyleType == "all"){
            Arts[i].style.display = "block";
        }
        else{
            Arts[i].style.display = "none";
        }
        i++;
    })
}

function changeStyle(){
    var style = document.getElementById("Selector01");
    StyleType = style.value;
    console.log(StyleType);
}
function changeOrder(){
    var order = document.getElementById("Selector02");
    OrderType = order.value;
    console.log(OrderType);
}

