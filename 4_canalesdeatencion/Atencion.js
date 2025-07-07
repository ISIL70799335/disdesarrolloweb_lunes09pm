            
            /*mapa*/
            let map = L.map('mapa').setView([-12.125595, -77.024935],15)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker([-12.125595, -77.024935]).addTo(map).bindPopup("Miraflores")
            L.marker([-12.093850, -77.053232]).addTo(map).bindPopup("San Isidro")
            L.marker([-12.073515, -76.948205]).addTo(map).bindPopup("La Molina")
            map.on('click', onMapClick)

            //Alerta de mapa
            /*function onMapClick(e){
                alert("Position:" + e.latlng)
            } */


            
            

            