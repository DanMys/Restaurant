;(function(){

  class UserLocation {
    static get(callback) {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((location)=>{
          callback({
            lat: location.coords.latitude,
            lng: location.coords.longitude
          })
        })
      }else{
        alert("No localizamos tu ubicacion")
      }
    }
  }

  const my_place = {
    lat: 32.534082,
    lng: -116.9652525
  }

  google.maps.event.addDomListener(window,"load",()=>{
    const map = new google.maps.Map(document.getElementById('map'),
    {
      center: my_place,
      zoom: 15
    }
  )

  const marker = new google.maps.Marker({
    map: map,
    position: my_place,
    title: "Restaurante",
    visible: true

  })

  UserLocation.get((coords)=>{
    // alert("Ya tengo cordenadas")
    // console.log(coords)
    //calcular distancia
    let origen = new google.maps.LatLng(coords.lat,coords.lng) //LatLng
    let destino = new google.maps.LatLng(my_place.lat,my_place.lng) //

    let service = new google.maps.DistanceMatrixService()

    service.getDistanceMatrix({
      // origins: [origen,origen2],
      origins: [origen],
      destinations: [destino],
      travelMode: google.maps.TravelMode.DRIVING
    },(response,status)=>{
      // [[origen-destino],[origen2-destino]]
      // [[origen-destino.origen-destino2]
      if(status === google.maps.DistanceMatrixStatus.OK){
        const duration_element = response.rows[0].elements[0]
        const duracion_viaje = duration_element.duration.text

        document.querySelector("#message")
                .innerHTML = `
                  Estas a ${duracion_viaje} de una gran comida en
                  <span class="dancing-script medium">Restaurante</span>
                `

        console.log(duration_element)
      }
    })
  })


  })
})()
