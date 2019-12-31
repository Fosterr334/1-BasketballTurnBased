ALTER USER 	'root'@'localhost' identified WITH mysql_native_password BY 'root';
DROP DATABASE IF EXISTS bballplayer_DB;
CREATE DATABASE bballplayer_DB;
USE bballplayer_DB;

CREATE TABLE players(
    id INT NOT NULL AUTO_INCREMENT,
    p_id INT NOT NULL,
    player_name VARCHAR(75) NOT NULL,
    player_img VARCHAR(100) NOT NULL,
    offense INT NOT NULL,
    defense INT NOT NULL,
    support INT NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (544,"Russell Westbrook","./assets/images/images/Westbrook.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (216,"James Harden","./assets/images/images/harden.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (319,"Damian Lillard","./assets/images/images/lillard.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (20,"Giannis Antetokounmpo","./assets/images/images/Antetokounmpo.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (147,"Andre Drummond","./assets/images/images/Drummond.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (314,"Kawhi Leonard","./assets/images/images/Leonard.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (265,"LeBron James","./assets/images/images/james.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (126,"Anthony Davis","./assets/images/images/davis.jpg", 1, 1,1);
INSERT INTO players(p_id, player_name, player_img, offense, defense, support) 
VALUES (124,"Stephen Curry","./assets/images/images/curry2.jpg", 1, 1,1);
