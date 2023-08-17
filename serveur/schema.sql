CREATE SCHEMA IF NOT EXISTS `myapp`;
CREATE TABLE IF NOT EXISTS `myapp`.`user` (
      `user_Id` INT NOT NULL AUTO_INCREMENT,
      `username` VARCHAR(15) NOT NULL,
      `gender` VARCHAR(6) NOT NULL,
      `adress` VARCHAR(30) NOT NULL,
      `age` INT NOT NULL,
      `status` VARCHAR(20) NOT NULL,
      `hobbies` LONGTEXT,
      PRIMARY KEY (`user_Id`)
    
)