USE SOME_SERVER
GO

-- ******************************************************************************
-- Drop existing tables.
-- ******************************************************************************

IF EXISTS(SELECT 1 FROM sysobjects WHERE TYPE = 'U' AND name = 'Payment' )
DROP TABLE Payment
GO

IF EXISTS(SELECT 1 FROM sysobjects WHERE TYPE = 'U' AND name = 'Bill' )
DROP TABLE Bill
GO

IF EXISTS(SELECT 1 FROM sysobjects WHERE TYPE = 'U' AND name = 'Company' )
DROP TABLE Company
GO

-- ******************************************************************************
-- Tables
-- ******************************************************************************

CREATE TABLE Company
(
	name varchar(200),
	address_street varchar(200) NOT NULL,
	address_city varchar(200) NOT NULL,
	address_state char(2) NOT NULL,
	address_zip char(5) NOT NULL,
	phone char(10),
	CONSTRAINT PK_Company PRIMARY KEY(name)
)

CREATE TABLE Bill
(
	company_name varchar(200),
	due_date smalldatetime,
	amount_due decimal(9,2) NOT NULL,
	CONSTRAINT PK_Bill PRIMARY KEY(company_name, due_date),
	CONSTRAINT FK_Bill_Company_Name FOREIGN KEY(company_name)
		REFERENCES Company(name)
)

CREATE TABLE Payment
(
	pay_to varchar(200),
	bill_due_date smalldatetime,
	payment_date smalldatetime,
	amount_paid decimal(9,2) NOT NULL,
	CONSTRAINT PK_Payment PRIMARY KEY(pay_to, bill_due_date, payment_date),
	CONSTRAINT FK_Payment_Pay_To FOREIGN KEY(pay_to)
		REFERENCES Company(name),
	CONSTRAINT FK_Payment_Bill_Due_Date FOREIGN KEY(bill_due_date)
		REFERENCES Bill(due_date)
)