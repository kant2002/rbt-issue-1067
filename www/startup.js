requirejs.config({
    paths: {
        "react": [
            "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min",
        ],
        "react-dom": [
            "https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min",
        ],
        "react-bootstrap-table": [
            "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap-table/4.0.0-beta.1/react-bootstrap-table",
        ],
        "bootstrap": [
            "https://ajax.aspnetcdn.com/ajax/bootstrap/3.3.6/bootstrap.min",
        ],
        "jquery": [
            "https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.0.min",
        ],
        "react-bootstrap": [
            "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.7/react-bootstrap.min",
        ]
    },
    shim: {
        "bootstrap": {
            deps: ['jquery']
        },
        "react-dom": {
            deps: ["react"],
        },
        "react-bootstrap-table": {
            deps: ["react"],
        }
    }
});
