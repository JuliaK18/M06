<?php
/* Mostra les dades enviades a través d'un formulari HTML
a través de l'estat actual de PHP */
phpinfo( );

echo "nom".$HTTP_POST_VARS['nom'], "<br/>";
echo "correu".$HTTP_POST_VARS['correu'], "<br/>";
echo "Contrasenya".$HTTP_POST_VARS['Contrasenya'], "<br/>";


?>