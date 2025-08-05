import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPalette } from './ColorPalette';

const meta = {
	title: 'Palette/ColorPalette',
	component: ColorPalette,
} satisfies Meta<typeof ColorPalette>;

export default meta;

type Story = StoryObj<typeof meta>;
export const PaletteList: Story = {};
