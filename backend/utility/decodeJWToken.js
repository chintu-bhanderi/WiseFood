const { verify } = require('jsonwebtoken');
function decodeJWTtoken(req, res) {

    const { authorization } = req.headers;
    if ('Bearer undefined' !== authorization) {
        const token = authorization.split(' ')[1];
        if ('undefined' !== token) {
            const decoded = verify(token, process.env.JWTPRIVATEKEY);
            if (decoded === undefined) {
                res.status(401).json({
                    error: {
                        errorMessage: ['you are not authorized for this page']
                    }
                });
            }
            else {
                return decoded;
            }
        } else {
            console.log('here')
            res.status(401).json({
                error: {
                    errorMessage: ['you are not authorized for this page']
                }
            });
        }
    } else {
        console.log('baread header is not exists')
        res.status(401).json({
            error: {
                errorMessage: ['you are not authorized for this page']
            }
        });
    }
}

module.exports = {
    decodeJWTtoken
}