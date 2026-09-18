function ingresarPanel() {
            const estado = document.getElementById('selectEstadoLogin').value;
            const clave = document.getElementById('inputClave').value;

            if(!estado) {
                alert("Por favor seleccione un estado.");
                return;
            }
            if(!clave) {
                alert("Por favor ingrese la llave de acceso.");
                return;
            }

            // Diccionario de claves secretas por cada estado
            const clavesPorEstado = {
                "Amazonas": "amazonas2026",
                "Anzoátegui": "anzoategui2026",
                "Apure": "apure2026",
                "Aragua": "aragua2026",
                "Barinas": "barinas2026",
                "Bolívar": "bolivar2026",
                "Carabobo": "carabobo2026",
                "Cojedes": "cojedes2026",
                "Delta Amacuro": "delta2026",
                "Distrito Capital": "capital2026",
                "Falcón": "falcon2026",
                "Guárico": "guarico2026",
                "Lara": "lara2026",
                "Mérida": "merida2026",
                "Miranda": "miranda2026",
                "Monagas": "monagas2026",
                "Nueva Esparta": "esparta2026",
                "Portuguesa": "portuguesa2026",
                "Sucre": "sucre2026",
                "Táchira": "tachira2026",
                "Trujillo": "trujillo2026",
                "La Guaira": "guaira2026",
                "Yaracuy": "yaracuy2026",
                "Zulia": "zulia2026"
            };

            // Validamos si la clave ingresada coincide con la del estado seleccionado
            if(clavesPorEstado[estado] && clavesPorEstado[estado] === clave) { 
                localStorage.setItem("estadoActual", estado);
                document.querySelector('.admin-container').style.display = 'none';
                document.getElementById('seccionPublicacion').style.display = 'block';
                document.getElementById('txtEstadoActual').innerText = "Estado activo: " + estado;
            } else {
                alert("Llave de acceso incorrecta para el estado de " + estado + ".");
            }
        }