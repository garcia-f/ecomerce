// import sequelize from "./relations.js";    ??????

const connectionDB = async () => {
    return new Promise(( resolve, reject ) => {
        sequelize.authenticate().then(() => {
            console.log('La conexión se ha establecido exitosamente.');
            
            sequelize.sync({ alter: true })
                .then(() => {
                    console.log('Modelos sincronizados');
                    resolve();
                })
                .catch(err => {
                    console.log(err);
                    reject();
                })
        
        }).catch(err => {
            console.error('No se puede conectar a la base de datos:', err);
            reject();
        });
    })
}

export default connectionDB