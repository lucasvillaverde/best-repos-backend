
module.exports = (connection) => {
    return Promise.all(
        Object.keys(connection.models).map(key => {
            return connection.models[key].truncate({
                cascade: true,
                restartIdentity: true
            })
        })
    );
}