import * as fs from '@nativescript/core/file-system'
const currentApp = fs.knownFolders.currentApp()

let files = currentApp.getEntitiesSync().map((entity) => entity.path)
files.sort().forEach((file) => console.log('file ->', file))

// import * as sourceMapSupport from 'source-map-support'
// sourceMapSupport.install({
// 	environment: 'node',
// 	handleUncaughtExceptions: false,
// 	retrieveSourceMap(source) {
// 		console.info('\n\nsource ->', source)
// 		let file = `${source.split('/').slice(-1)[0]}.map`
// 		console.info('file ->', file)
// 		return {
// 			url: file,
// 			map: currentApp.getFile(file).readTextSync(),
// 		}
// 		// let sourceMapPath = source + '.map'
// 		// let appPath = currentApp.path
// 		// let sourceMapRelativePath = sourceMapPath
// 		// 	.replace('file:///', '')
// 		// 	.replace('file://', '')
// 		// 	.replace(appPath + '/', '')
// 		// if (sourceMapRelativePath.startsWith('app/')) {
// 		// 	sourceMapRelativePath = sourceMapRelativePath.slice(4)
// 		// }
// 		// console.info('\n\nsourceMapRelativePath ->', sourceMapRelativePath)
// 		// return {
// 		// 	url: sourceMapRelativePath,
// 		// 	map: currentApp.getFile(sourceMapRelativePath).readTextSync(),
// 		// }
// 	},
// 	// retrieveSourceMap(source) {
// 	// 	console.info('\n\nsource ->', source)
// 	// 	const sourceMapPath = source + '.map'
// 	// 	console.info('\n\nsourceMapPath ->', sourceMapPath)
// 	// 	const sourceMapRelativePath = sourceMapPath
// 	// 		.replace('file://', '')
// 	// 		.replace(currentApp.path + '/', '')
// 	// 	console.info('\n\nsourceMapRelativePath ->', sourceMapRelativePath)
// 	// 	return {
// 	// 		url: sourceMapRelativePath + '/',
// 	// 		map: currentApp.getFile(sourceMapRelativePath).readTextSync(),
// 	// 	}
// 	// },
// })
