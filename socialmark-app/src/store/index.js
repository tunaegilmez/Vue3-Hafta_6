import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "booklike21!34?",
    likes: [],
  },
  mutations: {
    setUser(state, user) {
      console.log("set user", state, user);
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
    },
    addToLikes(state, bookmarkId) {
      console.log("state.users", state.user);
      state.user.likes.push(bookmarkId);
    },
  },
  getters: {
    _isAuthenticated: (state) => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _userLikes: (state) => {
      console.log(state.user?.likes || [], "_userLikes getters");
      return state.user?.likes || [];
    },
    _userBookmarks: (state) => state.user?.bookmarks || [],
    _currentUserId: (state) => state?.user?.id,
    _saltKey: (state) => state.saltKey,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
