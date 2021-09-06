import Select, {HttpClient} from "./custom.js";
import Gallery from "./gallery.js";
import {Config} from "./config.js";

const baseSelect = new Select();
let httpClient = new HttpClient(Config['token'])
httpClient.getCountries('GET', new URL(Config['country_url'])).then(value => baseSelect.fill(value))


let selectElement = document.getElementById("name")
    selectElement.addEventListener("change", function () {
    let url = new URL(Config['search_url']);
    url.searchParams.set('query', selectElement.value);
    httpClient.getPhoto("GET", url).then(value => new Gallery().generate(value.photos))
  });



