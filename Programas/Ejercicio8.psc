Algoritmo Ejercicio8
	Definir Lunes, Miercoles, Viernes,TF como real
	
	Escribir "Ingrese el tiempo del lunes en minutos"
	Leer Lunes
	Si Lunes>=0
		Escribir "Ingrese el tiempo del Miercoles en minutos"
		Leer Miercoles
		si Miercoles>=0
			Escribir "Ingrese el tiempo del Viernes en minutos"
			Leer Viernes
			Si Viernes>=0
				TF=((Lunes+Miercoles+Viernes)/3)
				
				Escribir "Su tiempo promedio es de: " ,TF " Segundos"
			sino 
				Escribir "El tiempo debe de ser mayor a cero"
			FinSi
		sino 
			Escribir "El tiempo debe de ser mayor a cero"
		FinSi
	sino 
		Escribir "El tiempo debe de ser mayor a cero"
	FinSi
	
FinAlgoritmo
