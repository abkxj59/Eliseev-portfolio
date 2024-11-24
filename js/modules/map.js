const addressInput = document.querySelector('#address');
const map = document.querySelector('.map');

const initMap = () => {
  map.classList.remove('map--nojs');

  const myMap = new ymaps.Map('map', {
    center: [59.998205, 30.385250],
    zoom: 15,
    controls: [],
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/pin.svg',
    iconImageSize: [27, 39],
    iconImageOffset: [-13.5, -39],
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.events.add('click', function (e) {
    const coords = e.get('coords');
    setMarker(coords);
  });

  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then(function (res) {
      const firstGeoObject = res.geoObjects.get(0);

      myPlacemark.properties
          .set({
            iconCaption: [
              firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
            ].filter(Boolean).join(', '),
            balloonContent: firstGeoObject.getAddressLine(),
          });
      addressInput.value = firstGeoObject.getAddressLine();
    });
  }

  function setMarker(coords) {
    myPlacemark.geometry.setCoordinates(coords);
    getAddress(coords);
  }

  let addressCoords = [];
  const getAddressCoords = (suggestion) => {
    addressCoords = [];
    addressCoords.push(suggestion.data.geo_lat);
    addressCoords.push(suggestion.data.geo_lon);
    return addressCoords;
  };

  $('#address').suggestions({
    token: '99bd42a4df5a5e4a0db88bca2b1898171b28d618',
    type: 'ADDRESS',
    onSelect: function(suggestion) {
      getAddressCoords(suggestion);
      setMarker(addressCoords);
      myMap.setCenter(addressCoords);
    },
  });
};

export {initMap};
