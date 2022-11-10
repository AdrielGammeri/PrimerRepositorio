Algoritmo PrimerPrograma
	Definir CantHoras Como Entero
    Definir Sueldo Como Entero
	
	Escribir " Ingrese la cantidad de horas trabajadas "
	Leer CantHoras
		Si CantHoras<=40 Entonces
			Sueldo=CantHoras*16
		SiNo
			Sueldo=(CantHoras-40)*20+640
		Fin Si
	Escribir " Su suledo es de $ ", Sueldo
FinAlgoritmo
