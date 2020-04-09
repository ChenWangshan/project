export default {
    // 用户登录
    login:{
        username:'',
        role:''
    },
	// 公开项目信息
	projects:[],
    // 请求响应状态管理
    requestStatus:{
        // 公开项目
        share: {
            // 'idle' | loading | success | error
            status: 'idle',
            msg: ''
        },
    },
}
