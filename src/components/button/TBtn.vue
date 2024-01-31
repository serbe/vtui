<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import { classNames, classToString } from '@/utils/class-names';
import { backgroundColor,
	borderColor,
	textColor,
	type Colors,
	type IClassName,
	type Sizes } from '@/utils/variables';

export interface Props {
	className?: string
	color?: Colors
	isDisabled?: boolean
	isFullwidth?: boolean
	isOutlined?: boolean
	isUpperCase?: boolean
	onClick?: ((payload: MouseEvent) => void)
	size?: Sizes;
}

const props = withDefaults(defineProps<Props>(), {
	className: undefined,
	color: 'slate',
	// isDisabled,
	// isFullwidth = false,
	// isOutlined = false,
	// isUpperCase = false,
	onClick: undefined,
	size: 'normal',
});

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

const buttonClasses = (): IClassName => {
	const bSize = buttonSize[props.size];

	return {
		background: {
			color: props.isOutlined ? 'bg-white' : backgroundColor[props.color],
		},
		border: {
			borderColor: borderColor[props.color],
			borderRadius: 'rounded-md',
			borderWidth: 'border',
		},
		effect: {
			boxShadow: 'shadow-md',
		},
		hover: {
			effect: {
				boxShadow: 'hover:shadow-lg',
			},
		},
		padding: {
			bottom: 'pb-1.5',
			top: 'pt-1',
			x: bSize.paddingX,
		},
		size: {
			minWidth: bSize.minWidth,
			width: props.isFullwidth ? 'w-full' : undefined,
		},
		typography: {
			fontSize: bSize.fontSize,
			fontWeight: 'font-bold',
			textColor: props.isOutlined ? textColor[props.color] : 'text-white',
			textTransform: props.isUpperCase ? 'uppercase' : undefined,
		},
	};
};

const click = computed(() => props.isDisabled ? undefined : props.onClick);

const buttonClass = computed(() => classNames(props.className, classToString(buttonClasses())));

</script>

<template>
	<button
		class="button"
		:class="[buttonClass]"
		data-ripple-light="true"
		:disabled="props.isDisabled"
		@click="click"
	>
		>
		<slot name="left-icon" />
		<slot />
		<slot name="right-icon" />
	</button>
</template>

<style scoped>

</style>
