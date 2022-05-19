# Proyecto-Babyshower

En este proyecto se presenta una tarjeta de invitacion para un babyshower de forma dinamica, donde los anfitriones publican la lista de regalos que los invitados pueden llevar, un invitado puede registrar su nombre en el regalo que lleve.

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/vt5fpE0bzSY)

## Stack Tecnológico 
 1. Frontend
      - Html, css, Boostrap 5
 2. Backend
      - NodeJs,Express 
 3. DataBase
      - MongoDb Atlas(servicio gratuito)
 4. Deploy
      - Heroku(servicio gratuito)

### Endpoints API
Define como funciona tu API


#### Muestra toda la lista de regalos 

```http
  GET /api/gifts
```
#### Registra un usuario con un regalo

```http
  POST /api/users
```

| Parameter  | Type     | Description                       |
| :--------  | :------- | :-------------------------------- |
| `name`     | `string` | **Required**. nombre de usuario   |
| `giftName` | `string` | **Required**. nombre de regalo    |
| `idGift`   | `string` | **Required**. Id de regalo        |

#### Registrar regalos

```http
  POST /api/users
```

| Parameter    | Type     | Description                            |
| :----------- | :------- | :--------------------------------------|
| `name`       | `string` | **Required**. nombre de regalo         |
| `description`| `string` | **Required**. description de regalo    |
| `limit`      | `int`    | **Required**. Cantidad de producto     |
| `img`        | `file`   | **Required**. img referencial          |

#### add(num1, num2)

Takes two numbers and returns the sum.


