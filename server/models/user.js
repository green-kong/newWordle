module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      u_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Email: {
        type: DataTypes.STRING(400),
        allowNull: true,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      },
      scoreRecord: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      timeRecord: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );

  return User;
};
