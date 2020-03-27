const fetch = require('node-fetch')

module.exports = (settings) => {
    console.log(settings)
    return fetch(`https://api.spotify.com/v1/${settings.endpoint}`,
        {
            headers:
            {
                'Authorization': 'Bearer ' + settings.acces_token
            }
        })
        .then(response => response.json())
}