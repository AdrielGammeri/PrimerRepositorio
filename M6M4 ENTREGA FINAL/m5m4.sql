-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-01-2023 a las 17:46:31
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `m5m4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(1000) NOT NULL,
  `cuerpo` varchar(10000) NOT NULL,
  `img_id` varchar(350) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Denuncian que más de 5.000 obras de arte están en riesgo por filtraciones en el Museo Castagnino de Rosario', 'Hace una semana una tormenta volvió a producir daños en la institución, obligando a los empleados a trasladar cuadrtos para ponerlos a resguardo, entre ellos, la serie Tauromaquia grabada por Goya.\"', 'La suerte del patrimonio artístico de los museos argentinos está siempre en manos del humor político del gobierno de turno. Esta vez y desde hace tiempo es el turno del Museo Castagnino + Macro de Rosario, pilares que sostienen un acervo artístico de 5.000 obras, entre ellas la serie “Tauromaquia” grabada por Goya.\r\n\r\nHace apenas una semana una tormenta volvió a producir filtraciones y daños en el Castagnino obligando a los empleados a trasladar obras colgadas para ponerlas a resguardo.\r\n\r\nPor tal razón el concejal Carlos “Charly” Cardozo (JxC) hizo un reclamo al Ejecutivo municipal y a su vez una declaración –a consideración del Concejo Deliberante– donde se expresa la preocupación por la falta de respuestas tanto del Gobierno de Santa Fe como del Gobierno nacional.\r\n\r\nLa colección permanente del Castagnino + Macro está considerada, según varias fuentes, como la segunda en importancia artística detrás del Museo Nacional de Bellas Artes (que tiene muchas más obras y piezas en su acervo).\"', 'jcj1psbfm1uvuww9enld'),
(10, 'Ottessa Moshfegh, escritora: “El arte no tiene moral. Si no, es propaganda”', 'Consagrada mundialmente con ‘Mi año de descanso y relajación’, la autora estadounidense explora los límites de la corrección política en ‘Lapvona’, una novela gótica cuya radicalidad la ha colocado al borde de la cancelación. Además, Anne Hathaway protagoniza la adaptación al cine de su primer libro', 'Una chimenea crepita en la sala de la casa de Ottessa Moshfegh, ubicada sobre una ladera de las montañas de San Gabriel, al norte de Los Ángeles. El fuego preside la habitación en una fría mañana de enero. Hay un piano de cola negro y, todavía, un árbol de Navidad. Sobre el dintel posa una pequeña escultura de un Cristo junto a la Virgen. A su lado, una postal del papa Francisco liberando una paloma blanca. El cuarto remite a una escena bucólica lejos del caos angelino. Nada en esta bella casa construida con cascotes de iglesias y material reciclado y rodeada de exuberante vegetación e...\r\n\r\n', 'vcjk05itanycyxrpmpo5'),
(13, 'Experiencias inmersivas: ¿el futuro del arte?', 'El auge global de las muestras con imágenes envolventes atrae nuevos públicos y provoca debates sobre su calidad', '“Dejemos tranquilo a Van Gogh”, pedía en mayo último durante su visita a Buenos Aires Daniel Canogar, mientras la muestra inmersiva dedicada al maestro holandés en La Rural se encaminaba a superar los 350.000 visitantes. Acostumbrado a realizar obras generativas con inteligencia artificial, que cambian a partir de datos que un algoritmo toma de Internet, el artista español-estadounidense se mostró crítico entonces respecto de ese tipo de exposiciones dedicadas a figuras clave de la historia del arte. “Ya la obra que hicieron es suficientemente maravillosa, no todo tiene que moverse y apabullar”, opinó, y se manifestó en cambio a favor de ofrecer esas herramientas a artistas contemporáneos para “utilizar esos soportes, esos medios, esa experiencia de una forma más experimental”.', 'z7asbj6tivfhgmp81ozy'),
(14, 'El primer manga dibujado por una Inteligencia Artificial adelanta el futuro del arte japonés', 'La reinterpretación de un clásico japonés es el lanzamiento más polémico del 2023, ya que puede iniciar el debate sobre el uso de IA en el arte comercial.', 'Es increíble el salto en IA y aprendizaje automático que hemos visto en apenas unos meses. Aunque estas tecnologías ya tienen años a sus espaldas, no ha sido hasta ahora que han estado al alcance del público; ahora cualquiera puede usar una IA para creación gráfica y texto.\r\nComo todos los grandes cambios, es algo que puede dar un poco de miedo. Hasta no hace mucho, la creación de arte ha sido territorio exclusivo de los seres humanos, pero poco a poco nos hemos ido abriendo a la posibilidad de que los ordenadores puedan ‘imaginar’ mundos e historias.', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `password`) VALUES
(1, 'Adriel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Jose', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
