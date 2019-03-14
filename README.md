# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.


## Diagrama de flujo para el proyecto realizado
![diagrama de flujo](https://user-images.githubusercontent.com/45083232/54355402-01d64800-4627-11e9-96b9-cd53b8ec6e6b.png)

## Objetivo

El objetivo práctico de esta librería es por defecto validar si las URLs ingresadas por el usuario responden :

° Si es OK es una URL válida
° Si es Fail no es una URL válida.

También nos reporta algunas estadísticas :
° Total de links encontrados
° Total de links únicos
° Finalmente, total de links rotos.

### Instrucción de instalación 

## Github 

Usando el comando npm install melanyvlm/LIM008-fe-md-links
 
### Guía de uso 

md-link (imagen ingresando la ruta y las opciones)


