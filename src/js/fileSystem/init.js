const csInterface = new CSInterface();
const appID = csInterface.getApplicationID();
const extensionId = csInterface.getExtensionID(); 
const extFolder = csInterface.getSystemPath(SystemPath.EXTENSION);
const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;
const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) +`/jsx/`;

const jsxParts = `${extensionRoot}/jsxParts`;
const polyFillFolder = `${extensionRoot}/polyFill`;
const selectFolder = `${extensionRoot}/select`;
const actionFolder = `${extensionRoot}/actions`;
const mainFolder = `${extensionRoot}/mainProcess`;
const partial = `${extensionRoot}/partial`;
import * as fs from "fs";
import * as path from "path";
const readDirFiles = (path) =>{
    return new Promise((resolve,reject)=>{
        fs.readdir(path,(err,files)=>{
            if(err)reject(err);
            resolve(files);
        })
    });
}

export const debugWriteFile = (name,data)=>{
    return fs.writeFileSync(`${extensionRoot}/${name}`,JSON.stringify(data));
}

const loadJsx = async(jsxFolder) =>{
    const parts = await readDirFiles(jsxFolder).catch(e=>console.log(e));
    console.log(parts);
    const jsxes = parts.filter(f => path.extname(f) === ".jsx");
    jsxes.forEach(jsx =>  csInterface.evalScript(`$.evalFile("${jsxFolder}/${jsx}")`));
}

const init = async() =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}json2.js")`);//json2読み込み
    await Promise.all([jsxParts,partial/*selectFolder,actionFolder,mainFolder*/].map(async(jsxFolder)=>{
        await loadJsx(jsxFolder);
    }));
}
const reloadEvent = () =>{
    const csInterface = new CSInterface();
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

const resizeWindow = (width,height) =>{
    csInterface.resizeContent(width,height);
}

const alertFromJSX = msg => csInterface.evalScript(`$.evalFile(alert("${msg}"))`);

export {csInterface,extensionRoot,filePath,extensionId,extFolder,appID,init,reloadEvent,resizeWindow,alertFromJSX};

