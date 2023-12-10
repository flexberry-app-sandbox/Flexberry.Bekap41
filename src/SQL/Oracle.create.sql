



CREATE TABLE "План"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЭтоУслуга" NUMBER(1) NULL,

	"Количество" NUMBER(10) NULL,

	"ПланЗакупок" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаказПост"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОкончания" DATE NULL,

	"СуммаДокумента" NUMBER(10) NULL,

	"ДатаНачала" DATE NULL,

	"СуммаВклНДС" NUMBER(1) NULL,

	"СостояниеОплаты" NVARCHAR2(17) NULL,

	"СостОтгрузки" NVARCHAR2(17) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧЗаказ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Цена" NUMBER(10) NULL,

	"ЭтоУслуга" NUMBER(1) NULL,

	"СуммаНДС" NUMBER(10) NULL,

	"Количество" NUMBER(10) NULL,

	"Сумма" NUMBER(10) NULL,

	"ЗаказПост" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчетОЗакупках"
(

	"primaryKey" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контрагенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"Контрагент" NVARCHAR2(255) NULL,

	"ЗаказПост" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склады"
(

	"primaryKey" RAW(16) NOT NULL,

	"Склад" NVARCHAR2(255) NULL,

	"ЗаказПост" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организации"
(

	"primaryKey" RAW(16) NOT NULL,

	"Организация" NVARCHAR2(255) NULL,

	"ЗаказПост" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдиницыИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЕдиницаИзмер" NVARCHAR2(255) NULL,

	"ТЧЗаказ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номенклатура" NVARCHAR2(255) NULL,

	"ТЧЗаказ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПланЗакупок"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаНачала" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "План"
	ADD CONSTRAINT "План_FПланЗак_7317" FOREIGN KEY ("ПланЗакупок") REFERENCES "ПланЗакупок" ("primaryKey");

CREATE INDEX "План_IПланЗак_4075" on "План" ("ПланЗакупок");

ALTER TABLE "ТЧЗаказ"
	ADD CONSTRAINT "ТЧЗаказ_FЗака_7792" FOREIGN KEY ("ЗаказПост") REFERENCES "ЗаказПост" ("primaryKey");

CREATE INDEX "ТЧЗаказ_IЗака_4234" on "ТЧЗаказ" ("ЗаказПост");

ALTER TABLE "Контрагенты"
	ADD CONSTRAINT "Контрагенты_F_8399" FOREIGN KEY ("ЗаказПост") REFERENCES "ЗаказПост" ("primaryKey");

CREATE INDEX "Контрагенты_I_1141" on "Контрагенты" ("ЗаказПост");

ALTER TABLE "Склады"
	ADD CONSTRAINT "Склады_FЗаказ_5412" FOREIGN KEY ("ЗаказПост") REFERENCES "ЗаказПост" ("primaryKey");

CREATE INDEX "Склады_IЗаказ_3898" on "Склады" ("ЗаказПост");

ALTER TABLE "Организации"
	ADD CONSTRAINT "Организации_F_3218" FOREIGN KEY ("ЗаказПост") REFERENCES "ЗаказПост" ("primaryKey");

CREATE INDEX "Организации_I_9357" on "Организации" ("ЗаказПост");

ALTER TABLE "ЕдиницыИзмер"
	ADD CONSTRAINT "ЕдиницыИзмер_F_131" FOREIGN KEY ("ТЧЗаказ") REFERENCES "ТЧЗаказ" ("primaryKey");

CREATE INDEX "ЕдиницыИзмер__6448" on "ЕдиницыИзмер" ("ТЧЗаказ");

ALTER TABLE "Номенклатура"
	ADD CONSTRAINT "Номенклатура__1967" FOREIGN KEY ("ТЧЗаказ") REFERENCES "ТЧЗаказ" ("primaryKey");

CREATE INDEX "Номенклатура_I_703" on "Номенклатура" ("ТЧЗаказ");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


