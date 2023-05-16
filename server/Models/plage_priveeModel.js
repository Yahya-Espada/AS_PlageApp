// plage_privee model
const Plage = require('./plageModel');
const Locataire = require('./locataireModel');

module.exports = (sequelize, DataTypes) => {
const plage_privee = sequelize.define('plage_privee', {
  id_plage_prive: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description_plage_prive: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image_plage_privee: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  nom_plage_prive: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prix_parasole: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_parasole: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_chaise_long: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_chaise_long: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_chaise: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_chaise: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_table: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_table: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_cabane: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_cabane: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_table_petite: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nb_table_petite: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  surface_plage_prive: {
    type: DataTypes.GEOMETRY('POINT', 4326),
    allowNull: false
  },
  id_locataire: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Locataire,
      key: 'id_locataire'
    }
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
return plage_privee
}

