#Used to change user admin password
select ur.userroleid, u.userid, u.username, ur.name from users u 
inner join userrolemembers um on (u.userid = um.userid)
inner join userrole ur on (ur.userroleid = um.userroleid) WHERE ur.userroleid = 20

UPDATE USERS SET password = '$2a$10$JRiFtXlOA4QY/EyN9dSdFOkWqQqNu2SUbTadUKoqEz4eAUQeGlKxO' WHERE username = 'amza';

select password from users where username = 'amza' 