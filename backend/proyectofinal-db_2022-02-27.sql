-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-02-2022 a las 14:22:40
-- Versión del servidor: 8.0.23
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo`
--

CREATE TABLE `catalogo` (
  `id` smallint NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `director` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `year` smallint NOT NULL,
  `rating` decimal(3,1) NOT NULL,
  `sinopsis` varchar(500) NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `catalogo`
--

INSERT INTO `catalogo` (`id`, `title`, `director`, `year`, `rating`, `sinopsis`, `img_id`) VALUES
(51, 'The Matrix', 'Lana & Lilly Wachowski', 1999, '8.7', 'Cuando una bella desconocida lleva al hacker Neo a un inframundo prohibido, descubre la impactante verdad: la vida que conoce es un elaborado engaño de una ciberinteligencia malvada.', 'kf6l9krzjegwikkfydfm'),
(52, 'Avatar', ' James Cameron', 2009, '7.8', 'Un marine parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo que siente como su hogar.', 'uvyippffeomlvmuk0ech'),
(53, 'The Silence of the Lambs', 'Jonathan Demme', 1991, '8.6', 'Una joven cadete del FBI busca la ayuda de un asesino caníbal y manipulador encarcelado con el fin de atrapar a otro asesino en serie, un loco que despelleja a sus víctimas.', 'jvex8whekjy7jphlkruu'),
(54, 'Meet Joe Black', 'Martin Brest', 1998, '7.2', 'La muerte, que toma la forma de un joven, le pide a un magnate de los medios de comunicación que actúe como guía para enseñarle sobre la vida en la Tierra, y en el proceso, se enamora de la hija de su guía.', 'ieadn0dzve5kdot1ozrt'),
(55, 'The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, '8.9', 'Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.', 'atsn3gf4cba6cxrmperd'),
(56, 'The Shawshank Redemption', 'Frank Darabont', 1994, '9.3', 'Andy Dufresne es encarcelado por matar a su esposa y al amante de esta. Tras una dura adaptación, intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.', 'yhhmtelsujovvme5ypon'),
(57, 'Speed', 'Jan de Bont', 1994, '7.2', 'Un joven policía debe evitar la explosión de una bomba a bordo de un autobús urbano manteniendo su velocidad por encima de los 80 km/h.', 'hkq0pbzclladm7xwwd6j');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `ComID` int NOT NULL,
  `ComOpdID` int NOT NULL,
  `ComTitleID` smallint NOT NULL,
  `Comentario` varchar(500) NOT NULL,
  `Valoracion` int NOT NULL,
  `ComFec` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`ComID`, `ComOpdID`, `ComTitleID`, `Comentario`, `Valoracion`, `ComFec`) VALUES
(1, 1, 34, 'La pelicula es sencillamente increible. Morgan Freeman sublime', 10, '2022-02-13 04:02:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `OpdID` int NOT NULL,
  `OpdNom` varchar(50) NOT NULL,
  `OpdPas` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`OpdID`, `OpdNom`, `OpdPas`) VALUES
(1, 'PabloRNR', 'd519fd29fda86ffbb2d277fca377ba03');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`ComID`,`ComOpdID`,`ComTitleID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`OpdID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  MODIFY `id` smallint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `ComID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `OpdID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
