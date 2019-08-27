import {defaultRouter, addRouter} from '@/router/index'

const routerData = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    setRouters: (state, routers) => {
      state.addRouters = routers;                               // 保存动态路由用来addRouter/菜单
      defaultRouter[2].children = routers;
      state.routers = defaultRouter;                            // 所有有权限的路由表，用来生成菜单列表--带有前端路由
    } 
  },
  actions: {
    newRoutes ({commit}, role) {
      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect (addRouter, userRole) {
        for (let j = 0; j < addRouter.length; j++) {
          if (addRouter[j].meta && addRouter[j].meta.role.length && addRouter[j].meta.role.indexOf(userRole) === -1) {  //indexof()没有出现返回-1
            addRouter.splice(j, 1)
            j = j !== 0 ? j - 1 : j
          }
          if (addRouter[j].children && addRouter[j].children.length) {
            eachSelect(addRouter[j].children, userRole)  //递归
          }
        }
      }

      // 拷贝这个数组是因为做权限测试的时候可以从低级切回到高级角色，仅限演示，正式开发时省略这步直接使用 addRouter
      // 仅限演示
      // let newArr = [...addRouter]
      // eachSelect(newArr, role)
      // commit('setRouters', newArr)

      // 正式开发
      eachSelect(addRouter, role)
      commit('setRouters', addRouter)
    }
  }
}

export default routerData
