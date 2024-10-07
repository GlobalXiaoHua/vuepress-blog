# 爬虫基础笔记

## 【1】爬虫设计思路

确定要爬取的url如何获取 -> 模拟浏览器通过http协议访问url，获取服务器返回的html -> 解析html字符串（根据一定规则提取需要的数据）

## 【2】编码

由于计算机是美国人发明的，因此，最早只有127个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为ASCII编码，比如大写字母A的编码是65，小写字母z的编码是122。但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和ASCII编码冲突，所以，中国制定了GB2312编码，用来把中文编进去。日本把日文编到Shift_JIS里，韩国把韩文编到Euc‐kr里，各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。因此，Unicode应运而生。Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了。Unicode标准也在不断发展，但最常用的是用两个字节表示一个字符（如果要用到非常偏僻的字符，就需要4个字节）。现代操作系统和大多数编程语言都直接支持Unicode

## 【3】urllib - 常用API

| API                          | 作用                       | 备注                                                         |
| ---------------------------- | -------------------------- | ------------------------------------------------------------ |
| urllib.request.urlopen()     | 模拟浏览器向服务器发送请求 | 返回数据类型是HttpResponse的response。字节转字符串是解码(decode)，字符串转字节是编码(encode) |
| response.read()              | 字节形式读取二进制         | rede(5)返回前几个字节                                        |
| response.readline()          | 读取一行                   |                                                              |
| response.readlines()         | 一行一行读取 直至结束      |                                                              |
| response.getcode()           | 获取状态码                 |                                                              |
| response.geturl()            | 获取url                    |                                                              |
| urllib.request.urlretrieve() | 请求网页/请求图片/请求视频 |                                                              |

## 【4】urllib - 基本使用

```python
# 使用urllib来获取百度首页的源码
import urllib.request

# (1)定义一个url  就是你要访问的地址
url = 'http://www.baidu.com'

# (2)模拟浏览器向服务器发送请求 response响应
response = urllib.request.urlopen(url)

# （3）获取响应中的页面的源码  content 内容的意思
# read方法  返回的是字节形式的二进制数据
# 我们要将二进制的数据转换为字符串
# 二进制--》字符串  解码  decode('编码的格式')
content = response.read().decode('utf-8')

# （4）打印数据
print(content)

# 一个类型和六个方法
# response是HTTPResponse的类型
# print(type(response))

# 按照一个字节一个字节的去读
# content = response.read()
# print(content)

# 返回多少个字节
# content = response.read(5)
# print(content)

# 读取一行
# content = response.readline()
# print(content)

# content = response.readlines()
# print(content)

# 返回状态码  如果是200了 那么就证明我们的逻辑没有错
# print(response.getcode())

# 返回的是url地址
# print(response.geturl())

# 获取是一个状态信息
print(response.getheaders())

# 一个类型 HTTPResponse
# 六个方法 read  readline  readlines  getcode geturl getheaders
```

## 【5】urllib - 下载

```python
# 使用urllib来获取百度首页的源码
import urllib.request

# 下载网页
# url_page = 'http://www.baidu.com'

# url代表的是下载的路径  filename文件的名字
# 在python中 可以变量的名字  也可以直接写值
# urllib.request.urlretrieve(url_page,'baidu.html')

# 下载图片
# url_img = 'https://img1.baidu.com/it/u=3004965690,4089234593&fm=26&fmt=auto&gp=0.jpg'
#
# urllib.request.urlretrieve(url= url_img,filename='lisa.jpg')

# 下载视频
url_video = 'https://vd3.bdstatic.com/mda-mhkku4ndaka5etk3/1080p/cae_h264/1629557146541497769/mda-mhkku4ndaka5etk3.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1629687514-0-0-7ed57ed7d1168bb1f06d18a4ea214300&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest='

urllib.request.urlretrieve(url_video, 'hxekyyds.mp4')
```

## 【6】urllib -  请求对象定制

语法:

```python
request = urllib.request.Request()
```

demo:

```python
import urllib.request

url = 'https://www.baidu.com'

# url的组成
# https://www.baidu.com/s?wd=周杰伦

# http/https    www.baidu.com   80/443     s      wd = 周杰伦     #
#    协议             主机        端口号     路径     参数           锚点
# http   80
# https  443
# mysql  3306
# oracle 1521
# redis  6379
# mongodb 27017

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

# 因为urlopen方法中不能存储字典 所以headers不能传递进去
# 请求对象的定制
request = urllib.request.Request(url=url,headers=headers)

response = urllib.request.urlopen(request)

content = response.read().decode('utf8')

print(content)
```

## 【7】urllib - get

quote(): 将单个字符串编码转化为 %xx%xx 的形式

```python
bytes类型对象 = urllib.parse.quote(str类型对象)
```

```python
str类型对象 = urllib.parse.unquote(bytes类型对象)
```

urlencode(): 将字典或者包含两个元素的元组列表转化成: "key1=value1&key2=value2"

```python
urllib.parse.urlencode()
```

```python
urllib.parse.urldecode()
```

quote()

```python

# https://www.baidu.com/s?wd=%E5%91%A8%E6%9D%B0%E4%BC%A6


# 需求 获取 https://www.baidu.com/s?wd=周杰伦的网页源码

import urllib.request
import urllib.parse


url = 'https://www.baidu.com/s?wd='

# 请求对象的定制为了解决反爬的第一种手段
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

# 将周杰伦三个字变成unicode编码的格式
# 我们需要依赖于urllib.parse
name = urllib.parse.quote('周杰伦')

url = url + name

# 请求对象的定制
request = urllib.request.Request(url=url,headers=headers)

# 模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 获取响应的内容
content = response.read().decode('utf-8')

# 打印数据
print(content)
```

urlencode()

```python
# 获取https://www.baidu.com/s?wd=%E5%91%A8%E6%9D%B0%E4%BC%A6&sex=%E7%94%B7的网页源码

import urllib.request
import urllib.parse

base_url = 'https://www.baidu.com/s?'

data = {
    'wd': '周杰伦',
    'sex': '男',
    'location': '中国台湾省'
}

new_data = urllib.parse.urlencode(data)

# 请求资源路径
url = base_url + new_data

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

# 请求对象的定制
request = urllib.request.Request(url=url, headers=headers)

# 模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 获取网页源码的数据
content = response.read().decode('utf-8')

# 打印数据
print(content)
```

## 【8】urllib - post

```python
# post请求

import urllib.request
import urllib.parse

url = 'https://fanyi.baidu.com/sug'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

data = {
    'kw': 'spider'
}

# post请求的参数 必须要进行编码
data = urllib.parse.urlencode(data).encode('utf-8')

# post的请求的参数 是不会拼接在url的后面的  而是需要放在请求对象定制的参数中
# post请求的参数 必须要进行编码
request = urllib.request.Request(url=url, data=data, headers=headers)

# 模拟浏览器向服务器发送请求
response = urllib.request.urlopen(request)

# 获取响应的数据
content = response.read().decode('utf-8')

# 字符串--》json对象

import json

obj = json.loads(content)
print(obj)

# post请求方式的参数 必须编码   data = urllib.parse.urlencode(data)
# 编码之后 必须调用encode方法 data = urllib.parse.urlencode(data).encode('utf-8')
# 参数是放在请求对象定制的方法中  request = urllib.request.Request(url=url,data=data,headers=headers)
```

## 【9】urllib - 异常

导入包urllib.error.HTTPError / urllib.error.URLError，HTTPError类是URLError类的子类。http错误是针对浏览器无法连接到服务器而增加出来的错误提示。引导并告诉浏览者该页是哪里出了问题。可以通过try‐ except进行捕获异常使得代码更加健壮

```python
import urllib.request
import urllib.error

# url = 'https://blog.csdn.net/sulixu/article/details/1198189491'

url = 'http://www.doudan1111.com'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

try:
    request = urllib.request.Request(url=url, headers=headers)

    response = urllib.request.urlopen(request)

    content = response.read().decode('utf-8')

    print(content)
except urllib.error.HTTPError:
    print('系统正在升级。。。')
except urllib.error.URLError:
    print('我都说了 系统正在升级。。。')
```

## 【10】urllib - handler处理器

可以定制更高级的请求头 ，核心handler / opener / open

```python
# 需求 使用handler来访问百度  获取网页源码

import urllib.request

url = 'http://www.baidu.com'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

request = urllib.request.Request(url=url, headers=headers)

# handler   build_opener  open

# （1）获取hanlder对象
handler = urllib.request.HTTPHandler()

# （2）获取opener对象
opener = urllib.request.build_opener(handler)

# (3) 调用open方法
response = opener.open(request)

content = response.read().decode('utf-8')

print(content)
```

## 【11】urllib - 代理服务器  

1. 代理的常用功能

   * 突破自身IP访问限制，访问国外站点

   * 访问一些单位或团体内部资源

   * 提高访问速度

   * 隐藏真实IP

2. 配置代理
   * 创建Reuqest对象
   * 创建ProxyHandler对象
   * 创建opener对象
   * 使用opener.open函数发送请求

```python
import urllib.request

proxies_pool = [
    {'http': '118.24.219.151:16817'},
    {'http': '118.24.219.151:16817'},
]

import random

proxies = random.choice(proxies_pool)

url = 'http://www.baidu.com/s?wd=ip'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

request = urllib.request.Request(url=url, headers=headers)

handler = urllib.request.ProxyHandler(proxies=proxies)

opener = urllib.request.build_opener(handler)

response = opener.open(request)

content = response.read().decode('utf-8')

with open('daili.html', 'w', encoding='utf-8') as fp:
    fp.write(content)
```

## 【12】xpath

安装lxml库  

```shell
pip install lxml ‐i https://pypi.douban.com/simple
```

导入lxml.etree 

```python
from lxml import etree
```

解析本地文件

```python
html_tree = etree.parse('XX.html')
```

解析服务器响应文件

```python
html_tree = etree.HTML(response.read().decode('utf‐8'))
```

通过xpath语法获取数据

```python
html_tree.xpath(xpath路径)
```

demo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Title</title>
</head>
<body>
    <ul>
        <li id="l1" class="c1">北京</li>
        <li id="l2">上海</li>
        <li id="c3">深圳</li>
        <li id="c4">武汉</li>
    </ul>

<!--    <ul>-->
<!--        <li>大连</li>-->
<!--        <li>锦州</li>-->
<!--        <li>沈阳</li>-->
<!--    </ul>-->
</body>
</html>
```

python

```python
from lxml import etree

# xpath解析
# （1）本地文件                                                etree.parse
# （2）服务器响应的数据  response.read().decode('utf-8') *****   etree.HTML()

# xpath解析本地文件
tree = etree.parse('070_尚硅谷_爬虫_解析_xpath的基本使用.html')

# tree.xpath('xpath路径')

# 查找ul下面的li //: 查找所有子孙节点，不考虑层级关系 /: 找直接子节点 
# li_list = tree.xpath('//body/ul/li')


# 查找所有有id的属性的li标签
# text()获取标签中的内容
# li_list = tree.xpath('//ul/li[@id]/text()')

# 找到id为l1的li标签  注意引号的问题
# li_list = tree.xpath('//ul/li[@id="l1"]/text()')

# 查找到id为l1的li标签的class的属性值
# li = tree.xpath('//ul/li[@id="l1"]/@class')

# 查询id中包含l的li标签
# li_list = tree.xpath('//ul/li[contains(@id,"l")]/text()')

# 查询id的值以l开头的li标签
# li_list = tree.xpath('//ul/li[starts-with(@id,"c")]/text()')

# 查询id为l1和class为c1的
# li_list = tree.xpath('//ul/li[@id="l1" and @class="c1"]/text()')

li_list = tree.xpath('//ul/li[@id="l1"]/text() | //ul/li[@id="l2"]/text()')

# 判断列表的长度
print(li_list)
print(len(li_list))
```

demo2: 

```python
# （1） 获取网页的源码
# （2） 解析   解析的服务器响应的文件  etree.HTML
# (3)  打印

import urllib.request

url = 'https://www.baidu.com/'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

# 请求对象的定制
request = urllib.request.Request(url=url, headers=headers)

# 模拟浏览器访问服务器
response = urllib.request.urlopen(request)

# 获取网页源码
content = response.read().decode('utf-8')

# 解析网页源码 来获取我们想要的数据
from lxml import etree

# 解析服务器响应的文件
tree = etree.HTML(content)

# 获取想要的数据  xpath的返回值是一个列表类型的数据
result = tree.xpath('//input[@id="su"]/@value')[0]

print(result)
```

demo3: 

```python
# (1) 请求对象的定制
# （2）获取网页的源码
# （3）下载


# 需求 下载的前十页的图片
# https://sc.chinaz.com/tupian/qinglvtupian.html   1
# https://sc.chinaz.com/tupian/qinglvtupian_page.html

import urllib.request
from lxml import etree


def create_request(page):
    if (page == 1):
        url = 'https://sc.chinaz.com/tupian/qinglvtupian.html'
    else:
        url = 'https://sc.chinaz.com/tupian/qinglvtupian_' + str(page) + '.html'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    }

    request = urllib.request.Request(url=url, headers=headers)
    return request


def get_content(request):
    response = urllib.request.urlopen(request)
    content = response.read().decode('utf-8')
    return content


def down_load(content):
    #     下载图片
    # urllib.request.urlretrieve('图片地址','文件的名字')
    tree = etree.HTML(content)

    name_list = tree.xpath('//div[@id="container"]//a/img/@alt')

    # 一般设计图片的网站都会进行懒加载
    src_list = tree.xpath('//div[@id="container"]//a/img/@src2')

    for i in range(len(name_list)):
        name = name_list[i]
        src = src_list[i]
        url = 'https:' + src

        urllib.request.urlretrieve(url=url, filename='./loveImg/' + name + '.jpg')


if __name__ == '__main__':
    start_page = int(input('请输入起始页码'))
    end_page = int(input('请输入结束页码'))

    for page in range(start_page, end_page + 1):
        # (1) 请求对象的定制
        request = create_request(page)
        # （2）获取网页的源码
        content = get_content(request)
        # （3）下载
        down_load(content)
```

## 【13】JsonPath  

安装JsonPath  

```shell
pip install jsonpath
```

加载Json数据

```python
obj = json.load(open('json文件', 'r', encoding='utf‐8'))
```

根据JsonPath解析Json数据

```python
ret = jsonpath.jsonpath(obj, 'jsonpath语法')
```

demo: 

```json
{ "store": {
    "book": [
      { "category": "修真",
        "author": "六道",
        "title": "坏蛋是怎样练成的",
        "price": 8.95
      },
      { "category": "修真",
        "author": "天蚕土豆",
        "title": "斗破苍穹",
        "price": 12.99
      },
      { "category": "修真",
        "author": "唐家三少",
        "title": "斗罗大陆",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      { "category": "修真",
        "author": "南派三叔",
        "title": "星辰变",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "author": "老马",
      "color": "黑色",
      "price": 19.95
    }
  }
}
```

python

```python
import json
import jsonpath

obj = json.load(open('073_尚硅谷_爬虫_解析_jsonpath.json', 'r', encoding='utf-8'))

# 书店所有书的作者
# author_list = jsonpath.jsonpath(obj,'$.store.book[*].author')
# print(author_list)

# 所有的作者
# author_list = jsonpath.jsonpath(obj,'$..author')
# print(author_list)

# store下面的所有的元素
# tag_list = jsonpath.jsonpath(obj,'$.store.*')
# print(tag_list)

# store里面所有东西的price
# price_list = jsonpath.jsonpath(obj, '$.store..price')
# print(price_list)

# 第三个书
# book = jsonpath.jsonpath(obj,'$..book[2]')
# print(book)

# 最后一本书
# book = jsonpath.jsonpath(obj,'$..book[(@.length-1)]')
# print(book)

# 	前面的两本书
# book_list = jsonpath.jsonpath(obj,'$..book[0,1]')
# book_list = jsonpath.jsonpath(obj,'$..book[:2]')
# print(book_list)

# 条件过滤需要在（）的前面添加一个？
# 	 过滤出所有的包含isbn的书。
# book_list = jsonpath.jsonpath(obj,'$..book[?(@.isbn)]')
# print(book_list)


# 哪本书超过了10块钱
# book_list = jsonpath.jsonpath(obj, '$..book[?(@.price>10)]')
# print(book_list)

输出:
['六道', '天蚕土豆', '唐家三少', '南派三叔']
['六道', '天蚕土豆', '唐家三少', '南派三叔', '老马']
[[{'category': '修真', 'author': '六道', 'title': '坏蛋是怎样练成的', 'price': 8.95}, {'category': '修真', 'author': '天蚕土豆', 'title': '斗破苍穹', 'price': 12.99}, {'category': '修真', 'author': '唐家三少', 'title': '斗罗大陆', 'isbn': '0-553-21311-3', 'price': 8.99}, {'category': '修真', 'author': '南派三叔', 'title': '星辰变', 'isbn': '0-395-19395-8', 'price': 22.99}], {'author': '老马', 'color': '黑色', 'price': 19.95}]
[8.95, 12.99, 8.99, 22.99, 19.95]
[{'category': '修真', 'author': '唐家三少', 'title': '斗罗大陆', 'isbn': '0-553-21311-3', 'price': 8.99}]
[{'category': '修真', 'author': '南派三叔', 'title': '星辰变', 'isbn': '0-395-19395-8', 'price': 22.99}]
[{'category': '修真', 'author': '六道', 'title': '坏蛋是怎样练成的', 'price': 8.95}, {'category': '修真', 'author': '天蚕土豆', 'title': '斗破苍穹', 'price': 12.99}]
[{'category': '修真', 'author': '六道', 'title': '坏蛋是怎样练成的', 'price': 8.95}, {'category': '修真', 'author': '天蚕土豆', 'title': '斗破苍穹', 'price': 12.99}]
[{'category': '修真', 'author': '唐家三少', 'title': '斗罗大陆', 'isbn': '0-553-21311-3', 'price': 8.99}, {'category': '修真', 'author': '南派三叔', 'title': '星辰变', 'isbn': '0-395-19395-8', 'price': 22.99}]
[{'category': '修真', 'author': '天蚕土豆', 'title': '斗破苍穹', 'price': 12.99}, {'category': '修真', 'author': '南派三叔', 'title': '星辰变', 'isbn': '0-395-19395-8', 'price': 22.99}]
```

## 【14】BeautifulSoup

安装bs4

```shell
pip install bs4
```

导入  

```python
from bs4 import BeautifulSoup
```

服务器响应文件生成对象

```python
soup = BeautifulSoup(response.read().decode(), 'lxml')
```

本地文件生成对象(注意：默认打开文件的编码格式gbk所以需要指定打开编码格式  )

```python
soup = BeautifulSoup(open('1.html'), 'lxml')
```

demo 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<div>
    <ul>
        <li id="l1">张三</li>
        <li id="l2">李四</li>
        <li>王五</li>
        <a href="" id="" class="a1">尚硅谷</a>
        <span>嘿嘿嘿</span>
    </ul>
</div>


<a href="" title="a2">百度</a>

<div id="d1">
        <span>
            哈哈哈
        </span>
</div>

<p id="p1" class="p1">呵呵呵</p>
</body>
</html>
```

python

```python
from bs4 import BeautifulSoup

# 通过解析本地文件 来将bs4的基础语法进行讲解
# 默认打开的文件的编码格式是gbk 所以在打开文件的时候需要指定编码
soup = BeautifulSoup(open('075_尚硅谷_爬虫_解析_bs4的基本使用.html', encoding='utf-8'), 'lxml')

# 根据标签名查找节点
# 找到的是第一个符合条件的数据
# print(soup.a)
# 获取标签的属性和属性值
# print(soup.a.attrs)

# bs4的一些函数
# （1）find
# 返回的是第一个符合条件的数据
# print(soup.find('a'))

# 根据title的值来找到对应的标签对象
# print(soup.find('a',title="a2"))

# 根据class的值来找到对应的标签对象  注意的是class需要添加下划线
# print(soup.find('a',class_="a1"))


# （2）find_all  返回的是一个列表 并且返回了所有的a标签
# print(soup.find_all('a'))

# 如果想获取的是多个标签的数据 那么需要在find_all的参数中添加的是列表的数据
# print(soup.find_all(['a','span']))

# limit的作用是查找前几个数据
# print(soup.find_all('li',limit=2))


# （3）select（推荐）
# select方法返回的是一个列表  并且会返回多个数据
# print(soup.select('a'))

# 可以通过.代表class  我们把这种操作叫做类选择器
# print(soup.select('.a1'))

# print(soup.select('#l1'))


# 属性选择器---通过属性来寻找对应的标签
# 查找到li标签中有id的标签
# print(soup.select('li[id]'))

# 查找到li标签中id为l2的标签
# print(soup.select('li[id="l2"]'))


# 层级选择器
#  后代选择器
# 找到的是div下面的li
# print(soup.select('div li'))

# 子代选择器
#  某标签的第一级子标签
# 注意：很多的计算机编程语言中 如果不加空格不会输出内容  但是在bs4中 不会报错 会显示内容
# print(soup.select('div > ul > li'))


# 找到a标签和li标签的所有的对象
# print(soup.select('a,li'))

# 节点信息
#    获取节点内容
# obj = soup.select('#d1')[0]
# 如果标签对象中 只有内容 那么string和get_text()都可以使用
# 如果标签对象中 除了内容还有标签 那么string就获取不到数据 而get_text()是可以获取数据
# 我们一般情况下  推荐使用get_text()
# print(obj.string)
# print(obj.get_text())

# 节点的属性
# obj = soup.select('#p1')[0]
# name是标签的名字
# print(obj.name)
# 将属性值左右一个字典返回
# print(obj.attrs)

# 获取节点的属性
obj = soup.select('#p1')[0]

print(obj.attrs.get('class'))
print(obj.get('class'))
print(obj['class'])
```

## 【15】Selenium

操作谷歌浏览器驱动下载地址 

```http
http://chromedriver.storage.googleapis.com/index.html
```

谷歌驱动和谷歌浏览器版本之间的映射表  

```http
http://blog.csdn.net/huilan_same/article/details/51896672
```

查看谷歌浏览器版本

```tex
谷歌浏览器右上角‐‐>帮助‐‐>关于
```

安装Selenium

```shell
pip install selenium
```

导入 

```python
from selenium import webdriver
```

创建谷歌浏览器操作对象 

```python
path = 谷歌浏览器驱动文件路径
browser = webdriver.Chrome(path)
```

访问网址  

```python
url = 要访问的网址
browser.get(url)
```

demo:

```python
# （1）导入selenium
from selenium import webdriver

# (2) 创建浏览器操作对象

path = 'chromedriver.exe'

browser = webdriver.Chrome(path)

# （3）访问网站
# url = 'https://www.baidu.com'
#
# browser.get(url)

url = 'https://www.jd.com/'

browser.get(url)

# page_source获取网页源码
content = browser.page_source
print(content)

# 元素定位

# 根据id来找到对象
# button = browser.find_element_by_id('su')
# print(button)

# 根据标签属性的属性值来获取对象的
# button = browser.find_element_by_name('wd')
# print(button)

# 根据xpath语句来获取对象
# button = browser.find_elements_by_xpath('//input[@id="su"]')
# print(button)

# 根据标签的名字来获取对象
# button = browser.find_elements_by_tag_name('input')
# print(button)

# 使用的bs4的语法来获取对象
# button = browser.find_elements_by_css_selector('#su')
# print(button)

# button = browser.find_element_by_link_text('直播')
# print(button)

input = browser.find_element_by_id('su')

# 获取标签的属性
print(input.get_attribute('class'))
# 获取标签的名字
print(input.tag_name)

# 获取元素文本
a = browser.find_element_by_link_text('新闻')
print(a.text)


import time
time.sleep(2)

# 获取文本框的对象
input = browser.find_element_by_id('kw')

# 在文本框中输入周杰伦
input.send_keys('周杰伦')

time.sleep(2)

# 获取百度一下的按钮
button = browser.find_element_by_id('su')

# 点击按钮
button.click()

time.sleep(2)

# 滑到底部
js_bottom = 'document.documentElement.scrollTop=100000'
browser.execute_script(js_bottom)

time.sleep(2)

# 获取下一页的按钮
next = browser.find_element_by_xpath('//a[@class="n"]')

# 点击下一页
next.click()

time.sleep(2)

# 回到上一页
browser.back()

time.sleep(2)

# 回去
browser.forward()

time.sleep(3)

# 退出
browser.quit()
```

## 【16】Selenium - handless

Chrome-headless 模式， Google 针对 Chrome 浏览器 59版 新增加的一种模式，可以让你不打开UI界面的情况下使用 Chrome 浏览器，所以运行效果与 Chrome 保持完美一致。

系统要求： 

Chrome

​	Unix\Linux 系统需要 chrome >= 59

​	Windows 系统需要 chrome >= 60

Python3.6 

Selenium==3.4.* 

ChromeDriver==2.31

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def share_browser():
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')

    # path是你自己的chrome浏览器的文件路径
    path = r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    chrome_options.binary_location = path

    browser = webdriver.Chrome(chrome_options=chrome_options)
    return browser


browser = share_browser()

url = 'https://www.baidu.com'

browser.get(url)
browser.save_screenshot('baidu.png')
```

## 【17】requests - 常用API

官方文档

```http
http://cn.python‐requests.org/zh_CN/latest/
```

安装

```shell
pip install requests
```

```python
import requests


url = 'http://www.baidu.com'


response = requests.get(url=url)

# 一个类型和六个属性
# Response类型
# print(type(response))

# 设置响应的编码格式
# response.encoding = 'utf-8'

# 以字符串的形式来返回了网页的源码
# print(response.text)

# 返回一个url地址
# print(response.url)

# 返回的是二进制的数据
# print(response.content)

# 返回响应的状态码
# print(response.status_code)

# 返回的是响应头
print(response.headers)
```

## 【18】requests - get

get请求

​	参数使用params传递

​	参数无需urlencode编码

​	不需要请求对象的定制

​	请求资源路径中的？可以加也可以不加

```python
import requests

url = 'https://www.baidu.com/s'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

data = {
    'wd':'北京'
}


# url  请求资源路径
# params 参数
# kwargs 字典
response = requests.get(url=url,params=data,headers=headers)

content = response.text

print(content)
```

## 【19】requests - post

post 请求 

​	post请求是不需要编解码

​	post请求的参数是data

​	不需要请求对象的定制

```python
import requests

url = 'https://fanyi.baidu.com/sug'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

data = {
    'kw': 'eye'
}

# url 请求地址
# data 请求参数
# kwargs 字典
response = requests.post(url=url,data=data,headers=headers)

content =response.text

import json

obj = json.loads(content,encoding='utf-8')
print(obj)
```

## 【20】requests - 代理

```python
import requests

url = 'http://www.baidu.com/s?'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
}

data = {
    'wd':'ip'
}


proxy = {
    'http':'212.129.251.55:16816'
}

response = requests.get(url = url,params=data,headers = headers,proxies = proxy)

content = response.text

with open('daili.html','w',encoding='utf-8')as fp:
    fp.write(content)
```

## 【21】requests - cookie

```python
# 通过登陆  然后进入到主页面


# 通过找登陆接口我们发现 登陆的时候需要的参数很多
# _VIEWSTATE: /m1O5dxmOo7f1qlmvtnyNyhhaUrWNVTs3TMKIsm1lvpIgs0WWWUCQHl5iMrvLlwnsqLUN6Wh1aNpitc4WnOt0So3k6UYdFyqCPI6jWSvC8yBA1Q39I7uuR4NjGo=
# __VIEWSTATEGENERATOR: C93BE1AE
# from: http://so.gushiwen.cn/user/collect.aspx
# email: 595165358@qq.com
# pwd: action
# code: PId7
# denglu: 登录

# 我们观察到_VIEWSTATE   __VIEWSTATEGENERATOR  code是一个可以变化的量

# 难点:(1)_VIEWSTATE   __VIEWSTATEGENERATOR  一般情况看不到的数据 都是在页面的源码中
#     我们观察到这两个数据在页面的源码中 所以我们需要获取页面的源码 然后进行解析就可以获取了
#     (2)验证码

import requests

# 这是登陆页面的url地址
url = 'https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
}

# 获取页面的源码
response = requests.get(url=url, headers=headers)
content = response.text

# 解析页面源码  然后获取_VIEWSTATE   __VIEWSTATEGENERATOR
from bs4 import BeautifulSoup

soup = BeautifulSoup(content, 'lxml')

# 获取_VIEWSTATE
viewstate = soup.select('#__VIEWSTATE')[0].attrs.get('value')

# 获取__VIEWSTATEGENERATOR
viewstategenerator = soup.select('#__VIEWSTATEGENERATOR')[0].attrs.get('value')

# 获取验证码图片
code = soup.select('#imgCode')[0].attrs.get('src')
code_url = 'https://so.gushiwen.cn' + code

# 有坑
# import urllib.request
# urllib.request.urlretrieve(url=code_url,filename='code.jpg')
# requests里面有一个方法 session（）  通过session的返回值 就能使用请求变成一个对象

session = requests.session()
# 验证码的url的内容
response_code = session.get(code_url)
# 注意此时要使用二进制数据  因为我们要使用的是图片的下载
content_code = response_code.content
# wb的模式就是将二进制数据写入到文件
with open('code.jpg', 'wb') as fp:
    fp.write(content_code)

# 获取了验证码的图片之后 下载到本地 然后观察验证码  观察之后 然后在控制台输入这个验证码 就可以将这个值给
# code的参数 就可以登陆

code_name = input('请输入你的验证码')

# 点击登陆
url_post = 'https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx'

data_post = {
    '__VIEWSTATE': viewstate,
    '__VIEWSTATEGENERATOR': viewstategenerator,
    'from': 'http://so.gushiwen.cn/user/collect.aspx',
    'email': '595165358@qq.com',
    'pwd': 'action',
    'code': code_name,
    'denglu': '登录',
}

response_post = session.post(url=url, headers=headers, data=data_post)

content_post = response_post.text

with open('gushiwen.html', 'w', encoding=' utf-8') as fp:
    fp.write(content_post)
```