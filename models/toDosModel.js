module.exports = (sequelize, DataTypes) => {
  const ToDos = sequelize.define(
    'todos',
    {
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  return ToDos;
};
