<script setup script lang="ts">
import VButton from './VButton.vue';
import {
	ColorValues,
	type Colors,
	type Sizes
} from '@/utils/variables';
</script>

<template>
	<Story title="VButtons">
		<Variant title="Defaults">
			<VButton className="m-1" isDisabled>
				Disabled
			</VButton>
			<VButton className="m-1" isDisabled isOutlined>
				Disabled O
			</VButton>
			<VButton className="m-1" isUpperCase>
				UpperCase
			</VButton>
			<VButton className="m-1" isOutlined isUpperCase>
				UpperCase O
			</VButton>
			<VButton className="m-1" isFullwidth>
				FullWidth
			</VButton>
			<VButton className="m-1" isFullwidth isOutlined>
				FullWidth O
			</VButton>
		</Variant>
		<Variant title="Colors">
			<template v-for="color in ColorValues">
				<template v-for="size in [undefined, 'small', 'large']">
					<template v-for="outlined in [false, true]">
						<VButton className="mx-1" :color="(color as Colors)" :isOutlined="outlined" :size="(size as Sizes)">{{
							`${color} ${size ?? ""}${outlined ? " O" : ""}` }}</VButton>
					</template>
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
