/**
 * 所有action类型常量
 */
export default {
    // 项目管理的action type
    projects:{
        /***********  saga action types 集合************/
        // 查询用户所拥有的项目
        PROJECTS_GET_SAGA: 'PROJECTS_GET_SAGA',

        /*********** redux action types 集合 ************/
        // 将用户的项目列表存入store中
        PROJECTS_GET_REDUX: 'PROJECTS_GET_REDUX',
    },
    // 请求响应状态管理
    requestStatus:{
        /*********** redux action types  ************/
        // 项目信息加载状态
        PROJECTS_LOADING_REDUX: 'PROJECTS_LOADING_REDUX',
    },
}
