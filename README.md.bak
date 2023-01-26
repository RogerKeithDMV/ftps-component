[![N|Solid](https://cloudgensys.com/cg-demo/wp-content/uploads/2019/05/CG-Logo-01.png)](https://www.cloudgensys.com/)

# ftps-component

This component is based on Open Integration Hub framework, allowing this to connect with other components in order to have different flow exchanging data in a specific goal of transformation for the information.

This component allows to open a connection with a ftps server.

## Features

- Create a directory in an specific path.
- Delete the directory and their content.
- Delete a file in an specific path.
- Get the content of a file, an specific enconding can be requested.
- Get the list of files and directgories inside a specific path.
- Rename a file inside a path.
- Create a file inside the ftps server, the content of the file is a string that can have an specific encondig, you have to specify the enconding.

## Libraries

- [msgbroker-nxg-cg](https://www.npmjs.com/package/msgbroker-nxg-cg)
- [utils-nxg-cg](https://www.npmjs.com/package/utils-nxg-cg)
- [loging-elastic-cg-lib](https://www.npmjs.com/package/loging-elastic-cg-lib)
- [ftps-cg-lib](https://www.npmjs.com/package/ftps-cg-lib)

> For more detail of the functionality review **ftps-cg-lib** documentation

## Installation

Docker image: cloudgenuser/ftps-component:1.0.0

Functions
- trigger:
  - ftps_source
- action:
  - ftps

Fields:
- content: The string that containt the file we will get from the ftps or the file we want to create. It can be s base64, utf8 or other enconding.
- encoding: The enconging that we want to use to get the file, if this parameter is not sended base64 will be taken as default.
- file: The name of the file that will be deleted inside the ftps, the name of the file we want to rename inside the ftps or the file we want to get or delete inside the ftps.
- flag: The string that contains the actinon to execute, can be one of this: CREATEDIRECTORY, DELETEDIRECTORY, DELETEFILE, GETFILE, GETLISTFILES, RENAMEFILE, SAVEFILE. The string is not case sensitive.
- host: The host where you will connect, can be a url or ip.
- newName: The new name of the file.
- oldname: The old name of the file.
- password: This parameter contains the password that can stablish connection with the ftps.
- path: The full path where you want to create the directory in the ftps, delete a directory in the ftps, where a file in the ftps is (to delete, create, get or rename).
- port: The port where you will access to the ftps server.
- secure: Is aboolean value that indicates if the connection should be secured or not.
- username: The username that have grants to connect with the ftps server.
