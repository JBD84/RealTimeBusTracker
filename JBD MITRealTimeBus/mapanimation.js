// This array contains the coordinates for all place you can drink something special in Miraflores
  const clubStops = [
    [-77.0352992714976,-12.108772792622002],
    [-77.0321347208367,-12.1202792417616],
    [-77.03222144370406,-12.12071335368846],
    [-77.02575577514021,-12.117989325238925],
  ];
  const roofTopStops = [
    [-77.0352992714976,-12.108772792622002],
    [-77.0321347208367,-12.1202792417616],
    [-77.03222144370406,-12.12071335368846],
    [-77.02575577514021,-12.117989325238925],
  ];
  const restaurantStops = [
    [-77.0352992714976,-12.108772792622002],
    [-77.0321347208367,-12.1202792417616],
    [-77.03222144370406,-12.12071335368846],
    [-77.02575577514021,-12.117989325238925],
  ];
  const zoneMiraflores = [-77.03222144370406,-12.12071335368846];
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiamJkODQiLCJhIjoiY2w2bno2NXZ5MDVwdzNibHVndXQ5cm1xaiJ9.T2kQBEsvZgTbWBzo7FXyPg';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: zoneMiraflores,
    zoom: 17,
  });
  var select = document.getElementById('PlaceToDrink');
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
    var marker = new mapboxgl.Marker()
      .setLngLat(zoneMiraflores)
      .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  let stops;
  function startSearch(){
      switch (select.value) {
        case "club":
          console.log("enter in the club");
          stops= clubStops;
          break;
        case "roofTop":
          stops= roofTopStop;
          console.log("enter in the roofTop");
            break;
        default:
          stops= restaurantStops;
          console.log("enter in the restaurant");
          break;
      }
    move(stops);
  } 
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    
    setTimeout(()=>{
        counter++;
        marker.setLngLat(stops[counter]);
        if(counter<stops.length-1){
            move();
        }else{
          counter=0;
          marker.setLngLat(zoneMiraflores);
        }
    },1000);
    
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  