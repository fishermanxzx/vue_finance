import Mock from 'mockjs'
// 登录接口
Mock.mock('localhost:8080/login','post',(req)=>{
   const {username,password} = JSON.parse(req.body)
   if (username==='admin'&& password==='123456'){
        return {
            code:200,
            success:true,
            message:'登录成功',
            token:'asdeithoeq41f24qwat29',
            nickname:'谢梓炫'
        }
   }else{
       return {
        code:100,
        success:false,
        message:'用户名称或者密码有误',

       }
   }
})
// 入职时间
Mock.mock('localhost:8080/in','get',()=>{
    return{
        code:200,
        success:true,
        message:'操作成功',
        time:'2020-07-01 00:00:00'
    }
})
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "账户管理",
        icon: "el-icon-coin",
        url: "/account",
        children: [
            {
                name: "所有人员",
                icon: "el-icon-user",
                url: "/account/all",
            },
            {
                name: "业务人员",
                icon: "el-icon-phone-outline",
                url: "/account/business",
            },
            {
                name: "审核人员",
                icon: "el-icon-s-check",
                url: "/account/audit",
            },
            {
                name: "风控经理",
                icon: "el-icon-s-finance",
                url: "/account/risk",
            },
            {
                name: "管理员",
                icon: "el-icon-s-custom",
                url: "/account/admin",
            }
        ]
    },
    {
        name: "产品管理",
        icon: "el-icon-menu",
        url: "/product",
        children: [
            {
                name: "全部产品",
                icon: "el-icon-notebook-2",
                url: "/product/all",
            },
            {
                name: "汽车消费",
                icon: "el-icon-truck",
                url: "/product/carConsumption",
            },
            {
                name: "房产消费",
                icon: "el-icon-office-building",
                url: "/product/estate",
            },
            {
                name: "抵押贷款",
                icon: "el-icon-money",
                url: "/product/mortgage",
            },
        ]
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [
            {
                name: "所有订单",
                icon: "el-icon-tickets",
                url: "/orders/all",
            },
            {
                name: "新建订单",
                icon: "el-icon-document",
                url: "/orders/create",
            },
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-user",
        url: "/customer",
        children: [
            {
                name: "基本信息",
                icon: "el-icon-chat-square",
                url: "/customer/info",
            },
            {
                name: "资金记录",
                icon: "el-icon-bank-card",
                url: "/record",
            },
        ]
    },
    {
        name: "待办事项",
        icon: "el-icon-chat-dot-square",
        url: "/todo",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",
    }
]
//左侧菜单接口
Mock.mock('localhost:8080/menu', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: menuList
    }
});