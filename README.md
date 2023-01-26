[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# ftps-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to connect to a FTPS server to manage its content.

## Features

- Create a directory in an specific path in the FTPS server.
- Delete the directory and its content in the FTPS server.
- Delete a file in an specific path in the FTPS server.
- Get the content of a file in the FTPS server, a specific encoding can be set in the request.
- Get the list of files and directories inside a specific path in the FTPS server.
- Rename a file inside a path in the FTPS server.
- Upload a file inside the FTPS server, the content of the file is a string that can have a specific encondig, the enconding must be specified if it is not set, the default value of the encoding will be base64.

## Libraries

- [errorhandler-nxg-cg](https://www.npmjs.com/package/errorhandler-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [ftps-cg-lib](https://www.npmjs.com/package/ftps-cg-lib)

> For more detail of the functionality review **[ftps-cg-lib](https://github.com/CloudGenUser/ftps-cg-lib)** documentation

## Installation

Docker image: cloudgenuser/ftps-component:1.0.0

Functions
- trigger:
  - ftps_source
- action:
  - ftps

Fields:
- content: It is the content of a file as a string type that is get from the FTPS server or to upload into it. It can be selected the encoding, for example base64, utf8 or other.
- encoding: It is the definition of encoding required to read or upload the file content. By default the charset seleced is base64, if it is not set this value will be used.
- file: The name of the file that is required to be handled (deleted, uploaded or renamed) from the FTPS server.
- flag: The string that contains the option of the action to be executed, the next options are available: CREATEDIRECTORY, DELETEDIRECTORY, DELETEFILE, GETFILE, GETLISTFILES, RENAMEFILE, SAVEFILE. The string is not case sensitive.
- host: It is the server where the connection will be established, can be an URL or IP.
- newName: It is the name used to rename a file into the FTPS server.
- oldname: The current name of the file to be replaced when the RENAMEFLAG is selected.
- password: This parameter contains the password related to have access to the FTPS server.
- path: The location of a file or directory where the management will be performed.
- port: This parameter is the port related to the server to stablish the connection.
- secure: Is a boolean value that indicates if the connection should be secured or not.
- username: The username that have grants to connect to the FTPS server.
