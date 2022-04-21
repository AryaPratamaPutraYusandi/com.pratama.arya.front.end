const PROXY_CONFIG = [
    {
        context:[
            "/api"
        ],
        target: "http://localhost:9191",
        secure: false
    }
]
module.exports = PROXY_CONFIG;