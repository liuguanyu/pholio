!function(){var t=[{path:"/about",component:function(){return createApp.jsonp("58d216d8")},meta:{layout:"default"}},{path:"/error",component:function(){return createApp.jsonp("28f3e54a")},meta:{layout:"error"}},{path:"/",component:function(){return createApp.jsonp("5fc707ae")},meta:{layout:"default"}},{path:"/usage",component:function(){return createApp.jsonp("0861efb2")},meta:{layout:"default"}},{path:"*",redirect:"/error"}];createApp.use({install:function(t){t.prototype.$pages=[{title:"About",path:"/about",layout:"default",TOC:[]},{title:"出错啦",path:"/error",layout:"error",TOC:[]},{title:"首页",path:"/",layout:"default",TOC:[{depth:2,slug:"shuo1-ming2",text:"说明",children:[]},{depth:2,slug:"an1-zhuang1",text:"安装",children:[]},{depth:2,slug:"acknowledgement",text:"Acknowledgement",children:[]}]},{title:"使用 pholio",path:"/usage",layout:"default",TOC:[{depth:2,slug:"chuang4-jian4-ni3-de-wen2-dang4-zhuan1-shu3-mu4-lu4",text:"创建你的文档专属目录",children:[]},{depth:2,slug:"xiang1-guan1-pei4-zhi4-wen2-jian4",text:"相关配置文件",children:[]},{depth:2,slug:"bian1-xie3-bu4-ju2-wen2-jian4",text:"编写布局文件",children:[]},{depth:2,slug:"bian1-xie3-cha1-jian4",text:"编写插件",children:[]},{depth:2,slug:"markdown-wen2-dang4-bian1-xie3",text:"Markdown 文档编写",children:[{depth:3,slug:"front-matters-ji1-ben3-pei4-zhi4",text:"Front Matters: 基本配置"},{depth:3,slug:"ye4-mian4-nei4-bian4-liang2",text:"页面内变量"},{depth:3,slug:"ye4-mian4-nei4-biao1-qian1",text:"页面内标签"}]},{depth:2,slug:"demo-bian1-xie3",text:"Demo  编写",children:[]}]}]}}),createApp({routes:t,mode:"hash",render:function(t){return t("div",{attrs:{id:"root"}},[t("layout-"+(this.$route.meta.layout||"default"))])},data:{}})}();