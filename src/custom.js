export default class Select {
    fill (countries) {
        let select = document.getElementById("name")
        for (let value of Object.values(countries)){
            select.append(new Option(value.alpha3Code, value.name).create());
        }
    }
}

class Option{
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    create() {
        let option = document.createElement("option");
        option.id =  this.id;
        option.value = this.name;
        option.text = this.name;
        return option;
    }
}


export class HttpClient{
    getCountries(method, url) {
        let request = new XMLHttpRequest()
        request.open(method, url, false)
        request.send(null);
        if (request.status !== 200) {
            throw new Error("Failed get api call")
        }
        return JSON.parse(request.responseText)
    }

    getPhoto(method,url, params){
        let request = new XMLHttpRequest();
        request.open(method, url+"?"+params, false);
        request.setRequestHeader("Authorization", "563492ad6f917000010000012259fe56b6e540229abe5aaf849b116d")
        request.send(null);
        if (request.status !== 200) {
            throw new Error("Failed get api call: " + request.responseText)
        }
        return JSON.parse(request.responseText)
    }
}
