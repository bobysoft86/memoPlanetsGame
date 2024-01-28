STILL IN PROGRESS

Este juego es el típico juego de memoria por pareja en el que tendremos que seleccionar dos tarjetas y si ambas tarjetas ocultan la misma imagen, la jugada será correcta y, si por el contrario las tarjetas son diferentes entre sí, sus imágenes se volverán a ocultar.

##Pasos a seguir

Pintar un tablero con las doce imágenes del array y el src apuntando al svg de public/exercise/universe.svg. Ten en cuenta que como es un juego de parejas, las imágenes y nombres están repetidas en el array.
Añadir a cada una de las imágenes un evento click para comprobar si la jugada realizada por el usuario es correcta. Para ello, tendremos que guardar cada dos click en tarjetas que haga el usuario y comparar uno con otro siguiendo las siguientes condiciones:
Si el usuario hace click en la misma tarjeta dos veces, la jugada no es valida.
Si el usuario hace click en una tarjeta previamente validada, la jugada no es valida.
Si el usuario hace click en dos tarjetas con el nombre diferente, la jugada no es valida.
Si ninguna de estas condiciones se cumple y, el usuario hace click en dos tarjetas con diferentes nombres. la jugada será validada y tendremos que almacenar las tarjetas para posteriores comprobaciones. Además, el src  de la imagen debería de cambiar a public/exercise-1/tick.svg.
Por cada una de las jugadas deberemos validar el score y sumar 1 por cada jugada validada correctamente al span de score. Si el usuario ha resuelto el juego completo, muestralé un mensaje de felicitaciones.
Por último, para medir la calidad del juego, podríamos crear un contador de intentos e introducir el numero de intentos que el usuario ha llevado a cabo en el span de attempts. Realmente este punto es bastante fácil, suma simplemente uno por cada vez que hagas una comprobación de jugada.
Si has cumplido todas las condiciones...Enhorabuena! tienes un juego de memoría bastante resultón! Además si te interesa subir la dificultad no tienes más que hacer el array más grande y meter más imagenes...¿te atreves? :D
