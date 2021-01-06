import * as Application from '@nativescript/core/application'
import * as R from 'rambdax'
import * as Types from '@nativescript/core/utils/types'
import * as Utils from '@nativescript/core/utils'

export default class ExoDisplay {
	activity = Application.android.foregroundActivity as androidx.appcompat.app.AppCompatActivity
	window = this.activity.getWindow()

	nativeApp = Application.android.nativeApp as android.app.Application
	wm = this.nativeApp.getSystemService(
		android.content.Context.WINDOW_SERVICE,
	) as android.view.WindowManager
	dm = this.nativeApp.getSystemService(
		android.content.Context.DISPLAY_SERVICE,
	) as android.hardware.display.DisplayManager

	constructor(public width: number, public height: number, public fps: number) {}

	getBestDisplayMode() {
		let modes = this.wm.getDefaultDisplay().getSupportedModes()
		for (let i = 0; i < modes.length; i++) {
			let mode = modes[i]
			if (
				mode.getPhysicalWidth() == this.width &&
				mode.getPhysicalHeight() == this.height &&
				mode.getRefreshRate().toFixed(3) == this.fps.toFixed(3)
			) {
				return mode
			}
		}
	}

	setBestDisplayMode() {
		return new Promise<void>((resolve, reject) => {
			let current = this.wm.getDefaultDisplay().getMode()
			let best = this.getBestDisplayMode()
			if (current.getModeId() == best.getModeId()) {
				return resolve()
			}
			let listener = new android.hardware.display.DisplayManager.DisplayListener({
				onDisplayChanged: (displayId) => {
					console.log('onDisplayChanged ->', displayId)
					if (displayId == this.wm.getDefaultDisplay().getDisplayId()) {
						this.dm.unregisterDisplayListener(listener)
						resolve()
					}
				},
			} as android.hardware.display.DisplayManager.DisplayListener)
			this.dm.registerDisplayListener(listener, null)
			let params = this.window.getAttributes()
			params.preferredDisplayModeId = best.getModeId()
			this.window.setAttributes(params)
		})
	}
}
