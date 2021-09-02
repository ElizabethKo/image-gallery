import Vue from 'vue'
import Select, {HttpClient} from "@/custom";
import Gallery from "@/gallery";

require('@/assets/css.css')
let config = require('./cg.js')
new Vue({
    data: {
        show: true
    }
})

const baseSelect = new Select();
let httpClient = new HttpClient(config['token'])
httpClient.getCountries('GET', new URL(config['country_url'])).then(value => baseSelect.fill(value))


let selectElement = document.getElementById("name")
    selectElement.addEventListener("change", function () {
    let url = new URL(config['search_url']);
    url.searchParams.set('query', selectElement.value);
    httpClient.getPhoto("GET", url).then(value => new Gallery().generate(value.photos))
  });



