const red = {
	red100: '#B13C36',
	red200: '#864340',
	red300: '#DB261E',
	red400: '#5C3C3B',
	red500: '#332A29',
	red600: '#332B2A',
} as const;
const blue = {
	blue100: '#4B6C8F',
	blue200: '#3B5B7A',
	blue300: '#2D4A66',
	blue400: '#203954',
	blue500: '#162A43',
	blue600: '#0F1C33',
} as const;
const green = {
	green100: '#6B8E5E',
	green200: '#5B7C4F',
	green300: '#4C6B41',
	green400: '#3E5A34',
	green500: '#314A28',
	green600: '#253B1E',
} as const;
const yellow = {
	yellow100: '#D6B85C',
	yellow200: '#C2A84E',
	yellow300: '#AD993F',
	yellow400: '#998A31',
	yellow500: '#857B24',
	yellow600: '#716C18',
} as const;
const purple = {
	purple100: '#A179B7',
	purple200: '#8F67A3',
	purple300: '#7E548F',
	purple400: '#6E427B',
	purple500: '#5E3267',
	purple600: '#4E2353',
} as const;

const black = { black100: '#1A1F1E' } as const;

type Colors = {
	red: typeof red;
	green: typeof green;
	blue: typeof blue;
	yellow: typeof yellow;
	purple: typeof purple;
	black: typeof black;
};

type Theme = {
	colors: Colors;
	typography: unknown;
	size: unknown;
};

export const theme: Theme = {
	colors: { red, green, blue, yellow, purple, black },
	typography: {},
	size: {},
} as const;
