function Searchfn(){
    var val= document.getElementById("search").value;
    switch (val.toLowerCase()) {
        case 'all':
            ShowAll();
            break;
        case 'cake':
            ShowCake();
            break;
        case 'cupcake':
            ShowCupCake();
            break;
        case 'sweet':
            ShowSweet();
            break;
        case 'doughnut':
            ShowDoughnut();
            break;
        case '':
            alert("Enter Item Name");
            break;
        default: 
           alert("Error");
           document.getElementById("data").value="";
            break;
    }
}

function ShowAll()
{
    document.getElementById("img1").src = "sweet1.jpg";
    document.getElementById("img2").src = "cupcake1.jpg";
    document.getElementById("img3").src = "cake1.jpg";
    document.getElementById("img4").src = "doughnut1.jpg";
    document.querySelector("#item1").innerHTML="Sweets"; 
    document.querySelector("#item2").innerHTML="Cupcakes"; 
    document.querySelector("#item3").innerHTML="Cakes";
    document.querySelector("#item4").innerHTML="Doughnuts"; 

}

function ShowCake()
{
    document.getElementById("img1").src = "cake1.jpg";
    document.getElementById("img2").src = "cake2.jpg";
    document.getElementById("img3").src = "cake3.jpg";
    document.getElementById("img4").src = "cake4.jpg";
    document.querySelector("#item1").innerHTML="Cake 1"; 
    document.querySelector("#item2").innerHTML="Cake 2"; 
    document.querySelector("#item3").innerHTML="Cake 3";
    document.querySelector("#item4").innerHTML="Cake 4"; 
}

function ShowCupCake()
{
    document.getElementById("img1").src = "cupcake1.jpg";
    document.getElementById("img2").src = "cupcake2.jpg";
    document.getElementById("img3").src = "cupcake3.jpg";
    document.getElementById("img4").src = "cupcake4.jpg";
    document.querySelector("#item1").innerHTML="Cupcake 1"; 
    document.querySelector("#item2").innerHTML="Cupcake 2"; 
    document.querySelector("#item3").innerHTML="Cupcake 3";
    document.querySelector("#item4").innerHTML="Cupcake 4"; 
}
function ShowSweet()
{
    document.getElementById("img1").src = "sweet1.jpg";
    document.getElementById("img2").src = "sweet2.jpg";
    document.getElementById("img3").src = "sweet3.jpg";
    document.getElementById("img4").src = "sweet4.jpg";
    document.querySelector("#item1").innerHTML="Sweet 1"; 
    document.querySelector("#item2").innerHTML="Sweet 2"; 
    document.querySelector("#item3").innerHTML="Sweet 3";
    document.querySelector("#item4").innerHTML="Sweet 4"; 
}

function ShowDoughnut()
{
    document.getElementById("img1").src = "doughnut1.jpg";
    document.getElementById("img2").src = "doughnut2.jpg";
    document.getElementById("img3").src = "doughnut3.jpg";
    document.getElementById("img4").src = "doughnut4.jpg";
    document.querySelector("#item1").innerHTML="Doughnut 1"; 
    document.querySelector("#item2").innerHTML="Doughnut 2"; 
    document.querySelector("#item3").innerHTML="Doughnut 3";
    document.querySelector("#item4").innerHTML="Doughnut 4"; 
}



