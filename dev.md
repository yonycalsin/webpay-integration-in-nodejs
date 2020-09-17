Ambiente de integración
Para las transacciones Webpay en estos ambientes se deben usar estas tarjetas:

- VISA 4051885600446623, CVV 123, cualquier fecha de expiración. Esta tarjeta genera transacciones aprobadas.
- MASTERCARD 5186059559590568, CVV 123, cualquier fecha de expiración. Esta tarjeta genera transacciones rechazadas.
- Redcompra 4051884239937763 genera transacciones aprobadas (para operaciones que permiten débito Redcompra y prepago)
- Redcompra 5186008541233829 genera transacciones rechazadas (para operaciones que permiten débito Redcompra y prepago)

Cuando aparece un formulario de autenticación con RUT y clave, se debe usar el RUT `11.111.111-1` y la clave `123`.

### Documentation

- https://www.transbankdevelopers.cl/documentacion/como_empezar#instalacion-sdk

### References

- https://github.com/continuum/transbank-sdk-nodejs

### Example

- https://github.com/TransbankDevelopers/transbank-sdk-nodejs-webpay-example

### More Packages

- https://npm.io/search/keyword:pagos
