import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'
import * as Utils from '@nativescript/core/utils'

export function toLog(format: com.google.android.exoplayer2.Format) {
	if (!R.isType('Object', format)) {
		return R.type(format)
	}
	return com.google.android.exoplayer2.Format.toLogString(format)
}
