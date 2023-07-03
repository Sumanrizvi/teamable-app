function isInvalidEmail(userObject) {
    return !userObject.email.includes("@")
}

function isEmptyPayload(userObject) {
    return Object.keys(userObject).lenght === 0
}

module.exports = {
    isInvalidEmail,
    isEmptyPayload
}