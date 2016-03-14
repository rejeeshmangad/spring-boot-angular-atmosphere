## Frameworks

### Front-end

#### AngularJS
AngularJS is a MVC based framework for web applications, written in JavaScript. It makes it possible to use the Model-View-Controller pattern on the front-end. It also comes with several additional modules. In this example I'm also using **angular-resource**, which is a simple factory-pattern based module for creating REST clients.

#### CSS

Angular Material bootstrap css for styling and components.

### Back-end

#### Spring Boot

#### Spring Data JPA
Spring Data JPA allows you to create repositories for your data without even having to write a lot of code. The only code you need is a simple interface that extends from another interface and then you're done.
With Spring Boot you can even leave the configuration behind for configuring Spring Data JPA, so now it's even easier.

### Atmosphere
Atmosphere a comet based Server push socket implementation.

## Installation
Installation is quite easy, first you will have to install some front-end dependencies using Bower:
```
bower install
```

Then you can run Maven to package the application:
```
mvn clean package
```

Now you can run the Java application quite easily:
```
cd target
java -jar spring-boot-angular-atmosphere-1.0.0.jar
```

## DataBase (mysql)

create database demospring;

CREATE TABLE `demospring`.`item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `checked` tinyint(1) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB; 


## DataBase (postgres)

create database demospring;
CREATE TABLE item (
  id serial,
  checked SMALLINT(1) DEFAULT NULL,
  description character varying(200)
);


