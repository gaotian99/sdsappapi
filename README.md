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

###安装pm2

npm install pm2 -g


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
