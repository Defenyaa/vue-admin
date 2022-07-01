## vue-element-admin通用权限管理系统开发实战（前端篇）

#### 第00讲 课程介绍与项目演示

###### 1.技术要点

html、css3、js、vue基础

###### 2.适合人群

有html、css3、js、vue基础，想学习vue-element-admin开发后台管理系统的在校大学生、工作人员；

想学习如何实现动态菜单、动态路由、按钮权限的在职人员；

###### 3.学习收获

​	1.学会使用vue-element-admin搭建后台系统；

​	2.vue-element-admin登录源码、权限权限验证流程分析；

​	3.vue动态菜单、动态路由、按钮权限实现原理，代码实现；

​	4.通用弹框、tree组件优化、页面优化、通用axios封装、restful api支持封装；

​	5.前后端分离中的token(JWT)验证、token过期的自动续期处理；

​	6.阿里图标的使用、页面优化；

​	7.全程手把手带领写代码，最终从0到1打造属于自己的实战项目；

#### 第01讲  vue-element-admin下载与运行

###### 1.官网下载地址

```js
官网地址  https://panjiachen.gitee.io/vue-element-admin-site/zh/

git下载地址  git clone https://github.com/PanJiaChen/vue-element-admin.git

```



**说明：如果没有安装git，可以在浏览器打开地址 https://github.com/PanJiaChen/vue-element-admin，进入如下界面，点击Code,在展开的项目中选择Download ZIP下载源码。**



![](D:\vue-element-admin\授课资料\images\源码下载.png)



###### 2.运行项目

```js
运行项目前请安装git 和python2.x版本
```

进入到项目 vue-element-admin目录下，执行如下命令

```js
//安装项目的依赖
npm install

//运行项目
npm run dev
```



###### 3.安装报错

```js
1.  unable to access 'https://github.com/nhn/raphael.git/': OpenSSL SSL_read: Connection was reset, errno 10054
	解决方式有两种：
	方法一：键盘win + r ,输入cmd，进入到命令行输入   git config --global http.sslVerify "false"  然后执行  npm install 
    方法二：进入到vue-element-admin目录下，右键，打开git命令窗口输入  npm install 
    
2.C:\Program Files\Git\cmd\git.EXE ls-remote -h -t git://github.com/adobe-webplatform/eve.git
	执行命令  git config --global url."https://".insteadOf git://

3.C:\Program Files\Git\cmd\git.EXE ls-remote -h -t ssh://git@github.com/sohee-lee7/Squire.git
```



<span style="color:#FF7670;font-size:18px;">注意事项</span>

```js
1.强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。

2.Windows 用户若安装不成功，很大概率是node-sass安装失败，解决方案。
	https://github.com/PanJiaChen/vue-element-admin/issues/24

3.因为 node-sass 是依赖 python环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。

4.安装git

安装失败找不到解决方式时，请认真看官网issues：
https://github.com/PanJiaChen/vue-element-admin/issues
```



#### 第02讲 vue-element-admin项目目录介绍

######  1.env配置文件

```java
1、.env.development : 开发环境下的配置文件
2、.env.production ：生产环境下的配置文件
3、关于文件中的内容：必须以VUE_APP_开头
4、关于文件的加载：根据文件名进行加载
5、执行npm run serve 或者 npm run dev 会加载可能存在的 .env ,.env.development , .env.development.local 文件
6、执行npm run build 会加载可能存在的 .env , .env.production , .env.production.local 文件
7、注意：.env 全局默认配置文件，不论什么环境都会加载合并。并且修改配置文件需要重启项目才能生效。
```

<span style="color:red;">注意：属性名必须以VUE_APP_开头，比如VUE_APP_XXX</span>

###### 2.editorconfig配置文件

2.1editorconfig是什么？

editorconfig是用来帮助开发者定义和维护代码风格（行尾结束符、缩进风格等）的东西

如何在vscode中使用editorconfig？

- 在当前项目根目录下添加.editorconfig文件
- 安装EditorConfig扩展（怎么安装扩展哈？纳尼？打开百度或google，输入vscode 安装扩展 | vscode install extension；好了，不能再提示了）
- 全局安装或局部安装editorconfig依赖包(npm install -g editorconfig | npm install -D editorconfig)
- 打开需要格式化的文件并手动格式化代码（shift+alt+f）

###### 3.配置文件

```javascript
# https://editorconfig.org

#表明是最顶层的配置文件
root = true

# 对所有文件生效
[*]
# 设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom
charset = utf-8
#设置缩进风格(tab是硬缩进，space为软缩进)
indent_style = space
#用一个整数定义的列数来设置缩进的宽度
#使用空格替代tab，并且一个tab会被替换为4个空格
indent_size = 4
#设置换行符，值为lf、cr和crlf
end_of_line = lf
# 结尾插入新行
insert_final_newline = true
#设为true表示会去除结尾空格。
trim_trailing_whitespace = true

# 对后缀名为 md 的文件生效
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false

```

###### 4.eslintignore配置文件

```java
主要作用是忽略哪些文件的语法检查
    
build/*.js  //表示忽略build目录下类型为js的文件的语法检查
src/assets  
public
dist
```

###### 5.eslintrc.js配置文件

主要用于语法检测

```javascript
"no-alert": 0,//禁止使用alert confirm prompt
"no-array-constructor": 2,//禁止使用数组构造器
"no-bitwise": 0,//禁止使用按位运算符
"no-caller": 1,//禁止使用arguments.caller或arguments.callee
"no-catch-shadow": 2,//禁止catch子句参数与外部作用域变量同名
"no-class-assign": 2,//禁止给类赋值
"no-cond-assign": 2,//禁止在条件表达式中使用赋值语句
"no-console": 2,//禁止使用console
"no-const-assign": 2,//禁止修改const声明的变量
"no-constant-condition": 2,//禁止在条件中使用常量表达式 if(true) if(1)
"no-continue": 0,//禁止使用continue
"no-control-regex": 2,//禁止在正则表达式中使用控制字符
"no-debugger": 2,//禁止使用debugger
"no-delete-var": 2,//不能对var声明的变量使用delete操作符
"no-div-regex": 1,//不能使用看起来像除法的正则表达式/=foo/
"no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
"no-dupe-args": 2,//函数参数不能重复
"no-duplicate-case": 2,//switch中的case标签不能重复
"no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
"no-empty": 2,//块语句中的内容不能为空
"no-empty-character-class": 2,//正则表达式中的[]内容不能为空
"no-empty-label": 2,//禁止使用空label
"no-eq-null": 2,//禁止对null使用==或!=运算符
"no-eval": 1,//禁止使用eval
"no-ex-assign": 2,//禁止给catch语句中的异常参数赋值
"no-extend-native": 2,//禁止扩展native对象
"no-extra-bind": 2,//禁止不必要的函数绑定
"no-extra-boolean-cast": 2,//禁止不必要的bool转换
"no-extra-parens": 2,//禁止非必要的括号
"no-extra-semi": 2,//禁止多余的冒号
"no-fallthrough": 1,//禁止switch穿透
"no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
"no-func-assign": 2,//禁止重复的函数声明
"no-implicit-coercion": 1,//禁止隐式转换
"no-implied-eval": 2,//禁止使用隐式eval
"no-inline-comments": 0,//禁止行内备注
"no-inner-declarations": [2, "functions"],//禁止在块语句中使用声明（变量或函数）
"no-invalid-regexp": 2,//禁止无效的正则表达式
"no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量
"no-irregular-whitespace": 2,//不能有不规则的空格
"no-iterator": 2,//禁止使用__iterator__ 属性
"no-label-var": 2,//label名不能与var声明的变量名相同
"no-labels": 2,//禁止标签声明
"no-lone-blocks": 2,//禁止不必要的嵌套块
"no-lonely-if": 2,//禁止else语句内只有if语句
"no-loop-func": 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
"no-mixed-requires": [0, false],//声明时不能混用声明类型
"no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
"linebreak-style": [0, "windows"],//换行风格
"no-multi-spaces": 1,//不能用多余的空格
"no-multi-str": 2,//字符串不能用\换行
"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
"no-native-reassign": 2,//不能重写native对象
"no-negated-in-lhs": 2,//in 操作符的左边不能有!
"no-nested-ternary": 0,//禁止使用嵌套的三目运算
"no-new": 1,//禁止在使用new构造一个实例后不赋值
"no-new-func": 1,//禁止使用new Function
"no-new-object": 2,//禁止使用new Object()
"no-new-require": 2,//禁止使用new require
"no-new-wrappers": 2,//禁止使用new创建包装实例，new String new Boolean new Number
"no-obj-calls": 2,//不能调用内置的全局对象，比如Math() JSON()
"no-octal": 2,//禁止使用八进制数字
"no-octal-escape": 2,//禁止使用八进制转义序列
"no-param-reassign": 2,//禁止给参数重新赋值
"no-path-concat": 0,//node中不能使用__dirname或__filename做路径拼接
"no-plusplus": 0,//禁止使用++，--
"no-process-env": 0,//禁止使用process.env
"no-process-exit": 0,//禁止使用process.exit()
"no-proto": 2,//禁止使用__proto__属性
"no-redeclare": 2,//禁止重复声明变量
"no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
"no-restricted-modules": 0,//如果禁用了指定模块，使用就会报错
"no-return-assign": 1,//return 语句中不能有赋值表达式
"no-script-url": 0,//禁止使用javascript:void(0)
"no-self-compare": 2,//不能比较自身
"no-sequences": 0,//禁止使用逗号运算符
"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
"no-shadow-restricted-names": 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
"no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
"no-sparse-arrays": 2,//禁止稀疏数组， [1,,2]
"no-sync": 0,//nodejs 禁止同步方法
"no-ternary": 0,//禁止使用三目运算符
"no-trailing-spaces": 1,//一行结束后面不要有空格
"no-this-before-super": 0,//在调用super()之前不能使用this或super
"no-throw-literal": 2,//禁止抛出字面量错误 throw "error";
"no-undef": 1,//不能有未定义的变量
"no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
"no-undefined": 2,//不能使用undefined
"no-unexpected-multiline": 2,//避免多行表达式
"no-underscore-dangle": 1,//标识符不能以_开头或结尾
"no-unneeded-ternary": 2,//禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
"no-unreachable": 2,//不能有无法执行的代码
"no-unused-expressions": 2,//禁止无用的表达式
"no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
"no-use-before-define": 2,//未定义前不能使用
"no-useless-call": 2,//禁止不必要的call和apply
"no-void": 2,//禁用void操作符
"no-var": 0,//禁用var，用let和const代替
"no-warning-comments": [1, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],//不能有警告备注
"no-with": 2,//禁用with
"array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
"arrow-parens": 0,//箭头函数用小括号括起来
"arrow-spacing": 0,//=>的前/后括号
"accessor-pairs": 0,//在对象中使用getter/setter
"block-scoped-var": 0,//块语句中使用var
"brace-style": [1, "1tbs"],//大括号风格
"callback-return": 1,//避免多次调用回调什么的
"camelcase": 2,//强制驼峰法命名
"comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
"comma-spacing": 0,//逗号前后的空格
"comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
"complexity": [0, 11],//循环复杂度
"computed-property-spacing": [0, "never"],//是否允许计算后的键名什么的
"consistent-return": 0,//return 后面是否允许省略
"consistent-this": [2, "that"],//this别名
"constructor-super": 0,//非派生类不能调用super，派生类必须调用super
"curly": [2, "all"],//必须使用 if(){} 中的{}
"default-case": 2,//switch语句最后必须有default
"dot-location": 0,//对象访问符的位置，换行的时候在行首还是行尾
"dot-notation": [0, { "allowKeywords": true }],//避免不必要的方括号
"eol-last": 0,//文件以单一的换行符结束
"eqeqeq": 2,//必须使用全等
"func-names": 0,//函数表达式必须有名字
"func-style": [0, "declaration"],//函数风格，规定只能使用函数声明/函数表达式
"generator-star-spacing": 0,//生成器函数*的前后空格
"guard-for-in": 0,//for in循环要用if语句过滤
"handle-callback-err": 0,//nodejs 处理错误
"id-length": 0,//变量名长度
"indent": [2, 4],//缩进风格
"init-declarations": 0,//声明时必须赋初值
"key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
"lines-around-comment": 0,//行前/行后备注
"max-depth": [0, 4],//嵌套块深度
"max-len": [0, 80, 4],//字符串最大长度
"max-nested-callbacks": [0, 2],//回调嵌套深度
"max-params": [0, 3],//函数最多只能有3个参数
"max-statements": [0, 10],//函数内最多有几个声明
"new-cap": 2,//函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
"new-parens": 2,//new时必须加小括号
"newline-after-var": 2,//变量声明后是否需要空一行
"object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
"object-shorthand": 0,//强制对象字面量缩写语法
"one-var": 1,//连续声明
"operator-assignment": [0, "always"],//赋值运算符 += -=什么的
"operator-linebreak": [2, "after"],//换行时运算符在行尾还是行首
"padded-blocks": 0,//块语句内行首行尾是否要空行
"prefer-const": 0,//首选const
"prefer-spread": 0,//首选展开运算
"prefer-reflect": 0,//首选Reflect的方法
"quotes": [1, "single"],//引号类型 `` "" ''
"quote-props":[2, "always"],//对象字面量中的属性名是否强制双引号
"radix": 2,//parseInt必须指定第二个参数
"id-match": 0,//命名检测
"require-yield": 0,//生成器函数必须有yield
"semi": [2, "always"],//语句强制分号结尾
"semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
"sort-vars": 0,//变量声明时排序
"space-after-keywords": [0, "always"],//关键字后面是否要空一格
"space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
"space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
"space-in-parens": [0, "never"],//小括号里面要不要有空格
"space-infix-ops": 0,//中缀操作符周围要不要有空格
"space-return-throw-case": 2,//return throw case后面要不要加空格
"space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
"spaced-comment": 0,//注释风格要不要有空格什么的
"strict": 2,//使用严格模式
"use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
"valid-jsdoc": 0,//jsdoc规则
"valid-typeof": 2,//必须使用合法的typeof的值
"vars-on-top": 2,//var必须放在作用域顶部
"wrap-iife": [2, "inside"],//立即执行函数表达式的小括号风格
"wrap-regex": 0,//正则表达式字面量用小括号包起来
"yoda": [2, "never"]//禁止尤达条件
```



#### 第03讲 登录流程讲解



###### 1.登录流程图

<img style="margin-left:10px;" src="D:\course\vue-element-admin\element-admin\admin-images\登录流程图.png"  />



###### 2.登录代码解析:

```javascript
1、用户进入登录页，即工程的 src/views/login/index.vue ,点击 login按钮，调用handleLogin()方法，如下所示：
	//登录表单提交的方式
    handleLogin() {
          //表单验证，验证通过才会向下执行
          this.$refs.loginForm.validate(valid => {
            //如果验证通过
            if (valid) {
              this.loading = true
              //该行的意思是调用工程src/store/user中的login方法
              this.$store.dispatch('user/login', this.loginForm)
                .then(() => {
                  this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                  this.loading = false
                })
                .catch(() => {
                  this.loading = false
                })
            } else {
              console.log('error submit!!')
              return false
            }
          })
}

2、登录调用的store   即src/store/user.js
  //登录成功，保存token
  login({ commit }, userInfo) {
    //从userInfo中解构出username和password
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      //调用工程中api/user中的login方法
      login({ username: username.trim(), password: password }).then(response => {
        //从response中解构出返回的数据data
        const { data } = response
        //设置返回的token到store中，作为全局变量
        commit('SET_TOKEN', data.token)
        //保存登录返回的token到cookie中
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
}

3、store中调用的login,  即工程中api/user中的login方法，此处主要是通过utils/request的axios发送请求到后端获取token
    //注意，这里调用的是mock数据，非真实的后端接口数据
	//mock数据在工程的 mock/user.js里面，这里的token是写死的
    export function login(data) {
        return request({
            url: '/vue-element-admin/user/login',
            method: 'post',
            data
    })
}
```

###### 3.登录总结

```java
登录主要做的事情就是，根据用户名和密码，发送请求到后端获取token，然后把token存储到store和cookie里面
```



#### 第04讲 权限验证流程讲解

###### 1.权限验证流程图

![](D:\vue-element-admin\授课资料\images\权限验证流程图.png)



#### 第05讲 登录页面制作

###### 1.页面效果

![](D:\vue-element-admin\授课资料\images\登录页面最终效果.png)

###### 2.实现代码

```html
<template>
  <div class="logincontiner">
    <el-form
      :model="userForm"
      ref="userForm"
      :inline="false"
      size="medium"
      class="loginForm"
    >
      <el-form-item>
        <div class="loginTitle">系统登录</div>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入用户名"
          v-model="userForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入密码"
          v-model="userForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-input
              v-model="userForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col :span="8">
            <!-- <img class="codeimg"> -->
            <el-input placeholder="请输入验证码" readonly></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-button type="primary" size="default" class="btn"
              >登录</el-button
            >
          </el-col>
          <el-col :span="12">
            <el-button size="default" class="btn">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        username: "",
        password: "",
        code: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.logincontiner {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    height: 350px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 25px #cac6c6;
    padding: 20px 35px;
    .loginTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 24px;
    }
    .codeimg {
      border: 1px solid #dcdfe6;
      cursor: pointer;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
```

###### 3.安装vs code快捷插件

​	3.1安装    Vue VSCode Snippets

找到插件，点击install进行安装

![](D:\vue-element-admin\授课资料\images\vue快捷键.png)



​	3.2安装  Element UI Snippets

主要用于element ui 代码快速生成

![](D:\vue-element-admin\授课资料\images\element-ui插件.png)



#### 第06讲 登录表单验证讲解

###### 1.1、表单非空验证

​	在不输入用户号码、密码、验证码的情况下，不能提交表单

###### 1.2、验证规则

在data里面加入表单验证规则

```js
//登录验证规则
      rules:{
        username:[
          {
            required:true,
            trigger:'change',
            message:'请输入用户名'
          }
        ],
        password:[
          {
            required:true,
            trigger:'change',
            message:'请输入密码'
          }
        ],
        code:[
          {
            required:true,
            trigger:'change',
            message:'请输入验证码'
          }
        ]
      }
```

###### 1.3绑定规则

​	1.3.1在el-form上绑定表单验证规则  :rules="rules"

​	1.3.2在el-form-item 上添加  prop="表单数据域绑定的字段"



###### 1.4登录表单验证完整代码

```js
<template>
  <div class="logincontainer">
    <el-form
      class="loginForm"
      :model="loginForm"
      ref="loginForm"
      :inline="false"
      size="normal"
      :rules="rules"
    >
      <el-form-item label="" size="normal">
        <div class="loginTitle">系统登录</div>
      </el-form-item>
      <el-form-item label="" prop="usernamne">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code" label="" size="normal">
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-input v-model="loginForm.code"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="" size="normal">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-button class="btn" @click="handlerLogin" type="primary" size="default"
              >登录</el-button
            >
          </el-col>
          <el-col :span="12" :offset="0">
            <el-button class="btn" type="default" size="default"
              >取消</el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  //存储数据的地方，页面需要展示的数据，需要显示的放到data里面
  data() {
    return {
      //存储登录表单数据的地方，是双向数据绑定
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
      },
      //登录验证规则
      rules:{
        username:[
          {
            required:true,
            trigger:'change',
            message:'请输入用户名'
          }
        ],
        password:[
          {
            required:true,
            trigger:'change',
            message:'请输入密码'
          }
        ],
        code:[
          {
            required:true,
            trigger:'change',
            message:'请输入验证码'
          }
        ]
      }
    };
  },
  methods:{
    handlerLogin(){
      //表单验证
      this.$refs.loginForm.validate(valid =>{
        console.log(valid)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.logincontainer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginForm {
    width: 450px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 0 0 25px #cac6c6;
    padding: 20px 35px;
    .loginTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
```



#### 第07讲 登录接口对接

###### 1.如果后端不支持跨域，修改vue.config.js文件

```java
devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // before: require('./mock/mock-server.js')
        //代理配置
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: "http://localhost:8089/api",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
```

###### 2修改mian.js

```java
注释下面的代码

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
```

###### 3修改utils里面的request.js

先按照 qs插件，用于将参数序列化

```js 
npm install qs
```



```js
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log(config)
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

//请求方法
const http = {
  post(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  put(url, params) {
    return service.put(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  get(url, params) {
    return service.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params)
      }
    })
  },
  getRestApi(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        console.log(key)
        console.log(params[key])
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    console.log(_params)
    if (_params) {
      return service.get(`${url}${_params}`)
    } else {
      return service.get(url)
    }
  },
  delete(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    if (_params) {
      return service.delete(`${url}${_params}`).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    } else {
      return service.delete(url).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    }
  },
  upload(url, params) {
    return service.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  login(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return qs.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
export default http

```

###### 4修改api/user.js的登录方法

```js
//用户登录
export async function login(data) {
  return await http.login("/api/user/login",data)
}
```

5修改.env.development和.env.production请求地址

```js
# base api
VUE_APP_BASE_API = 'http://42.193.158.170:8089/'
```



#### 第08讲 用户信息和权限信息获取

后端接口请求地址  http://42.193.158.170:8089/swagger-ui/index.html

###### 前言

![](D:\vue-element-admin\授课资料\images\权限验证流程图.png)



###### 1.用户信息和权限信息

​	通过分析vue-element-admin权限验证流程，在权限验证中，如果权限信息不存在，会从服务器获取用户信息；其中**用户信息中包含了用户的权限信息**



###### 2.用户信息和权限信息数据格式

 通过在vue-element-admin项目中的mock/user.js中的mock数据，可以得知用户信息的格式如下所示：

```js
 {
    roles: ['admin'],  //用户拥有的权限信息集合，必须是一个数组
    introduction: 'I am a super administrator',   //用户介绍
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',  //用户头像
    name: 'Super Admin'  //用户名称
  }
```

**其中，roles也是按钮权限判断的依据**



###### 3.代码实操

​	3.1在 api/user.js中把原有的 getInfo()方法，改为如下所示代码：

```js
//获取用户信息和权限信息
export async function getInfo(){
  return await http.get("/api/sysUser/getInfo",null)
}
```

​	3.2在views/Login.vue中的handleLogin()方法中添加登录成功路由跳转路径

```js
//登录提交事件
    handlerLogin() {
      this.$refs.loginForm.validate((valid) => {
        //2.如果表单验证通过
        if (valid) {
          this.loading = true;
          //3.调用登录
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
```

​	3.3进入登录页面，输入用户名和密码

出现如下所示的错误，出现token验证失败

![](D:\vue-element-admin\授课资料\images\token验证失败.png)

3.4解决方式

**由于我们的后端接口，需要携带token进行请求，所以，我们需要在请求的头部添加token进行服务端的请求**

在src/utils下找到 request.js文件，从utis/auth下引入获取token的方法，然后在 axios发送请求之前，把我们的token添加到请求的头部Headers里面，如下代码所示：

```js
import { getToken } from '@/utils/auth'


service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log(config)
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      //给请求的头部添加token
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
```

3.5登录，返回如下所示格式的数据

**注意：roles必须是一个数组**

```js
{
    "msg": "查询成功!",
    "code": 200,
    "data": {
        "id": 9,
        "name": "张三丰",
        "avatar": null,
        "introduction": null,
        "roles": [
            "sys:user:delete",
            "sys:role:add",
            "sys:menu:edit",
            "sys:user:add",
            "sys:role:edit",
            "sys:menu:delete",
            "sys:user:edit",
            "sys:role:delete",
            "sys:menu:add",
            "sys:document",
            "sys:role:assign",
            "sys:addDepartment",
            "sys:user:assign",
            "sys:systemCode",
            "sys:addGoodsCategory",
            "sys:editGoodsCategory",
            "sys:editDept",
            "sys:goodsCategory",
            "sys:manage",
            "sys:goods",
            "sys:goodsBrand",
            "sys:dept",
            "sys:user",
            "sys:systenConfig",
            "sys:deleteDept",
            "sys:role",
            "sys:menu"
        ]
    }
}
```



#### 第09讲 菜单数据动态获取

###### 前言

![](D:\vue-element-admin\授课资料\images\权限验证流程图.png)



###### 1.什么是菜单数据动态获取

```js
通过axios发送请求到服务端动态的获取菜单数据
```



###### 2.动态获取菜单数据的原因

```js
通常情况下，我们系统菜单，会随着功能模块的增加，菜单模块数据也在增加；如果写死在前端，每次增加模块功能，都需要重新上传前端代码；
其次，不同的用户，所拥有的菜单权限也是不同的，根据不同的用户，服务器动态的返回不同的菜单权限；
```



###### 3.vue-element-admin菜单改造分析

通过权限验证流程分析，如果用户权限信息不存在的时候，需要重新从服务器获取菜单信息;

通过官网  https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/router-and-nav.html#%E9%85%8D%E7%BD%AE%E9%A1%B9菜单配置项地址，可以知道，后端返回的数据格式如下所示:

```js
{
  path: '/permission',
  component: Layout,
  alwaysShow: true, //一直显示根路由
  meta: { roles: ['admin','editor'] }, //你可以在根路由设置权限，这样它下面所有的子路由都继承了这个权限
  children: [{
    path: 'index',
    component: ()=>import('permission/index'),
    name: 'permission',
    meta: {
      title: 'permission',
      icon: 'lock', //图标
      roles: ['admin','editor'] //或者你可以给每一个子路由设置自己的权限
    }
  }]
}
```



###### 4.代码实操

​	4.1在api/user.js中添加getMenuList()方法，用于从服务器获取菜单数据

```js
//获取菜单
export async function getMenuList() {
    return await http.get("/api/sysUser/getMenuList",null)
}
```

​	4.2找到store/modules目录下的permission.js的generateRoutes方法

```js
const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      //存的是有权限的路由，是一个数组
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
```

修改为如下所示的代码

```js
import { getMenuList } from '@/api/user'

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            let accessedRoutes
            //获取菜单数据
            getMenuList().then(response => {
                accessedRoutes = filterAsyncRoutes(response.data, roles)
                //存储菜单数据到store
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
```

​	4.3返回如下所示格式数据

```js
{
    "msg": "菜单查询成功！",
    "code": 200,
    "data": [
        {
            "path": "/system",
            "component": "Layout",
            "alwaysShow": true,
            "name": "system",
            "meta": {
                "title": "系统管理",
                "icon": "component",
                "roles": [
                    "sys:manage"
                ]
            },
            "children": [
                {
                    "path": "department",
                    "component": "/system/department/department",
                    "alwaysShow": false,
                    "name": "department",
                    "meta": {
                        "title": "机构管理",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:dept"
                        ]
                    }
                },
                {
                    "path": "userList",
                    "component": "/system/User/UserList",
                    "alwaysShow": false,
                    "name": "userList",
                    "meta": {
                        "title": "用户管理",
                        "icon": "icon",
                        "roles": [
                            "sys:user"
                        ]
                    }
                },
                {
                    "path": "roleList",
                    "component": "/system/Role/RoleList",
                    "alwaysShow": false,
                    "name": "roleList",
                    "meta": {
                        "title": "角色管理",
                        "icon": "peoples",
                        "roles": [
                            "sys:role"
                        ]
                    }
                },
                {
                    "path": "menuList",
                    "component": "/system/Menu/MenuList",
                    "alwaysShow": false,
                    "name": "menuList",
                    "meta": {
                        "title": "权限管理",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:menu"
                        ]
                    }
                }
            ]
        },
        {
            "path": "/goods",
            "component": "Layout",
            "alwaysShow": true,
            "name": "goods",
            "meta": {
                "title": "商品管理",
                "icon": "el-icon-document",
                "roles": [
                    "sys:goods"
                ]
            },
            "children": [
                {
                    "path": "goodCategory",
                    "component": "/goods/goodsCategory/goodsCategoryList",
                    "alwaysShow": false,
                    "name": "goodCategory",
                    "meta": {
                        "title": "分类管理",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:goodsCategory"
                        ]
                    }
                },
                {
                    "path": "goodsBrand",
                    "component": "/goods/goodsBrand/goodsBrandList",
                    "alwaysShow": false,
                    "name": "goodsBrand",
                    "meta": {
                        "title": "品牌管理",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:goodsBrand"
                        ]
                    }
                }
            ]
        },
        {
            "path": "/systenConfig",
            "component": "Layout",
            "alwaysShow": true,
            "name": "systenConfig",
            "meta": {
                "title": "系统工具",
                "icon": "el-icon-document",
                "roles": [
                    "sys:systenConfig"
                ]
            },
            "children": [
                {
                    "path": "document",
                    "component": "/system/config/systemDocument",
                    "alwaysShow": false,
                    "name": "document",
                    "meta": {
                        "title": "接口文档",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:document"
                        ]
                    }
                },
                {
                    "path": "systemCode",
                    "component": "/system/config/code",
                    "alwaysShow": false,
                    "name": "systemCode",
                    "meta": {
                        "title": "日志管理",
                        "icon": "el-icon-document",
                        "roles": [
                            "sys:systemCode"
                        ]
                    }
                }
            ]
        }
    ]
}
```



#### 第10讲 动态路由生成讲解

###### 1、使用动态路由的原因

​      由于系统左侧菜单是根据不同用户，拥有不同的菜单，所以左侧菜单和路由是动态的生成的

###### 2、实现原理

​		利用 vue-router 的 `addRoutes` 方法可以动态添加路由 ，router.addRoutes(routes: Array<RouteConfig>)，动态添加路由，参数必是一个符合 `routes` 选项要求的数组

###### 3、代码实操

​	3.1在views下新建路由页面

​	3.2修改store/modules下的permission.js中的  generateRoutes() 和 filterAsyncRoutes()方法如下所示：

**此处需要注意，不要忘记引入   import Layout from '@/layout'**

```js
import Layout from '@/layout'


/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 *  过滤出所有有权限的菜单
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []
    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            const component = tmp.component
            if (route.component) {
                if (component == 'Layout') {
                    tmp.component = Layout
                } else {
                    tmp.component = (resolve) => require([`@/views${component}.vue`], resolve)
                }
            }
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}
 

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            let accessedRoutes
            //获取菜单数据
            getMenuList().then(response => {
                accessedRoutes = filterAsyncRoutes(response.data, roles)
                //存储菜单数据到store
                commit('SET_ROUTES', accessedRoutes)
                resolve(accessedRoutes)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
```



#### 第11讲 swagger-ui接口文档内嵌到页面

#### 第12讲 机构管理列表制作讲解

###### 效果展示

![](D:\vue-element-admin\授课资料\images\机构列表.png)

###### 1.什么是机构

一个公司，下面有多个部门，每个部门下面可能还有下级部门，这些部门组合起来，就形成一个机构；

###### 2.机构的设计

通常一个公司，有很多部门，存在上下级的关系，所以设计机构管理表时，设计为上下级关系的表；

| 字段         | 类型         | 备注                                               |
| ------------ | ------------ | -------------------------------------------------- |
| id           | int          | 主键                                               |
| pid          | int          | 上级部门id                                         |
| parent_name  | varchar(128) | 上级部门名称                                       |
| name         | varchar(128) | 部门名称                                           |
| dept_code    | varchar(36)  | 部门编码                                           |
| dept_phone   | varchar(20)  | 部门电话                                           |
| dept_address | varchar(255) | 部门地址                                           |
| like_id      | varchar(255) | 所有上级部门id和自己id的集合，逗号分隔如   1，3，5 |
| order_num    | int          | 序号                                               |
| manager      | varchar(36)  | 部门经理                                           |

###### 3.代码实操

​	3.1实现组件：这里采用树形表格展示机构的上下级关系  选择 <el-table>组件



​	3.2在api目录下新建department.js文件，并写如下代码

```js
import http from '@/utils/request'
//获取机构列表数据
export async function deptListApi(parm){
    return await http.get("/api/department/list",parm)
}
```



​	3.3在system/department/department.vue中添加如下代码

```js
<template>
  <el-main>
    <el-form
      :model="deptModel"
      ref="searchForm"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="部门名称">
        <el-input v-model="deptModel.searchName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-close">重置</el-button>
         <el-button type="primary" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="deptCode" label="部门编码"></el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-close"
            type="danger"
            size="small"
            @click="deleteHandler(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { deptListApi } from "@/api/department";
export default {
  data() {
    return {
      //新增或编辑部门数据域
      deptModel: {
        deptName: "",
      },
      //查询数据域
      searchModel: {
        searchName: "",
      },
      //表格数据域
      tableData: [],
    };
  },
  created() {
    //获取部门数据
    this.getDeptList();
  },
  methods: {
    //删除部门
    deleteHandler(row) {
      console.log(row);
    },
    //编辑部门
    editHandler(row) {
      console.log(row);
    },
    //查询部门列表
    async getDeptList() {
      let res = await deptListApi(this.searchModel);
      if (res && res.code == 200) {
        this.tableData = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第13讲 通用弹框组件封装

```js
知识点：

父组件向子组件传值 ：属性绑定

子组件调用父组件的方法 : $emit向父组件触发事件
```



###### 1.封装效果

![](D:\vue-element-admin\授课资料\images\对话框.png)

###### 2.对话框官网 

https://element.eleme.cn/#/zh-CN/component/dialog

###### 3.测试官网对话框

​	3.1在components下新建system目录，然后新建SysDialog.vue组件，然后把官网弹框代码复制进去

​	3.2找到department.vue组件，然后引入SysDialog.vue组件，并注册SysDialog组件

```js
<template>
  <div>
   <sys-dialog
      :title="addDialog.title"
      :visible="addDialog.visible"
      :width="addDialog.width"
      :height="addDialog.height"
      @onClose="onColse"
      @onConfirm="onConfirm"
    >
      <div slot="content">弹框内容</div>
    </sys-dialog>
  </div>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
export default {
  components: { 
      SysDialog 
  },
  data(){
      return{
          addDialog: {
        title: "新增部门",
        visible: false,
        width: 600,
        height: 250,
      },
      }
  },
  methods:{
       //弹框取消事件
    onColse() {
      this.addDialog.visible = false;
    },
    //弹框确认事件
    onConfirm() {
      this.addDialog.visible = false;
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
```

###### 4.对话框封装

```js
<!--弹出框组件
  参数说明：
  title:弹出框标题
  visible:控制弹出框的显示和影藏
  width:弹出框的宽度，百分百，0~100的整数
  before-close：弹出框右上角关闭事件
  close-on-click-modal:防止点击弹出框以外的区域造成弹出框关闭
-->
<template>
  <div>
    <el-dialog
      top="5vh"
      :title="title"
      :visible.sync="visible"
      :width="width + 'px'"
      :before-close="onClose"
      :close-on-click-modal="false"
    >
      <slot name="content"></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onClose">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClose() {
      this.$emit("onClose");
    },
    onConfirm() {
      this.$emit("onConfirm");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dialog__wrapper {
  ::v-deep .el-dialog {
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    .el-dialog__header {
      border-top-left-radius: 7px !important;
      border-top-right-radius: 7px !important;
      background-color: #1890ff;
      .el-dialog__title {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
      }
      .el-dialog__close {
        color: #fff;
      }
    }
    .el-dialog__body {
      padding: 10px 10px !important;
    }
    .el-dialog__footer {
      border-top: 1px solid #e8eaec !important;
      padding: 10px !important;
    }
  }
}
</style>

```



#### 第14讲 新增部门弹框制作

###### 效果

![](D:\vue-element-project\授课资料\element-ui-images\新增部门.png)

###### 代码实操

```js
<template>
  <el-main>
    <el-form :model="parms" ref="deptForm" :inline="true" size="small">
      <el-form-item label="">
        <el-input
          v-model="parms.searchName"
          placeholder="请输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-close">重置</el-button>
        <el-button @click="addDept" type="primary" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :data="tableList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      border
      stripe
    >
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="parentName" label="上级部门"></el-table-column>
      <el-table-column prop="deptCode" label="部门编码"></el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"></el-table-column>
      <el-table-column prop="deptAddress" label="部门地址"></el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-close"
            type="danger"
            size="small"
            @click="deleteHandler(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addDeptModel"
          ref="addDeptForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="parentName" label="上级部门">
            <el-input v-model="addDeptModel.parentName"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="addDeptModel.name"></el-input>
          </el-form-item>
          <el-form-item label="部门编码">
            <el-input v-model="addDeptModel.deptCode"></el-input>
          </el-form-item>
          <el-form-item label="部门电话">
            <el-input v-model="addDeptModel.deptPhone"></el-input>
          </el-form-item>
          <el-form-item label="部门经理">
            <el-input v-model="addDeptModel.manager"></el-input>
          </el-form-item>
          <el-form-item label="部门地址">
            <el-input v-model="addDeptModel.deptAddress"></el-input>
          </el-form-item>
          <el-form-item label="部门序号">
            <el-input v-model="addDeptModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //表单验证规则
      rules: {
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级部门",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写部门名称",
          },
        ],
      },
      //新增部门表单数据域
      addDeptModel: {
        editType: "",
        id: "",
        pid: "",
        parentName: "",
        manager: "",
        deptAddress: "",
        deptPhone: "",
        name: "",
        deptCode: "",
        orderNum: "",
      },
      //存储新增对话框属性
      addDialog: {
        title: "",
        width: 620,
        height: 210,
        visible: false,
      },
      //存储部门列表数据
      tableList: [],
      //存储搜索关键字数据域
      parms: {
        searchName: "",
      },
    };
  },
  created() {
    this.getDeptList();
  },
  methods: {
    //关闭弹框
    onClose() {
      this.addDialog.visible = false;
    },
    //确认弹框
    onConfirm() {
      this.$refs.addDeptForm.validate((vaild) => {
        if (vaild) {
          this.addDialog.visible = false;
        }
      });
    },
    //新增部门
    addDept() {
      this.addDialog.title = "新增部门";
      this.addDialog.visible = true;
    },
    //获取部门列表
    async getDeptList() {
      let res = await getDeptListApi(this.parms);
      if (res && res.code == 200) {
        this.tableList = res.data;
      }
    },
    editHandler(row) {
      console.log(row);
    },
    deleteHandler(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第15讲 vue-element-admin使用iconfont图标库

##### 使用步骤

###### 1.进入官网

https://www.iconfont.cn/

###### 2.搜索找到你想要的图标

###### 3.找到图标，点击下载，进入下载页面，选择下载 svg格式的图标

###### 4.把下载好的svg图标，放到vue-element-admin项目的src/icons/svg目录下

###### 5.图标的使用

```js
 <svg-icon icon-class='setting'/>
```



#### 第16讲 选择上级部门讲解

###### 1.效果展示

![](D:\vue-element-project\授课资料\element-ui-images\选择上级部门.png)

###### 2.代码实操

2.1在api/department.js里面新建获取上级部门的api

```js
import http from '@/utils/request'
//获取部门列表
export async function getDeptListApi(parm){
    return await http.get("/api/department/list",parm)
}
//获取上级部门树数据
export async function getParentTreeApi(){
    return await http.get("/api/department/parent")
}
```

2.2在department.vue中添加新增部门弹框

```js
<template>
  <el-main>
    <el-form :model="parms" ref="deptForm" :inline="true" size="small">
      <el-form-item label="">
        <el-input
          v-model="parms.searchName"
          placeholder="请输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-close">重置</el-button>
        <el-button @click="addDept" type="primary" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
      <!-- <svg-icon style="font-size: 30px" icon-class="menus" /> -->
    </el-form>
    <el-table
      :data="tableList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      border
      stripe
    >
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="parentName" label="上级部门"></el-table-column>
      <el-table-column prop="deptCode" label="部门编码"></el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"></el-table-column>
      <el-table-column prop="deptAddress" label="部门地址"></el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-close"
            type="danger"
            size="small"
            @click="deleteHandler(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增部门弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addDeptModel"
          ref="addDeptForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="parentName" label="上级部门">
            <el-input
              @click.native="selectDept()"
              v-model="addDeptModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="addDeptModel.name"></el-input>
          </el-form-item>
          <el-form-item label="部门编码">
            <el-input v-model="addDeptModel.deptCode"></el-input>
          </el-form-item>
          <el-form-item label="部门电话">
            <el-input v-model="addDeptModel.deptPhone"></el-input>
          </el-form-item>
          <el-form-item label="部门经理">
            <el-input v-model="addDeptModel.manager"></el-input>
          </el-form-item>
          <el-form-item label="部门地址">
            <el-input v-model="addDeptModel.deptAddress"></el-input>
          </el-form-item>
          <el-form-item label="部门序号">
            <el-input v-model="addDeptModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="parentOnClose"
      @onConfirm="parentOnConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="treeList"
          node-key="id"
          :props="defaultProps"
          default-expand-all
          highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i class="el-icon-document" style="color: #8c8c8c;font-size:20px" />
            </span>
            <span v-else @click="openBtn(data)">
              <svg-icon style="font-size:25px" v-if="data.open" icon-class="add-s" />
              <svg-icon style="font-size:20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import { getDeptListApi, getParentTreeApi } from "@/api/department";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树的children属性绑定
      defaultProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "",
        width: 300,
        height: 400,
        visible: false,
      },
      //表单验证规则
      rules: {
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级部门",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写部门名称",
          },
        ],
      },
      //新增部门表单数据域
      addDeptModel: {
        editType: "",
        id: "",
        pid: "",
        parentName: "",
        manager: "",
        deptAddress: "",
        deptPhone: "",
        name: "",
        deptCode: "",
        orderNum: "",
      },
      //存储新增对话框属性
      addDialog: {
        title: "",
        width: 620,
        height: 210,
        visible: false,
      },
      //存储部门列表数据
      tableList: [],
      //存储搜索关键字数据域
      parms: {
        searchName: "",
      },
      treeList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addDeptModel.pid = data.id;
      this.addDeptModel.parentName = data.name;
    },
    //选项上级部门
    async selectDept() {
      this.parentDialog.title = "选择上级部门";
      this.parentDialog.visible = true;
      //获取上级部门树数据
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.treeList = res.data;
      }
    },
    //选项上级部门确认事件
    parentOnConfirm() {
      this.parentDialog.visible = false;
    },
    //选项上级部门取消
    parentOnClose() {
      this.parentDialog.visible = false;
    },
    //关闭弹框
    onClose() {
      this.addDialog.visible = false;
    },
    //确认弹框
    onConfirm() {
      this.$refs.addDeptForm.validate((vaild) => {
        if (vaild) {
          this.addDialog.visible = false;
        }
      });
    },
    //新增部门
    addDept() {
      this.addDialog.title = "新增部门";
      this.addDialog.visible = true;
    },
    //获取部门列表
    async getDeptList() {
      let res = await getDeptListApi(this.parms);
      if (res && res.code == 200) {
        this.tableList = res.data;
      }
    },
    editHandler(row) {
      console.log(row);
    },
    deleteHandler(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第17讲 表单数据清空和快速复制值讲解

###### 1表单数据清空讲解

1.1在utils目录下新建resetForm.js

```js
//重置表单和表单数据
export default function resetForm(fromName,obj){
    //清空表单
    if(this.$refs[fromName]){
        this.$refs[fromName].resetFields();
    }
    //清空数据域
    Object.keys(obj).forEach(key =>{
        obj[key] = '';
    })
}
```

###### 2快速复制对象中的值

2.1在utils目录下新建objCoppy.js

```js
//快速复制
//快速把obj1里面对应的数据复制到obj2
export default async function objCoppy(obj1,obj2){
    Object.keys(obj2).forEach(key =>{
        obj2[key] = obj1[key]
    })
}
```



#### 第18讲  新增机构数据接口对接

###### 1.在api/department.js里面新增如下代码

```js
import http from '@/utils/request'
//获取部门列表
export async function getDeptListApi(parm){
    return await http.get("/api/department/list",parm)
}
//获取上级部门树数据
export async function getParentTreeApi(){
    return await http.get("/api/department/parent")
}
//新增部门保存
export async function addDeptSaveApi(parm){
    return await http.post("/api/department",parm)
}
```

###### 2.department.vue完整代码

```js
<template>
  <el-main>
    <el-form :model="parms" ref="deptForm" :inline="true" size="small">
      <el-form-item label="">
        <el-input
          v-model="parms.searchName"
          placeholder="请输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-close">重置</el-button>
        <el-button @click="addDept" type="primary" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
      <!-- <svg-icon style="font-size: 30px" icon-class="menus" /> -->
    </el-form>
    <el-table
      :data="tableList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      border
      stripe
    >
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="parentName" label="上级部门"></el-table-column>
      <el-table-column prop="deptCode" label="部门编码"></el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"></el-table-column>
      <el-table-column prop="deptAddress" label="部门地址"></el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-close"
            type="danger"
            size="small"
            @click="deleteHandler(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增部门弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addDeptModel"
          ref="addDeptForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="parentName" label="上级部门">
            <el-input
              @click.native="selectDept()"
              v-model="addDeptModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="addDeptModel.name"></el-input>
          </el-form-item>
          <el-form-item label="部门编码">
            <el-input v-model="addDeptModel.deptCode"></el-input>
          </el-form-item>
          <el-form-item label="部门电话">
            <el-input v-model="addDeptModel.deptPhone"></el-input>
          </el-form-item>
          <el-form-item label="部门经理">
            <el-input v-model="addDeptModel.manager"></el-input>
          </el-form-item>
          <el-form-item label="部门地址">
            <el-input v-model="addDeptModel.deptAddress"></el-input>
          </el-form-item>
          <el-form-item label="部门序号">
            <el-input v-model="addDeptModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="parentOnClose"
      @onConfirm="parentOnConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="treeList"
          node-key="id"
          :props="defaultProps"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import { getDeptListApi, getParentTreeApi,addDeptSaveApi } from "@/api/department";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树的children属性绑定
      defaultProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "",
        width: 300,
        height: 400,
        visible: false,
      },
      //表单验证规则
      rules: {
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级部门",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写部门名称",
          },
        ],
      },
      //新增部门表单数据域
      addDeptModel: {
        editType: "",
        id: "",
        pid: "",
        parentName: "",
        manager: "",
        deptAddress: "",
        deptPhone: "",
        name: "",
        deptCode: "",
        orderNum: "",
      },
      //存储新增对话框属性
      addDialog: {
        title: "",
        width: 620,
        height: 210,
        visible: false,
      },
      //存储部门列表数据
      tableList: [],
      //存储搜索关键字数据域
      parms: {
        searchName: "",
      },
      treeList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addDeptModel.pid = data.id;
      this.addDeptModel.parentName = data.name;
    },
    //选项上级部门
    async selectDept() {
      this.parentDialog.title = "选择上级部门";
      this.parentDialog.visible = true;
      //获取上级部门树数据
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.treeList = res.data;
      }
    },
    //选项上级部门确认事件
    parentOnConfirm() {
      this.parentDialog.visible = false;
    },
    //选项上级部门取消
    parentOnClose() {
      this.parentDialog.visible = false;
    },
    //关闭弹框
    onClose() {
      this.addDialog.visible = false;
    },
    //确认弹框
    onConfirm() {
      this.$refs.addDeptForm.validate(async (vaild) => {
        if (vaild) {
          let res = await addDeptSaveApi(this.addDeptModel);
          if(res && res.code ==200){
            this.$message.success(res.msg)
            //新增成功刷新列表
            this.getDeptList();
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增部门
    addDept() {
      //清空表单
      this.$resetForm("addDeptForm", this.addDeptModel);
      this.addDialog.title = "新增部门";
      this.addDialog.visible = true;
    },
    //获取部门列表
    async getDeptList() {
      let res = await getDeptListApi(this.parms);
      if (res && res.code == 200) {
        this.tableList = res.data;
      }
    },
    editHandler(row) {
      console.log(row);
    },
    deleteHandler(row) {
      console.log(row);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第19讲 信息确认弹框封装与机构删除接口对接

###### 滚动条优化

```css
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar{
    width: 5px;
    height: 5px;
    background-color: #F5F5F5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb{
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #c8c8c8;
  }
```



###### 1.在utils里面新建myconfirm.js

```js
import { MessageBox, Message } from 'element-ui'
//删除弹框
export default function myconfirm(text) {
    return new Promise((resolve, reject) => {
        MessageBox.confirm(text, '系统提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            resolve(true)
        }).catch(() => {
            Message.warning('已取消')
            reject(false)
        })
    }).catch(() => {
        // 可对错误进行处理
    })
}

```

###### 2.在main.js中挂载到vue上

```js
import myconfirm from '@/utils/myconfirm'
Vue.prototype.$confirm = myconfirm;
```

###### 3.使用

```js
let confirm = await this.$confirm('确认删除该数据吗?')
```





#### 第20讲 编辑部门数据接口对接

###### 1.在api/department.js中添加editDeptSaveApi，完整代码如下所示

```js
import http from '@/utils/request'
//获取部门列表
export async function getDeptListApi(parm){
    return await http.get("/api/department/list",parm)
}
//获取上级部门树数据
export async function getParentTreeApi(){
    return await http.get("/api/department/parent")
}
//新增部门保存
export async function addDeptSaveApi(parm){
    return await http.post("/api/department",parm)
}
//删除部门
export async function deleteDeptApi(parm){
    return await http.delete("/api/department",parm)
}
//编辑部门
export async function editDeptSaveApi(parm){
    return await http.put("/api/department",parm)
}
```



###### 2.在main.js中引入objCoppy.js，完整main.js如下所示

```js
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
//清空表单
import resetForm from '../src/utils/resrtForm'
Vue.prototype.$resetForm = resetForm;
//数据的快速复制
import objCoppy from '../src/utils/objCoppy'
Vue.prototype.$objCoppy = objCoppy;
//信息提示框
import myconfirm from '../src/utils/myconfirm'
Vue.prototype.$myconfirm = myconfirm;
import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

```

###### 3.在department.vue中使用,完整页面代码如下所示

```html
<template>
  <el-main>
    <el-form :model="parms" ref="deptForm" :inline="true" size="small">
      <el-form-item label="">
        <el-input
          v-model="parms.searchName"
          placeholder="请输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-search">查询</el-button>
        <el-button icon="el-icon-close">重置</el-button>
        <el-button @click="addDept" type="primary" icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
      <!-- <svg-icon style="font-size: 30px" icon-class="menus" /> -->
    </el-form>
    <el-table
      :data="tableList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      border
      stripe
    >
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="parentName" label="上级部门"></el-table-column>
      <el-table-column prop="deptCode" label="部门编码"></el-table-column>
      <el-table-column prop="deptPhone" label="部门电话"></el-table-column>
      <el-table-column prop="deptAddress" label="部门地址"></el-table-column>
      <el-table-column label="操作" align="center" width="250">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-close"
            type="danger"
            size="small"
            @click="deleteHandler(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增部门弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addDeptModel"
          ref="addDeptForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="parentName" label="上级部门">
            <el-input
              @click.native="selectDept()"
              v-model="addDeptModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="addDeptModel.name"></el-input>
          </el-form-item>
          <el-form-item label="部门编码">
            <el-input v-model="addDeptModel.deptCode"></el-input>
          </el-form-item>
          <el-form-item label="部门电话">
            <el-input v-model="addDeptModel.deptPhone"></el-input>
          </el-form-item>
          <el-form-item label="部门经理">
            <el-input v-model="addDeptModel.manager"></el-input>
          </el-form-item>
          <el-form-item label="部门地址">
            <el-input v-model="addDeptModel.deptAddress"></el-input>
          </el-form-item>
          <el-form-item label="部门序号">
            <el-input v-model="addDeptModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="parentOnClose"
      @onConfirm="parentOnConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="treeList"
          node-key="id"
          :props="defaultProps"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import {
  getDeptListApi,
  getParentTreeApi,
  addDeptSaveApi,
  deleteDeptApi,
  editDeptSaveApi,
} from "@/api/department";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树的children属性绑定
      defaultProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "",
        width: 300,
        height: 400,
        visible: false,
      },
      //表单验证规则
      rules: {
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级部门",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写部门名称",
          },
        ],
      },
      //新增部门表单数据域
      addDeptModel: {
        editType: "",
        id: "",
        pid: "",
        parentName: "",
        manager: "",
        deptAddress: "",
        deptPhone: "",
        name: "",
        deptCode: "",
        orderNum: "",
      },
      //存储新增对话框属性
      addDialog: {
        title: "",
        width: 620,
        height: 210,
        visible: false,
      },
      //存储部门列表数据
      tableList: [],
      //存储搜索关键字数据域
      parms: {
        searchName: "",
      },
      treeList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addDeptModel.pid = data.id;
      this.addDeptModel.parentName = data.name;
    },
    //选项上级部门
    async selectDept() {
      this.parentDialog.title = "选择上级部门";
      this.parentDialog.visible = true;
      //获取上级部门树数据
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.treeList = res.data;
      }
    },
    //选项上级部门确认事件
    parentOnConfirm() {
      this.parentDialog.visible = false;
    },
    //选项上级部门取消
    parentOnClose() {
      this.parentDialog.visible = false;
    },
    //关闭弹框
    onClose() {
      this.addDialog.visible = false;
    },
    //确认弹框
    onConfirm() {
      this.$refs.addDeptForm.validate(async (vaild) => {
        if (vaild) {
          let res = null;
          if (this.addDeptModel.editType == "0") {
            //新增
            res = await addDeptSaveApi(this.addDeptModel);
          } else {
            //编辑
            res = await editDeptSaveApi(this.addDeptModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            //新增或者编辑成功刷新列表
            this.getDeptList();
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增部门
    addDept() {
      //清空表单
      this.$resetForm("addDeptForm", this.addDeptModel);
      this.addDialog.title = "新增部门";
      this.addDialog.visible = true;
      this.addDeptModel.editType = "0"; //0表示新增
    },
    //获取部门列表
    async getDeptList() {
      let res = await getDeptListApi(this.parms);
      if (res && res.code == 200) {
        this.tableList = res.data;
      }
    },
    editHandler(row) {
      console.log(row);
      //清空表单
      this.$resetForm("addDeptForm", this.addDeptModel);
      //显示弹框
      this.addDialog.visible = true;
      this.addDialog.title = "编辑部门";
      this.addDeptModel.editType = "1"; //1表示编辑
      //把当前编辑的数据复制到新增部门表单数据域
      this.$objCoppy(row, this.addDeptModel);
    },
    //机构删除
    async deleteHandler(row) {
      console.log(row);
      let confirm = await this.$myconfirm("确认删除该数据吗?");
      if (confirm) {
        let parm = {
          id: row.id,
        };
        let res = await deleteDeptApi(parm);
        if (res && res.code == 200) {
          this.$message.success(res.msg);
          //新增成功刷新列表
          this.getDeptList();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第21讲  权限管理列表制作与接口对接

###### 1.在api目录下新建menu.js

```js
import http from '@/utils/request'
//获取菜单数据列表
export async function getMenuListApi(){
    return await http.get("/api/menu/list")
}
```

###### 2.在views/system/Menu/MenuList.vue引入，并制作页面

```html
<template>
  <el-main style="padding:0px 15px;">
    <el-form size="normal">
      <el-form-item style="margin-bottom:0px;padding:10px;">
        <el-button size="small" icon="el-icon-plus" type="primary" @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table
      :height="tableHeight"
      :data="menuList"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
      border
      stripe
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="icon" label="图标">
        <template slot-scope="scope">
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column prop="type" label="菜单类型" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type == '0'" size="normal" effect="dark"
            >目录</el-tag
          >
          <el-tag type="success" v-else-if="scope.row.type == '1'" size="normal"
            >菜单</el-tag
          >
          <el-tag
            type="warning"
            v-else-if="scope.row.type == '2'"
            size="normal"
            effect="dark"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import { getMenuListApi } from "@/api/menu";
export default {
  data() {
    return {
      //表格高度
      tableHeight: 0,
      //菜单数据
      menuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted(){
      this.$nextTick(()=>{
          this.tableHeight = window.innerHeight-180
      })
  },
  methods: {
    //新增按钮
    addMenu() {},
    //删除按钮
    deleteMenu() {},
    //编辑按钮
    editMenu() {},
    //获取菜单数据
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第22讲 新增权限页面制作

![](D:\vue-element-admin\授课资料\images\新增权限页面.png)

###### 1、MenuList.vue

```js
<template>
  <el-main style="padding: 0px 20px">
    <el-form>
      <el-form-item style="margin-bottom: 0px; padding: 10px">
        <el-button
          type="primary"
          size="medium"
          @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :height="tableHeight"
      :data="menuList"
      border
      stripe
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="type" align="center" label="菜单类型">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type == '0'">目录</el-tag>
          <el-tag size="normal" type="success" v-if="scope.row.type == '1'"
            >菜单</el-tag
          >
          <el-tag size="normal" type="danger" v-if="scope.row.type == '2'"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="icon" align="center" label="图标">
        <template slot-scope="scope">
          <!-- element自己的图标 -->
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <!-- 阿里巴巴矢量图标 -->
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="code" label="权限字段"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :height="addDialog.height"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addMenuModel"
          ref="addMenuRef"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <!-- el-row
        代表的是把子元素排成一行 一行分为24等分
         -->
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="菜单类型">
                <el-radio-group v-model="addMenuModel.type">
                  <el-radio :label="'0'">目录</el-radio>
                  <el-radio :label="'1'">菜单</el-radio>
                  <el-radio :label="'2'">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="parentName" size="small" label="上级菜单">
            <el-input
              @click.native="selectParent"
              v-model="addMenuModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="label" size="small" label="菜单名称">
            <el-input v-model="addMenuModel.label"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addMenuModel.type != '2'"
            size="small"
            label="菜单图标"
          >
            <el-input v-model="addMenuModel.icon"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="路由名称"
          >
            <el-input v-model="addMenuModel.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="path"
            v-if="addMenuModel.type != '2'"
            size="small"
            label="路由地址"
          >
            <el-input v-model="addMenuModel.path"></el-input>
          </el-form-item>
          <el-form-item
            prop="url"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="组件路径"
          >
            <el-input v-model="addMenuModel.url"></el-input>
          </el-form-item>
          <el-form-item prop="code" size="small" label="权限字段">
            <el-input v-model="addMenuModel.code"></el-input>
          </el-form-item>
          <el-form-item size="small" label="菜单序号">
            <el-input v-model="addMenuModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import {
  getMenuListApi
} from "@/api/menu";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性定义
      defaultProps: {
        children: "children",
        label: "label",
      },
      //新增或编辑表单验证规则
      rules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择菜单类型",
          },
        ],
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级菜单",
          },
        ],
        label: [
          {
            required: true,
            trigger: "change",
            message: "请填写菜单名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由名称",
          },
        ],
        path: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由路径",
          },
        ],
        url: [
          {
            required: true,
            trigger: "change",
            message: "请填写组件路径",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请填写权限字段",
          },
        ],
      },
      //新增或编辑表单数据域
      addMenuModel: {
        id: "",
        editType: "", //0 :新增 1：编辑
        type: "",
        parentId: "",
        parentName: "",
        label: "",
        icon: "",
        name: "",
        path: "",
        url: "",
        code: "",
        orderNum: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        width: 630,
        height: 260,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //菜单数量列表
      menuList: [],
      parentMenuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 170;
    });
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //新增或编辑确认
    onConfirm() {
      this.$refs.addMenuRef.validate(async (valid) => {
        if (valid) {
          
        }
      });
    },
    //新增或编辑取消
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addMenu() {
      //清空表单
      this.$resetForm("addMenuRef", this.addMenuModel);
      this.addDialog.title = "新增权限";
      this.addDialog.visible = true;
      this.addMenuModel.editType = "0";
    },
    //删除按钮
    async deleteMenu(row) {
     
    },
    //编辑按钮
    editMenu(row) {
     
    },
    //获取菜单列表
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
        console.log(this.menuList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第23讲 选择上级菜单制作

###### MenuList.vue完整源码

```js
<template>
  <el-main style="padding: 0px 20px">
    <el-form>
      <el-form-item style="margin-bottom: 0px; padding: 10px">
        <el-button
          type="primary"
          size="medium"
          @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :height="tableHeight"
      :data="menuList"
      border
      stripe
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="type" align="center" label="菜单类型">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type == '0'">目录</el-tag>
          <el-tag size="normal" type="success" v-if="scope.row.type == '1'"
            >菜单</el-tag
          >
          <el-tag size="normal" type="danger" v-if="scope.row.type == '2'"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="icon" align="center" label="图标">
        <template slot-scope="scope">
          <!-- element自己的图标 -->
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <!-- 阿里巴巴矢量图标 -->
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="code" label="权限字段"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :height="addDialog.height"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addMenuModel"
          ref="addMenuRef"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <!-- el-row
        代表的是把子元素排成一行 一行分为24等分
         -->
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="菜单类型">
                <el-radio-group v-model="addMenuModel.type">
                  <el-radio :label="'0'">目录</el-radio>
                  <el-radio :label="'1'">菜单</el-radio>
                  <el-radio :label="'2'">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="parentName" size="small" label="上级菜单">
            <el-input
              @click.native="selectParent"
              v-model="addMenuModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="label" size="small" label="菜单名称">
            <el-input v-model="addMenuModel.label"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addMenuModel.type != '2'"
            size="small"
            label="菜单图标"
          >
            <el-input v-model="addMenuModel.icon"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="路由名称"
          >
            <el-input v-model="addMenuModel.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="path"
            v-if="addMenuModel.type != '2'"
            size="small"
            label="路由地址"
          >
            <el-input v-model="addMenuModel.path"></el-input>
          </el-form-item>
          <el-form-item
            prop="url"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="组件路径"
          >
            <el-input v-model="addMenuModel.url"></el-input>
          </el-form-item>
          <el-form-item prop="code" size="small" label="权限字段">
            <el-input v-model="addMenuModel.code"></el-input>
          </el-form-item>
          <el-form-item size="small" label="菜单序号">
            <el-input v-model="addMenuModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级菜单弹框 -->
    <sys-dialog
      :title="prentDialog.title"
      :width="prentDialog.width"
      :height="prentDialog.height"
      :visible="prentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          style="font-size: 14px"
          ref="parentTree"
          :data="parentMenuList"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无数据"
          :show-checkbox="false"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import {
  getMenuListApi,
  getParentTreeApi
} from "@/api/menu";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性定义
      defaultProps: {
        children: "children",
        label: "label",
      },
      //上级菜单弹框属性
      prentDialog: {
        title: "选择上级菜单",
        width: 280,
        height: 450,
        visible: false,
      },
      //新增或编辑表单验证规则
      rules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择菜单类型",
          },
        ],
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级菜单",
          },
        ],
        label: [
          {
            required: true,
            trigger: "change",
            message: "请填写菜单名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由名称",
          },
        ],
        path: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由路径",
          },
        ],
        url: [
          {
            required: true,
            trigger: "change",
            message: "请填写组件路径",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请填写权限字段",
          },
        ],
      },
      //新增或编辑表单数据域
      addMenuModel: {
        id: "",
        editType: "", //0 :新增 1：编辑
        type: "",
        parentId: "",
        parentName: "",
        label: "",
        icon: "",
        name: "",
        path: "",
        url: "",
        code: "",
        orderNum: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        width: 630,
        height: 260,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //菜单数量列表
      menuList: [],
      parentMenuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 170;
    });
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级菜单节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addMenuModel.parentId = data.id;
      this.addMenuModel.parentName = data.label;
      console.log(this.addMenuModel);
    },
    onParentConfirm() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单取消事件
    onParentClose() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单
    async selectParent() {
      console.log("选择");
      this.prentDialog.visible = true;
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.parentMenuList = res.data;
      }
      console.log(res);
    },
    //新增或编辑确认
    onConfirm() {
      this.$refs.addMenuRef.validate(async (valid) => {
        if (valid) {
          
        }
      });
    },
    //新增或编辑取消
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addMenu() {
      //清空表单
      this.$resetForm("addMenuRef", this.addMenuModel);
      this.addDialog.title = "新增权限";
      this.addDialog.visible = true;
      this.addMenuModel.editType = "0";
    },
    //删除按钮
    async deleteMenu(row) {
      
    },
    //编辑按钮
    editMenu(row) {
     
    },
    //获取菜单列表
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
        console.log(this.menuList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第24讲 新增权限接口对接

###### 1.在api/menu.js中添加addMenuApi

```js
import http from '@/utils/request'
//获取菜单列表
export async function getMenuListApi(){
    return await http.get("/api/menu/list")
}
//获取上级菜单
export async function getParentTreeApi(){
    return await http.get("/api/menu/parent")
}
//新增权限
export async function addMenuApi(parm){
    return await http.post("/api/menu",parm)
}
```

###### 2.页面完整代码

```html
<template>
  <el-main style="padding: 0px 20px">
    <el-form>
      <el-form-item style="margin-bottom: 0px; padding: 10px">
        <el-button type="primary" size="medium" @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :height="tableHeight"
      :data="menuList"
      border
      stripe
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="type" align="center" label="菜单类型">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type == '0'">目录</el-tag>
          <el-tag size="normal" type="success" v-if="scope.row.type == '1'"
            >菜单</el-tag
          >
          <el-tag size="normal" type="danger" v-if="scope.row.type == '2'"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="icon" align="center" label="图标">
        <template slot-scope="scope">
          <!-- element自己的图标 -->
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <!-- 阿里巴巴矢量图标 -->
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="code" label="权限字段"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :height="addDialog.height"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addMenuModel"
          ref="addMenuRef"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <!-- el-row
        代表的是把子元素排成一行 一行分为24等分
         -->
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="菜单类型">
                <el-radio-group v-model="addMenuModel.type">
                  <el-radio :label="0">目录</el-radio>
                  <el-radio :label="1">菜单</el-radio>
                  <el-radio :label="2">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="parentName" size="small" label="上级菜单">
            <el-input
              @click.native="selectParent"
              v-model="addMenuModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="label" size="small" label="菜单名称">
            <el-input v-model="addMenuModel.label"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addMenuModel.type != '2'"
            size="small"
            label="菜单图标"
          >
            <el-input v-model="addMenuModel.icon"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="路由名称"
          >
            <el-input v-model="addMenuModel.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="path"
            v-if="addMenuModel.type != '2'"
            size="small"
            label="路由地址"
          >
            <el-input v-model="addMenuModel.path"></el-input>
          </el-form-item>
          <el-form-item
            prop="url"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="组件路径"
          >
            <el-input v-model="addMenuModel.url"></el-input>
          </el-form-item>
          <el-form-item prop="code" size="small" label="权限字段">
            <el-input v-model="addMenuModel.code"></el-input>
          </el-form-item>
          <el-form-item size="small" label="菜单序号">
            <el-input v-model="addMenuModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级菜单弹框 -->
    <sys-dialog
      :title="prentDialog.title"
      :width="prentDialog.width"
      :height="prentDialog.height"
      :visible="prentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentMenuList"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无数据"
          :show-checkbox="false"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import { getMenuListApi, getParentTreeApi,addMenuApi } from "@/api/menu";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性定义
      defaultProps: {
        children: "children",
        label: "label",
      },
      //上级菜单弹框属性
      prentDialog: {
        title: "选择上级菜单",
        width: 280,
        height: 400,
        visible: false,
      },
      //新增或编辑表单验证规则
      rules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择菜单类型",
          },
        ],
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级菜单",
          },
        ],
        label: [
          {
            required: true,
            trigger: "change",
            message: "请填写菜单名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由名称",
          },
        ],
        path: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由路径",
          },
        ],
        url: [
          {
            required: true,
            trigger: "change",
            message: "请填写组件路径",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请填写权限字段",
          },
        ],
      },
      //新增或编辑表单数据域
      addMenuModel: {
        type: "",
        parentId:'',
        parentName: "",
        label: "",
        icon: "",
        name: "",
        path: "",
        url: "",
        code: "",
        orderNum: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        width: 630,
        height: 260,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //菜单数量列表
      menuList: [],
      parentMenuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 170;
    });
  },
  methods: {
     openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级菜单节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addMenuModel.parentId = data.id
      this.addMenuModel.parentName = data.label
      console.log(this.addMenuModel)
    },
    onParentConfirm() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单取消事件
    onParentClose() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单
    async selectParent() {
      console.log("选择");
      this.prentDialog.visible = true;
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.parentMenuList = res.data;
      }
      console.log(res);
    },
    //新增或编辑确认
    onConfirm() {
      this.$refs.addMenuRef.validate(async(valid) => {
        if (valid) {
          let res = await addMenuApi(this.addMenuModel);
          if(res && res.code == 200){
            //刷新列表
            this.getMenuList();
            this.addDialog.visible = false;
            this.$message.success(res.msg)
          }
        }
      });
    },
    //新增或编辑取消
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addMenu() {
      //清空表单
      this.$resetForm("addMenuRef",this.addMenuModel);
      this.addDialog.title = "新增权限";
      this.addDialog.visible = true;
    },
    //删除按钮
    delteMenu(row) {},
    //编辑按钮
    editMenu(row) {},
    //获取菜单列表
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
        console.log(this.menuList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第25讲 编辑权限对接

###### 1.在api/menu.js中添加editMenuApi

```js
import http from '@/utils/request'
//获取菜单列表
export async function getMenuListApi(){
    return await http.get("/api/menu/list")
}
//获取上级菜单
export async function getParentTreeApi(){
    return await http.get("/api/menu/parent")
}
//新增权限
export async function addMenuApi(parm){
    return await http.post("/api/menu",parm)
}
//编辑权限
export async function editMenuApi(parm){
    return await http.put("/api/menu",parm)
}
```

###### 2.页面完整代码

```html
<template>
  <el-main style="padding: 0px 20px">
    <el-form>
      <el-form-item style="margin-bottom: 0px; padding: 10px">
        <el-button type="primary" size="medium" @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :height="tableHeight"
      :data="menuList"
      border
      stripe
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="type" align="center" label="菜单类型">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type == '0'">目录</el-tag>
          <el-tag size="normal" type="success" v-if="scope.row.type == '1'"
            >菜单</el-tag
          >
          <el-tag size="normal" type="danger" v-if="scope.row.type == '2'"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="icon" align="center" label="图标">
        <template slot-scope="scope">
          <!-- element自己的图标 -->
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <!-- 阿里巴巴矢量图标 -->
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="code" label="权限字段"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :height="addDialog.height"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addMenuModel"
          ref="addMenuRef"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <!-- el-row
        代表的是把子元素排成一行 一行分为24等分
         -->
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="菜单类型">
                <el-radio-group v-model="addMenuModel.type">
                  <el-radio :label="'0'">目录</el-radio>
                  <el-radio :label="'1'">菜单</el-radio>
                  <el-radio :label="'2'">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="parentName" size="small" label="上级菜单">
            <el-input
              @click.native="selectParent"
              v-model="addMenuModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="label" size="small" label="菜单名称">
            <el-input v-model="addMenuModel.label"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addMenuModel.type != '2'"
            size="small"
            label="菜单图标"
          >
            <el-input v-model="addMenuModel.icon"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="路由名称"
          >
            <el-input v-model="addMenuModel.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="path"
            v-if="addMenuModel.type != '2'"
            size="small"
            label="路由地址"
          >
            <el-input v-model="addMenuModel.path"></el-input>
          </el-form-item>
          <el-form-item
            prop="url"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="组件路径"
          >
            <el-input v-model="addMenuModel.url"></el-input>
          </el-form-item>
          <el-form-item prop="code" size="small" label="权限字段">
            <el-input v-model="addMenuModel.code"></el-input>
          </el-form-item>
          <el-form-item size="small" label="菜单序号">
            <el-input v-model="addMenuModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级菜单弹框 -->
    <sys-dialog
      :title="prentDialog.title"
      :width="prentDialog.width"
      :height="prentDialog.height"
      :visible="prentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentMenuList"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无数据"
          :show-checkbox="false"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import {
  getMenuListApi,
  getParentTreeApi,
  addMenuApi,
  editMenuApi,
} from "@/api/menu";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性定义
      defaultProps: {
        children: "children",
        label: "label",
      },
      //上级菜单弹框属性
      prentDialog: {
        title: "选择上级菜单",
        width: 280,
        height: 400,
        visible: false,
      },
      //新增或编辑表单验证规则
      rules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择菜单类型",
          },
        ],
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级菜单",
          },
        ],
        label: [
          {
            required: true,
            trigger: "change",
            message: "请填写菜单名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由名称",
          },
        ],
        path: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由路径",
          },
        ],
        url: [
          {
            required: true,
            trigger: "change",
            message: "请填写组件路径",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请填写权限字段",
          },
        ],
      },
      //新增或编辑表单数据域
      addMenuModel: {
        id: "",
        editType: "", //0 :新增 1：编辑
        type: "",
        parentId: "",
        parentName: "",
        label: "",
        icon: "",
        name: "",
        path: "",
        url: "",
        code: "",
        orderNum: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        width: 630,
        height: 260,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //菜单数量列表
      menuList: [],
      parentMenuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 170;
    });
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级菜单节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addMenuModel.parentId = data.id;
      this.addMenuModel.parentName = data.label;
      console.log(this.addMenuModel);
    },
    onParentConfirm() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单取消事件
    onParentClose() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单
    async selectParent() {
      console.log("选择");
      this.prentDialog.visible = true;
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.parentMenuList = res.data;
      }
      console.log(res);
    },
    //新增或编辑确认
    onConfirm() {
      this.$refs.addMenuRef.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addMenuModel.editType == "0") {
            //新增
            res = await addMenuApi(this.addMenuModel);
          } else {
            //编辑
            res = await editMenuApi(this.addMenuModel);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getMenuList();
            this.addDialog.visible = false;
            this.$message.success(res.msg);
          }
        }
      });
    },
    //新增或编辑取消
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addMenu() {
      //清空表单
      this.$resetForm("addMenuRef", this.addMenuModel);
      this.addDialog.title = "新增权限";
      this.addDialog.visible = true;
      this.addMenuModel.editType = "0";
    },
    //删除按钮
    delteMenu(row) {},
    //编辑按钮
    editMenu(row) {
      //清空数据
      this.$resetForm("addMenuRef", this.addMenuModel);
      //把当前要编辑的数据复制到数据域，给表单回显
      this.$objCoppy(row, this.addMenuModel);
      //设置编辑的标识
      this.addMenuModel.editType = "1";
      //设置弹框属性
      this.addDialog.title = "编辑权限";
      this.addDialog.visible = true;
    },
    //获取菜单列表
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
        console.log(this.menuList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第26讲  权限删除接口对接

###### 1、在api/menu.js添加deleteMenuApi()方法

```js
import http from '@/utils/request'
//获取菜单列表
export async function getMenuListApi(){
    return await http.get("/api/menu/list")
}
//获取上级菜单
export async function getParentTreeApi(){
    return await http.get("/api/menu/parent")
}
//新增权限
export async function addMenuApi(parm){
    return await http.post("/api/menu",parm)
}
//编辑权限
export async function editMenuApi(parm){
    return await http.put("/api/menu",parm)
}
//删除权限
export async function deleteMenuApi(parm){
    return await http.delete("/api/menu",parm)
}
```

###### 2、MenuList.vue完整源码

```js
<template>
  <el-main style="padding: 0px 20px">
    <el-form>
      <el-form-item style="margin-bottom: 0px; padding: 10px">
        <el-button
          v-if="hasPerm('sys:menu:add')"
          type="primary"
          size="medium"
          @click="addMenu"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      :height="tableHeight"
      :data="menuList"
      border
      stripe
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="label" label="菜单名称"></el-table-column>
      <el-table-column prop="type" align="center" label="菜单类型">
        <template slot-scope="scope">
          <el-tag size="normal" v-if="scope.row.type == '0'">目录</el-tag>
          <el-tag size="normal" type="success" v-if="scope.row.type == '1'"
            >菜单</el-tag
          >
          <el-tag size="normal" type="danger" v-if="scope.row.type == '2'"
            >按钮</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="icon" align="center" label="图标">
        <template slot-scope="scope">
          <!-- element自己的图标 -->
          <i
            :class="scope.row.icon"
            v-if="scope.row.icon.includes('el-icon')"
          ></i>
          <!-- 阿里巴巴矢量图标 -->
          <svg-icon v-else :icon-class="scope.row.icon"></svg-icon>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="路由名称"></el-table-column>
      <el-table-column prop="path" label="路由地址"></el-table-column>
      <el-table-column prop="code" label="权限字段"></el-table-column>
      <el-table-column prop="url" label="组件路径"></el-table-column>
      <el-table-column align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="hasPerm('sys:menu:edit')"
            type="primary"
            icon="el-icon-edit"
            size="small"
            @click="editMenu(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="hasPerm('sys:menu:delete')"
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="deleteMenu(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :width="addDialog.width"
      :height="addDialog.height"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addMenuModel"
          ref="addMenuRef"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <!-- el-row
        代表的是把子元素排成一行 一行分为24等分
         -->
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="菜单类型">
                <el-radio-group v-model="addMenuModel.type">
                  <el-radio :label="'0'">目录</el-radio>
                  <el-radio :label="'1'">菜单</el-radio>
                  <el-radio :label="'2'">按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item prop="parentName" size="small" label="上级菜单">
            <el-input
              @click.native="selectParent"
              v-model="addMenuModel.parentName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="label" size="small" label="菜单名称">
            <el-input v-model="addMenuModel.label"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addMenuModel.type != '2'"
            size="small"
            label="菜单图标"
          >
            <el-input v-model="addMenuModel.icon"></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="路由名称"
          >
            <el-input v-model="addMenuModel.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="path"
            v-if="addMenuModel.type != '2'"
            size="small"
            label="路由地址"
          >
            <el-input v-model="addMenuModel.path"></el-input>
          </el-form-item>
          <el-form-item
            prop="url"
            v-if="addMenuModel.type == '1'"
            size="small"
            label="组件路径"
          >
            <el-input v-model="addMenuModel.url"></el-input>
          </el-form-item>
          <el-form-item prop="code" size="small" label="权限字段">
            <el-input v-model="addMenuModel.code"></el-input>
          </el-form-item>
          <el-form-item size="small" label="菜单序号">
            <el-input v-model="addMenuModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 选择上级菜单弹框 -->
    <sys-dialog
      :title="prentDialog.title"
      :width="prentDialog.width"
      :height="prentDialog.height"
      :visible="prentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          style="font-size: 14px"
          ref="parentTree"
          :data="parentMenuList"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无数据"
          :show-checkbox="false"
          default-expand-all
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import {
  getMenuListApi,
  getParentTreeApi,
  addMenuApi,
  editMenuApi,
  deleteMenuApi,
} from "@/api/menu";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性定义
      defaultProps: {
        children: "children",
        label: "label",
      },
      //上级菜单弹框属性
      prentDialog: {
        title: "选择上级菜单",
        width: 280,
        height: 450,
        visible: false,
      },
      //新增或编辑表单验证规则
      rules: {
        type: [
          {
            required: true,
            trigger: "change",
            message: "请选择菜单类型",
          },
        ],
        parentName: [
          {
            required: true,
            trigger: "change",
            message: "请选择上级菜单",
          },
        ],
        label: [
          {
            required: true,
            trigger: "change",
            message: "请填写菜单名称",
          },
        ],
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由名称",
          },
        ],
        path: [
          {
            required: true,
            trigger: "change",
            message: "请填写路由路径",
          },
        ],
        url: [
          {
            required: true,
            trigger: "change",
            message: "请填写组件路径",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请填写权限字段",
          },
        ],
      },
      //新增或编辑表单数据域
      addMenuModel: {
        id: "",
        editType: "", //0 :新增 1：编辑
        type: "",
        parentId: "",
        parentName: "",
        label: "",
        icon: "",
        name: "",
        path: "",
        url: "",
        code: "",
        orderNum: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        width: 630,
        height: 260,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //菜单数量列表
      menuList: [],
      parentMenuList: [],
    };
  },
  created() {
    this.getMenuList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 170;
    });
  },
  methods: {
    openBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级菜单节点点击事件
    handleNodeClick(data) {
      console.log(data);
      this.addMenuModel.parentId = data.id;
      this.addMenuModel.parentName = data.label;
      console.log(this.addMenuModel);
    },
    onParentConfirm() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单取消事件
    onParentClose() {
      this.prentDialog.visible = false;
    },
    //选择上级菜单
    async selectParent() {
      console.log("选择");
      this.prentDialog.visible = true;
      let res = await getParentTreeApi();
      if (res && res.code == 200) {
        this.parentMenuList = res.data;
      }
      console.log(res);
    },
    //新增或编辑确认
    onConfirm() {
      this.$refs.addMenuRef.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addMenuModel.editType == "0") {
            //新增
            res = await addMenuApi(this.addMenuModel);
          } else {
            //编辑
            res = await editMenuApi(this.addMenuModel);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getMenuList();
            this.addDialog.visible = false;
            this.$message.success(res.msg);
          }
        }
      });
    },
    //新增或编辑取消
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addMenu() {
      //清空表单
      this.$resetForm("addMenuRef", this.addMenuModel);
      this.addDialog.title = "新增权限";
      this.addDialog.visible = true;
      this.addMenuModel.editType = "0";
    },
    //删除按钮
    async deleteMenu(row) {
      let confirm = await this.$myconfirm("确定删除该数据吗?");
      if (confirm) {
        let parm = {
          id: row.id,
        };
        let res = await deleteMenuApi(parm);
        if (res && res.code == 200) {
          //刷新列表
          this.getMenuList();
          this.$message.success(res.msg);
        }
      }
    },
    //编辑按钮
    editMenu(row) {
      //清空数据
      this.$resetForm("addMenuRef", this.addMenuModel);
      //把当前要编辑的数据复制到数据域，给表单回显
      this.$objCoppy(row, this.addMenuModel);
      //设置编辑的标识
      this.addMenuModel.editType = "1";
      //设置弹框属性
      this.addDialog.title = "编辑权限";
      this.addDialog.visible = true;
    },
    //获取菜单列表
    async getMenuList() {
      let res = await getMenuListApi();
      if (res && res.code == 200) {
        this.menuList = res.data;
        console.log(this.menuList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px dotted #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px dotted #d9d9d9;
    height: 20px;
    top: 14px;
    width: 24px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第27、28讲 角色管理列表

1.在api/role.js里面新建getRoleListApi

```js
import http from '@/utils/request'
//获取角色列表
export async function getRoleListApi(parm){
  return await http.get("/api/role/list",parm)
}
```

###### 2.RoleList.vue页面源码

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
  </el-main>
</template>

<script>
import {
  getRoleListApi,
} from "@/api/role";
export default {
  data() {
    return {
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
    //分配权限按钮
    async assignRole(row) {
     
    },
    //新增按钮
    addRole() {
     
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
     
    },
    //编辑按钮
    editRole(row) {
     
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第29讲  新增角色讲解

###### 1.在api/role.js里面新建addRoleApi

```js
//新增角色
export async function addRoleApi(parm){
  return await http.post("/api/role",parm)
}
```

###### 2.在RoleList.vue页面导入addRoleApi

```js
import {
  getRoleListApi,
  addRoleApi
} from "@/api/role";
```

###### 3.RoleList.vue页面导入自定义弹框,并注册组件

```js
import SysDialog from "@/components/system/SysDialog";
```

###### 4.RoleList.vue页面源码

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addRoleModule"
          ref="addRoleForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="name" label="角色名称">
            <el-input v-model="addRoleModule.name"></el-input>
          </el-form-item>
          <el-form-item label="角色备注">
            <el-input v-model="addRoleModule.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
import {
  getRoleListApi,
  addRoleApi
} from "@/api/role";
export default {
  components: {
    SysDialog,
  },
  data() {
    return {
      //表单验证
      rules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写角色名称",
          },
        ],
      },
      //新增或编辑表单数据域
      addRoleModule: {
        id: "", //编辑时候使用
        editType: "", //标识新增或编辑  0：新增 1：编辑
        name: "",
        remark: "",
        createUser: this.$store.getters.userId,
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 150,
        width: 610,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
   
    //分配权限按钮
    async assignRole(row) {
     
    },
    
    //新增或编辑关闭事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增或编辑确认事件
    onConfirm() {
      this.$refs.addRoleForm.validate(async (valid) => {
        if (valid) {
          this.addRoleModule.createUser = this.$store.getters.userId;
          let res = null;
          if (this.addRoleModule.editType == "0") {
            //新增
            res = await addRoleApi(this.addRoleModule);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getRoleList(this.parms);
            this.$message.success(res.msg);
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增按钮
    addRole() {
      //清空表单数据
      this.$resetForm("addRoleForm", this.addRoleModule);
      this.addRoleModule.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增角色";
      this.addDialog.visible = true;
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
      
    },
    //编辑按钮
    editRole(row) {
     
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第30讲 编辑角色讲解

###### 1、在api/role.js中添加editRoleApi()方法

```js
//编辑角色
export async function editRoleApi(parm){
  return await http.put("/api/role",parm)
}
```

###### 2、在RoleList.vue页面导入editRoleApi

```js
import {
  getRoleListApi,
  addRoleApi,
  editRoleApi
} from "@/api/role";
```

###### 3、RoleList.vue源码

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addRoleModule"
          ref="addRoleForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="name" label="角色名称">
            <el-input v-model="addRoleModule.name"></el-input>
          </el-form-item>
          <el-form-item label="角色备注">
            <el-input v-model="addRoleModule.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
import {
  getRoleListApi,
  addRoleApi,
  editRoleApi
} from "@/api/role";
export default {
  components: {
    SysDialog,
  },
  data() {
    return {
      //表单验证
      rules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写角色名称",
          },
        ],
      },
      //新增或编辑表单数据域
      addRoleModule: {
        id: "", //编辑时候使用
        editType: "", //标识新增或编辑  0：新增 1：编辑
        name: "",
        remark: "",
        createUser: this.$store.getters.userId,
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 150,
        width: 610,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
    //分配权限按钮
    async assignRole(row) {
      
    },
    //新增或编辑关闭事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增或编辑确认事件
    onConfirm() {
      this.$refs.addRoleForm.validate(async (valid) => {
        if (valid) {
          this.addRoleModule.createUser = this.$store.getters.userId;
          let res = null;
          if (this.addRoleModule.editType == "0") {
            //新增
            res = await addRoleApi(this.addRoleModule);
          } else {
            res = await editRoleApi(this.addRoleModule);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getRoleList(this.parms);
            this.$message.success(res.msg);
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增按钮
    addRole() {
      //清空表单数据
      this.$resetForm("addRoleForm", this.addRoleModule);
      this.addRoleModule.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增角色";
      this.addDialog.visible = true;
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
     
    },
    //编辑按钮
    editRole(row) {
      //清空表单
      this.$resetForm("addRoleForm", this.addRoleModule);
      //设置弹框属性
      this.addDialog.title = "编辑角色";
      this.addDialog.visible = true;
      //标识 编辑
      this.addRoleModule.editType = "1";
      //把当前点击的行数据复制到表单数据域
      this.$objCoppy(row, this.addRoleModule);
      console.log(row);
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第31讲  删除角色讲解

###### 1、在api/role.js中添加deleteRoleApi()方法

```js
//删除角色
export async function deleteRoleApi(parm){
  return await http.delete("/api/role",parm)
}
```

###### 2、导入，RoleList.vue源码

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addRoleModule"
          ref="addRoleForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="name" label="角色名称">
            <el-input v-model="addRoleModule.name"></el-input>
          </el-form-item>
          <el-form-item label="角色备注">
            <el-input v-model="addRoleModule.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
import {
  getRoleListApi,
  addRoleApi,
  editRoleApi,
  deleteRoleApi
} from "@/api/role";
export default {
  components: {
    SysDialog,
  },
  data() {
    return {
      //表单验证
      rules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写角色名称",
          },
        ],
      },
      //新增或编辑表单数据域
      addRoleModule: {
        id: "", //编辑时候使用
        editType: "", //标识新增或编辑  0：新增 1：编辑
        name: "",
        remark: "",
        createUser: this.$store.getters.userId,
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 150,
        width: 610,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
    //分配权限按钮
    async assignRole(row) {
      
    },
    //新增或编辑关闭事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增或编辑确认事件
    onConfirm() {
      this.$refs.addRoleForm.validate(async (valid) => {
        if (valid) {
          this.addRoleModule.createUser = this.$store.getters.userId;
          let res = null;
          if (this.addRoleModule.editType == "0") {
            //新增
            res = await addRoleApi(this.addRoleModule);
          } else {
            res = await editRoleApi(this.addRoleModule);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getRoleList(this.parms);
            this.$message.success(res.msg);
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增按钮
    addRole() {
      //清空表单数据
      this.$resetForm("addRoleForm", this.addRoleModule);
      this.addRoleModule.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增角色";
      this.addDialog.visible = true;
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
      console.log(row);
      let confrim = await this.$myconfirm("确定删除该数据吗？");
      if (confrim) {
        let parm = {
          id: row.id,
        };
        let res = await deleteRoleApi(parm);
        if (res && res.code == 200) {
          //刷新列表
          this.getRoleList(this.parms);
          this.$message.success(res.msg);
        }
      }
    },
    //编辑按钮
    editRole(row) {
      //清空表单
      this.$resetForm("addRoleForm", this.addRoleModule);
      //设置弹框属性
      this.addDialog.title = "编辑角色";
      this.addDialog.visible = true;
      //标识 编辑
      this.addRoleModule.editType = "1";
      //把当前点击的行数据复制到表单数据域
      this.$objCoppy(row, this.addRoleModule);
      console.log(row);
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第32讲  分配权限回显讲解

###### 1、在api/role.js中添加getAssignTreeApi()方法

```js
//获取分配权限树数据
export async function getAssignTreeApi(parm){
  return await http.get("/api/role/getAssignPermissionTree",parm)
}
```

###### 2、在RoleList.vue中引入

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addRoleModule"
          ref="addRoleForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="name" label="角色名称">
            <el-input v-model="addRoleModule.name"></el-input>
          </el-form-item>
          <el-form-item label="角色备注">
            <el-input v-model="addRoleModule.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 分配权限弹框 -->
    <sys-dialog
      :title="assignDialog.title"
      :height="assignDialog.height"
      :width="assignDialog.width"
      :visible="assignDialog.visible"
      @onClose="onAssignClose"
      @onConfirm="onAssignConfirm"
    >
      <div slot="content">
        <el-tree
          ref="assignTree"
          :data="assignTreeData"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无事数据"
          :show-checkbox="true"
          :highlight-current="true"
          default-expand-all
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
import leafUtils from "@/utils/leafUtils";
import {
  getRoleListApi,
  addRoleApi,
  editRoleApi,
  deleteRoleApi,
  getAssignTreeApi,
  assignSaveApi,
} from "@/api/role";
export default {
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性配置
      defaultProps: {
        children: "children",
        label: "label",
      },
      //分配权限树数据域
      assignTreeData: [],
      //角色id
      roleId: "",
      //分配权限弹框属性
      assignDialog: {
        title: "",
        height: 450,
        width: 300,
        visible: false,
      },
      //表单验证
      rules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写角色名称",
          },
        ],
      },
      //新增或编辑表单数据域
      addRoleModule: {
        id: "", //编辑时候使用
        editType: "", //标识新增或编辑  0：新增 1：编辑
        name: "",
        remark: "",
        createUser: this.$store.getters.userId,
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 150,
        width: 610,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
    //树的节点点击事件
    handleNodeClick(data) {
      console.log(data);
    },
    //分配权限确认事件
    async onAssignConfirm() {
     
    },
    //分配权限取消事件
    onAssignClose() {
      this.assignDialog.visible = false;
    },
    //分配权限按钮
    async assignRole(row) {
      let that = this;
      //
      this.roleId = row.id;
      let parm = {
        roleId: row.id,
        userId: this.$store.getters.userId,
      };
      let res = await getAssignTreeApi(parm);
      if (res && res.code == 200) {
        //当前登录用户所拥有的所有权限
        let menuList = res.data.listmenu;
        //当前被分配的角色所拥有的权限
        let selectIds = res.data.checkList;
        //判断是否是末级
        let { setLeaf } = leafUtils();
        let newMenuList = setLeaf(menuList);
        this.assignTreeData = newMenuList;
        console.log(newMenuList);
        this.$nextTick(() => {
          let nodes = that.$refs.assignTree.children;
          that.setChild(nodes, selectIds, that);
          console.log(nodes);
        });
      }
      console.log(res);
      this.assignDialog.visible = true;
      this.assignDialog.title = "为【" + row.name + "】分配权限";
    },
    setChild(childNodes, selectIds, that) {
      if (childNodes && childNodes.length > 0) {
        {
          for (let j = 0; j < childNodes.length; j++) {
            var node = that.$refs.assignTree.getNode(childNodes[j]);
            if (selectIds && selectIds.length > 0) {
              for (let h = 0; h < selectIds.length; h++) {
                if (selectIds[h] == childNodes[j].id) {
                  if (childNodes[j].open) {
                    that.$refs.assignTree.setChecked(node, true);
                    break;
                  }
                }
              }
            }
            if (childNodes[j].children) {
              that.setChild(childNodes[j].children, selectIds, that);
            }
          }
        }
      }
    },
    //新增或编辑关闭事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增或编辑确认事件
    onConfirm() {
      this.$refs.addRoleForm.validate(async (valid) => {
        if (valid) {
          this.addRoleModule.createUser = this.$store.getters.userId;
          let res = null;
          if (this.addRoleModule.editType == "0") {
            //新增
            res = await addRoleApi(this.addRoleModule);
          } else {
            res = await editRoleApi(this.addRoleModule);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getRoleList(this.parms);
            this.$message.success(res.msg);
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增按钮
    addRole() {
      //清空表单数据
      this.$resetForm("addRoleForm", this.addRoleModule);
      this.addRoleModule.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增角色";
      this.addDialog.visible = true;
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
      console.log(row);
      let confrim = await this.$myconfirm("确定删除该数据吗？");
      if (confrim) {
        let parm = {
          id: row.id,
        };
        let res = await deleteRoleApi(parm);
        if (res && res.code == 200) {
          //刷新列表
          this.getRoleList(this.parms);
          this.$message.success(res.msg);
        }
      }
    },
    //编辑按钮
    editRole(row) {
      //清空表单
      this.$resetForm("addRoleForm", this.addRoleModule);
      //设置弹框属性
      this.addDialog.title = "编辑角色";
      this.addDialog.visible = true;
      //标识 编辑
      this.addRoleModule.editType = "1";
      //把当前点击的行数据复制到表单数据域
      this.$objCoppy(row, this.addRoleModule);
      console.log(row);
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第33讲  分配权限数据接口对接

###### 1、在api/role.js添加assignSaveApi()方法

```js
//分配权限保存
export async function assignSaveApi(parm){
  return await http.post("/api/role/roleAssignSave",parm)
}
```

###### 2、RoleList.vue完整源码

```js
<template>
  <el-main>
    <el-form
      :model="parms"
      ref="seachform"
      label-width="80px"
      :inline="true"
      size="small"
    >
      <el-form-item label="角色名称">
        <el-input v-model="parms.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="searchList" icon="el-icon-search">查询</el-button>
        <el-button
          @click="cacelList"
          style="color: #ff7670"
          icon="el-icon-delete"
          >取消</el-button
        >
        <el-button
          v-if="hasPerm('sys:role:add')"
          @click="addRole"
          type="primary"
          icon="el-icon-plus"
          >新增</el-button
        >
      </el-form-item>
    </el-form>

    <el-table :height="tableHeight" :data="roleList" border stripe>
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="remark" label="角色备注"></el-table-column>
      <el-table-column label="操作" align="center" width="290">
        <template slot-scope="scope">
          <el-button
            v-if="hasPerm('sys:role:edit')"
            icon="el-icon-edit"
            type="primary"
            size="small"
            @click="editRole(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="hasPerm('sys:role:assign')"
            icon="el-icon-setting"
            type="primary"
            size="small"
            @click="assignRole(scope.row)"
            >分配权限</el-button
          >
          <el-button
            v-if="hasPerm('sys:role:delete')"
            icon="el-icon-delete"
            type="danger"
            size="small"
            @click="deleteRole(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page.sync="parms.currentPage"
      :page-sizes="[3, 10, 20, 40, 80, 100]"
      :page-size="parms.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="parms.total"
      background
    >
    </el-pagination>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addRoleModule"
          ref="addRoleForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="name" label="角色名称">
            <el-input v-model="addRoleModule.name"></el-input>
          </el-form-item>
          <el-form-item label="角色备注">
            <el-input v-model="addRoleModule.remark"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 分配权限弹框 -->
    <sys-dialog
      :title="assignDialog.title"
      :height="assignDialog.height"
      :width="assignDialog.width"
      :visible="assignDialog.visible"
      @onClose="onAssignClose"
      @onConfirm="onAssignConfirm"
    >
      <div slot="content">
        <el-tree
          ref="assignTree"
          :data="assignTreeData"
          node-key="id"
          :props="defaultProps"
          empty-text="暂无事数据"
          :show-checkbox="true"
          :highlight-current="true"
          default-expand-all
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
    </sys-dialog>
  </el-main>
</template>

<script>
import SysDialog from "@/components/system/SysDialog";
import leafUtils from "@/utils/leafUtils";
import {
  getRoleListApi,
  addRoleApi,
  editRoleApi,
  deleteRoleApi,
  getAssignTreeApi,
  assignSaveApi,
} from "@/api/role";
export default {
  components: {
    SysDialog,
  },
  data() {
    return {
      //树属性配置
      defaultProps: {
        children: "children",
        label: "label",
      },
      //分配权限树数据域
      assignTreeData: [],
      //角色id
      roleId: "",
      //分配权限弹框属性
      assignDialog: {
        title: "",
        height: 450,
        width: 300,
        visible: false,
      },
      //表单验证
      rules: {
        name: [
          {
            required: true,
            trigger: "change",
            message: "请填写角色名称",
          },
        ],
      },
      //新增或编辑表单数据域
      addRoleModule: {
        id: "", //编辑时候使用
        editType: "", //标识新增或编辑  0：新增 1：编辑
        name: "",
        remark: "",
        createUser: this.$store.getters.userId,
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 150,
        width: 610,
        visible: false,
      },
      //表格高度
      tableHeight: 0,
      //角色列表数据
      roleList: [],
      //查询参数
      parms: {
        currentPage: 1, //当前是第几页
        pageSize: 3, //每页查询条数
        userId: this.$store.getters.userId,
        total: 0,
        name: "",
      },
    };
  },
  created() {
    this.getRoleList();
  },
  mounted() {
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 210;
    });
  },
  methods: {
    //树的节点点击事件
    handleNodeClick(data) {
      console.log(data);
    },
    //分配权限确认事件
    async onAssignConfirm() {
      // let ids = this.$refs.assignTree.getCheckedKeys();
      // console.log(ids)
      // let idsss = this.$refs.assignTree.getHalfCheckedKeys();
      // console.log(idsss)
      let listId = this.$refs.assignTree
        .getCheckedKeys()
        .concat(this.$refs.assignTree.getHalfCheckedKeys());
      console.log(listId);
      let parm = {
        roleId: this.roleId,
        list: listId,
      };
      let res = await assignSaveApi(parm);
      if (res && res.code == 200) {
        this.assignDialog.visible = false;
        this.$message.success(res.msg);
      }
    },
    //分配权限取消事件
    onAssignClose() {
      this.assignDialog.visible = false;
    },
    //分配权限按钮
    async assignRole(row) {
      let that = this;
      //
      this.roleId = row.id;
      let parm = {
        roleId: row.id,
        userId: this.$store.getters.userId,
      };
      let res = await getAssignTreeApi(parm);
      if (res && res.code == 200) {
        //当前登录用户所拥有的所有权限
        let menuList = res.data.listmenu;
        //当前被分配的角色所拥有的权限
        let selectIds = res.data.checkList;
        //判断是否是末级
        let { setLeaf } = leafUtils();
        let newMenuList = setLeaf(menuList);
        this.assignTreeData = newMenuList;
        console.log(newMenuList);
        this.$nextTick(() => {
          let nodes = that.$refs.assignTree.children;
          that.setChild(nodes, selectIds, that);
          console.log(nodes);
        });
      }
      console.log(res);
      this.assignDialog.visible = true;
      this.assignDialog.title = "为【" + row.name + "】分配权限";
    },
    setChild(childNodes, selectIds, that) {
      if (childNodes && childNodes.length > 0) {
        {
          for (let j = 0; j < childNodes.length; j++) {
            var node = that.$refs.assignTree.getNode(childNodes[j]);
            if (selectIds && selectIds.length > 0) {
              for (let h = 0; h < selectIds.length; h++) {
                if (selectIds[h] == childNodes[j].id) {
                  if (childNodes[j].open) {
                    that.$refs.assignTree.setChecked(node, true);
                    break;
                  }
                }
              }
            }
            if (childNodes[j].children) {
              that.setChild(childNodes[j].children, selectIds, that);
            }
          }
        }
      }
    },
    //新增或编辑关闭事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增或编辑确认事件
    onConfirm() {
      this.$refs.addRoleForm.validate(async (valid) => {
        if (valid) {
          this.addRoleModule.createUser = this.$store.getters.userId;
          let res = null;
          if (this.addRoleModule.editType == "0") {
            //新增
            res = await addRoleApi(this.addRoleModule);
          } else {
            res = await editRoleApi(this.addRoleModule);
          }
          if (res && res.code == 200) {
            //刷新列表
            this.getRoleList(this.parms);
            this.$message.success(res.msg);
            this.addDialog.visible = false;
          }
        }
      });
    },
    //新增按钮
    addRole() {
      //清空表单数据
      this.$resetForm("addRoleForm", this.addRoleModule);
      this.addRoleModule.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增角色";
      this.addDialog.visible = true;
    },
    //取消按钮
    cacelList() {
      this.parms.currentPage = 1;
      this.parms.name = "";
      this.getRoleList(this.parms);
    },
    //查询按钮
    searchList() {
      this.parms.currentPage = 1;
      this.getRoleList(this.parms);
    },
    currentChange(val) {
      this.parms.currentPage = val;
      this.getRoleList(this.parms);
      console.log("当前页");
      console.log(val);
    },
    sizeChange(val) {
      console.log("页容量");
      console.log(val);
      this.parms.currentPage = 1;
      this.parms.pageSize = val;
      this.getRoleList(this.parms);
    },
    //删除按钮
    async deleteRole(row) {
      console.log(row);
      let confrim = await this.$myconfirm("确定删除该数据吗？");
      if (confrim) {
        let parm = {
          id: row.id,
        };
        let res = await deleteRoleApi(parm);
        if (res && res.code == 200) {
          //刷新列表
          this.getRoleList(this.parms);
          this.$message.success(res.msg);
        }
      }
    },
    //编辑按钮
    editRole(row) {
      //清空表单
      this.$resetForm("addRoleForm", this.addRoleModule);
      //设置弹框属性
      this.addDialog.title = "编辑角色";
      this.addDialog.visible = true;
      //标识 编辑
      this.addRoleModule.editType = "1";
      //把当前点击的行数据复制到表单数据域
      this.$objCoppy(row, this.addRoleModule);
      console.log(row);
    },
    //获取角色列表
    async getRoleList() {
      let res = await getRoleListApi(this.parms);
      if (res && res.code == 200) {
        this.roleList = res.data.records;
        this.parms.total = res.data.total;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
```



#### 第34讲 用户管理左侧部门树

###### 1.在UserList.vue中引入 getDeptListApi

```js
import { getDeptListApi } from "@/api/department";
```

###### 2.UserList.vue页面代码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <el-aside
      width="200px"
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <el-main>表格 </el-main>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
export default {
  data() {
    return {
      //container的高度
      containerHeight: 0,
      //左侧部门树数据域
      deptList: [],
      defaultProps: {
        children: "children",
        label: "name",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
    });
  },
  created() {
    this.getDeptList();
  },
  methods: {
    //加减号图标点击事件
    openBtn(data) {
      console.log(data)
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧树节点点击事件
    handleNodeClick(data) {
      console.log(data);
    },
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第35讲  用户列表制作

###### 1.在api/user.js中添加getUserListApi

```js
import http from '@/utils/request'

//登录
export async function login(parms){
  return await http.login("/api/user/login",parms);
}
//获取用户信息和权限信息
export async function getInfo(){
  return await http.get("/api/sysUser/getInfo")
}
export async function getMenuList(){
  return await http.get("/api/sysUser/getMenuList")
}
//获取用户列表
export async function getUserListApi(parm){
  return await http.getRestApi("/api/user/list",parm)
}
```



###### 2.UserList.vue完整代码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form :model="searchParm" ref="searchform"  label-width="80px" :inline="true" size="small">
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button icon="el-icon-search">查询</el-button>
           <el-button icon="el-icon-delete">重置</el-button>
          <el-button icon="el-icon-plus" size="small" type="primary" @click="onSubmit">新增</el-button>
        </el-form-item>
      </el-form>
      
      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" type="primary" size="small" @click="editUser(scope.row)">编辑</el-button>
            <el-button icon="el-icon-setting" type="primary" size="small" @click="assignRole(scope.row)">分配角色</el-button>
            <el-button icon="el-icon-delete" type="danger" size="small" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[1,20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total" background>
      </el-pagination>
      
    </el-main>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import { getUserListApi } from "@/api/user";
export default {
  data() {
    return {
      //部门id
      deptId:'',
      //用户表格高度
      tableHeight:0,
      //用户表格数据域
      userTableData:[],
      //分页参数
      total:0,
      //搜索框数据域
      searchParm:{
        name:''
      },
      parms: {
        deptId: "",
        currentPage:1,
        pageSize:1
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight-220
    });
  },
  methods: {
    //页数改变时触发
    currentChange(val){
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val){
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    deleteUser(row){

    },
    //分配角色按钮
    assignRole(row){

    },
    //编辑按钮
    editUser(row){

    },
    //获取用户列表
    async getUserList(deptId){
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records)
      if(res && res.code ==200){
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id)
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(()=>{
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第36讲 新增用户页面制作

###### UserList.vue完整代码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[1, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input v-model="addModel.deptName"></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import { getUserListApi } from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 1,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
    });
  },
  methods: {
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.addDialog.visible = false;
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      //设置标识
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    deleteUser(row) {},
    //分配角色按钮
    assignRole(row) {},
    //编辑按钮
    editUser(row) {},
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第37讲 选择上级部门

###### 1、注意事项：

选择上级部门，建议每次重新获取部门数据；上级部门数据不要和左侧部门树共用数据；css样式也最好不要共用

###### 2、完整源码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import { getUserListApi} from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
    });
  },
  methods: {
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
           this.addDialog.visible = false;
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    deleteUser(row) {},
    //分配角色按钮
    assignRole(row) {},
    //编辑按钮
    editUser(row) {},
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第38讲 新增用户接口对接

###### 1、在api/user.js里面添加addUserApi

```js
//新增用户
export async function addUserApi(parm){
  return await http.post("/api/user",parm)
}
```

2、在UserList.vue里面引入

```js
import { getUserListApi, addUserApi } from "@/api/user";
```

3、在UserList.vue中编辑onConfirm方法

```js
// 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
```

###### 4、完整源码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item v-if="addModel.editType == '0'" prop="password" label="密码">
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import { getUserListApi, addUserApi} from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
    });
  },
  methods: {
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    deleteUser(row) {},
    //分配角色按钮
    assignRole(row) {},
    //编辑按钮
    editUser(row) {},
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```





#### 第39讲 编辑用户接口对接

###### 1、在api/user.js中添加editUserApi

```js
//编辑用户
export async function editUserApi(parm){
  return await http.put("/api/user",parm)
}

```

###### 2、在UserList.vue中引入

```js
import { getUserListApi, addUserApi,editUserApi } from "@/api/user";
```

###### 3、编辑UserList.vue中的editUser方法

```js
//编辑按钮
    editUser(row) {
      //清空表单
       this.$resetForm("addForm", this.addModel);
       //设置弹框属性
       this.addDialog.title = '编辑用户';
       this.addDialog.visible = true;
       //把当前编辑的数据复制到表单数据域，供回显使用
       this.$objCoppy(row,this.addModel);
       //设置编辑状态
       this.addModel.editType = '1'
    },
```

###### 4、编辑UserList.vue中的onConfirm方法

```js
 // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          }else{
            res = await editUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
```

###### 5、UserList.vue完整源码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item v-if="addModel.editType == '0'" prop="password" label="密码">
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import { getUserListApi, addUserApi,editUserApi } from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
    });
  },
  methods: {
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          }else{
            res = await editUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    deleteUser(row) {},
    //分配角色按钮
    assignRole(row) {},
    //编辑按钮
    editUser(row) {
      //清空表单
       this.$resetForm("addForm", this.addModel);
       //设置弹框属性
       this.addDialog.title = '编辑用户';
       this.addDialog.visible = true;
       //把当前编辑的数据复制到表单数据域，供回显使用
       this.$objCoppy(row,this.addModel);
       //设置编辑状态
       this.addModel.editType = '1'
    },
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第40讲 删除用户接口对接

###### 1、在api/user.js中添加deleteUserApi

```js
import http from '@/utils/request'

//登录
export async function login(parms){
  return await http.login("/api/user/login",parms);
}
//获取用户信息和权限信息
export async function getInfo(){
  return await http.get("/api/sysUser/getInfo")
}
export async function getMenuList(){
  return await http.get("/api/sysUser/getMenuList")
}
//获取用户列表
export async function getUserListApi(parm){
  return await http.getRestApi("/api/user/list",parm)
}
//新增用户
export async function addUserApi(parm){
  return await http.post("/api/user",parm)
}
//编辑用户
export async function editUserApi(parm){
  return await http.put("/api/user",parm)
}
//删除用户
export async function deleteUserApi(parm){
  return await http.delete("/api/user",parm)
}
```

###### 2、在UserList.vue中引入deleteUserApi

```js
import {
  getUserListApi,
  addUserApi,
  editUserApi,
  deleteUserApi,
} from "@/api/user";
```



###### 3、在UserList.vue中修改deleteUser方法

```js
//删除按钮
    async deleteUser(row) {
      let parm = {
        userId: row.id,
      };
      let confirm = await this.$myconfirm("确定删除该数据吗？");
      if (confirm) {
        let res = await deleteUserApi(parm);
        if (res && res.code == 200) {
          this.$message.success(res.msg);
          //刷新列表数据
          this.getUserList(this.deptId);
        }
      }
    },
```

###### 4、UserList.vue完整代码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addModel.editType == '0'"
            prop="password"
            label="密码"
          >
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import {
  getUserListApi,
  addUserApi,
  editUserApi,
  deleteUserApi,
} from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
    });
  },
  methods: {
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          } else {
            res = await editUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    async deleteUser(row) {
      let parm = {
        userId: row.id,
      };
      let confirm = await this.$myconfirm("确定删除该数据吗？");
      if (confirm) {
        let res = await deleteUserApi(parm);
        if (res && res.code == 200) {
          this.$message.success(res.msg);
          //刷新列表数据
          this.getUserList(this.deptId);
        }
      }
    },
    //分配角色按钮
    assignRole(row) {},
    //编辑按钮
    editUser(row) {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置弹框属性
      this.addDialog.title = "编辑用户";
      this.addDialog.visible = true;
      //把当前编辑的数据复制到表单数据域，供回显使用
      this.$objCoppy(row, this.addModel);
      //设置编辑状态
      this.addModel.editType = "1";
    },
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第41讲 分配角色页面制作

###### 1、api/user.js里面新增assignRoleListApi和getRoleIdByUserIdApi

```js
import http from '@/utils/request'

//登录
export async function login(parms){
  return await http.login("/api/user/login",parms);
}
//获取用户信息和权限信息
export async function getInfo(){
  return await http.get("/api/sysUser/getInfo")
}
export async function getMenuList(){
  return await http.get("/api/sysUser/getMenuList")
}
//获取用户列表
export async function getUserListApi(parm){
  return await http.getRestApi("/api/user/list",parm)
}
//新增用户
export async function addUserApi(parm){
  return await http.post("/api/user",parm)
}
//编辑用户
export async function editUserApi(parm){
  return await http.put("/api/user",parm)
}
//删除用户
export async function deleteUserApi(parm){
  return await http.delete("/api/user",parm)
}
//获取分配角色列表
export async function assignRoleListApi(parm){
  return await http.get("/api/user/getRolistForAssign",parm)
}
//获取用户的角色id
export async function getRoleIdByUserIdApi(parm){
  return await http.getRestApi("/api/user/getRoleIdByUserId",parm)
}
```

###### 2、在UserList.vue里面引入

```js
import {
  getUserListApi,
  addUserApi,
  editUserApi,
  deleteUserApi,
  assignRoleListApi,
  getRoleIdByUserIdApi,
} from "@/api/user";
```

###### 3、制作页面

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addModel.editType == '0'"
            prop="password"
            label="密码"
          >
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
    <!-- 分配角色弹框 -->
    <sys-dialog
      :title="assignDialog.title"
      :width="assignDialog.width"
      :height="assignDialog.height"
      :visible="assignDialog.visible"
      @onConfirm="onAssignConfirm"
      @onClose="onAssignClose"
    >
      <div slot="content">
        <el-table :height='assignWidth' :data="assginRoleList" border stripe>
          <el-table-column width="50" align="center" label="选中">
            <template slot-scope="scope">
              <el-radio
                v-model="selectRoleId"
                :label="scope.row.id"
                @change="getSlectRole(scope.row)"
              >
                {{ "" }}
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="角色名称"></el-table-column>
          <el-table-column prop="remark" label="角色备注"></el-table-column>
        </el-table>
        <el-pagination
          @size-change="assignsizeChange"
          @current-change="assingcurrentChange"
          :current-page.sync="roleParm.currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="roleParm.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="roleParm.total"
          background
        >
        </el-pagination>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import {
  getUserListApi,
  addUserApi,
  editUserApi,
  deleteUserApi,
  assignRoleListApi,
  getRoleIdByUserIdApi,
} from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //角色列表高度
      assignWidth:0,
      //被选中的角色id
      selectRoleId:'',
      assginRoleList:[],
      //分配角色列表查询参数
      roleParm:{
        currentPage:1,
        pageSize:10,
        userId:'',
        total:0
      },
      //分配角色弹框属性
      assignDialog: {
        title: "",
        width: 800,
        height: 400,
        visible: false,
      },
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
      this.assignWidth = window.innerHeight - 630;
    });
  },
  methods: {
    //页容量改变的时候触发
    assignsizeChange(val){
      console.log(val)
      this.roleParm.pageSize = val;
      this.assignRoleList();
    },
    //页数改变的时候触发
    assingcurrentChange(val){
      console.log(val)
      this.roleParm.currentPage = val;
      this.assignRoleList();
    },
     //分配角色按钮
    async assignRole(row) {
      //防止回显时出问题
      this.selectRoleId = '';
      //设置弹框属性
      this.assignDialog.title = '为【'+row.loginName+'】分配角色'
      this.assignDialog.visible = true;
      //查询当前登录系统的用户的所有角色
      this.assignRoleList();
      //获取当前被分配用户的角色id
      let parms = {
        userId:row.id
      }
      let resIds = await getRoleIdByUserIdApi(parms)
      console.log(resIds)
      if(resIds.data){
        this.selectRoleId = resIds.data.roleId;
      }
      
    },
    //获取角色列表
    async assignRoleList(){
      this.roleParm.userId = this.$store.getters.userId;
      let res = await assignRoleListApi(this.roleParm)
      if(res && res.code == 200){
        this.assginRoleList = res.data.records;
        this.roleParm.total = res.data.total;
      }
    },
    //角色选择事件
    getSlectRole(row){
      console.log(row)
      this.selectRoleId = row.id
    },
    //分配角色弹框取消事件
    onAssignClose() {
      this.assignDialog.visible = false;
    },
    //分配角色弹框确认事件
    onAssignConfirm() {
      this.assignDialog.visible = false;
    },
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          } else {
            res = await editUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    async deleteUser(row) {
      let parm = {
        userId: row.id,
      };
      let confirm = await this.$myconfirm("确定删除该数据吗？");
      if (confirm) {
        let res = await deleteUserApi(parm);
        if (res && res.code == 200) {
          this.$message.success(res.msg);
          //刷新列表数据
          this.getUserList(this.deptId);
        }
      }
    },
   
    //编辑按钮
    editUser(row) {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置弹框属性
      this.addDialog.title = "编辑用户";
      this.addDialog.visible = true;
      //把当前编辑的数据复制到表单数据域，供回显使用
      this.$objCoppy(row, this.addModel);
      //设置编辑状态
      this.addModel.editType = "1";
    },
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第42讲 分配角色接口对接

###### 1、在api/user.js里面新增assignRoleSaveApi

```js
import http from '@/utils/request'

//登录
export async function login(parms){
  return await http.login("/api/user/login",parms);
}
//获取用户信息和权限信息
export async function getInfo(){
  return await http.get("/api/sysUser/getInfo")
}
export async function getMenuList(){
  return await http.get("/api/sysUser/getMenuList")
}
//获取用户列表
export async function getUserListApi(parm){
  return await http.getRestApi("/api/user/list",parm)
}
//新增用户
export async function addUserApi(parm){
  return await http.post("/api/user",parm)
}
//编辑用户
export async function editUserApi(parm){
  return await http.put("/api/user",parm)
}
//删除用户
export async function deleteUserApi(parm){
  return await http.delete("/api/user",parm)
}
//获取分配角色列表
export async function assignRoleListApi(parm){
  return await http.get("/api/user/getRolistForAssign",parm)
}
//获取用户的角色id
export async function getRoleIdByUserIdApi(parm){
  return await http.getRestApi("/api/user/getRoleIdByUserId",parm)
}
//分配角色保存
export async function assignRoleSaveApi(parm){
  return await http.post("/api/user/assingRole",parm)
}
```

###### 2、UserList.vue完整onAssignConfirm方法

```js
 //分配角色弹框确认事件
    async onAssignConfirm() {
      if (!this.selectRoleId) {
        this.$message.warning("请分配角色！");
        return;
      }
      let parm = {
        roleId: this.selectRoleId,
        userId: this.selectUserId,
      };
      let res = await assignRoleSaveApi(parm);
      if (res && res.code == 200) {
        this.$message.success(res.msg)
        this.assignDialog.visible = false;
      }
    },
```

###### 3、完整源码

```js
<template>
  <el-container :style="{ height: containerHeight + 'px' }">
    <!-- 部门树 -->
    <el-aside
      style="
        padding: 10px 0px 0px 0px;
        background: #fff;
        border-right: 1px solid #dfe6ec;
      "
      width="200px"
    >
      <el-tree
        style="font-size: 14px"
        ref="leftTree"
        :data="deptList"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        empty-text="暂无数据"
        :show-checkbox="false"
        :highlight-current="true"
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <div>
            <!-- 没有子元素时显示的图标 (即是最后一层) -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; margin-right: 3px"
              ></i>
            </span>
            <!-- 有子元素显示的图标 -->
            <span v-else @click.stop="openBtn(data)">
              <!-- 这里的展开的显示隐藏即是 [+] [-]-->
              <svg-icon
                v-if="data.open"
                icon-class="add-s"
                style="margin-right: 4px; font-size: 18px"
              />
              <svg-icon v-else icon-class="sub-s" style="margin-right: 4px" />
            </span>
            <!-- 名称 -->
            <span>{{ node.label }}</span>
          </div>
        </div>
      </el-tree>
    </el-aside>
    <!-- 用户表格 -->
    <el-main>
      <el-form
        :model="searchParm"
        ref="searchform"
        label-width="80px"
        :inline="true"
        size="small"
      >
        <el-form-item label="用户名">
          <el-input v-model="searchParm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete">重置</el-button>
          <el-button
            icon="el-icon-plus"
            size="small"
            type="primary"
            @click="addUser"
            >新增</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :height="tableHeight" :data="userTableData" border stripe>
        <el-table-column prop="loginName" label="用户名"></el-table-column>
        <el-table-column prop="deptName" label="所属部门"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column align="center" width="290" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              type="primary"
              size="small"
              @click="editUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              icon="el-icon-setting"
              type="primary"
              size="small"
              @click="assignRole(scope.row)"
              >分配角色</el-button
            >
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="small"
              @click="deleteUser(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page.sync="parms.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="parms.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      >
      </el-pagination>
    </el-main>
    <!-- 新增或编辑弹框 -->
    <sys-dialog
      :title="addDialog.title"
      :height="addDialog.height"
      :width="addDialog.width"
      :visible="addDialog.visible"
      @onClose="onClose"
      @onConfirm="onConfirm"
    >
      <div slot="content">
        <el-form
          :model="addModel"
          ref="addForm"
          :rules="rules"
          label-width="80px"
          :inline="true"
          size="small"
        >
          <el-form-item prop="deptName" label="所属部门">
            <el-input
              @click.native="selectDept"
              v-model="addModel.deptName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="loginName" label="姓名">
            <el-input v-model="addModel.loginName"></el-input>
          </el-form-item>
          <el-form-item prop="mobile" label="电话">
            <el-input v-model="addModel.mobile"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="addModel.email"></el-input>
          </el-form-item>
          <el-form-item prop="username" label="登录名">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item
            v-if="addModel.editType == '0'"
            prop="password"
            label="密码"
          >
            <el-input type="password" v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="'0'">男</el-radio>
              <el-radio :label="'1'">女</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </sys-dialog>
    <!-- 上级部门弹框 -->
    <sys-dialog
      :title="parentDialog.title"
      :width="parentDialog.width"
      :height="parentDialog.height"
      :visible="parentDialog.visible"
      @onClose="onParentClose"
      @onConfirm="onParentConfirm"
    >
      <div slot="content">
        <el-tree
          ref="parentTree"
          :data="parentList"
          default-expand-all
          node-key="id"
          :props="parentProps"
          :show-checkbox="false"
          :highlight-current="true"
          :expand-on-click-node="false"
          @node-click="parentClick"
        >
          <div class="customer-tree-node" slot-scope="{ node, data }">
            <!-- 长度为0说明没有下级 -->
            <span v-if="data.children.length == 0">
              <i
                class="el-icon-document"
                style="color: #8c8c8c; font-size: 20px"
              />
            </span>
            <span v-else @click.stop="openParentBtn(data)">
              <svg-icon
                style="font-size: 25px"
                v-if="data.open"
                icon-class="add-s"
              />
              <svg-icon style="font-size: 20px" v-else icon-class="sub-s" />
            </span>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
      </div>
    </sys-dialog>
    <!-- 分配角色弹框 -->
    <sys-dialog
      :title="assignDialog.title"
      :width="assignDialog.width"
      :height="assignDialog.height"
      :visible="assignDialog.visible"
      @onConfirm="onAssignConfirm"
      @onClose="onAssignClose"
    >
      <div slot="content">
        <el-table :height="assignWidth" :data="assginRoleList" border stripe>
          <el-table-column width="50" align="center" label="选中">
            <template slot-scope="scope">
              <el-radio
                v-model="selectRoleId"
                :label="scope.row.id"
                @change="getSlectRole(scope.row)"
              >
                {{ "" }}
              </el-radio>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="角色名称"></el-table-column>
          <el-table-column prop="remark" label="角色备注"></el-table-column>
        </el-table>
        <el-pagination
          @size-change="assignsizeChange"
          @current-change="assingcurrentChange"
          :current-page.sync="roleParm.currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="roleParm.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="roleParm.total"
          background
        >
        </el-pagination>
      </div>
    </sys-dialog>
  </el-container>
</template>

<script>
import { getDeptListApi } from "@/api/department";
import {
  getUserListApi,
  addUserApi,
  editUserApi,
  deleteUserApi,
  assignRoleListApi,
  getRoleIdByUserIdApi,
  assignRoleSaveApi,
} from "@/api/user";
import SysDialog from "@/components/system/SysDialog";
export default {
  //注册组件
  components: {
    SysDialog,
  },
  data() {
    return {
      //被分配用户的id
      selectUserId: "",
      //角色列表高度
      assignWidth: 0,
      //被选中的角色id
      selectRoleId: "",
      assginRoleList: [],
      //分配角色列表查询参数
      roleParm: {
        currentPage: 1,
        pageSize: 10,
        userId: "",
        total: 0,
      },
      //分配角色弹框属性
      assignDialog: {
        title: "",
        width: 800,
        height: 400,
        visible: false,
      },
      //上级部门点击数据
      selectParentNode: {
        id: "",
        name: "",
      },
      //上级树属性绑定
      parentProps: {
        children: "children",
        label: "name",
      },
      //上级部门弹框属性
      parentDialog: {
        title: "选择上级部门",
        width: 300,
        height: 450,
        visible: false,
      },
      //上级部门数据域
      parentList: [],
      //表单验证规则
      rules: {
        deptName: [
          {
            required: true,
            trigger: "change",
            message: "请选择所属部门",
          },
        ],
        loginName: [
          {
            required: true,
            trigger: "change",
            message: "请填写姓名",
          },
        ],
        mobile: [
          {
            required: true,
            trigger: "change",
            message: "请填写电话号码",
          },
        ],
        username: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请填写登录密码",
          },
        ],
        sex: [
          {
            required: true,
            trigger: "change",
            message: "请选择性别",
          },
        ],
      },
      //新增或编辑表单数据域
      addModel: {
        id: "",
        deptId: "",
        editType: "", //0新增 1：编辑
        deptName: "",
        email: "",
        loginName: "",
        mobile: "",
        nickName: "",
        password: "",
        username: "",
        sex: "",
      },
      //新增或编辑弹框属性
      addDialog: {
        title: "",
        height: 230,
        width: 610,
        visible: false,
      },
      //部门id
      deptId: "",
      //用户表格高度
      tableHeight: 0,
      //用户表格数据域
      userTableData: [],
      //分页参数
      total: 0,
      //搜索框数据域
      searchParm: {
        name: "",
      },
      parms: {
        deptId: "",
        currentPage: 1,
        pageSize: 10,
      },
      //container高度
      containerHeight: 0,
      //树属性配置
      defaultProps: {
        children: "children",
        label: "name",
      },
      //左侧部门树数据域
      deptList: [],
    };
  },
  created() {
    this.getDeptList();
  },
  mounted() {
    this.$nextTick(() => {
      this.containerHeight = window.innerHeight - 85;
      this.tableHeight = window.innerHeight - 220;
      this.assignWidth = window.innerHeight - 630;
    });
  },
  methods: {
    //页容量改变的时候触发
    assignsizeChange(val) {
      console.log(val);
      this.roleParm.pageSize = val;
      this.assignRoleList();
    },
    //页数改变的时候触发
    assingcurrentChange(val) {
      console.log(val);
      this.roleParm.currentPage = val;
      this.assignRoleList();
    },
    //分配角色按钮
    async assignRole(row) {
      //防止回显时出问题
      this.selectRoleId = "";
      this.selectUserId = "";
      //被分配用户的id
      this.selectUserId = row.id;

      //设置弹框属性
      this.assignDialog.title = "为【" + row.loginName + "】分配角色";
      this.assignDialog.visible = true;
      //查询当前登录系统的用户的所有角色
      this.assignRoleList();
      //获取当前被分配用户的角色id
      let parms = {
        userId: row.id,
      };
      let resIds = await getRoleIdByUserIdApi(parms);
      console.log(resIds);
      if (resIds.data) {
        this.selectRoleId = resIds.data.roleId;
      }
    },
    //获取角色列表
    async assignRoleList() {
      this.roleParm.userId = this.$store.getters.userId;
      let res = await assignRoleListApi(this.roleParm);
      if (res && res.code == 200) {
        this.assginRoleList = res.data.records;
        this.roleParm.total = res.data.total;
      }
    },
    //角色选择事件
    getSlectRole(row) {
      console.log(row);
      this.selectRoleId = row.id;
    },
    //分配角色弹框取消事件
    onAssignClose() {
      this.assignDialog.visible = false;
    },
    //分配角色弹框确认事件
    async onAssignConfirm() {
      if (!this.selectRoleId) {
        this.$message.warning("请分配角色！");
        return;
      }
      let parm = {
        roleId: this.selectRoleId,
        userId: this.selectUserId,
      };
      let res = await assignRoleSaveApi(parm);
      if (res && res.code == 200) {
        this.$message.success(res.msg)
        this.assignDialog.visible = false;
      }
    },
    //上级部门树加号 减号 图标点击事件
    openParentBtn(data) {
      data.open = !data.open;
      this.$refs.parentTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //上级部门树节点点击事件
    parentClick(data) {
      console.log(data);
      this.selectParentNode.id = data.id;
      this.selectParentNode.name = data.name;
    },
    //选择上级部门确认事件
    onParentConfirm() {
      this.addModel.deptId = this.selectParentNode.id;
      this.addModel.deptName = this.selectParentNode.name;
      this.parentDialog.visible = false;
    },
    //选择上级部门取消事件
    onParentClose() {
      this.parentDialog.visible = false;
    },
    //选择上级部门
    async selectDept() {
      //查询上级部门数据
      let res = await getDeptListApi();
      if (res && res.code == 200) {
        this.parentList = res.data;
      }
      //设置弹框属性
      this.parentDialog.visible = true;
    },
    // 新增或编辑确认事件
    onConfirm() {
      this.$refs.addForm.validate(async (valid) => {
        if (valid) {
          let res = null;
          if (this.addModel.editType == "0") {
            //新增
            res = await addUserApi(this.addModel);
          } else {
            res = await editUserApi(this.addModel);
          }
          if (res && res.code == 200) {
            this.$message.success(res.msg);
            this.addDialog.visible = false;
            //刷新用户列表
            this.getUserList(this.deptId);
          }
        }
      });
    },
    //新增或编辑弹框取消事件
    onClose() {
      this.addDialog.visible = false;
    },
    //新增按钮
    addUser() {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置标识
      this.addModel.editType = "0";
      //设置弹框属性
      this.addDialog.title = "新增用户";
      this.addDialog.visible = true;
    },
    //页数改变时触发
    currentChange(val) {
      this.parms.currentPage = val;
      this.getUserList(this.deptId);
    },
    //页容量改变时触发
    sizeChange(val) {
      this.parms.pageSize = val;
      this.parms.currentPage = 1;
      this.getUserList(this.deptId);
    },
    //删除按钮
    async deleteUser(row) {
      let parm = {
        userId: row.id,
      };
      let confirm = await this.$myconfirm("确定删除该数据吗？");
      if (confirm) {
        let res = await deleteUserApi(parm);
        if (res && res.code == 200) {
          this.$message.success(res.msg);
          //刷新列表数据
          this.getUserList(this.deptId);
        }
      }
    },

    //编辑按钮
    editUser(row) {
      //清空表单
      this.$resetForm("addForm", this.addModel);
      //设置弹框属性
      this.addDialog.title = "编辑用户";
      this.addDialog.visible = true;
      //把当前编辑的数据复制到表单数据域，供回显使用
      this.$objCoppy(row, this.addModel);
      //设置编辑状态
      this.addModel.editType = "1";
    },
    //获取用户列表
    async getUserList(deptId) {
      this.parms.deptId = deptId;
      let res = await getUserListApi(this.parms);
      console.log(res.data.records);
      if (res && res.code == 200) {
        this.userTableData = res.data.records;
        this.total = res.data.total;
      }
    },
    //加减号图标点击事件
    openBtn(data) {
      console.log(data);
      data.open = !data.open;
      this.$refs.leftTree.store.nodesMap[data.id].expanded = !data.open;
    },
    //左侧部门树节点点击事件
    handleNodeClick(data) {
      this.deptId = data.id;
      console.log(data);
      this.getUserList(data.id);
    },
    //获取左侧部门树数据
    async getDeptList() {
      let res = await getDeptListApi();
      console.log(res);
      if (res && res.code == 200) {
        this.deptList = res.data;
        //树加载完成后，默认点击第一个节点
        this.$nextTick(() => {
          const firstNode = document.querySelector(".el-tree-node");
          firstNode.click();
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-aside ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
//上级部门树
.el-dialog__wrapper ::v-deep .el-tree {
  // 将每一行的设置为相对定位 方便后面before after 使用绝对定位来固定位置
  .el-tree-node {
    position: relative;
    // padding-left: 10px;
  }
  // 子集像右偏移 给数线留出距离
  .el-tree-node__children {
    padding-left: 20px;
  }
  //这是竖线
  .el-tree-node :last-child:before {
    height: 40px;
  }
  .el-tree > .el-tree-node:before {
    border-left: none;
  }
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  //这自定义的线 的公共部分
  .el-tree-node:before,
  .el-tree-node:after {
    content: "";
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }
  .tree :first-child .el-tree-node:before {
    border-left: none;
  }
  // 竖线
  .el-tree-node:before {
    border-left: 1px solid #d9d9d9;
    bottom: 0px;
    height: 100%;
    top: -25px;
    width: 1px;
  }
  //横线
  .el-tree-node:after {
    border-top: 1px solid #d9d9d9;
    height: 20px;
    top: 14px;
    width: 12px;
  }
  .el-tree-node__expand-icon.is-leaf {
    width: 8px;
  }
  //去掉elementui自带的展开按钮  一个向下的按钮,打开时向右
  .el-tree-node__content > .el-tree-node__expand-icon {
    display: none;
  }
  //每一行的高度
  .el-tree-node__content {
    line-height: 30px;
    height: 30px;
    padding-left: 10px !important;
  }
}
//去掉最上级的before  after 即是去电最上层的连接线
.el-dialog__wrapper ::v-deep .el-tree > div {
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
}
</style>
```



#### 第43讲 登录验证码对接

###### 1、在utils中修改request.js的请求返回之后的拦截器

```js
 response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      //验证码处理,返回的是ArrayBuffer类型的字节数组
      //将ArrayBuffer转成base64需要分为两步：
      //1.将ArrayBuffer转为二进制字符串
      //2.将二进制字符串转为base64字符串 ,使用btoa() 方法用于创建一个 base-64 编码的字符串
      let indexs = response.config.responseType;
      if (indexs == 'arraybuffer') {
        return Promise.resolve(
          "data:image/png;base64," +
          btoa(
            new Uint8Array(res).reduce(
              (data, byte) => data + String.fromCharCode(byte), "")
          )
        )
      }
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 600 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('登录信息过期，请重新登录', '系统提示', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
```

###### 2、在request.js的http对象中添加getImage()方法

```js
getImage(url) {
    return service.post(url, null, {
      responseType: 'arraybuffer'
    })
  }
```

###### 3、完整request.js代码

```js
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
//发送请求之前的拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    //从store里面获取token，如果token存在，
    //把token添加到请求的头部Headers里面
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      //把token添加到请求的头部
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
//请求返回之后的拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      //验证码处理,返回的是ArrayBuffer类型的字节数组
      //将ArrayBuffer转成base64需要分为两步：
      //1.将ArrayBuffer转为二进制字符串
      //2.将二进制字符串转为base64字符串 ,使用btoa() 方法用于创建一个 base-64 编码的字符串
      let indexs = response.config.responseType;
      if (indexs == 'arraybuffer') {
        return Promise.resolve(
          "data:image/png;base64," +
          btoa(
            new Uint8Array(res).reduce(
              (data, byte) => data + String.fromCharCode(byte), "")
          )
        )
      }
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 600 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('登录信息过期，请重新登录', '系统提示', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

//请求方法
const http = {
  post(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  put(url, params) {
    return service.put(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user?id=10
  get(url, params) {
    return service.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params)
      }
    })
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user/10
  getRestApi(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        console.log(key)
        console.log(params[key])
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    console.log(_params)
    if (_params) {
      return service.get(`${url}${_params}`)
    } else {
      return service.get(url)
    }
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user/10
  delete(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    if (_params) {
      return service.delete(`${url}${_params}`).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    } else {
      return service.delete(url).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    }
  },
  upload(url, params) {
    return service.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  login(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return qs.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  getImage(url) {
    return service.post(url, null, {
      responseType: 'arraybuffer'
    })
  }
}
export default http

```

###### 4、在api/user.js中添加getImageCode()方法

```js
//获取验证码
export async function getImageCode(){
  return await http.getImage("/api/sysUser/image")
}
```

###### 5、在store/modules中的user.js中修改login()方法，传入code验证码参数

```js
login({ commit }, userInfo) {
    //解构出用户名和密码
    const { username, password,code } = userInfo
    return new Promise((resolve, reject) => {
      //调用api/user里面的login方法
      login({ username: username.trim(), password: password ,code:code}).then(response => {
        // console.log(response)
        const { token } = response
        //把后端返回的token存到vuex中
        commit('SET_TOKEN', token)
        //把后端返回的token存到cookies里面
        setToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
```

###### 6、登录页面完整代码

```js
<template>
  <div class="logincontainer">
    <el-form
      class="loginForm"
      :model="loginForm"
      ref="loginForm"
      :inline="false"
      size="normal"
      :rules="rules"
    >
      <el-form-item>
        <div class="loginTitle">系统登录</div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <img @click="getImage" :src="img" class="codeImg" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-button
              @click="handlerLogin"
              class="btn"
              type="primary"
              size="default"
              >登录</el-button
            >
          </el-col>
          <el-col :span="12" :offset="0">
            <el-button class="btn" type="default" size="default"
              >取消</el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getImageCode } from "@/api/user";
export default {
  //存储数据的地方，页面需要显示的数据，都需要显示的在data里面定义
  //双向绑定的
  data() {
    return {
      img: "",
      //登录数据域
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      //表单验证规则
      rules: {
        username: [
          {
            required: true,
            trigger: "change",
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            message: "请输入密码",
          },
        ],
        code: [
          {
            required: true,
            trigger: "change",
            message: "请输入验证码",
          },
        ],
      },
    };
  },
  created() {
    this.getImage();
  },
  methods: {
    async getImage() {
       this.img = await getImageCode();
    },
    //登录提交事件
    handlerLogin() {
      this.$refs.loginForm.validate((valid) => {
        //2.如果表单验证通过
        if (valid) {
          this.loading = true;
          console.log(this.loginForm)
          //3.调用登录
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery,
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.logincontainer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    height: 350px;
    width: 450px;
    box-shadow: 0 0 25px #cac6c6;
    border-radius: 10px;
    padding: 20px 35px;
    .loginTitle {
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .btn {
      width: 100%;
    }
  }
}
.codeImg {
  width: 100%;
  cursor: pointer;
  height: 36px;
  line-height: 36px;
}
</style>
```



#### 第44讲  按钮权限判断讲解

###### 1、在src/store/modules的user.js中的getInfo()方法添加如下代码

```js
//把权限字段放到sessionStorage里面
sessionStorage.setItem('codeList',JSON.stringify(roles))
```

getInfo()完整源码

```js
getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      //调用api/user里面的getInfo方法获取用户信息和权限信息
      getInfo(state.token).then(response => {
        // console.log(response)
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction,id } = data
        
        // roles must be a non-empty array

        //roles必须是一个数组
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        //把权限字段放到sessionStorage里面
        sessionStorage.setItem('codeList',JSON.stringify(roles))
        //把roles存到store里面
        commit('SET_ROLES', roles)
        let userImg = "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
        commit('SET_USERUID', id)
        commit('SET_NAME', name)
        commit('SET_AVATAR', userImg)
        commit('SET_INTRODUCTION', introduction)
        // console.log(state)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
```

###### 2、在src下新建permission文件夹，然后新建index.js

```js
//判断按钮权限
export default function hasPermission(parm) {
    let tag = false;
    let codeList = JSON.parse(sessionStorage.getItem('codeList'))
    for (let i = 0; i < codeList.length; i++) {
        if (codeList[i] === parm) {
            tag = true;
            break;
        }
    }
    return tag;
}
```

###### 3、在main.js中添加如下代码

```js
//按钮权限判断
import hasPermission from '@/permission/index'
Vue.prototype.hasPerm = hasPermission;
```

###### 4、按钮权限判断使用方式

```js
通过 v-if="hasPerm('sys:editDept')"的方式使用

<el-button
            v-if="hasPerm('sys:editDept')"
            icon="el-icon-edit-outline"
            type="primary"
            size="small"
            @click="editHandler(scope.row)"
            >编辑
</el-button >
```



#### 第45讲 用户退出登录

###### 1.在src/api下的user.js新增loginOutApi()方法

```】js
//退出登录
export async function loginOutApi(parm){
  return await http.post("/api/sysUser/loginOut",parm)
}
```

###### 2.在src/utils/auth.js中添加如下方法

```js
//清空sessionStorage
export function clearStorage() {
  return sessionStorage.clear();
}
```

###### 3.在src/layout/components下找到Navbar.vue组件

​	3.1引入

```js
import {loginOutApi} from '@/api/user'
import {getToken,removeToken,clearStorage} from '@/utils/auth'
```

​	3.2修改页面下拉菜单

```js
<el-dropdown-menu slot="dropdown">
           <el-dropdown-item>个人中心</el-dropdown-item>
           <el-dropdown-item>还原数据</el-dropdown-item>
           <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
</el-dropdown-menu>
```

​	3.3在methods中添加loginOut()方法

```js
methods: {
    //退出登录
    async loginOut(){
      let parm = {
        "token":getToken()
      }
      let res = await loginOutApi(parm);
      if(res && res.code == 200){
          //清空token
          removeToken();
          clearStorage();
          window.location.href = "/login"
      }
    }
}
```



#### 第46讲 数据库还原

###### 1、在src/api下的user.js新增restoreApi()方法

```js
//数据库还原
export async function restoreApi(){
  return await http.post("/api/backup/restore",null)
}
```

###### 2、在src/layout/components下找到Navbar.vue组件

引入restoreApi

```js
import { loginOutApi, restoreApi } from "@/api/user";
```

###### 3、在src/layout/components下找到Navbar.vue组件

在methods方法中添加如下方法

```js
//数据库还原
    async restore() {
      let confirm = await this.$myconfirm("确定还原数据库吗？");
      if (confirm) {
        let res = await restoreApi();
        if (res.code == 200) {
          this.$message.success(res.msg);
        }
      }
    },
```

###### 4、修改页面下拉菜单

```js
<el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>
            <span style="display: block">个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="restore">
            <span style="display: block">数据还原</span>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="loginOut">
            <span style="display: block">退出</span>
          </el-dropdown-item>
</el-dropdown-menu>
```



#### 第47讲 token过期处理

###### 1、在src/api下的user.js新增refreshTokenApi()方法

```js
//刷新token
export async function refreshTokenApi(parm){
  return await http.post("/api/sysUser/refreshToken",parm)
}
```

###### 2、修改utils下的auth.js为如下

```js
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const timeKey = 'expireTime';
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
//清空sessionStorage数据
export function clearStorage(){
  return sessionStorage.clear();
}
//设置token过期时间
export function setTokenTime(time){
  return sessionStorage.setItem(timeKey,time)
}
//清空token过期时间
export function removeTokenTime(){
  return sessionStorage.setItem(timeKey,0);
}
//获取token时间
export function getTokenTime(){
  return sessionStorage.getItem(timeKey)
}
```

###### 3、修改utils下的request.js为如下代码

```js
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken, getTokenTime, setTokenTime, removeTokenTime, setToken,clearStorage } from '@/utils/auth'
import { refreshTokenApi } from '@/api/user'
import qs from 'qs'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})
//刷新token
function reFresh() {
  let parm = {
    "token": getToken()
  }
  return refreshTokenApi(parm).then(res => res)
}
// request interceptor
//发送请求之前的拦截器
let isRefresh = false;
service.interceptors.request.use(
  config => {
    //获取当前系统时间
    let curent = new Date().getTime();
    //获取token过期时间
    let expireTime = getTokenTime();
    if (expireTime > 0) {
      let minMx = (expireTime - curent) / 1000 / 60;
      //如果token离过期差10分钟，刷新token
      if (minMx < 10) {
        if (!isRefresh) {
          isRefresh = true;
          return reFresh().then(res => {
            if (res.code == 200) {
              //设置新的token和时间
              setToken(res.data.token)
              setTokenTime(res.data.expireTime);
              //把新的token添加到头部
              config.headers.token = getToken();
            }
            return config;
          }).catch(res => {
            console.log(res)
          }).finally(() => {
            isRefresh = false;
          })
        }
      }
    }
    // do something before request is sent
    //从store里面获取token，如果token存在，
    //把token添加到请求的头部Headers里面
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      //把token添加到请求的头部
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
//请求返回之后的拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log(response)
    console.log(res)
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      //验证码处理：返回的是arraybuffer,需要转车base64
      //1.把arraybuffer转换成二进制字符
      //2.把二进制字符转换为base64 (btoa方法)字符给img使用
      let indexs = response.config.responseType;
      if (indexs == 'arraybuffer') {
        return Promise.resolve(
          "data:image/png;base64," +
          btoa(
            new Uint8Array(res).reduce(
              (data, byte) => data + String.fromCharCode(byte), ""
            )
          )
        )
      }
      Message({
        message: res.msg || '服务器出错',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 600 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('用户登录信息过期，请重新登录！', '系统提示', {
          confirmButtonText: '登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            clearStorage();
            removeTokenTime();
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || '服务器出错'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg || '服务器出错',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

//请求方法
const http = {
  post(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  put(url, params) {
    return service.put(url, params, {
      transformRequest: [(params) => {
        return JSON.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user?id=10
  get(url, params) {
    return service.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params)
      }
    })
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user/10
  getRestApi(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        console.log(key)
        console.log(params[key])
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    console.log(_params)
    if (_params) {
      return service.get(`${url}${_params}`)
    } else {
      return service.get(url)
    }
  },
  //parm =>  {id:10}
  // http://localhost:8089/api/user/10
  delete(url, params) {
    let _params
    if (Object.is(params, undefined || null)) {
      _params = ''
    } else {
      _params = '/'
      for (const key in params) {
        // eslint-disable-next-line no-prototype-builtins
        if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== '') {
          _params += `${params[key]}/`
        }
      }
      //去掉参数最后一位?
      _params = _params.substr(0, _params.length - 1)
    }
    if (_params) {
      return service.delete(`${url}${_params}`).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    } else {
      return service.delete(url).catch(err => {
        message.error(err.msg)
        return Promise.reject(err)
      })
    }
  },
  upload(url, params) {
    return service.post(url, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  login(url, params) {
    return service.post(url, params, {
      transformRequest: [(params) => {
        return qs.stringify(params)
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  },
  getImage(url) {
    return service.post(url, null, {
      responseType: 'arraybuffer'
    })
  }
}
export default http

```



#### 第48讲 日志管理列表对接

###### 1、在api下新建log.js文件

```js
import http from '@/utils/request'
//获取日志列表
export async function getLogListApi(parm){
    return await http.get("/api/sysLog/list",parm)
}
```

###### 2、找到views/system/config 的code.vue

```js
<template>
  <div>
    <el-table :data="logList" border stripe>
      <el-table-column align="center" prop="userName" label="登录用户"></el-table-column>
      <el-table-column align="center" prop="title" label="执行操作"></el-table-column>
      <el-table-column align="center" prop="requestUri" label="请求URL"></el-table-column>
      <el-table-column align="center" prop="remoteAddr" label="IP"></el-table-column>
      <el-table-column align="center" prop="ipRegion" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getLogListApi } from "@/api/log";
export default {
  data() {
    return {
      logList: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    };
  },
  created() {
    this.getLogList();
  },
  methods: {
    async getLogList() {
      let parm = {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      };
      let res = await getLogListApi(parm);
      if (res && res.code == 200) {
        this.total = res.data.total;
        this.logList = res.data.records;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

```

