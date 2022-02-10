const url="https://api.wheretheiss.at/v1/satellites/25544";
async function getdata(){
    const response= await fetch(url);
    const data = await response.json();
    const{latitude,longitude}= data;
    console.log(latitude,longitude);
    document.getElementById("lat").textContent=latitude;
    document.getElementById("long").textContent=longitude
    new mapboxgl.Marker({
        draggable: false,
    }).setLngLat([longitude, latitude])
    .addTo(map); 

}
getdata();

let interval=4000;
setInterval(getdata,interval)