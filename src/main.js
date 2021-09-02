import Vue from 'vue'
import Select, {HttpClient} from "@/custom";
import Gallery from "@/gallery";

require('@/assets/css.css')


new Vue({
    data: {
        show: true
    }
})

let hello = 'hello world how are you?';
// document.write(hello.toUpperCase());
let ar = hello.split('');
for (let a in ar)
    document.write(ar[a] + '<br/>')

document.getElementsByTagName('a')
handler();
function handler() {
    alert( "href" );

}

const baseSelect = new Select();
let httpClient = new HttpClient()
baseSelect.fill(httpClient.getCountries('GET', 'https://restcountries.eu/rest/v2/all'))

let selectElement = document.getElementById("name")
    selectElement.addEventListener("change", function () {
    let response = httpClient.getPhoto("GET", "https://api.pexels.com/v1/search", "query="+selectElement.value)
    new Gallery().generate(response.photos)
  });



