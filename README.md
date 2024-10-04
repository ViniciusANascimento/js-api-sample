
# Repositorio de API Podcast.

Esta API foi desenvolvida utilizando os recursos puros do NodeJS com a utilização do TypeScript.

Essa API ela acessa os dados do podcast.json para retornar esse valor conforme a necessidade.

A ideia inicial foi para que ela fosse utilizada para carregar os podcasts disponivel no youtube para que um front-end conseguisse criar um modo de acesso mais facil.



## Como acessar os dados.

Esta API contem 2 GET.

### EndPoints
1.  /api/list

*Será exibido uma lista com todos os episodios de Podcasts cadastrados.*

2.  /api/episode

*Onde é possivel utilizar filtros por parametro p (?p=), seguido do nome do autor do podcast. Exemplo: /api/list?p=flow.*

## Como adicinar novos episodios de podcasts.

Atualmente não esta com um metodo POST para ser cadastrado, mas o arquivo podcast.json esta simulando registros de banco de dados.

Seu formato esta da seguinte forma.

```js 
    [
  {
    "podcastName": "flow",
    "episode": "DUBDOGZ [RUBACK] - Flow #398",
    "videoId":"XPUlz6OlvbY",
    "category": ["musica", "banda", "dj"]
  }
]
```

Onde o videoId é o campo representacional do video.
- Na url do youtube o id é encontrado apos o parametro "v". 
> *Exemplo: "https://www.youtube.com/watch?v=nc8M5t_POKs"*
Onde o seu videoId é o "nc8M5t_POKs";


- typescript-version: 5.6.2
