<!-- <script setup lang="ts">

import { Component } from "vue";
import type {
	Colors,
	IClassName,
	IInputTypes,
	Sizes,
} from "../../utils/variables";

import {
	backgroundColor,
	focusBorderColor,
	focusOutlineColor,
	hoverBorderColor,
	hoverOutlineColor,
	placeholderTextColor,
} from "../../utils/variables";

interface InputProps {
	autocomplete?: string;
	bgColor?: Colors;
	className?: string;
	color?: Colors;
	divClassName?: string;
	icon?: Component;
	isDisabled?: boolean;
	isFullwidth?: boolean;
	isOutlined?: boolean;
	isReadOnly?: boolean;
	label?: string;
	name: string;
	// onBlur?: FocusEventHandler<HTMLInputElement>;
	onChange: (value: number | string) => void;
	// onClick?: MouseEventHandler<HTMLInputElement>;
	placeholder?: string;
	size?: Sizes;
	type?: IInputTypes;
	value: number | string;
	width?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
	size: "normal",
	type: "text",
}

</script>

<template>
	<div :class=[divClassNames]>
      <Label />
      <Icon />
      <input
        autoComplete={autocomplete}
        className={inputClassNames}
        disabled={isDisabled}
        id={name}
        key={name}
        onBlur={onBlur}
        onChange={handleInputChange}
        onClick={onClick}
        placeholder={placeholder}
        readOnly={isReadOnly}
        ref={inputReference}
        type={type}
        value={inputValue}
      />
    </div>
</template> -->
