import * as R from 'rambdax'

export function hash(value: string) {
	value = value.toString()
	let [hash, i, char] = [0, 0, 0]
	for (i = 0; i < value.length; i++) {
		char = value.charCodeAt(i)
		hash = (hash << 5) - hash + char
		hash |= 0
	}
	return Math.abs(hash)
}
