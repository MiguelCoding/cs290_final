CREATE TABLE `cs290_<ONID>`.`final_users` (
  `ID` INT(40) NOT NULL AUTO_INCREMENT,
  `EMAIL` VARCHAR(50) NOT NULL,
  `USER` VARCHAR(50) NOT NULL,
  `PASSWORD` VARCHAR(50) NOT NULL,
  `NAME_FIRST` VARCHAR(50) NOT NULL,
  `NAME_MIDDLE` VARCHAR(50) NOT NULL,
  `NAME_LAST` VARCHAR(50) NOT NULL,
  `ADDRESS_STREET` VARCHAR(50) NOT NULL,
  `ADDRESS_CITY` VARCHAR(50) NOT NULL,
  `ADDRESS_STATE` VARCHAR(50) NOT NULL,
  `ADDRESS_ZIP` INT(12) NOT NULL,
  `ADDRESS_LAT` DECIMAL( 10, 8 ) NOT NULL,
  `ADDRESS_LON` DECIMAL( 11, 8 ) NOT NULL,
  `PHONE_HOME` INT(15),
  `PHONE_MOBILE` INT(15),
  `PHONE_WORK` INT(15),
  PRIMARY KEY  (`ID`),
  UNIQUE  (`EMAIL`),
  UNIQUE  (`USER`)
) ENGINE = InnoDB;

CREATE TABLE `cs290_<ONID>`.`final_stores` (
  `ID` INT(40) NOT NULL AUTO_INCREMENT,
  `USER_ID` INT(40) NOT NULL,
  `NAME_STORE` VARCHAR(50) NOT NULL,
  `ADDRESS_STREET` VARCHAR(50) NOT NULL,
  `ADDRESS_CITY` VARCHAR(50) NOT NULL,
  `ADDRESS_STATE` VARCHAR(50) NOT NULL,
  `ADDRESS_ZIP` INT(12) NOT NULL,
  `ADDRESS_LAT` DECIMAL( 10, 8 ) NOT NULL,
  `ADDRESS_LON` DECIMAL( 11, 8 ) NOT NULL,
  `DELIVERY_FEE` DECIMAL( 10, 2),
  `COST_PER_MILE` DECIMAL( 10, 2),
  `PHONE_1` INT(15),
  `PHONE_2` INT(15),
  PRIMARY KEY  (`ID`)
) ENGINE = InnoDB;

CREATE TABLE `cs290_<ONID>`.`final_items` (
  `ID` INT(40) NOT NULL AUTO_INCREMENT,
  `STORE_ID` INT(40) NOT NULL,
  `TYPE` VARCHAR(50) NOT NULL,
  `ITEM_COST` VARCHAR(50) NOT NULL,
  PRIMARY KEY  (`ID`)
) ENGINE = InnoDB;
