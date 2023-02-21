<template>
  <app-header />
  <div class="flex flex-row">
    <side-bar />
    <component :is="$route.meta.componentName" :items="bookmarkList" />
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadır</div> -->
  </div>
</template>

<script>
import sideBar from "@/components/Account/sideBar.vue";
// import appHeader from "../components/Shared/appHeader.vue";
export default {
  components: {
    sideBar,
    // appHeader,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_response) => {
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
};
</script>
