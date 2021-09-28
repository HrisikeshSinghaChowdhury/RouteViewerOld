// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
const butterFlyImage = "https://openlayers.org/en/latest/examples/data/Butterfly.png";
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("local-time").start()

window.Rails = Rails

import 'bootstrap'
import 'data-confirm-modal'

$(document).on("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

require("trix")
require("@rails/actiontext")

import "controllers"
import QIMap from "@qi/map"
import "@qi/map/dist/qimap.css";

$(document).ready(function(){
  const qiMap = new QIMap({
    containerId: "mapPublicHome",
    baseLayer: ['OSM'],
    currentCountry: {
    "center": [
      1.3521,
      103.8198
    ],
    "minZoom": 5,
    "zoom": 12,
    "maxZoom": 25
  },
  liveTrackCheckDurationInMS: 10 * 60 * 1000,
  dataFormat: {
    lat: "lat",
    lon: "lon",
    time: "recorded_on"
  }
});
qiMap.createMap();
//drawTrackWithMarker();

function drawTrackWithMarker()
{
  qiMap.addLayer({ name: "test" });
  qiMap.drawTrack({
  layerName: "test",
  trackType: "point",
  data: [{ coordinates: [ {"lat": 1.315669, "lon": 103.863353, "bearing": 204},
                                {"lat": 1.335669, "lon": 103.867953, "bearing": 400},
                                {"lat": 1.357349, "lon": 103.988409, "bearing": 201}]
        }],
        startPoint: true,
        endPoint: true,
        style: {
          startPoint: {
            image: {
              src: butterFlyImage,
              anchor: [0.5, 1.0],
              imgSize: [50, 40],
            },
          },
          endPoint: {
            image: {
              src: butterFlyImage,
              anchor: [0.5, 1.0],
              imgSize: [50, 40],
            },
          },
        },
    });
  }

function drawTrackWithTooltip()
{
  qiMap.addLayer({ name: "test_toolTip" });

    qiMap.drawTrack({
      layerName: "test_toolTip",
      trackType: "line",
      data: [{ coordinates: [ {"lat": 1.315669, "lon": 103.863353, "bearing": 204},
                                {"lat": 1.357349, "lon": 103.988409, "bearing": 201}]
              }],
      tooltip:
      {
        showOn: "click",
        content: (feature) =>
        {
          const data = feature.get("data");
          return `<div class="d-flex text-primary"} ">
            <div>
              <div>"Singapore"</div>
            </div>
          <div>`;
        }
      }
    });
  }

function drawTrackPoint()
{
  qiMap.addLayer({ name: 'test_Point' });
  qiMap.drawTrack({
    layerName: 'test_Point',
    trackType: "point",
    data: [{ coordinates: [ {"lat": 1.315669, "lon": 103.863353, "bearing": 204},
                            {"lat": 1.335669, "lon": 103.867953, "bearing": 400},
                            {"lat": 1.357349, "lon": 103.988409, "bearing": 201}]
  }]
});
}
//drawTrackWithTooltip();
drawTrackPoint();
});
