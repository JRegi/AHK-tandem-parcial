# Profiles service

- Classes and relathionships in diagram.puml

## DTOs

## Service requierments

### User

- nickname debe ser unico

- debe haber una funcion para saber si esta activa (no baneada), y debe acceder a los objetos Ban asociados y averiguar si la fecha actual se encuentra dentro del rango de algun baneo, si es que tiene objetos tipo Ban relacionados.

- status -> lista de Ban -> guarda usuario fecha de inicio, fecha de fin y si es permanente. Si es permanente no tiene fecha de fin, si permanente es false debe tener endDate.
