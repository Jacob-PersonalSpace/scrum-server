
export const logErrors = (err, req, res, next) => {
    console.log('????!!!')
    console.error(err.stack);
    next(err);
}

export const clientErrorHandler = (err, req, res, next) => {
    if (req.xhr) {
        res.status(500).send({ error: err });
    } else {
        next(err);
    }
}

export const errorHandler = (err, req, res, next) => {
    res.status(500);
    res.render('error', { error: err });
}

export const wrapAsync = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}
