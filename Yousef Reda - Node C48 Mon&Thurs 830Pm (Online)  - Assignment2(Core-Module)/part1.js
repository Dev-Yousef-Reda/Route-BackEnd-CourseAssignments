const path = require('node:path')
const fs = require('node:fs')
const fsp = require('node:fs/promises')
const { EventEmitter } = require('node:events')
const event = new EventEmitter()
const os = require('node:os')
const { createGzip } = require('node:zlib')


//                         Part One

// 1 -

// function getCurrentFilePath(fileName = '') {

//     const absolutePathName = path.resolve(fileName)
//     const dirName = path.dirname(absolutePathName)
//     return {File:absolutePathName, Dir:dirName}
// }

// console.log(getCurrentFilePath('main.js'));

// =============================================================================================================

// 2-

// function getCurrentFileName(filePath = '') {

//     const fileName = path.basename(filePath)
//     return fileName
// }

// console.log(getCurrentFileName('/user/files/report.pdf'));

// ======================================================================================================

// 3-

// function convertFileObjToPath(pathObj) {
//     return path.format(pathObj)
// }

// console.log(convertFileObjToPath(path.parse(path.resolve('main.js'))));

// ====================================================================================================

// 4-

// function getExtensionName(fileName){
//     return path.extname(fileName)
// }

// console.log(getExtensionName('main.js'));

// ====================================================================================================

// 5 -

// function convertPathToObj(pathName){
//     return path.parse(pathName)
// }

// console.log(convertPathToObj(path.resolve('main.js')));

// ====================================================================================================

// 6 -

// function checkPathIsAbsolute(pathName){
//     return path.isAbsolute(pathName)
// }

// console.log(checkPathIsAbsolute('main.js'));

// ====================================================================================================

// 7 -

// function joinSegments(...segments) {
//     let pathName = path.join(...segments)
//     return pathName;
// }

// console.log(joinSegments('src', 'practice', 'main.js'));
// console.log(joinSegments('/folder1', 'folder2/file.txt'));

// ====================================================================================================

// 8 -

// function getAbsolutePath(pathName){
//     return path.resolve(pathName)
// }

// console.log(getAbsolutePath('./index.js'));

// ====================================================================================================

// 9 - is same as 7

// ====================================================================================================

// 10 -

// function deleteFileSync(fileName) {
//     if (fs.existsSync(fileName)) {
//         fs.unlinkSync(path.resolve(fileName))
//         console.log(`The ${fileName} is deleted.`);
//     }
// }

// deleteFileSync('file.txt')

// ====================================================================================================

// 11 -

// function makeDirSync(dirName) {
//     fs.mkdirSync(dirName, { recursive: true })
//     console.log('Success');
// }
// makeDirSync('practice/test/file.txt')

// ====================================================================================================

// 12 -

// event.on('start', ()=>{
//     console.log(`Welcome event triggered!!`);
// })

// event.emit('start')

// ====================================================================================================

// 13 -

// event.on('login',(username)=>{
//     console.log(`User logged in: ${username}`);
// })

// event.emit('login', 'Ahmed')

// ====================================================================================================

// 14 -

// function readFileDataSync(fileName) {
//     try {
//         const data = fs.readFileSync(path.resolve(fileName), 'utf-8')
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// readFileDataSync('data.txt')

// ====================================================================================================

// 14 -

// function readFileDataSync(fileName) {
//     try {
//         const data = fs.readFileSync(path.resolve(fileName), 'utf-8')
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// readFileDataSync('data.txt')

// ====================================================================================================

// 15 -

// async function writeDataToFile(filename, data) {
//     try {
//         const pathname = path.resolve(filename)
//         await fsp.writeFile(pathname, data)
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// writeDataToFile('data.txt', 'testing data :)')

// ====================================================================================================

// 16 -

// function checkIfExist(pathname) {
//     return fs.existsSync(pathname)
// }
// console.log(checkIfExist('practice'));

// ====================================================================================================

// 17 -

// function getCurrentPlatformData(){
//     const platformData = {
//         Platform:os.platform(),
//         Arch: os.arch()
//     }
//     return platformData
// }

// console.log(getCurrentPlatformData());

// ====================================================================================================

// 18 -

// const readStream = fs.createReadStream(path.resolve('big.txt'), 'utf-8')

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// })

// ====================================================================================================

// 19 -

// const readStream = fs.createReadStream(path.resolve('big.txt'), 'utf-8')
// const writeStream = fs.createWriteStream(path.resolve('dest.txt'))
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk)
// })

// ====================================================================================================

// 20 -

// const readStream = fs.createReadStream(path.resolve('big.txt'), 'utf-8')
// const writeZIPStream = fs.createWriteStream(path.resolve('destzip.txt.gz'))
// const zip = createGzip()
// readStream.pipe(zip).pipe(writeZIPStream)

// ====================================================================================================

