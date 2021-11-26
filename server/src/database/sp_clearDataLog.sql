DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_clearDataLog`(IN logType VARCHAR(25))
BEGIN IF logType = 'all' THEN
			TRUNCATE TABLE `request-log`;
			TRUNCATE TABLE `info-log`;
			TRUNCATE TABLE `error-log`;
            ELSE IF logType = 'request' THEN
            TRUNCATE TABLE `request-log`;
            ELSE IF logType = 'error' THEN 
            TRUNCATE TABLE `error-log`;
            ELSE IF logType = 'info' THEN 
            TRUNCATE TABLE `info-log`;
            END IF;
            END IF;
            END IF;
	END IF;
END$$
DELIMITER ;
