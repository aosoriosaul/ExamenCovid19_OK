import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map;

  // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const parcThabor = {
      lat: 37.09024,
      lng: -95.712891,
    };

    const parcThabor1 = {
      lat: 42.9981,
      lng: -78.1848,
    };

    const parcThabor2 ={lat: 39.6687, lng: -88.525};
    const parcThabor3={lat: 32.7452,lng: -111.6033};
    const parcThabor4={lat: 44.6267,lng: -92.0566};
    const parcThabor5={lat: 34.05223,lng: -118.24368};
    const parcThabor6={lat: 39.2453,lng: -107.9249};
    const parcThabor7={lat: 39.4782,lng: -80.272};
    const parcThabor8={lat: 32.3987,lng: -100.8609};
    const parcThabor9={lat: 41.3507,lng: -72.1062};
    const parcThabor10={lat: 42.4031,lng: -89.5468};
    const parcThabor11={lat: 44.6471761,lng: -100.348761};
    const parcThabor12={lat: 40.9069,lng: -75.0754};
    const parcThabor13={lat: 25.5584,lng: -80.4582};
    const parcThabor14={lat: 31.6287,lng: -86.734};
    const parcThabor15={lat: 33.8296,lng: -118.073};
    const parcThabor16={lat: 43.3233,lng: -111.7822};
    const parcThabor17={lat: 41.3892,lng: -90.8925};
    const parcThabor18={lat: 40.64,lng: -79.1294};
    const parcThabor19={lat: 30.2219,lng: -93.0259};
    const parcThabor20={lat: 36.2161,lng: -94.8114};
    const parcThabor21={lat: 38.6639,lng: -81.596};
    const parcThabor22={lat: 39.4336,lng: -91.0664};
    const parcThabor23={lat: 42.2538,lng: -76.0464};
    const parcThabor24={lat: 42.5371,lng: -74.903};
    const parcThabor25={lat: 42.3788774,lng: -72.032366};
    const parcThabor26={lat: 48.0204,lng: -98.1186};
    const parcThabor27={lat: 44.0832,lng: -91.7418};
    const parcThabor28={lat: 32.862680,lng: -89.755600};
    const parcThabor29={lat: 39.2458,lng: -94.2924};
    const parcThabor30={lat: 47.3752671,lng: -109.638757};
    const parcThabor31={lat: 39.0013,lng: -85.6199};
    const parcThabor32={lat: 40.8259,lng: -83.1266};
    const parcThabor33={lat: 40.7918,lng: -74.2452};
    const parcThabor34={lat: 40.71427,lng: -74.00597};
    const parcThabor35={lat: 35.5915,lng: -87.3251};
    const parcThabor36={lat: 32.055,lng: -108.6291};
    const parcThabor37={lat: 41.5371,lng: -89.4574};
    const parcThabor38={lat: 35.5514,lng: -97.4075};
    const parcThabor39={lat: 43.9792797,lng: -120.737257};
    const parcThabor40={lat: 40.8681,lng: -77.9574};
    const parcThabor41={lat: 41.5041,lng: -71.663};
    const parcThabor42={lat: 40.414,lng: -90.8556};
    const parcThabor43={lat: 29.3305,lng: -94.8002};
    const parcThabor44={lat: 39.4225192,lng: -111.714358};
    const parcThabor45={lat: 40.3062,lng: -90.422};
    const parcThabor46={lat: 39.958,lng: -90.1764};
    const parcThabor47={lat: 40.2309,lng: -96.5121};
    const parcThabor48={lat: 38.8933,lng: -77.0146};
    const parcThabor49={lat: 44.3881,lng: -89.9228};
    const parcThabor50={lat: 37.6033,lng: -81.54};


    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [parcThabor.lat, parcThabor.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 5,
      maxZoom: 5,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    const descriptionWikipedia = `
      State: Alabama
               Covid19: 3000`;
    const popupOptions = {
      coords: parcThabor1,
      text: descriptionWikipedia,
      open: true
    };
    this.addMarker(popupOptions);

    mainLayer.addTo(this.map); const descriptionWikipedia2 = `State: Illinois Covid19: 3000`; const popupOptions2 = {coords: parcThabor2,text: descriptionWikipedia2,open: true}; this.addMarker(popupOptions2);
    mainLayer.addTo(this.map); const descriptionWikipedia3 = `State: Arizona Covid19: 205`; const popupOptions3 = {coords: parcThabor3,text: descriptionWikipedia3,open:true}; this.addMarker(popupOptions3);
    mainLayer.addTo(this.map);const descriptionWikipedia4=`State: Arkansas Covid19: 300`; const popupOptions4 = {coords: parcThabor4,text: descriptionWikipedia4,open:true}; this.addMarker(popupOptions4);
    mainLayer.addTo(this.map);const descriptionWikipedia5=`State: California Covid19: 368`; const popupOptions5 = {coords: parcThabor5,text: descriptionWikipedia5,open:true}; this.addMarker(popupOptions5);
    mainLayer.addTo(this.map);const descriptionWikipedia6=`State: Carolina del Norte Covid19: 500`; const popupOptions6 = {coords: parcThabor6,text: descriptionWikipedia6,open:true}; this.addMarker(popupOptions6);
    mainLayer.addTo(this.map);const descriptionWikipedia7=`State: Carolina del Sur Covid19: 6987`; const popupOptions7 = {coords: parcThabor7,text: descriptionWikipedia7,open:true}; this.addMarker(popupOptions7);
    mainLayer.addTo(this.map);const descriptionWikipedia8=`State: Colorado Covid19: 1658`; const popupOptions8 = {coords: parcThabor8,text: descriptionWikipedia8,open:true}; this.addMarker(popupOptions8);
    mainLayer.addTo(this.map);const descriptionWikipedia9=`State: Connecticut Covid19: 4234`; const popupOptions9 = {coords: parcThabor9,text: descriptionWikipedia9,open:true}; this.addMarker(popupOptions9);
    mainLayer.addTo(this.map);const descriptionWikipedia10=`State: Dakota del Norte Covid19: 12526`; const popupOptions10 = {coords: parcThabor10,text: descriptionWikipedia10,open:true}; this.addMarker(popupOptions10);
    mainLayer.addTo(this.map);const descriptionWikipedia11=`State: Dakota del Sur Covid19: 221`; const popupOptions11 = {coords: parcThabor11,text: descriptionWikipedia11,open:true}; this.addMarker(popupOptions11);
    mainLayer.addTo(this.map);const descriptionWikipedia12=`State: Delaware Covid19: 100`; const popupOptions12 = {coords: parcThabor12,text: descriptionWikipedia12,open:true}; this.addMarker(popupOptions12);
    mainLayer.addTo(this.map);const descriptionWikipedia13=`State: Florida Covid19: 190`; const popupOptions13 = {coords: parcThabor13,text: descriptionWikipedia13,open:true}; this.addMarker(popupOptions13);
    mainLayer.addTo(this.map);const descriptionWikipedia14=`State: Georgia Covid19: 147`; const popupOptions14 = {coords: parcThabor14,text: descriptionWikipedia14,open:true}; this.addMarker(popupOptions14);
    mainLayer.addTo(this.map);const descriptionWikipedia15=`State: Hawái9​ Covid19: 14566`; const popupOptions15 = {coords: parcThabor15,text: descriptionWikipedia15,open:true}; this.addMarker(popupOptions15);
    mainLayer.addTo(this.map);const descriptionWikipedia16=`State: Idaho Covid19: 1514`; const popupOptions16 = {coords: parcThabor16,text: descriptionWikipedia16,open:true}; this.addMarker(popupOptions16);
    mainLayer.addTo(this.map);const descriptionWikipedia17=`State: Illinois Covid19: 1678`; const popupOptions17 = {coords: parcThabor17,text: descriptionWikipedia17,open:true}; this.addMarker(popupOptions17);
    mainLayer.addTo(this.map);const descriptionWikipedia18=`State: Indiana Covid19: 256`; const popupOptions18 = {coords: parcThabor18,text: descriptionWikipedia18,open:true}; this.addMarker(popupOptions18);
    mainLayer.addTo(this.map);const descriptionWikipedia19=`State: Iowa Covid19: 300`; const popupOptions19 = {coords: parcThabor19,text: descriptionWikipedia19,open:true}; this.addMarker(popupOptions19);
    mainLayer.addTo(this.map);const descriptionWikipedia20=`State: Kansas Covid19: 1`; const popupOptions20 = {coords: parcThabor20,text: descriptionWikipedia20,open:true}; this.addMarker(popupOptions20);
    mainLayer.addTo(this.map);const descriptionWikipedia21=`State: Kentucky Covid19: 478`; const popupOptions21 = {coords: parcThabor21,text: descriptionWikipedia21,open:true}; this.addMarker(popupOptions21);
    mainLayer.addTo(this.map);const descriptionWikipedia22=`State: Luisiana10​ Covid19: 458`; const popupOptions22 = {coords: parcThabor22,text: descriptionWikipedia22,open:true}; this.addMarker(popupOptions22);
    mainLayer.addTo(this.map);const descriptionWikipedia23=`State: Maine Covid19: 6988`; const popupOptions23 = {coords: parcThabor23,text: descriptionWikipedia23,open:true}; this.addMarker(popupOptions23);
    mainLayer.addTo(this.map);const descriptionWikipedia24=`State: Maryland Covid19: 1477`; const popupOptions24 = {coords: parcThabor24,text: descriptionWikipedia24,open:true}; this.addMarker(popupOptions24);
    mainLayer.addTo(this.map);const descriptionWikipedia25=`State: Massachusetts Covid19: 154`; const popupOptions25 = {coords: parcThabor25,text: descriptionWikipedia25,open:true}; this.addMarker(popupOptions25);
    mainLayer.addTo(this.map);const descriptionWikipedia26=`State: Míchigan Covid19: 236`; const popupOptions26 = {coords: parcThabor26,text: descriptionWikipedia26,open:true}; this.addMarker(popupOptions26);
    mainLayer.addTo(this.map);const descriptionWikipedia27=`State: Minnesota Covid19: 578`; const popupOptions27 = {coords: parcThabor27,text: descriptionWikipedia27,open:true}; this.addMarker(popupOptions27);
    mainLayer.addTo(this.map);const descriptionWikipedia28=`State: Misisipi Covid19: 689`; const popupOptions28 = {coords: parcThabor28,text: descriptionWikipedia28,open:true}; this.addMarker(popupOptions28);
    mainLayer.addTo(this.map);const descriptionWikipedia29=`State: Missouri Covid19: 254`; const popupOptions29 = {coords: parcThabor29,text: descriptionWikipedia29,open:true}; this.addMarker(popupOptions29);
    mainLayer.addTo(this.map);const descriptionWikipedia30=`State: Montana Covid19: 789`; const popupOptions30 = {coords: parcThabor30,text: descriptionWikipedia30,open:true}; this.addMarker(popupOptions30);
    mainLayer.addTo(this.map);const descriptionWikipedia31=`State: Nebraska Covid19: 2233`; const popupOptions31 = {coords: parcThabor31,text: descriptionWikipedia31,open:true}; this.addMarker(popupOptions31);
    mainLayer.addTo(this.map);const descriptionWikipedia32=`State: Nevada Covid19: 1500`; const popupOptions32 = {coords: parcThabor32,text: descriptionWikipedia32,open:true}; this.addMarker(popupOptions32);
    mainLayer.addTo(this.map);const descriptionWikipedia33=`State: Nueva Jersey17​ Covid19: 1200`; const popupOptions33 = {coords: parcThabor33,text: descriptionWikipedia33,open:true}; this.addMarker(popupOptions33);
    mainLayer.addTo(this.map);const descriptionWikipedia34=`State: Nueva York19​ Covid19: 20`; const popupOptions34 = {coords: parcThabor34,text: descriptionWikipedia34,open:true}; this.addMarker(popupOptions34);
    mainLayer.addTo(this.map);const descriptionWikipedia35=`State: Nuevo Hampshire20​ Covid19: 60`; const popupOptions35 = {coords: parcThabor35,text: descriptionWikipedia35,open:true}; this.addMarker(popupOptions35);
    mainLayer.addTo(this.map);const descriptionWikipedia36=`State: Nuevo México22​ Covid19: 47`; const popupOptions36 = {coords: parcThabor36,text: descriptionWikipedia36,open:true}; this.addMarker(popupOptions36);
    mainLayer.addTo(this.map);const descriptionWikipedia37=`State: Ohio Covid19: 22`; const popupOptions37 = {coords: parcThabor37,text: descriptionWikipedia37,open:true}; this.addMarker(popupOptions37);
    mainLayer.addTo(this.map);const descriptionWikipedia38=`State: Oklahoma Covid19: 147`; const popupOptions38 = {coords: parcThabor38,text: descriptionWikipedia38,open:true}; this.addMarker(popupOptions38);
    mainLayer.addTo(this.map);const descriptionWikipedia39=`State: Oregón24​ Covid19: 156`; const popupOptions39 = {coords: parcThabor39,text: descriptionWikipedia39,open:true}; this.addMarker(popupOptions39);
    mainLayer.addTo(this.map);const descriptionWikipedia40=`State: Pensilvania25​ Covid19: 987`; const popupOptions40 = {coords: parcThabor40,text: descriptionWikipedia40,open:true}; this.addMarker(popupOptions40);
    mainLayer.addTo(this.map);const descriptionWikipedia41=`State: Rhode Island Covid19: 147`; const popupOptions41 = {coords: parcThabor41,text: descriptionWikipedia41,open:true}; this.addMarker(popupOptions41);
    mainLayer.addTo(this.map);const descriptionWikipedia42=`State: Tennessee Covid19: 2255`; const popupOptions42 = {coords: parcThabor42,text: descriptionWikipedia42,open:true}; this.addMarker(popupOptions42);
    mainLayer.addTo(this.map);const descriptionWikipedia43=`State: Texas27​ Covid19: 2266`; const popupOptions43 = {coords: parcThabor43,text: descriptionWikipedia43,open:true}; this.addMarker(popupOptions43);
    mainLayer.addTo(this.map);const descriptionWikipedia44=`State: Utah Covid19: 644`; const popupOptions44 = {coords: parcThabor44,text: descriptionWikipedia44,open:true}; this.addMarker(popupOptions44);
    mainLayer.addTo(this.map);const descriptionWikipedia45=`State: Vermont Covid19: 654`; const popupOptions45 = {coords: parcThabor45,text: descriptionWikipedia45,open:true}; this.addMarker(popupOptions45);
    mainLayer.addTo(this.map);const descriptionWikipedia46=`State: Virginia Covid19: 2211`; const popupOptions46 = {coords: parcThabor46,text: descriptionWikipedia46,open:true}; this.addMarker(popupOptions46);
    mainLayer.addTo(this.map);const descriptionWikipedia47=`State: Virginia Occidental Covid19: 4477`; const popupOptions47 = {coords: parcThabor47,text: descriptionWikipedia47,open:true}; this.addMarker(popupOptions47);
    mainLayer.addTo(this.map);const descriptionWikipedia48=`State: Washington Covid19: 4589`; const popupOptions48 = {coords: parcThabor48,text: descriptionWikipedia48,open:true}; this.addMarker(popupOptions48);
    mainLayer.addTo(this.map);const descriptionWikipedia49=`State: Wisconsin Covid19: 6547`; const popupOptions49 = {coords: parcThabor49,text: descriptionWikipedia49,open:true}; this.addMarker(popupOptions49);
    mainLayer.addTo(this.map);const descriptionWikipedia50=`State: Wyoming Covid19: 4789`; const popupOptions50 = {coords: parcThabor50,text: descriptionWikipedia50,open:true}; this.addMarker(popupOptions50);

  }

  addMarker({coords, text, open}) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }

}
