# sdsappapi
mobile APIs for SDS

---

## 安装Node.js

curl -O https://nodejs.org/dist/v10.15.0/node-v10.15.0.tar.gz
tar -xzvf node-v10.15.0.tar.gz
cd node-v10.15.0
./configure
make
make install

## 安装loopback工具
虽然你可以自己从头开始编写一个LoopBack应用程序，但是安装一个LoopBack CLI工具能够使它更容易入门。它将构建应用程序的基本结构，然后您可以根据需要进行自定义。
LoopBack提供了两个工具的选项：LoopBack CLI 和 IBM API Connect开发工具包，这里可以选择LoopBack CLI来进行应用程序的构建。

### 安装Loopback CLI工具
npm install -g loopback-cli

这一步将安装 lb 命令行工具，用于构建和修改LoopBack应用程序。

### 安装更新
如果之前安装过strongloop，需要进行一次版本的更新:
npm install -g strongloop

### 安装pm2

npm install pm2 -g

### Install Caddy

wget  https://github.com/ToyoDAdoubi/doubi/raw/master/caddy_install.sh

### Setup Caddy

Create a new caddy_conf_file at "/usr/local/caddy/Caddyfile"

//http://xxx.com {
// redir https://xxx.com{url}
//}

https://xxx.com {
 gzip
 tls your@email.com
 proxy / 127.0.0.1:3000
}

Caddy will automatic work in ssl mode

### Clone this

then
npm install

### Change Datasource in this program


### Run the program

pm2 .

## Reference

About where filter
https://loopback.io/doc/en/lb2/Where-filter.html

Loopback 3.x source code
https://github.com/strongloop/loopback

User management example
https://github.com/strongloop/loopback-example-user-management

Access control example
https://github.com/strongloop/loopback-example-access-control

Hand book of Loopback 3.x
https://loopback.io/doc/en/lb3/index.html

Loopback Framework introduce
https://apidocs.strongloop.com/loopback/#

Vue.js 介绍
https://cn.vuejs.org/v2/guide/

Node.js Express一个例子
https://github.com/nswbmw/N-blog/tree/master/book

Loopback3 中文指导
https://www.jianshu.com/p/763b1a847d2c

Node.js学习：使用loopback做邮箱验证
https://www.jianshu.com/p/21b4d84fb7af

NODE JS和EXPRESS 4 ROUTER搭建实现RESTFUL API
https://putty.biz/1038

程序的自动重启与永生(supervisor and pm2)
https://www.jianshu.com/p/7a30d239f010

Caddy install

wget  https://github.com/ToyoDAdoubi/doubi/raw/master/caddy_install.sh

Linux 安装Mongodb
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

https://docs.mongodb.com/manual/reference/configuration-file-settings-command-line-options-mapping/#conf-file-command-line-mapping

https://juejin.im/post/5b0519cf518825426539d05e
https://blog.csdn.net/wycf1314/article/details/10225921

## Video Links

Vue.js 手牽手，一起嗑光全家桶
https://www.youtube.com/watch?v=yo1zTr2b2FY&list=PLEfh-m_KG4dYor8h4Hi2lqKJ0xqNTFh16

Vue 全家桶與 RESTful API 串接入門介紹
https://www.youtube.com/watch?v=MCTETw0Slrw

Vue 全家桶與 RESTful API 串接入門介紹 Part 2
https://www.youtube.com/watch?v=aYlihfn-Gmg

Nodejs MongoDb Express 零基础 入门 实战 视频教程
https://www.youtube.com/playlist?list=PL9nxfq1tlKKlcx425yrc-17LiY0lcQBeC

Node.js学习
https://www.youtube.com/playlist?list=PLliocbKHJNwvbitOJ73M04PUoJae79kEg

LoopBack REST API with Authentication
https://www.youtube.com/watch?v=UTxhKZuVaG8&t=657s

Vue cookbook
https://cn.vuejs.org/v2/cookbook/index.html

Vue.js Tutorials
https://www.youtube.com/playlist?list=PLoYCgNOIyGADZuvKJweutZDOO9VI9YiJ9

## DCloud, HBuilderX, and uni-app

Native.js示例汇总
http://ask.dcloud.net.cn/article/114

uni-app
https://uniapp.dcloud.io/

HBuilderX
http://www.dcloud.io/hbuilderx.html

uni-app source code
https://github.com/dcloudio/uni-app

美团mpvue source code
https://github.com/Meituan-Dianping/mpvue

