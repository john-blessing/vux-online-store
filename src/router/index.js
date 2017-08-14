import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      meta: {
        requiredAuth: false
      },
      component(resolve) {
        require.ensure(
          [],
          _ => resolve(require("../views/HelloFromVux.vue")),
          "index"
        );
      },
      children: [
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "home",
          name: "home",
          meta: {
            requiredAuth: false
          },
          component(resolve) {
            require.ensure(
              [],
              _ => resolve(require("../views/Home.vue")),
              "home"
            );
          }
        },
        {
          path: "classify",
          name: "classify",
          meta: {
            requiredAuth: false
          },
          component(resolve) {
            require.ensure(
              [],
              _ => resolve(require("../views/Classify.vue")),
              "classify"
            );
          }
        },
        {
          path: "me",
          name: "me",
          meta: {
            requiredAuth: true
          },
          component(resolve) {
            require.ensure([], _ => resolve(require("../views/Me.vue")), "me");
          }
        }
      ]
    },
    {
      path: "/cart",
      name: "cart",
      meta: {
        requiredAuth: false
      },
      component(resolve) {
        require.ensure([], _ => resolve(require("../views/Cart.vue")), "cart");
      }
    },
    {
      path: "/login",
      name: "login",
      meta: {
        requiredAuth: false
      },
      component(resolve) {
        require.ensure([], _ => resolve(require("../views/Login.vue")), "login");
      }
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    };
  }
});
