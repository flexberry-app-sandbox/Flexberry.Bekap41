




CREATE TABLE План (
 primaryKey UUID NOT NULL,
 ЭтоУслуга BOOLEAN NULL,
 Количество INT NULL,
 ПланЗакупок UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказПост (
 primaryKey UUID NOT NULL,
 ДатаОкончания TIMESTAMP(3) NULL,
 СуммаДокумента INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 СуммаВклНДС BOOLEAN NULL,
 СостояниеОплаты VARCHAR(17) NULL,
 СостОтгрузки VARCHAR(17) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧЗаказ (
 primaryKey UUID NOT NULL,
 Цена INT NULL,
 ЭтоУслуга BOOLEAN NULL,
 СуммаНДС INT NULL,
 Количество INT NULL,
 Сумма INT NULL,
 ЗаказПост UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетОЗакупках (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контрагенты (
 primaryKey UUID NOT NULL,
 Контрагент VARCHAR(255) NULL,
 ЗаказПост UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Склады (
 primaryKey UUID NOT NULL,
 Склад VARCHAR(255) NULL,
 ЗаказПост UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организации (
 primaryKey UUID NOT NULL,
 Организация VARCHAR(255) NULL,
 ЗаказПост UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЕдиницыИзмер (
 primaryKey UUID NOT NULL,
 ЕдиницаИзмер VARCHAR(255) NULL,
 ТЧЗаказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номенклатура (
 primaryKey UUID NOT NULL,
 Номенклатура VARCHAR(255) NULL,
 ТЧЗаказ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПланЗакупок (
 primaryKey UUID NOT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE План ADD CONSTRAINT FK97bb4bfafc2155cc1910684c316067048ee92263 FOREIGN KEY (ПланЗакупок) REFERENCES ПланЗакупок; 
CREATE INDEX Index97bb4bfafc2155cc1910684c316067048ee92263 on План (ПланЗакупок); 

 ALTER TABLE ТЧЗаказ ADD CONSTRAINT FK8fdca724c0f716ffebf43281a60726ce3eb9ca22 FOREIGN KEY (ЗаказПост) REFERENCES ЗаказПост; 
CREATE INDEX Index8fdca724c0f716ffebf43281a60726ce3eb9ca22 on ТЧЗаказ (ЗаказПост); 

 ALTER TABLE Контрагенты ADD CONSTRAINT FK1f2820ab52f4dbe03900f98d06155cb8f9d7da4d FOREIGN KEY (ЗаказПост) REFERENCES ЗаказПост; 
CREATE INDEX Index1f2820ab52f4dbe03900f98d06155cb8f9d7da4d on Контрагенты (ЗаказПост); 

 ALTER TABLE Склады ADD CONSTRAINT FK2c096e888375101ab9022c0476e1cb0c3ea57770 FOREIGN KEY (ЗаказПост) REFERENCES ЗаказПост; 
CREATE INDEX Index2c096e888375101ab9022c0476e1cb0c3ea57770 on Склады (ЗаказПост); 

 ALTER TABLE Организации ADD CONSTRAINT FKfaa487e6188a5c13bf0143a6d010e1ec4ab00b73 FOREIGN KEY (ЗаказПост) REFERENCES ЗаказПост; 
CREATE INDEX Indexfaa487e6188a5c13bf0143a6d010e1ec4ab00b73 on Организации (ЗаказПост); 

 ALTER TABLE ЕдиницыИзмер ADD CONSTRAINT FKed94dcb155f5dfc85bd463dbcf986eccc69a7fac FOREIGN KEY (ТЧЗаказ) REFERENCES ТЧЗаказ; 
CREATE INDEX Indexed94dcb155f5dfc85bd463dbcf986eccc69a7fac on ЕдиницыИзмер (ТЧЗаказ); 

 ALTER TABLE Номенклатура ADD CONSTRAINT FK8db6da341ae32a1943f9678a0b9a5653a01b5569 FOREIGN KEY (ТЧЗаказ) REFERENCES ТЧЗаказ; 
CREATE INDEX Index8db6da341ae32a1943f9678a0b9a5653a01b5569 on Номенклатура (ТЧЗаказ); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

