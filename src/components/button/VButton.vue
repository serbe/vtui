<script setup lang="ts">
import { computed, defineProps } from 'vue';
import {
	backgroundColor,
	borderColor,
	textColor,
	type Colors,
	type Sizes
} from '@/utils/variables';
import { twMerge } from 'tailwind-merge';

interface IButtonSize {
	fontSize: string;
	minWidth: string;
	paddingX: string;
}

const buttonSize: Record<Sizes, IButtonSize> = {
	large: {
		fontSize: 'text-base',
		minWidth: 'min-w-[120px]',
		paddingX: 'px-4',
	},
	normal: {
		fontSize: 'text-sm',
		minWidth: 'min-w-[100px]',
		paddingX: 'px-3',
	},
	small: {
		fontSize: 'text-xs',
		minWidth: 'min-w-[80px]',
		paddingX: 'px-2',
	},
};

interface ButtonProps {
	className?: string
	color?: Colors
	isDisabled?: boolean
	isFullwidth?: boolean
	isOutlined?: boolean
	isUpperCase?: boolean
	onClick?: ((payload: MouseEvent) => void)
	size?: Sizes;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	className: undefined,
	color: 'slate',
	onClick: undefined,
	size: 'normal',
});

const click = computed(() => props.isDisabled ? undefined : props.onClick);

const buttonClasses = (): string => {
	const bSize = buttonSize[props.size];

	return twMerge([props.className,
	props.isOutlined ? 'bg-white' : backgroundColor[props.color], borderColor[props.color], 'rounded-md', 'border', 'shadow-md',
		'hover:shadow-lg', 'pb-1.5', 'pt-1', bSize.paddingX, bSize.minWidth, props.isFullwidth ? 'w-full' : '',
	bSize.fontSize, 'font-bold', props.isOutlined ? textColor[props.color] : 'text-white', props.isUpperCase ? 'uppercase' : '',
	]);
};

const buttonClass = computed(() => buttonClasses());

</script>

<template>
	<button class="button" :class="[buttonClass]" data-ripple-light="true" :disabled="props.isDisabled" @click="click">
		<slot />
	</button>
</template>

<style scoped></style>
