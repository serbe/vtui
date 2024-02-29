import { ColorValues, Colors, SizeValues, Sizes } from './variables';

export const stringToColor = (value?: string): Colors => {
	if (value && ColorValues.includes(value)) {
		return value as Colors;
	}
	return 'slate' as Colors;
};

export const stringToSize = (value?: string): Sizes => {
	if (value && SizeValues.includes(value)) {
		return value as Sizes;
	}
	return 'normal' as Sizes;
};

// export const ColorProp = {
// 	type: String,
// 	default: 'slate',
// 	validator: (value: string): boolean => {
// 		return [
// 			'amber',
// 			'black',
// 			'blue',
// 			'cyan',
// 			'emerald',
// 			'fuchsia',
// 			'gray',
// 			'green',
// 			'indigo',
// 			'lime',
// 			'neutral',
// 			'orange',
// 			'pink',
// 			'purple',
// 			'red',
// 			'rose',
// 			'sky',
// 			'slate',
// 			'stone',
// 			'teal',
// 			'violet',
// 			'white',
// 			'yellow',
// 			'zinc'].includes(value);
// 	},
// };

// export const Sizes = {
// 	type: String,
// 	default: 'normal',
// 	validator: (value: string): boolean => {
// 		return ['large', 'normal', 'small'].includes(value);
// 	},
// };

// export const InputTypes = {
// 	type: String,
// 	default: 'text',
// 	validator: (value: string): boolean => {
// 		return [
// 			'email',
// 			'number',
// 			'password',
// 			'tel',
// 			'text',
// 			'url'
// 		].includes(value);
// 	},
// };

// export const Positions = {
// 	type: String,
// 	default: 'left',
// 	validator: (value: string): boolean => {
// 		return ['left', 'right'].includes(value);
// 	},
// };



// export const outlineColor: Record<Colors, string> = {
// 	amber: 'outline-amber-300',
// 	black: 'outline-black',
// 	blue: 'outline-blue-300',
// 	cyan: 'outline-cyan-300',
// 	emerald: 'outline-emerald-300',
// 	fuchsia: 'outline-fuchsia-300',
// 	gray: 'outline-gray-300',
// 	green: 'outline-green-300',
// 	indigo: 'outline-indigo-300',
// 	lime: 'outline-lime-300',
// 	neutral: 'outline-neutral-300',
// 	orange: 'outline-orange-300',
// 	pink: 'outline-pink-300',
// 	purple: 'outline-purple-300',
// 	red: 'outline-red-300',
// 	rose: 'outline-rose-300',
// 	sky: 'outline-sky-300',
// 	slate: 'outline-slate-300',
// 	stone: 'outline-stone-300',
// 	teal: 'outline-teal-300',
// 	violet: 'outline-violet-300',
// 	white: 'outline-white',
// 	yellow: 'outline-yellow-300',
// 	zinc: 'outline-zinc-300',
// };
