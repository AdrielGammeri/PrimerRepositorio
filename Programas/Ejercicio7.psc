Algoritmo Ejercicio7
	Definir PrecioCompra, PrecioVenta Como Real
	Escribir "Ingrese el Precio de costo" 
	Leer PrecioCompra
	Si PrecioCompra>=0
	 PrecioVenta=(((PrecioCompra*30)/100)+PrecioCompra)
	 Escribir "El precio de venta debe de ser de: $ ",PrecioVenta
    Sino 
	 Escribir "El Precio debe de se mayor a 0"
	 fin si
FinAlgoritmo
