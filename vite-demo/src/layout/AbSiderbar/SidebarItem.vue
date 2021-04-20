<template>
  <div>
    <template v-if="hasSingleShowingChild(item.children)">
      <el-menu-item>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else>
      <template #title>
        <span slot="title">{{ item.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
      />
    </el-submenu>
  </div>
</template>

<script>
import ElMenuItem from "../../components/menu/menuItem.vue";
import ElSubMenu from "../../components/menu/submenu.vue";

export default {
  components: { ElMenuItem, ElSubMenu },

  data() {
    return {
      singleChild: null,
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    hasSingleShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.singleChild = item;
          return true;
        }
      });

      // if (showingChildren.length === 1) {
      //   return true;
      // }

      if (showingChildren.length === 0) {
        this.singleChild = { ...parent, path: "" };
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>