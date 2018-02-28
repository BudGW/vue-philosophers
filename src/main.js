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

new Vue({
    el: '#app'
});