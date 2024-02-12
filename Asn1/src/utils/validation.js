module.exports.passwordValidation = function(password){
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
    return passwordRegex.test(password);
}