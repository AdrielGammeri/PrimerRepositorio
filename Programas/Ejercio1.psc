Algoritmo Ejercio1
	Definir Pesos Como Entero
	Definir UnidadCambiaria, Dolares Como Real
	
	Escribir"Ingrese un monto en pesos"
	Leer Pesos
	Si Pesos<=0 Entonces
		Escribir "Por favor Ingresar un monto superior a 0 "
	SiNo
		Escribir "Ingrese la unidad cambiaria del dolar"
		Leer UnidadCambiara 
		
		Dolares= Pesos/UnidadCambiara
		Escribir "Su cantidad de dolares es: $ ", Dolares
	Fin Si
FinAlgoritmo
