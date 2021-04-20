<template>
  <el-row>
    <el-col :span="12">
     <siderbar/>
    </el-col>
    <el-col :span="12">
        <ab-siderbar />
      <!-- <ab-menu :default-active="1" background-color="#aac">
        <ab-menu-item index="1">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </ab-menu-item>
      </ab-menu> -->
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import AbMenu from "../components/menu/menu.vue";
import AbMenuItem from "../components/menu/menuItem.vue";
import Siderbar from "../layout/Siderbar/index.vue";
import AbSiderbar from "../layout/AbSiderbar/index.vue";
import { constantRoutes } from "../router";

export default defineComponent({
  name: "HelloWorld",
  components: { AbMenu, AbMenuItem, Siderbar,AbSiderbar },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const menu = constantRoutes;
    return { count, menu };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
