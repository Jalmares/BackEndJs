CREATE TABLE `wop_cat` (
  `cat_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `age` int(11) NOT NULL,
  `weight` float NOT NULL,
  `owner` int(11) NOT NULL,
  `filename` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `wop_cat` (`cat_id`, `name`, `age`, `weight`, `owner`, `filename`) VALUES
(1, 'Frank', 6, 5, 1, 'http://placekitten.com/400/300'),
(2, 'James', 4, 11, 2, 'http://placekitten.com/400/302');

CREATE TABLE `wop_user` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `wop_user` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'John Doe', 'john@metropolia.fi', '1234'),
(2, 'Jane Doez', 'jane@metropolia.fi', 'qwer');


ALTER TABLE `wop_cat`
  ADD PRIMARY KEY (`cat_id`);

ALTER TABLE `wop_user`
  ADD PRIMARY KEY (`user_id`);


ALTER TABLE `wop_cat`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `wop_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
