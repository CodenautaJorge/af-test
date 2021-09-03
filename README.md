# af-test
Prueba técnica

Creación de una app para proveer de información en formato de publicaciones o artículos a usuarios.

Frontend app

React
Bootstrap

Todas las publicaciones se muestran en formato vertical y ordenados de más reciente a más antiguo.
Cuando insertamos una publicación desde la página inicial somos redirigidos a la vista "Nuevas". Es almacenada en la BDD
Las publicaciones de la vista "Nuevas" contienen un botón para ser archivadas. Cuando este botón es pulsado la publicación pasa a la vista "Archivadas".
Todas las publicaciones archivadas disponen de un botón para ser eliminadas. La eliminación se produce en dos pasos, ya que se despliega una ventana modal para preguntarnos si queremos realmente eliminar la publicación cuando así lo solicitamos.
Al eliminar la publicación desaparece de la vista "Archivadas" y evidentemente de la BDD.


Backend app

Node.js / Express
MongoDB

Database

JSON, MongoDB

Almacenamiento de todos los documentos del frontend con los atributos: title, description, date, content, author, archiveDate.
Obtención de los documentos almacenados


