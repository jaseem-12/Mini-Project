
let routeContainer = document.querySelector("#routeContainerList");
function getRoutes() {
    event.preventDefault(event);

    let userRoute = document.getElementById("route").value;

    routes = {
        101: ['Vytilla Hub','Thrippunithura','Thiruvankulam','Puthenkurish','Kolenchery','Muvattupuzha'],
        102: ['Kolanchery','Pattimattom','Arakkappady','Vengola','Allapra','Perumbavoor'],
        103: ['Kolanchery','Pazhamthottam','Kizhakambalam','Pallikara','Pookattupadi','choondi','Aluva']
    }

    let routesList = [];
    
    routes[userRoute].forEach(element => {
        routesList.push(`<li class="list-group-item">${element}</li>`);
    });

    
    routeContainer.innerHTML = "";
    routesList.forEach(element => routeContainer.innerHTML += element);
}
function resetpage(){
    routeContainer.innerHTML = "";
    document.getElementById("route").value="";

}
