Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

# call SP
getmanager().query('CALL sp_someStoredProc(?, ?)', [user.id, user.something])
