module.exports = {
  host: '127.0.0.1',
  username: 'docker', //no server for now
  password: 'docker',
  database: 'nodeauth',
  dialect: 'postgres', //name of the database being used
  operatorAliases: false, // disable the warning of the sequelize
  logging: false,
  define: {
    timestamps: true, // all database tables will have "createdAt and upedatedAt" field
    underscored: true, // all database names will be separeted by underline
    underscoredAll: true, // all database fields will be separeted by underline
  }
};