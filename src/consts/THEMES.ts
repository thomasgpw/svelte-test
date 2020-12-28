export type Theme = {
	background: string,
	basePrimary: string,
	baseSecondary: string,
	accentPrimary: string,
	accentSecondary: string
}
const THEMES: {
	[key: string]: Theme
} = {
	light: {
		background: '#FFFFFF',
		basePrimary: '#FEF8ED',
		baseSecondary: '#938C7E',
		accentPrimary: '#F09B9B',
		accentSecondary: '#EDF8ED'
    },
    dark: {
		background: '#151515',
		basePrimary: '#333333',
		baseSecondary: '#000000',
		accentPrimary: '#270526',
		accentSecondary: '#191D0C'
	}
}
export default THEMES;