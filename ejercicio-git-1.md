### 💻 Ejercicio de Práctica de Git y GitHub

Este ejercicio tiene como objetivo que aprendas el flujo de trabajo de colaboración en GitHub, utilizando el repositorio de la clase como tu proyecto principal.

#### Instrucciones

1.  **Haz un `fork` del repositorio de la clase**
    
    Dirígete a [https://github.com/polargentino/loremipsum](https://github.com/polargentino/loremipsum) y haz clic en el botón **`Fork`** para crear una copia del repositorio en tu propia cuenta de GitHub.
    

2.  **Clona tu repositorio forkeado**
    
    Abre tu terminal y clona la versión que acabas de copiar a tu máquina local.
    
    ```bash
    git clone [https://github.com/tu_usuario/loremipsum.git](https://github.com/tu_usuario/loremipsum.git)
    ```
    
    *Recuerda reemplazar `tu_usuario` con tu nombre de usuario de GitHub.*
    

3.  **Crea y cambia a una nueva rama**
    
    Antes de hacer cambios, crea una nueva rama para tus modificaciones y cambia a ella con un solo comando:
    
    ```bash
    git checkout -b informacion-alumno
    ```
    

4.  **Agrega tu información personal**
    
    Abre el archivo `README.md` en tu editor de texto favorito y agrega la siguiente información al final del documento, en una nueva sección:
    
    * **Nombre:** [Tu nombre]
    * **Apellido:** [Tu apellido]
    * **Nacionalidad:** [Tu nacionalidad]
    * **Email:** [Tu email]
    

5.  **Confirma y sube tus cambios a tu GitHub**
    
    Guarda el archivo y luego utiliza los siguientes comandos para subir tus cambios a tu repositorio personal:
    
    * Agrega los cambios al área de preparación:
        ```bash
        git add README.md
        ```
    
    * Crea un nuevo commit con un mensaje descriptivo:
        ```bash
        git commit -m "Agrega la informacion del alumno"
        ```
    
    * Sube tu nueva rama al repositorio remoto:
        ```bash
        git push origin informacion-alumno
        ```
    

6.  **Crea una `Pull Request` (PR)**
    
    Ve a tu repositorio en GitHub y crea una **`Pull Request`** para solicitar que tus cambios se fusionen con la rama principal del repositorio de la clase: `polargentino/loremipsum`.