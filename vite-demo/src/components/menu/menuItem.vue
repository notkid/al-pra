<template>
  <li
    class="el-menu-item"
    role="menuitem"
    :style="[{ backgroundColor }]"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
  >
    <!-- <template> -->
    <slot></slot>
    <slot name="title"></slot>
    <!-- </template> -->
  </li>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  getCurrentInstance,
} from "vue";
import useMenu from "./useMenu";

import { IMenuItemProps, RootMenuProvider } from "./menu";

export default defineComponent({
  name: "AbMenuItem",

  componentName: "AbMenuItem",

  props: {
    index: {
      default: null,
      validator: (val) => typeof val === "string" || val === null,
    },
    disabled: Boolean,
  },
  setup(props: IMenuItemProps, ctx) {
    const instance = getCurrentInstance();

    const rootMenu = inject<RootMenuProvider>("rootMenu");
    const { parentMenu, paddingStyle, indexPath } = useMenu(
      instance,
      props.index
    );
    
    const hoverBackground = computed(() => {
      return rootMenu.hoverBackground.value;
    });
    const backgroundColor = computed(() => {
      console.log(rootMenu);
      return rootMenu.props.backgroundColor || "";
    });
    const mode = computed(() => {
      return rootMenu.props.mode;
    });
    const onMouseEnter = () => {
      if (mode.value === "horizontal" && !rootMenu.props.backgroundColor)
        return;
      instance.vnode.el.style.backgroundColor = hoverBackground.value;
    };
    const onMouseLeave = () => {
      if (mode.value === "horizontal" && !rootMenu.props.backgroundColor)
        return;
      instance.vnode.el.style.backgroundColor = backgroundColor.value;
    };

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit("menuItem:item-click", {
          index: props.index,
          indexPath,
          route: props.route,
        });
        ctx.emit("click", {
          index: props.index,
          indexPath: indexPath.value,
        });
      }
    };
    return {
      props,

      handleClick,
      backgroundColor,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<style>
</style>