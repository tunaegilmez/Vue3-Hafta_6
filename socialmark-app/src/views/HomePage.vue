<template>
  <app-header />
  <div class="flex flex-row">
    <SideBar />
    <app-bookmark-list :items="bookmarkList" />
  </div>
</template>

<script>
import SideBar from "../components/Home/SideBar.vue";
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then((bookmark_list_response) => {
      // console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
};
</script>
