const Plage = require('./plageModel');


module.exports = (sequelize, DataTypes) => {
    const plage_publique = sequelize.define('plage_publique', {
    id_plage_publique: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    surface_plage_publique: {
        type: DataTypes.GEOMETRY('POINT', 4326),
        allowNull: false
    },
    id_plage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: Plage,
        key: 'id_plage'
        }
    }
    });
    return plage_publique
}
