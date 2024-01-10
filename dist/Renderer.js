class RendererWeather {
    constructor() {
        this._weatherContainer = $('.weather-container')
        this._weatherTemplate = $('#weather-template')
    }

    renderCities(data) {
        this._weatherContainer.empty()
        if (data.length === 0) {
            return this._weatherContainer.append('<h1>No cities to show</h1>')
        }
        const source = this._weatherTemplate.html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        this._weatherContainer.append(newHTML)
    }

}
