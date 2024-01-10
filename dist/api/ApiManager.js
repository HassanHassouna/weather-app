class ApiManagerWeather {
    constructor() {
        this.data = {
            cities: [],
        }
    }

    getCities() {
        return $.get(`/api/v1/cities`)
            .then(data => {
                this.data.cities = data;
            })
    }

    getCity(city) {
        return $.get(`/api/v1/cities/${city}`)
            .then(data => {
                this.data.cities.push(data)
            })
    }

    saveCity(city) {
        return $.post(`/api/v1/cities`, city)
            .then(data => {
                this.data.cities = data
            })
    }

    deleteCity(cityName) {
        return $.ajax({
            url: `/api/v1/cities/${cityName}`,
            method: 'DELETE'
        })
            .then(data => {
                this.data.cities = data
            })
    }
}
