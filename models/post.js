module.exports=(sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{
       postId:{
         type: DataTypes.STRING,
         allowNull: false,
       },
       content:{
         type: DataTypes.STRING,
         allowNull: false,
       }
         
    });

    Post.associate = (models)=>{
        Post.belongsTo(models.User,{
            foreignKey:{
                allowNull:false
            }
        })  
    }
    
    return Post;
 }