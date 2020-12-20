import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'

@NativeClass
class ExtractorsFactory extends com.google.android.exoplayer2.extractor.DefaultExtractorsFactory {
	constructor() {
		super()
		return global.__native(this)
	}
	createExtractors(
		uri: android.net.Uri,
		responseHeaders: java.util.Map<string, java.util.List<string>>,
	) {
		let extractors = super.createExtractors(uri, responseHeaders)
		console.log('extractors ->', extractors)
		return extractors
	}
}

export default ExtractorsFactory
