USE `demo`;


DROP TABLE IF EXISTS `demo_album`;
CREATE TABLE IF NOT EXISTS `demo_album` (
`id` int(11) PRIMARY KEY AUTO_INCREMENT,
`title` varchar(255) NOT NULL DEFAULT "",
`url` varchar(255) NOT NULL DEFAULT ""
) ENGINE = INNODB DEFAULT CHARSET =utf8mb4;


INSERT INTO `demo_album` (`title`, `url`) VALUES
("Card1", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"),
("Card2", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"),
("Card3", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"),
("Card4", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"),
("Card5", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"),
("Card6", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png");
