Algoritmo Ejercicio6
	Definir Ginecologia, Pediatria, Traumatologia, Presupuesto Como Real
	
	Escribir " Ingrese el presupuesto del hospital "
	leer Presupuesto
	
	Si Presupuesto>=0
		Ginecologia=((Presupuesto*40)/100)
		Traumatologia=((Presupuesto*30)/100)
		Pediatria=((Presupuesto*30)/100)
		Escribir "El Presupuesto para Ginecologia Es de $: ",Ginecologia
		Escribir "El Presupuesto para Traumatologia Es de $: ",Traumatologia
		Escribir "El Presupuesto para Pediatria Es de $: ",Pediatria
	sino 
		Escribir " El Presupuesto debe de ser mayor a cero "
	FinSi
	
FinAlgoritmo
