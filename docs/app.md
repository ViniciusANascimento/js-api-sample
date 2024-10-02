# Nome do Aplicativo
Podcast Manager

### Descrição
Um app ao estilo netflix, aonde eu possa centralizar diferentes episodios de podcasts separados por categoria

### Domínio
Podcast feitos em vídeo

### Features
	- Listar os episódios podcasts em sessões por categorias
		- [saúde, fitness, mentalidade, humor,etc...]
	- Filtrar episodios por nome de podcast


## Como

### Feature:

 - Listar os episódios podcasts em sessões por categorias

### Como vou implementar:
 Vai ser retornado na api rest:
  - nome do podcast
  - nome do episodio
  - imagem de capa
  - link
  - categoria

	```js
	[
	{
		podcastName: "flow",
		episode: "DUBDOGZ [RUBACK] - Flow #398",
		videoId:"XPUlz6OlvbY",
		cover: "https://i.ytimg.com/vi/XPUlz6OlvbY/maxresdefault.jpg",
		category: ["musica", "banda", "dj"]
	},
	]
	```