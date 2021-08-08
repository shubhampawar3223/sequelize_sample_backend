module.exports=(sequelize,DataTypes)=>{
   const User = sequelize.define('User',{
      userName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
           isEmail: true,
        }  
      }, 
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      
   });
   
   User.associate = (models)=>{
      User.hasMany(models.Post,{
          onDelete: "cascade"
      })
   }

   return User;
}