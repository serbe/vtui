<script setup script lang="ts">
import VButton from './VButton.vue';
import { stringToColor, stringToSize } from '@/utils/utils';
import { ColorValues, SizeValues } from '@/utils/variables';
</script>

<template>
	<Story title="VButtons">
		<Variant title="Defaults">
			<VButton
				class-name="m-1"
				is-disabled
			>
				Disabled
			</VButton>
			<VButton
				class-name="m-1"
				is-disabled
				is-outlined
			>
				Disabled O
			</VButton>
			<VButton
				class-name="m-1"
				is-upper-case
			>
				UpperCase
			</VButton>
			<VButton
				class-name="m-1"
				is-outlined
				is-upper-case
			>
				UpperCase O
			</VButton>
			<VButton
				class-name="m-1"
				is-fullwidth
			>
				FullWidth
			</VButton>
			<VButton
				class-name="m-1"
				is-fullwidth
				is-outlined
			>
				FullWidth O
			</VButton>
		</Variant>
		<Variant title="Colors">
			<template
				v-for="color in ColorValues"
				:key="color"
			>
				<template
					v-for="size in SizeValues"
					:key="size"
				>
					<VButton
						class-name="mx-1"
						:color="(stringToColor(color))"
						:is-outlined="true"
						:size="stringToSize(size)"
					>
						{{
							`${color} ${size ?? ""} O` }}
					</VButton>
					<VButton
						class-name="mx-1"
						:color="stringToColor(color)"
						:is-outlined="false"
						:size="stringToSize(size)"
					>
						{{
							`${color} ${size ?? ""}` }}
					</VButton>
				</template>
			</template>
		</Variant>
	</Story>
</template>

<!-- import type { Story } from "@ladle/react";

import { useState } from "react";

import type { Colors, Sizes } from "../../utils/variables";
import type { IVButtonProperties } from "./index";

import { ColorValues } from "../../utils/variables";
import { VButton } from "./index";

export const AllVariants = (): JSX.Element => (
    <div className="my-1 flex items-end">
      <VButton className="mx-1">Default</VButton>
      <VButton className="mx-1" isOutlined>
        Default O
      </VButton>
      <VButton className="mx-1" size="small">
        Small
      </VButton>
      <VButton className="mx-1" isOutlined size="small">
        Small O
      </VButton>
      <VButton className="mx-1" size="large">
        Large
      </VButton>
      <VButton className="mx-1" isOutlined size="large">
        Large O
      </VButton>
    </div>

  </div>
);

export const VButtons: Story<IVButtonProperties> = ({
  children,
  className,
  color,
  isDisabled,
  isFullwidth,
  isOutlined,
  isUpperCase,
  size,
}: Readonly<IVButtonProperties>): JSX.Element => {
  const [count, setCount] = useState(0);
  const onClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-end py-1">
        <VButton
          className={className}
          color={color}
          isDisabled={isDisabled}
          isFullwidth={isFullwidth}
          isOutlined={isOutlined}
          isUpperCase={isUpperCase}
          onClick={onClick}
          size={size}
        >
          {children}
        </VButton>
      </div>
      <div className="flex items-end py-1"> Clicks: {count}</div>
    </div>
  );
};

VButtons.args = {
  children: "VButton",
  className: "",
  color: "slate",
  isDisabled: false,
  isFullwidth: false,
  isOutlined: false,
  isUpperCase: false,
  size: "normal",
};

VButtons.argTypes = {
  color: {
    control: { type: "select" },
    defaultValue: "slate",
    options: ColorValues,
  },
  size: {
    control: { type: "select" },
    defaultValue: "normal",
    options: ["small", "normal", "large"],
  },
};
 -->
