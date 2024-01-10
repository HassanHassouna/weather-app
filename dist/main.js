const apiManager = new ApiManagerWeather()
const renderer = new RendererWeather()
const search = $('#search-btn')
const cityInput = $('#searchInput')
const cityContainer = $('.weather-container')
const getCity = () => {
    const city = cityInput.val();
    apiManager.getCity(city)
        .then(function () {
            renderer.renderCities(apiManager.data.cities);
        })
        .catch(function (error) {
            alert(error)
        })
}

search.on('click', function () {
    getCity()
});

const gitCities = () => {
    apiManager.getCities()
        .then(function () {
            renderer.renderCities(apiManager.data.cities);
        })
        .catch(function (error) {
            alert(error)
        })
}

gitCities()

cityContainer.on('click', "#save-btn", function () {
    const cityId = $(this).closest(".card").attr("id").split('-')[1]
    const city = apiManager.data.cities[cityId]
    apiManager.saveCity(city)
        .then(function () {
            renderer.renderCities(apiManager.data.cities);
        })
        .catch(function (error) {
            alert(error)
        })
})

cityContainer.on('click', "#remove-btn", function () {
    const cityId = $(this).closest(".card").attr("id").split('-')[1]
    const city = apiManager.data.cities[cityId]
    apiManager.deleteCity(city.name)
        .then(function () {
            renderer.renderCities(apiManager.data.cities);
        })
        .catch(function (error) {
            alert(error)
        })
})
