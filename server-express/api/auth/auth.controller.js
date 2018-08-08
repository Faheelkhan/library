'use strict'
const UserService = require('./auth.service');
const ServiceManager = require('../../service_manager/requiredModules');

exports.createUser = (req, res) => {
    UserService.createUser(req.body)
        .then(() => {
            res.status(200).json(post);
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        });
}

exports.getUsers = (req, res) => {
    UserService.getUsers({})
        .then((posts) => {
            if (posts.length) {
                res.status(200).json(posts);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            }
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        })
};

exports.getSingleUser = (req, res) => {
    UserService.getSingleUser(req.body)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            };
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError500(res, err);
        });
};

exports.deleteUser = (req, res) => {
    UserService.deleteUser(req.body.id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            };
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError404(res, err);
        });
}

exports.updateUser = (req, res) => {

    const user = {
        name: req.body.name,
        id: req.body.id,
        password: req.body.password
    };
    const Id = {
        id: req.body.id
    }

    UserService.updateUser(user, Id)
        .then((post) => {
            if (post) {
                res.status(200).json(post);
            } else {
                ServiceManager.errorHandler.serverError404(res, err);
            }
        })
        .catch((err) => {
            ServiceManager.errorHandler.serverError404(res, err);
        });
}