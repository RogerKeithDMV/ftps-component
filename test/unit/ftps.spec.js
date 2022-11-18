const {ftps,objectFTPSReq,objectFTPSOpt} = require('ftps-cg-lib')
const timeOut = 3000;//five minutes

describe('suite to test ftps functions', function () {

    it('should get the list of files in ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'GETLISTFILES';
        properties.path = '/';
        properties.secure = true;

        const data = await ftps({}, properties, true);
        console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("type");
    }, timeOut);

    /*it('should save a file in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'SAVEFILE';
        properties.secure = true;
        properties.file = '/files/regards12.txt';
        properties.content = 'Hello world!!! This is friday and is demo day.';
        properties.encoding = 'utf8';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("was created successfully.");
    }, timeOut);

    it('should get a file if the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'GETFILE';
        properties.secure = true;
        properties.file = '/files/regards12.txt';
        properties.encoding = 'utf8';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("Hello world");
    }, timeOut);

    it('should rename a file in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'RENAMEFILE';
        properties.secure = true;
        properties.path = '/files/';
        properties.oldName = 'regards12.txt';
        properties.newName = 'regards.txt';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("was successfully renamed to");
    }, timeOut);

    it('should delete a file inside the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'DELETEFILE';
        properties.secure = true;
        properties.path = '/files/';
        properties.file = 'regards.txt';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("was deleted successfully.");
    }, timeOut);

    it('should create a new directory in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'CREATEDIRECTORY';
        properties.secure = true;
        properties.path = '/files/newDir';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("was created successfully.");
    }, timeOut);

    it('should delete a directory with its content in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'DELETEDIRECTORY';
        properties.secure = true;
        properties.path = '/files/newDir';

        const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        expect(JSON.stringify(data)).toContain("was deleted successfully.");
    }, timeOut);

    test('Should send the message tha the flag is invalid', async () => {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'invalidFlag';
        properties.secure = true;

        //const data = await ftps({}, properties, true);
        //console.log("Cadena: "+JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    });


    it('should get error of user/password in the connection.', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsusers';
        properties.password = 'Cloudgen';
        properties.flag = 'GETLISTFILES';
        properties.path = '/files/';
        properties.secure = true;

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);

    it('should send error with the ip server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '18.119.108.241';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'SAVEFILE';
        properties.secure = true;
        properties.file = '/files/regards12.txt';
        properties.content = 'Hello world!!! This is friday and is demo day.';
        properties.encoding = 'utf8';

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);

    it('should not rename a file in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'RENAMEFILE';
        properties.secure = true;
        properties.path = '/files/';
        properties.oldName = 'regards1234567.txt';
        properties.newName = 'regards123456.txt';

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);

    it('should not delete a file inside the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'DELETEFILE';
        properties.secure = true;
        properties.path = '/files/';
        properties.file = 'regardsXP.txt';

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);

    it('should not create a new directory in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'CREATEDIRECTORY';
        properties.secure = true;
        properties.path = '/x/newDir';

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);

    it('should not delete a directory with its content in the ftps server', async function () {
        let properties = {...objectFTPSReq,objectFTPSOpt};
        properties.host = '52.22.164.164';
        properties.port = '21';
        properties.username = 'ftpsuser';
        properties.password = 'Cloudgen';
        properties.flag = 'DELETEDIRECTORY';
        properties.secure = true;
        properties.path = '/x/newDir';

        //const data = await ftps({}, properties, true);
        //console.log(JSON.stringify(data));
        await expect(ftps({}, properties, true)).rejects.toThrow();
    }, timeOut);*/
});