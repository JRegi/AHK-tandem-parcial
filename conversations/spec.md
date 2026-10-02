# Spec — Servicio II: Gestión de Conversaciones

## 1. Propósito y alcance

<!-- Qué resuelve este servicio en 2-3 oraciones. -->

## 2. Fuera de alcance

<!-- Lo que el agente NO tiene que construir (videollamadas, notificaciones, etc.). -->

## 3. Glosario

| Término                  | Definición |
| ------------------------ | ---------- |
| Conversación             |            |
| Iniciador / Destinatario |            |
| Corrección               |            |

## 4. Modelo

<!-- Una tabla por entidad: atributo, tipo, obligatorio, descripción. -->
<!-- Indicá qué datos son propios y cuáles son ids del Servicio I. -->

### 4.1 Estados de una conversación

<!-- Estados posibles, qué transición lleva de uno a otro y quién la dispara. -->

## 5. Reglas de negocio

<!-- Numeradas, una por línea, verificables. -->

- RN-01:
- RN-02:

## 6. Funcionalidades

<!-- Repetí este bloque por cada funcionalidad. -->

### F-01: <nombre>

- Verbo y ruta:
- Entrada (body / params / query):
- Salida exitosa (código + ejemplo JSON):
- Reglas que aplica: RN-xx, RN-yy
- Errores (código + cuándo):

## 7. Dependencia con el Servicio I

- URL base:
- Qué se consulta y en qué funcionalidades:
- Pedido exacto (verbo, ruta, parámetros):
- Respuesta esperada (ejemplo JSON) y cómo se interpreta cada caso:
- Qué hacer si el Servicio I no responde o responde con error:

## 8. Restricciones técnicas

- NestJS + TypeScript, puerto 3002.
- Persistencia: arrays estáticos en los services. Sin base de datos.
- Ids generados por contador incremental.
- Estructura: un resource de Nest por recurso (entity, dto, controller, service, module).
- Controladores sin lógica de negocio.
- Dependencias permitidas:

## 9. Criterios de aceptación

<!-- Dado / Cuando / Entonces. Incluir casos de error. -->

- CA-01: Dado ... cuando ... entonces ...
- CA-02:
