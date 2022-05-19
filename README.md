# Proyecto-Babyshower

## Explicación del proyecto
En este proyecto se presenta una tarjeta de invitacion para un babyshower de forma dinamica, donde los anfitriones publican la lista de regalos que los invitados pueden llevar, un invitado puede registrar su nombre en el regalo que lleve.



[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://youtu.be/vt5fpE0bzSY)

## Stack Tecnológico 
## 1. Frontend
      - Html, css, Boostrap 5
## 2. Backend
      - NodeJs,Express 
## 3. DataBase
      - MongoDb Atlas(servicio gratuito)
## 4. Deploy
      - Heroku(servicio gratuito)

## Documenta el codigo que hiciste, puedes usar la documentación de abajo como ejemplo
### Endpoints API
Define como funciona tu API

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


