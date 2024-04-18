-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 18. 09:44
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `clapp`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `genre` varchar(50) NOT NULL,
  `length` time NOT NULL,
  `rating` float NOT NULL,
  `img_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `genre`, `length`, `rating`, `img_url`) VALUES
(1, 'Egoist', 'Based on Makoto Takayama\'s semi-autobiographical novel, director Daishi Matsunaga\'s EGOIST is a uniquely sexy and heartfelt drama about family. Kosuke, a fashion magazine editor in his mid-30s, revels in the blessings of his comfortable lifestyle. When he hires Ryuta, a personal trainer, in order to get into shape, he gets more than he bargained for. The two fall in love, but when Kosuke discovers Ryuta secretly works as an escort to provide for himself and his mother, the two men strike a financial agreement. However, when tragedy strikes, Kosuke and Ryuta\'s mother grow closer and must confront a new future together.', 'Drama', '02:00:00', 6.66667, '/imgs/egoist.png'),
(2, 'The Coffe Table', 'Jesús and Maria love each other, endlessly, magnificently, even though they sometimes just don\'t notice. But hey, now that their little lump of love is born, everything\'s going to work out. Sure, Maria still has a bit of a North-Korean streak in handling the household, calling all the shots when it comes to the color of their apartment walls, the name of the baby, the food they eat, the TV shows they watch, the thickness of the toilet paper and their holiday destination. Jesús, to prove to her and himself he ain\'t some spineless trilobite but that he has a will of his own, gets to pick the coffee table. Halleluiah! A hard-won victory that he\'s cherishing by picking out the most aggressively ugly little thing imaginable, the furniture equivalent of Liberace getting lost in Ikea. An unbreakable wonder, says the salesman. Overpriced, says Maria. It will bring boundless happiness to their lives, says the salesman. Their worst nightmare, says us....', 'Comedy', '01:31:00', -1, '/imgs/thecoffetable.png'),
(3, 'Pulp Fiction', 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, \"Pumpkin\" (Tim Roth) and \"Honey Bunny\" (Amanda Plummer).', 'Crime', '02:33:00', -1, '/imgs/pulpfiction.png'),
(4, 'Spaceballs', 'In a distant galaxy, planet Spaceball has depleted its air supply, leaving its citizens reliant on a product called \"Perri-Air.\" In desperation, Spaceball\'s leader President Skroob (Mel Brooks) orders the evil Dark Helmet (Rick Moranis) to kidnap Princess Vespa (Daphne Zuniga) of oxygen-rich Druidia and hold her hostage in exchange for air. But help arrives for the Princess in the form of renegade space pilot Lone Starr (Bill Pullman) and his half-man, half-dog partner, Barf (John Candy).', 'Comedy', '01:32:00', -1, '/imgs/spaceballs.png');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `screening_id` int(11) NOT NULL,
  `products_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`products_json`)),
  `user_id` int(11) NOT NULL,
  `tickets` int(255) NOT NULL,
  `discount` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `orders`
--

INSERT INTO `orders` (`id`, `screening_id`, `products_json`, `user_id`, `tickets`, `discount`) VALUES
(1, 1, '{\r\n    \"products\": [{\r\n        \"popcorn_small\": 2,\r\n        \"cup_small\": 2\r\n    }]\r\n}', 1, 1, 0),
(2, 1, '{\r\n    \"products\": [{\r\n        \"popcorn_large\": 1,\r\n        \"cup_medium\": 2\r\n    }]\r\n}', 2, 3, 0),
(3, 2, '{\r\n    \"products\": [{\r\n        \"popcorn_large\": 1,\r\n        \"cup_large\": 1,\r\n        \"cup_small\": 1\r\n    }]\r\n}', 1, 2, 0),
(4, 2, '{\r\n    \"products\": [{\r\n        \"popcorn_large\": 3,\r\n        \"cup_large\": 2,\r\n        \"cup_small\": 2\r\n    }]\r\n}', 2, 6, 0),
(5, 3, '{\r\n    \"products\": [{\r\n        \"popcorn_medium\": 2,\r\n        \"cup_medium\": 1,\r\n        \"cup_large\": 2\r\n    }]\r\n}', 1, 1, 0),
(6, 3, '{\r\n    \"products\": [{\r\n        \"popcorn_small\": 2\r\n    }]\r\n}', 2, 2, 0),
(7, 4, '{\r\n    \"products\": [{\r\n        \"popcorn_medium\": 2,\r\n        \"cup_large\": 1\r\n    }]\r\n}', 1, 4, 0),
(8, 4, '{\r\n    \"products\": [{\r\n        \"popcorn_large\": 1\r\n    }]\r\n}', 2, 2, 0),
(9, 1, '{\"products\":[{\"popcorn_large\":1,\"cup_medium\":1}]}', 1, 3, 0),
(10, 1, '{\"products\":[{\"popcorn_large\":1,\"cup_medium\":1}]}', 1, 3, 0),
(11, 1, '{}', 4, 2, 0),
(12, 1, '{\"products\":[{\"popcorn_large\":1,\"cup_medium\":1}]}', 4, 2, 10),
(13, 3, '{\"products\":{\"popcorn_small\":2,\"popcorn_medium\":2,\"cup_small\":2}}', 1, 2, 0),
(14, 3, '{\"products\":{\"popcorn_small\":2,\"cup_small\":2}}', 1, 1, 0),
(15, 3, '{\"products\":{\"cup_medium\":2,\"cup_small\":2}}', 1, 1, 0),
(16, 1, '{\"products\":{\"popcorn_small\":2,\"cup_small\":2}}', 1, 22, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`) VALUES
(1, 'popcorn_small', 1200, 'Small - 2L'),
(2, 'popcorn_medium', 1600, 'Medium - 3L'),
(3, 'popcorn_large', 2000, 'Large - 4L'),
(4, 'cup_small', 800, 'Small - 3dl'),
(5, 'cup_medium', 1000, 'Medium - 5dl'),
(6, 'cup_large', 1200, 'Large - 1L');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `points` tinyint(2) NOT NULL,
  `comment` text NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `ratings`
--

INSERT INTO `ratings` (`id`, `movie_id`, `user_id`, `points`, `comment`, `timestamp`) VALUES
(1, 1, 1, 9, '', '2024-04-18 03:23:54'),
(2, 1, 2, 4, '', '2024-04-16 10:23:54'),
(3, 2, 1, 9, '', '2024-04-03 10:24:31'),
(5, 3, 1, 7, '', '2024-04-27 05:24:31'),
(6, 3, 2, 5, '', '2024-04-10 17:24:31'),
(7, 4, 1, 10, '', '2024-03-20 06:24:31'),
(8, 4, 2, 3, '', '2024-02-09 19:24:31'),
(15, 1, 4, 7, '', '2024-04-17 13:32:16');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `screenings`
--

CREATE TABLE `screenings` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `tickets_left` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `screenings`
--

INSERT INTO `screenings` (`id`, `date`, `tickets_left`, `movie_id`) VALUES
(1, '2024-04-18', -40, 1),
(2, '2024-04-22', 35, 2),
(3, '2024-04-23', 83, 3),
(4, '2024-04-25', 65, 4),
(5, '2024-04-25', 75, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `token`, `role`) VALUES
(1, 'gipsz_jakab', 'teszt@teszt.com', '$2b$10$5avmaj2gspTyVLn9bSPsBecGMi7k4JaqmBeVBsbu5IsUdduYmjqVC', 'b0af3066e8a04eae1c5b7a4e61ba0e3ef672902e81dcd504690b85373da686aa', 0),
(2, 'admin', 'admin@admin.com', 'admin', '', 1),
(4, 'david_teszt', 'david_teszt@email.com', '$2b$10$5avmaj2gspTyVLn9bSPsBecGMi7k4JaqmBeVBsbu5IsUdduYmjqVC', 'b29fe0c02ded09919d39d3b555a217f6b3f12f0c27cb773e1f5886ebfbfe8eb4', 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `screening_id` (`screening_id`),
  ADD KEY `user_id` (`user_id`);

--
-- A tábla indexei `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ratings_ibfk_1` (`movie_id`),
  ADD KEY `user_id` (`user_id`);

--
-- A tábla indexei `screenings`
--
ALTER TABLE `screenings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `screenings`
--
ALTER TABLE `screenings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `screening_id` FOREIGN KEY (`screening_id`) REFERENCES `screenings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `screenings`
--
ALTER TABLE `screenings`
  ADD CONSTRAINT `movie_id` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
