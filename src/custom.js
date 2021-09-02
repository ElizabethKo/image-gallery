export default class Select {
    fill(countries) {
        let select = document.getElementById("name")
        for (let value of Object.values(countries)) {
            select.append(new Option(value.alpha3Code, value.name).create());
        }
    }
}

class Option {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    create() {
        let option = document.createElement("option");
        option.id = this.id;
        option.value = this.name;
        option.text = this.name;
        return option;
    }
}


export class HttpClient {

    constructor(token) {
        this.token = token
    }

    async getCountries(method, url) {
        let response = await fetch(url.toString())
        if (response.status !== 200) {
            throw new Error("Failed get api call")
        }
         return  response.json()
    }

    async getPhoto(method, url) {
        let response = await fetch(url.toString(), {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.token
            })
        })
        if (response.status !== 200) {
            throw new Error("Failed get api call: " + response.responseText)
        }
        return response.json()
    }
}
