Algoritmo Ejercicio3
	Definir Presion, volumen, temperatura, masa Como Real
	Escribir "Ingrese la Presion de la masa"
	Leer Presion
	Si Presion >=0 Entonces
		Escribir "Ingrese el volumen de la masa"
		leer volumen
		 si volumen >=0
			 Escribir "Ingrese la temperatura de la masa"
			 leer masa
			 si masa >=0
				 masa= (Presion*volumen)/(0.37*(temperatura+460))
				 Escribir "la masa es de: ",masa
			 sino 
				 Escribir "la masa debe de ser mayor a 0"
			 FinSi
		 sino 
			 Escribir "el volmumen debe de ser mayor a 0"
			 
		 FinSi
		 
    SiNo
		Escribir "La Presion tiene que ser mayor a 0 "

	fin si
FinAlgoritmo
