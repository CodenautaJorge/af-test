# af-test
<h3>Prueba técnica</h3>

Creación de una app para proveer de información en formato de publicaciones o artículos a usuarios.

<h4>Frontend app</h4>
<ul>
  <li>React</li>
  <li>Bootstrap</li>
</ul>

Cuando insertamos una publicación desde la página inicial somos redirigidos a la vista "Nuevos artículos". Es almacenada en la BDD.

<img width="1440" alt="Captura de pantalla 2021-09-03 a las 8 35 45" src="https://user-images.githubusercontent.com/80980397/131961712-bea465c2-f3ab-4f46-98e8-6e1deb52eb41.png">

Todas las publicaciones se muestran en formato vertical y ordenados de más reciente a más antiguo.

<img width="1440" alt="Captura de pantalla 2021-09-03 a las 8 38 22" src="https://user-images.githubusercontent.com/80980397/131961978-970ab3ec-9648-4541-8aff-fac667858e36.png">


Las publicaciones de la vista "Nuevos artículos" contienen un botón para ser archivadas. Cuando este botón es pulsado la publicación pasa a la vista "Archivados".

Todas las publicaciones archivadas disponen de un botón para ser eliminadas. La eliminación se produce en dos pasos, ya que se despliega una ventana modal para preguntarnos si queremos realmente eliminar la publicación cuando así lo solicitamos.

<img width="1440" alt="Captura de pantalla 2021-09-03 a las 8 38 37" src="https://user-images.githubusercontent.com/80980397/131961946-4d26500c-ceda-4826-9f93-ad6ec184007f.png">

<img width="1440" alt="Captura de pantalla 2021-09-03 a las 8 38 46" src="https://user-images.githubusercontent.com/80980397/131962052-ea0f5bb1-e35a-45af-a57f-2ea594ba2619.png">


Al eliminar la publicación desaparece de la vista "Archivados" y evidentemente de la BDD.

<img width="1440" alt="Captura de pantalla 2021-09-03 a las 8 38 57" src="https://user-images.githubusercontent.com/80980397/131962084-0f97e01f-21b3-46d4-9232-f00af57aa762.png">



<h4>Backend app</h4>

Diseño de un API REST basado en una arquitectura MVC

<ul>
  <li>Node.js / Express</li>
  <li>MongoDB</li>
</ul>

<h4>Database</h4>
<ul>
  <li>JSON, MongoDB</li>
</ul>

<img width="1121" alt="Captura de pantalla 2021-09-03 a las 8 39 53" src="https://user-images.githubusercontent.com/80980397/131962194-dc9b5cec-8456-45ae-9a88-732d8b283e7d.png">


Almacenamiento de todos los documentos del frontend con los atributos: title, description, date, content, author, archiveDate.
Obtención de los documentos almacenados


