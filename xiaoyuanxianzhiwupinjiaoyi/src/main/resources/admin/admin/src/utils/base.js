const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanxianzhiwupinjiaoyi/",
            name: "xiaoyuanxianzhiwupinjiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanxianzhiwupinjiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园闲置物品交易系统"
        } 
    }
}
export default base
