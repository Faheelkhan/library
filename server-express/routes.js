'use strict'
module.exports = (app) => {
    app.use('/api/v1/posts', require('./api/posts'));
    app.use('/api/v1/categories', require('./api/categories'));
    // app.use('/api/v1/users', require('./api/users'));
    app.use('/api/v1/someUsers', require('./api/auth'));
    app.use('/api/v1/books', require('./api/books'));
}