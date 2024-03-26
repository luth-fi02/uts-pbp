module.exports = (sequelize, DataTypes) => {
    
    const PasswordReset = sequelize.define("Password Reset", {
      
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
  
    return PasswordReset;
  };