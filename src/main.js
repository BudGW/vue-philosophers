Vue.component('navbar', {
    template: '<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">\n' +
    '    <a class="navbar-brand" href="#">Navbar</a>\n' +
    '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"\n' +
    '            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">\n' +
    '        <span class="navbar-toggler-icon"></span>\n' +
    '    </button>\n' +
    '\n' +
    '    <div class="collapse navbar-collapse" id="navbarsExampleDefault">\n' +
    '        <ul class="navbar-nav mr-auto">\n' +
    '            <li class="nav-item active">\n' +
    '                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</nav>'
});

Vue.component('philosopher', {
    props: {
        philosopher: {
            type: Object,
            default: null
        }
    },
    template: '<div style="height:200px;width:200px" class="float-left m-3"><img :src="philosopher.img" class="img-thumbnail img-fluid"/><p>{{philosopher.name}}</p></div>'
});

var app = new Vue({
    el: '#app',
    data: function() {
        return {
            philosophers: [{
                img: 'img/moss.jpg',
                name: 'Maurice Moss'
            },{
                img: 'img/sheldon.jpg',
                name: 'Sheldon Cooper'
            },{
                img: 'img/goldblum.jpg',
                name: 'Jeff Goldblum'
            }]
        }
    },
    methods: {
        showMessage: function() {
            alert("Alert from Vue !!!")
        }
    }
});

document.getElementById("external-button").onclick = function () {
    app.showMessage();
};