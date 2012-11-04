exports.routes = function (map) {
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.root('top#home');
    map.get('/timeline', 'top#timeline');
    map.get('/favorites', 'top#favorites');
    map.get('/favorites/switch', 'favorites#switch');
    map.get('/contributors', 'top#contributors');

    map.get('/login', 'top#login');
    map.get('/post/:slug', 'post#show');

    // Internal routes
    map.post('/internal/post/create', 'post#create');
    map.post('/internal/post/delete', 'post#delete');
};
