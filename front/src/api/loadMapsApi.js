import {Loader as MapsApiLoader} from '@googlemaps/js-api-loader';

const LOCAL_STORAGE_API_KEY = 'AIzaSyB1SLf7PwKo-a3HMO7sEAdw6dyFCkEiWN0';
const LOCAL_STORAGE_MAP_ID = '15431d2b469f209e';

// fetch order: env > url params > local storage
export function getMapsApiOptions() {
  const storage = window.localStorage;
  const url = new URL(location.href);

  let apiKey = 'AIzaSyB1SLf7PwKo-a3HMO7sEAdw6dyFCkEiWN0';
  let mapId = '15431d2b469f209e';
  
  return apiKey && mapId ? {apiKey, mapId} : {};
}

export async function loadMapsApi(libraries = []) {
  const {apiKey, mapId} = getMapsApiOptions();

  // fixme:
  //  - nice to have: The error and UI should also contain information about
  //    requested libraries (e.g. places-api)
  //  - nice to have: replace alert with something ui-friendly

  if (!apiKey || !mapId) {
    alert(`
      Could not find apikey or mapId as URL parameters. 
      Add them like this to the URL: example.com?apiKey=XXXX&mapId=XXXX. 
      If you dont have an API key or map ID, visit the Google Maps documentation to find out on how to obtain them:
      https://developers.google.com/maps/documentation/javascript/webgl
    `);
  }

  const loader = new MapsApiLoader({
    version: 'beta',
    apiKey,
    libraries
  });

  await loader.load();
}