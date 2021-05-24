import router from './index.js'
import {getToken} from '../utils/auth.js'
router.beforeEach((to,from,next)=>{
    const hasToken = getToken()
    if(hasToken){
        if(to.path==='/login'){
            next(false)
        }else{
            next()
        }
    }else{
        if(to.path==='/login'){
            next()
        }else{
            next('/login')
        }
    }
})