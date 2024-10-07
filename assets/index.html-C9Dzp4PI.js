import{_ as s,c as a,a as p,o as e}from"./app-DXtlDOGr.js";const l={};function t(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="爬虫基础笔记" tabindex="-1"><a class="header-anchor" href="#爬虫基础笔记"><span>爬虫基础笔记</span></a></h1><h2 id="【1】爬虫设计思路" tabindex="-1"><a class="header-anchor" href="#【1】爬虫设计思路"><span>【1】爬虫设计思路</span></a></h2><p>确定要爬取的url如何获取 -&gt; 模拟浏览器通过http协议访问url，获取服务器返回的html -&gt; 解析html字符串（根据一定规则提取需要的数据）</p><h2 id="【2】编码" tabindex="-1"><a class="header-anchor" href="#【2】编码"><span>【2】编码</span></a></h2><p>由于计算机是美国人发明的，因此，最早只有127个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为ASCII编码，比如大写字母A的编码是65，小写字母z的编码是122。但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和ASCII编码冲突，所以，中国制定了GB2312编码，用来把中文编进去。日本把日文编到Shift_JIS里，韩国把韩文编到Euc‐kr里，各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。因此，Unicode应运而生。Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了。Unicode标准也在不断发展，但最常用的是用两个字节表示一个字符（如果要用到非常偏僻的字符，就需要4个字节）。现代操作系统和大多数编程语言都直接支持Unicode</p><h2 id="【3】urllib-常用api" tabindex="-1"><a class="header-anchor" href="#【3】urllib-常用api"><span>【3】urllib - 常用API</span></a></h2><table><thead><tr><th>API</th><th>作用</th><th>备注</th></tr></thead><tbody><tr><td>urllib.request.urlopen()</td><td>模拟浏览器向服务器发送请求</td><td>返回数据类型是HttpResponse的response。字节转字符串是解码(decode)，字符串转字节是编码(encode)</td></tr><tr><td>response.read()</td><td>字节形式读取二进制</td><td>rede(5)返回前几个字节</td></tr><tr><td>response.readline()</td><td>读取一行</td><td></td></tr><tr><td>response.readlines()</td><td>一行一行读取 直至结束</td><td></td></tr><tr><td>response.getcode()</td><td>获取状态码</td><td></td></tr><tr><td>response.geturl()</td><td>获取url</td><td></td></tr><tr><td>urllib.request.urlretrieve()</td><td>请求网页/请求图片/请求视频</td><td></td></tr></tbody></table><h2 id="【4】urllib-基本使用" tabindex="-1"><a class="header-anchor" href="#【4】urllib-基本使用"><span>【4】urllib - 基本使用</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 使用urllib来获取百度首页的源码</span></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line"><span class="token comment"># (1)定义一个url  就是你要访问的地址</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># (2)模拟浏览器向服务器发送请求 response响应</span></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （3）获取响应中的页面的源码  content 内容的意思</span></span>
<span class="line"><span class="token comment"># read方法  返回的是字节形式的二进制数据</span></span>
<span class="line"><span class="token comment"># 我们要将二进制的数据转换为字符串</span></span>
<span class="line"><span class="token comment"># 二进制--》字符串  解码  decode(&#39;编码的格式&#39;)</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （4）打印数据</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 一个类型和六个方法</span></span>
<span class="line"><span class="token comment"># response是HTTPResponse的类型</span></span>
<span class="line"><span class="token comment"># print(type(response))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按照一个字节一个字节的去读</span></span>
<span class="line"><span class="token comment"># content = response.read()</span></span>
<span class="line"><span class="token comment"># print(content)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回多少个字节</span></span>
<span class="line"><span class="token comment"># content = response.read(5)</span></span>
<span class="line"><span class="token comment"># print(content)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 读取一行</span></span>
<span class="line"><span class="token comment"># content = response.readline()</span></span>
<span class="line"><span class="token comment"># print(content)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># content = response.readlines()</span></span>
<span class="line"><span class="token comment"># print(content)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回状态码  如果是200了 那么就证明我们的逻辑没有错</span></span>
<span class="line"><span class="token comment"># print(response.getcode())</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回的是url地址</span></span>
<span class="line"><span class="token comment"># print(response.geturl())</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取是一个状态信息</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>getheaders<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 一个类型 HTTPResponse</span></span>
<span class="line"><span class="token comment"># 六个方法 read  readline  readlines  getcode geturl getheaders</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【5】urllib-下载" tabindex="-1"><a class="header-anchor" href="#【5】urllib-下载"><span>【5】urllib - 下载</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 使用urllib来获取百度首页的源码</span></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载网页</span></span>
<span class="line"><span class="token comment"># url_page = &#39;http://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># url代表的是下载的路径  filename文件的名字</span></span>
<span class="line"><span class="token comment"># 在python中 可以变量的名字  也可以直接写值</span></span>
<span class="line"><span class="token comment"># urllib.request.urlretrieve(url_page,&#39;baidu.html&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载图片</span></span>
<span class="line"><span class="token comment"># url_img = &#39;https://img1.baidu.com/it/u=3004965690,4089234593&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># urllib.request.urlretrieve(url= url_img,filename=&#39;lisa.jpg&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载视频</span></span>
<span class="line">url_video <span class="token operator">=</span> <span class="token string">&#39;https://vd3.bdstatic.com/mda-mhkku4ndaka5etk3/1080p/cae_h264/1629557146541497769/mda-mhkku4ndaka5etk3.mp4?v_from_s=hkapp-haokan-tucheng&amp;auth_key=1629687514-0-0-7ed57ed7d1168bb1f06d18a4ea214300&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=&#39;</span></span>
<span class="line"></span>
<span class="line">urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlretrieve<span class="token punctuation">(</span>url_video<span class="token punctuation">,</span> <span class="token string">&#39;hxekyyds.mp4&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【6】urllib-请求对象定制" tabindex="-1"><a class="header-anchor" href="#【6】urllib-请求对象定制"><span>【6】urllib - 请求对象定制</span></a></h2><p>语法:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>demo:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># url的组成</span></span>
<span class="line"><span class="token comment"># https://www.baidu.com/s?wd=周杰伦</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># http/https    www.baidu.com   80/443     s      wd = 周杰伦     #</span></span>
<span class="line"><span class="token comment">#    协议             主机        端口号     路径     参数           锚点</span></span>
<span class="line"><span class="token comment"># http   80</span></span>
<span class="line"><span class="token comment"># https  443</span></span>
<span class="line"><span class="token comment"># mysql  3306</span></span>
<span class="line"><span class="token comment"># oracle 1521</span></span>
<span class="line"><span class="token comment"># redis  6379</span></span>
<span class="line"><span class="token comment"># mongodb 27017</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 因为urlopen方法中不能存储字典 所以headers不能传递进去</span></span>
<span class="line"><span class="token comment"># 请求对象的定制</span></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【7】urllib-get" tabindex="-1"><a class="header-anchor" href="#【7】urllib-get"><span>【7】urllib - get</span></a></h2><p>quote(): 将单个字符串编码转化为 %xx%xx 的形式</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token builtin">bytes</span>类型对象 <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>quote<span class="token punctuation">(</span><span class="token builtin">str</span>类型对象<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token builtin">str</span>类型对象 <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>unquote<span class="token punctuation">(</span><span class="token builtin">bytes</span>类型对象<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>urlencode(): 将字典或者包含两个元素的元组列表转化成: &quot;key1=value1&amp;key2=value2&quot;</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urldecode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>quote()</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># https://www.baidu.com/s?wd=%E5%91%A8%E6%9D%B0%E4%BC%A6</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 需求 获取 https://www.baidu.com/s?wd=周杰伦的网页源码</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/s?wd=&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求对象的定制为了解决反爬的第一种手段</span></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将周杰伦三个字变成unicode编码的格式</span></span>
<span class="line"><span class="token comment"># 我们需要依赖于urllib.parse</span></span>
<span class="line">name <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>quote<span class="token punctuation">(</span><span class="token string">&#39;周杰伦&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> url <span class="token operator">+</span> name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求对象的定制</span></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 模拟浏览器向服务器发送请求</span></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取响应的内容</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印数据</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>urlencode()</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 获取https://www.baidu.com/s?wd=%E5%91%A8%E6%9D%B0%E4%BC%A6&amp;sex=%E7%94%B7的网页源码</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse</span>
<span class="line"></span>
<span class="line">base_url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/s?&#39;</span></span>
<span class="line"></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;wd&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;周杰伦&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;sex&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;location&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;中国台湾省&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">new_data <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求资源路径</span></span>
<span class="line">url <span class="token operator">=</span> base_url <span class="token operator">+</span> new_data</span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求对象的定制</span></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 模拟浏览器向服务器发送请求</span></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取网页源码的数据</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印数据</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【8】urllib-post" tabindex="-1"><a class="header-anchor" href="#【8】urllib-post"><span>【8】urllib - post</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># post请求</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;kw&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;spider&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># post请求的参数 必须要进行编码</span></span>
<span class="line">data <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># post的请求的参数 是不会拼接在url的后面的  而是需要放在请求对象定制的参数中</span></span>
<span class="line"><span class="token comment"># post请求的参数 必须要进行编码</span></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span>data<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 模拟浏览器向服务器发送请求</span></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取响应的数据</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串--》json对象</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> json</span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># post请求方式的参数 必须编码   data = urllib.parse.urlencode(data)</span></span>
<span class="line"><span class="token comment"># 编码之后 必须调用encode方法 data = urllib.parse.urlencode(data).encode(&#39;utf-8&#39;)</span></span>
<span class="line"><span class="token comment"># 参数是放在请求对象定制的方法中  request = urllib.request.Request(url=url,data=data,headers=headers)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【9】urllib-异常" tabindex="-1"><a class="header-anchor" href="#【9】urllib-异常"><span>【9】urllib - 异常</span></a></h2><p>导入包urllib.error.HTTPError / urllib.error.URLError，HTTPError类是URLError类的子类。http错误是针对浏览器无法连接到服务器而增加出来的错误提示。引导并告诉浏览者该页是哪里出了问题。可以通过try‐ except进行捕获异常使得代码更加健壮</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>error</span>
<span class="line"></span>
<span class="line"><span class="token comment"># url = &#39;https://blog.csdn.net/sulixu/article/details/1198189491&#39;</span></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.doudan1111.com&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">    request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>HTTPError<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;系统正在升级。。。&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>URLError<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;我都说了 系统正在升级。。。&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【10】urllib-handler处理器" tabindex="-1"><a class="header-anchor" href="#【10】urllib-handler处理器"><span>【10】urllib - handler处理器</span></a></h2><p>可以定制更高级的请求头 ，核心handler / opener / open</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 需求 使用handler来访问百度  获取网页源码</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># handler   build_opener  open</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （1）获取hanlder对象</span></span>
<span class="line">handler <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>HTTPHandler<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （2）获取opener对象</span></span>
<span class="line">opener <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span>handler<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># (3) 调用open方法</span></span>
<span class="line">response <span class="token operator">=</span> opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【11】urllib-代理服务器" tabindex="-1"><a class="header-anchor" href="#【11】urllib-代理服务器"><span>【11】urllib - 代理服务器</span></a></h2><ol><li><p>代理的常用功能</p><ul><li><p>突破自身IP访问限制，访问国外站点</p></li><li><p>访问一些单位或团体内部资源</p></li><li><p>提高访问速度</p></li><li><p>隐藏真实IP</p></li></ul></li><li><p>配置代理</p><ul><li>创建Reuqest对象</li><li>创建ProxyHandler对象</li><li>创建opener对象</li><li>使用opener.open函数发送请求</li></ul></li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line">proxies_pool <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;118.24.219.151:16817&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;118.24.219.151:16817&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> random</span>
<span class="line"></span>
<span class="line">proxies <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span>proxies_pool<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com/s?wd=ip&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">handler <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>ProxyHandler<span class="token punctuation">(</span>proxies<span class="token operator">=</span>proxies<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">opener <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span>handler<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">response <span class="token operator">=</span> opener<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;daili.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span></span>
<span class="line">    fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【12】xpath" tabindex="-1"><a class="header-anchor" href="#【12】xpath"><span>【12】xpath</span></a></h2><p>安装lxml库</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> lxml ‐i https://pypi.douban.com/simple</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导入lxml.etree</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析本地文件</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">html_tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;XX.html&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>解析服务器响应文件</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">html_tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf‐8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过xpath语法获取数据</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">html_tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span>xpath路径<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>demo:</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>l1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>l2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>深圳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>武汉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!--    &lt;ul&gt;--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!--        &lt;li&gt;大连&lt;/li&gt;--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!--        &lt;li&gt;锦州&lt;/li&gt;--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!--        &lt;li&gt;沈阳&lt;/li&gt;--&gt;</span></span>
<span class="line"><span class="token comment">&lt;!--    &lt;/ul&gt;--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree</span>
<span class="line"></span>
<span class="line"><span class="token comment"># xpath解析</span></span>
<span class="line"><span class="token comment"># （1）本地文件                                                etree.parse</span></span>
<span class="line"><span class="token comment"># （2）服务器响应的数据  response.read().decode(&#39;utf-8&#39;) *****   etree.HTML()</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># xpath解析本地文件</span></span>
<span class="line">tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">&#39;070_尚硅谷_爬虫_解析_xpath的基本使用.html&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># tree.xpath(&#39;xpath路径&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找ul下面的li //: 查找所有子孙节点，不考虑层级关系 /: 找直接子节点 </span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//body/ul/li&#39;)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找所有有id的属性的li标签</span></span>
<span class="line"><span class="token comment"># text()获取标签中的内容</span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//ul/li[@id]/text()&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 找到id为l1的li标签  注意引号的问题</span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//ul/li[@id=&quot;l1&quot;]/text()&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找到id为l1的li标签的class的属性值</span></span>
<span class="line"><span class="token comment"># li = tree.xpath(&#39;//ul/li[@id=&quot;l1&quot;]/@class&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询id中包含l的li标签</span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//ul/li[contains(@id,&quot;l&quot;)]/text()&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询id的值以l开头的li标签</span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//ul/li[starts-with(@id,&quot;c&quot;)]/text()&#39;)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查询id为l1和class为c1的</span></span>
<span class="line"><span class="token comment"># li_list = tree.xpath(&#39;//ul/li[@id=&quot;l1&quot; and @class=&quot;c1&quot;]/text()&#39;)</span></span>
<span class="line"></span>
<span class="line">li_list <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//ul/li[@id=&quot;l1&quot;]/text() | //ul/li[@id=&quot;l2&quot;]/text()&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 判断列表的长度</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>li_list<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>li_list<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo2:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># （1） 获取网页的源码</span></span>
<span class="line"><span class="token comment"># （2） 解析   解析的服务器响应的文件  etree.HTML</span></span>
<span class="line"><span class="token comment"># (3)  打印</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 请求对象的定制</span></span>
<span class="line">request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 模拟浏览器访问服务器</span></span>
<span class="line">response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取网页源码</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解析网页源码 来获取我们想要的数据</span></span>
<span class="line"><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解析服务器响应的文件</span></span>
<span class="line">tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取想要的数据  xpath的返回值是一个列表类型的数据</span></span>
<span class="line">result <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//input[@id=&quot;su&quot;]/@value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo3:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># (1) 请求对象的定制</span></span>
<span class="line"><span class="token comment"># （2）获取网页的源码</span></span>
<span class="line"><span class="token comment"># （3）下载</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 需求 下载的前十页的图片</span></span>
<span class="line"><span class="token comment"># https://sc.chinaz.com/tupian/qinglvtupian.html   1</span></span>
<span class="line"><span class="token comment"># https://sc.chinaz.com/tupian/qinglvtupian_page.html</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">create_request</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>page <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        url <span class="token operator">=</span> <span class="token string">&#39;https://sc.chinaz.com/tupian/qinglvtupian.html&#39;</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        url <span class="token operator">=</span> <span class="token string">&#39;https://sc.chinaz.com/tupian/qinglvtupian_&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.html&#39;</span></span>
<span class="line"></span>
<span class="line">    headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> request</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_content</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">    content <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> content</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">down_load</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment">#     下载图片</span></span>
<span class="line">    <span class="token comment"># urllib.request.urlretrieve(&#39;图片地址&#39;,&#39;文件的名字&#39;)</span></span>
<span class="line">    tree <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    name_list <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//div[@id=&quot;container&quot;]//a/img/@alt&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 一般设计图片的网站都会进行懒加载</span></span>
<span class="line">    src_list <span class="token operator">=</span> tree<span class="token punctuation">.</span>xpath<span class="token punctuation">(</span><span class="token string">&#39;//div[@id=&quot;container&quot;]//a/img/@src2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>name_list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        name <span class="token operator">=</span> name_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        src <span class="token operator">=</span> src_list<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line">        url <span class="token operator">=</span> <span class="token string">&#39;https:&#39;</span> <span class="token operator">+</span> src</span>
<span class="line"></span>
<span class="line">        urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlretrieve<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> filename<span class="token operator">=</span><span class="token string">&#39;./loveImg/&#39;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span></span>
<span class="line">    start_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入起始页码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    end_page <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入结束页码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> page <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start_page<span class="token punctuation">,</span> end_page <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># (1) 请求对象的定制</span></span>
<span class="line">        request <span class="token operator">=</span> create_request<span class="token punctuation">(</span>page<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># （2）获取网页的源码</span></span>
<span class="line">        content <span class="token operator">=</span> get_content<span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment"># （3）下载</span></span>
<span class="line">        down_load<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【13】jsonpath" tabindex="-1"><a class="header-anchor" href="#【13】jsonpath"><span>【13】JsonPath</span></a></h2><p>安装JsonPath</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> jsonpath</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>加载Json数据</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">obj <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;json文件&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf‐8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>根据JsonPath解析Json数据</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">ret <span class="token operator">=</span> jsonpath<span class="token punctuation">.</span>jsonpath<span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;jsonpath语法&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>demo:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span> <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;book&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修真&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;六道&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;坏蛋是怎样练成的&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修真&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;天蚕土豆&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;斗破苍穹&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修真&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;唐家三少&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;斗罗大陆&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span> <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;修真&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;南派三叔&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;星辰变&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;bicycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;老马&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;黑色&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">19.95</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> json</span>
<span class="line"><span class="token keyword">import</span> jsonpath</span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> json<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;073_尚硅谷_爬虫_解析_jsonpath.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 书店所有书的作者</span></span>
<span class="line"><span class="token comment"># author_list = jsonpath.jsonpath(obj,&#39;$.store.book[*].author&#39;)</span></span>
<span class="line"><span class="token comment"># print(author_list)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 所有的作者</span></span>
<span class="line"><span class="token comment"># author_list = jsonpath.jsonpath(obj,&#39;$..author&#39;)</span></span>
<span class="line"><span class="token comment"># print(author_list)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># store下面的所有的元素</span></span>
<span class="line"><span class="token comment"># tag_list = jsonpath.jsonpath(obj,&#39;$.store.*&#39;)</span></span>
<span class="line"><span class="token comment"># print(tag_list)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># store里面所有东西的price</span></span>
<span class="line"><span class="token comment"># price_list = jsonpath.jsonpath(obj, &#39;$.store..price&#39;)</span></span>
<span class="line"><span class="token comment"># print(price_list)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 第三个书</span></span>
<span class="line"><span class="token comment"># book = jsonpath.jsonpath(obj,&#39;$..book[2]&#39;)</span></span>
<span class="line"><span class="token comment"># print(book)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 最后一本书</span></span>
<span class="line"><span class="token comment"># book = jsonpath.jsonpath(obj,&#39;$..book[(@.length-1)]&#39;)</span></span>
<span class="line"><span class="token comment"># print(book)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 	前面的两本书</span></span>
<span class="line"><span class="token comment"># book_list = jsonpath.jsonpath(obj,&#39;$..book[0,1]&#39;)</span></span>
<span class="line"><span class="token comment"># book_list = jsonpath.jsonpath(obj,&#39;$..book[:2]&#39;)</span></span>
<span class="line"><span class="token comment"># print(book_list)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 条件过滤需要在（）的前面添加一个？</span></span>
<span class="line"><span class="token comment"># 	 过滤出所有的包含isbn的书。</span></span>
<span class="line"><span class="token comment"># book_list = jsonpath.jsonpath(obj,&#39;$..book[?(@.isbn)]&#39;)</span></span>
<span class="line"><span class="token comment"># print(book_list)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 哪本书超过了10块钱</span></span>
<span class="line"><span class="token comment"># book_list = jsonpath.jsonpath(obj, &#39;$..book[?(@.price&gt;10)]&#39;)</span></span>
<span class="line"><span class="token comment"># print(book_list)</span></span>
<span class="line"></span>
<span class="line">输出<span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token string">&#39;六道&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;唐家三少&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token string">&#39;六道&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;唐家三少&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;老马&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;六道&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;坏蛋是怎样练成的&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.95</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗破苍穹&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">12.99</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;唐家三少&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗罗大陆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-553-21311-3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.99</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;星辰变&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-395-19395-8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">22.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;老马&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;color&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;黑色&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">19.95</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">8.95</span><span class="token punctuation">,</span> <span class="token number">12.99</span><span class="token punctuation">,</span> <span class="token number">8.99</span><span class="token punctuation">,</span> <span class="token number">22.99</span><span class="token punctuation">,</span> <span class="token number">19.95</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;唐家三少&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗罗大陆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-553-21311-3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;星辰变&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-395-19395-8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">22.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;六道&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;坏蛋是怎样练成的&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.95</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗破苍穹&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">12.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;六道&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;坏蛋是怎样练成的&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.95</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗破苍穹&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">12.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;唐家三少&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗罗大陆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-553-21311-3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">8.99</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;星辰变&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-395-19395-8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">22.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;天蚕土豆&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;斗破苍穹&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">12.99</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;category&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;修真&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;南派三叔&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;星辰变&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;isbn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;0-395-19395-8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">:</span> <span class="token number">22.99</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【14】beautifulsoup" tabindex="-1"><a class="header-anchor" href="#【14】beautifulsoup"><span>【14】BeautifulSoup</span></a></h2><p>安装bs4</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> bs4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导入</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>服务器响应文件生成对象</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>本地文件生成对象(注意：默认打开文件的编码格式gbk所以需要指定打开编码格式 )</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;1.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>demo</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>l1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>l2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>李四<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>王五<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>尚硅谷<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>嘿嘿嘿<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            哈哈哈</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>呵呵呵<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过解析本地文件 来将bs4的基础语法进行讲解</span></span>
<span class="line"><span class="token comment"># 默认打开的文件的编码格式是gbk 所以在打开文件的时候需要指定编码</span></span>
<span class="line">soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;075_尚硅谷_爬虫_解析_bs4的基本使用.html&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据标签名查找节点</span></span>
<span class="line"><span class="token comment"># 找到的是第一个符合条件的数据</span></span>
<span class="line"><span class="token comment"># print(soup.a)</span></span>
<span class="line"><span class="token comment"># 获取标签的属性和属性值</span></span>
<span class="line"><span class="token comment"># print(soup.a.attrs)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># bs4的一些函数</span></span>
<span class="line"><span class="token comment"># （1）find</span></span>
<span class="line"><span class="token comment"># 返回的是第一个符合条件的数据</span></span>
<span class="line"><span class="token comment"># print(soup.find(&#39;a&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据title的值来找到对应的标签对象</span></span>
<span class="line"><span class="token comment"># print(soup.find(&#39;a&#39;,title=&quot;a2&quot;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据class的值来找到对应的标签对象  注意的是class需要添加下划线</span></span>
<span class="line"><span class="token comment"># print(soup.find(&#39;a&#39;,class_=&quot;a1&quot;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （2）find_all  返回的是一个列表 并且返回了所有的a标签</span></span>
<span class="line"><span class="token comment"># print(soup.find_all(&#39;a&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 如果想获取的是多个标签的数据 那么需要在find_all的参数中添加的是列表的数据</span></span>
<span class="line"><span class="token comment"># print(soup.find_all([&#39;a&#39;,&#39;span&#39;]))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># limit的作用是查找前几个数据</span></span>
<span class="line"><span class="token comment"># print(soup.find_all(&#39;li&#39;,limit=2))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （3）select（推荐）</span></span>
<span class="line"><span class="token comment"># select方法返回的是一个列表  并且会返回多个数据</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;a&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 可以通过.代表class  我们把这种操作叫做类选择器</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;.a1&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;#l1&#39;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 属性选择器---通过属性来寻找对应的标签</span></span>
<span class="line"><span class="token comment"># 查找到li标签中有id的标签</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;li[id]&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查找到li标签中id为l2的标签</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;li[id=&quot;l2&quot;]&#39;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 层级选择器</span></span>
<span class="line"><span class="token comment">#  后代选择器</span></span>
<span class="line"><span class="token comment"># 找到的是div下面的li</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;div li&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 子代选择器</span></span>
<span class="line"><span class="token comment">#  某标签的第一级子标签</span></span>
<span class="line"><span class="token comment"># 注意：很多的计算机编程语言中 如果不加空格不会输出内容  但是在bs4中 不会报错 会显示内容</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;div &gt; ul &gt; li&#39;))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 找到a标签和li标签的所有的对象</span></span>
<span class="line"><span class="token comment"># print(soup.select(&#39;a,li&#39;))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 节点信息</span></span>
<span class="line"><span class="token comment">#    获取节点内容</span></span>
<span class="line"><span class="token comment"># obj = soup.select(&#39;#d1&#39;)[0]</span></span>
<span class="line"><span class="token comment"># 如果标签对象中 只有内容 那么string和get_text()都可以使用</span></span>
<span class="line"><span class="token comment"># 如果标签对象中 除了内容还有标签 那么string就获取不到数据 而get_text()是可以获取数据</span></span>
<span class="line"><span class="token comment"># 我们一般情况下  推荐使用get_text()</span></span>
<span class="line"><span class="token comment"># print(obj.string)</span></span>
<span class="line"><span class="token comment"># print(obj.get_text())</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 节点的属性</span></span>
<span class="line"><span class="token comment"># obj = soup.select(&#39;#p1&#39;)[0]</span></span>
<span class="line"><span class="token comment"># name是标签的名字</span></span>
<span class="line"><span class="token comment"># print(obj.name)</span></span>
<span class="line"><span class="token comment"># 将属性值左右一个字典返回</span></span>
<span class="line"><span class="token comment"># print(obj.attrs)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取节点的属性</span></span>
<span class="line">obj <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#p1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【15】selenium" tabindex="-1"><a class="header-anchor" href="#【15】selenium"><span>【15】Selenium</span></a></h2><p>操作谷歌浏览器驱动下载地址</p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http" data-title="http"><pre><code><span class="line"><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//chromedriver.storage.googleapis.com/index.html</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>谷歌驱动和谷歌浏览器版本之间的映射表</p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http" data-title="http"><pre><code><span class="line"><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//blog.csdn.net/huilan_same/article/details/51896672</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看谷歌浏览器版本</p><div class="language-tex line-numbers-mode" data-highlighter="prismjs" data-ext="tex" data-title="tex"><pre><code><span class="line">谷歌浏览器右上角‐‐&gt;帮助‐‐&gt;关于</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装Selenium</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> selenium</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导入</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建谷歌浏览器操作对象</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">path <span class="token operator">=</span> 谷歌浏览器驱动文件路径</span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问网址</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">url <span class="token operator">=</span> 要访问的网址</span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>demo:</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># （1）导入selenium</span></span>
<span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"></span>
<span class="line"><span class="token comment"># (2) 创建浏览器操作对象</span></span>
<span class="line"></span>
<span class="line">path <span class="token operator">=</span> <span class="token string">&#39;chromedriver.exe&#39;</span></span>
<span class="line"></span>
<span class="line">browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># （3）访问网站</span></span>
<span class="line"><span class="token comment"># url = &#39;https://www.baidu.com&#39;</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># browser.get(url)</span></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.jd.com/&#39;</span></span>
<span class="line"></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># page_source获取网页源码</span></span>
<span class="line">content <span class="token operator">=</span> browser<span class="token punctuation">.</span>page_source</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 元素定位</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据id来找到对象</span></span>
<span class="line"><span class="token comment"># button = browser.find_element_by_id(&#39;su&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据标签属性的属性值来获取对象的</span></span>
<span class="line"><span class="token comment"># button = browser.find_element_by_name(&#39;wd&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据xpath语句来获取对象</span></span>
<span class="line"><span class="token comment"># button = browser.find_elements_by_xpath(&#39;//input[@id=&quot;su&quot;]&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 根据标签的名字来获取对象</span></span>
<span class="line"><span class="token comment"># button = browser.find_elements_by_tag_name(&#39;input&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用的bs4的语法来获取对象</span></span>
<span class="line"><span class="token comment"># button = browser.find_elements_by_css_selector(&#39;#su&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># button = browser.find_element_by_link_text(&#39;直播&#39;)</span></span>
<span class="line"><span class="token comment"># print(button)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">input</span> <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;su&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取标签的属性</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">.</span>get_attribute<span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 获取标签的名字</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">.</span>tag_name<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取元素文本</span></span>
<span class="line">a <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_link_text<span class="token punctuation">(</span><span class="token string">&#39;新闻&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> time</span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取文本框的对象</span></span>
<span class="line"><span class="token builtin">input</span> <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;kw&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在文本框中输入周杰伦</span></span>
<span class="line"><span class="token builtin">input</span><span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&#39;周杰伦&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取百度一下的按钮</span></span>
<span class="line">button <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_id<span class="token punctuation">(</span><span class="token string">&#39;su&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击按钮</span></span>
<span class="line">button<span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 滑到底部</span></span>
<span class="line">js_bottom <span class="token operator">=</span> <span class="token string">&#39;document.documentElement.scrollTop=100000&#39;</span></span>
<span class="line">browser<span class="token punctuation">.</span>execute_script<span class="token punctuation">(</span>js_bottom<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取下一页的按钮</span></span>
<span class="line"><span class="token builtin">next</span> <span class="token operator">=</span> browser<span class="token punctuation">.</span>find_element_by_xpath<span class="token punctuation">(</span><span class="token string">&#39;//a[@class=&quot;n&quot;]&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击下一页</span></span>
<span class="line"><span class="token builtin">next</span><span class="token punctuation">.</span>click<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 回到上一页</span></span>
<span class="line">browser<span class="token punctuation">.</span>back<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 回去</span></span>
<span class="line">browser<span class="token punctuation">.</span>forward<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出</span></span>
<span class="line">browser<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【16】selenium-handless" tabindex="-1"><a class="header-anchor" href="#【16】selenium-handless"><span>【16】Selenium - handless</span></a></h2><p>Chrome-headless 模式， Google 针对 Chrome 浏览器 59版 新增加的一种模式，可以让你不打开UI界面的情况下使用 Chrome 浏览器，所以运行效果与 Chrome 保持完美一致。</p><p>系统要求：</p><p>Chrome</p><p>​ Unix\\Linux 系统需要 chrome &gt;= 59</p><p>​ Windows 系统需要 chrome &gt;= 60</p><p>Python3.6</p><p>Selenium==3.4.*</p><p>ChromeDriver==2.31</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver</span>
<span class="line"><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">share_browser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    chrome_options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--headless&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;--disable-gpu&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># path是你自己的chrome浏览器的文件路径</span></span>
<span class="line">    path <span class="token operator">=</span> <span class="token string">r&#39;C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe&#39;</span></span>
<span class="line">    chrome_options<span class="token punctuation">.</span>binary_location <span class="token operator">=</span> path</span>
<span class="line"></span>
<span class="line">    browser <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>chrome_options<span class="token operator">=</span>chrome_options<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> browser</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">browser <span class="token operator">=</span> share_browser<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line">browser<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">browser<span class="token punctuation">.</span>save_screenshot<span class="token punctuation">(</span><span class="token string">&#39;baidu.png&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【17】requests-常用api" tabindex="-1"><a class="header-anchor" href="#【17】requests-常用api"><span>【17】requests - 常用API</span></a></h2><p>官方文档</p><div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http" data-title="http"><pre><code><span class="line"><span class="token header"><span class="token header-name keyword">http</span><span class="token punctuation">:</span><span class="token header-value">//cn.python‐requests.org/zh_CN/latest/</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">pip <span class="token function">install</span> requests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 一个类型和六个属性</span></span>
<span class="line"><span class="token comment"># Response类型</span></span>
<span class="line"><span class="token comment"># print(type(response))</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置响应的编码格式</span></span>
<span class="line"><span class="token comment"># response.encoding = &#39;utf-8&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 以字符串的形式来返回了网页的源码</span></span>
<span class="line"><span class="token comment"># print(response.text)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回一个url地址</span></span>
<span class="line"><span class="token comment"># print(response.url)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回的是二进制的数据</span></span>
<span class="line"><span class="token comment"># print(response.content)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回响应的状态码</span></span>
<span class="line"><span class="token comment"># print(response.status_code)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 返回的是响应头</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【18】requests-get" tabindex="-1"><a class="header-anchor" href="#【18】requests-get"><span>【18】requests - get</span></a></h2><p>get请求</p><p>​ 参数使用params传递</p><p>​ 参数无需urlencode编码</p><p>​ 不需要请求对象的定制</p><p>​ 请求资源路径中的？可以加也可以不加</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://www.baidu.com/s&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;wd&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;北京&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># url  请求资源路径</span></span>
<span class="line"><span class="token comment"># params 参数</span></span>
<span class="line"><span class="token comment"># kwargs 字典</span></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>params<span class="token operator">=</span>data<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【19】requests-post" tabindex="-1"><a class="header-anchor" href="#【19】requests-post"><span>【19】requests - post</span></a></h2><p>post 请求</p><p>​ post请求是不需要编解码</p><p>​ post请求的参数是data</p><p>​ 不需要请求对象的定制</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;kw&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;eye&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># url 请求地址</span></span>
<span class="line"><span class="token comment"># data 请求参数</span></span>
<span class="line"><span class="token comment"># kwargs 字典</span></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span>data<span class="token operator">=</span>data<span class="token punctuation">,</span>headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span>response<span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> json</span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>content<span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【20】requests-代理" tabindex="-1"><a class="header-anchor" href="#【20】requests-代理"><span>【20】requests - 代理</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;http://www.baidu.com/s?&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;wd&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;ip&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">proxy <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;212.129.251.55:16816&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url <span class="token operator">=</span> url<span class="token punctuation">,</span>params<span class="token operator">=</span>data<span class="token punctuation">,</span>headers <span class="token operator">=</span> headers<span class="token punctuation">,</span>proxies <span class="token operator">=</span> proxy<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;daili.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token keyword">as</span> fp<span class="token punctuation">:</span></span>
<span class="line">    fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【21】requests-cookie" tabindex="-1"><a class="header-anchor" href="#【21】requests-cookie"><span>【21】requests - cookie</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 通过登陆  然后进入到主页面</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 通过找登陆接口我们发现 登陆的时候需要的参数很多</span></span>
<span class="line"><span class="token comment"># _VIEWSTATE: /m1O5dxmOo7f1qlmvtnyNyhhaUrWNVTs3TMKIsm1lvpIgs0WWWUCQHl5iMrvLlwnsqLUN6Wh1aNpitc4WnOt0So3k6UYdFyqCPI6jWSvC8yBA1Q39I7uuR4NjGo=</span></span>
<span class="line"><span class="token comment"># __VIEWSTATEGENERATOR: C93BE1AE</span></span>
<span class="line"><span class="token comment"># from: http://so.gushiwen.cn/user/collect.aspx</span></span>
<span class="line"><span class="token comment"># email: 595165358@qq.com</span></span>
<span class="line"><span class="token comment"># pwd: action</span></span>
<span class="line"><span class="token comment"># code: PId7</span></span>
<span class="line"><span class="token comment"># denglu: 登录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 我们观察到_VIEWSTATE   __VIEWSTATEGENERATOR  code是一个可以变化的量</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 难点:(1)_VIEWSTATE   __VIEWSTATEGENERATOR  一般情况看不到的数据 都是在页面的源码中</span></span>
<span class="line"><span class="token comment">#     我们观察到这两个数据在页面的源码中 所以我们需要获取页面的源码 然后进行解析就可以获取了</span></span>
<span class="line"><span class="token comment">#     (2)验证码</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> requests</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 这是登陆页面的url地址</span></span>
<span class="line">url <span class="token operator">=</span> <span class="token string">&#39;https://so.gushiwen.cn/user/login.aspx?from=http://so.gushiwen.cn/user/collect.aspx&#39;</span></span>
<span class="line"></span>
<span class="line">headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取页面的源码</span></span>
<span class="line">response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span></span>
<span class="line">content <span class="token operator">=</span> response<span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解析页面源码  然后获取_VIEWSTATE   __VIEWSTATEGENERATOR</span></span>
<span class="line"><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup</span>
<span class="line"></span>
<span class="line">soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取_VIEWSTATE</span></span>
<span class="line">viewstate <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#__VIEWSTATE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取__VIEWSTATEGENERATOR</span></span>
<span class="line">viewstategenerator <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#__VIEWSTATEGENERATOR&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取验证码图片</span></span>
<span class="line">code <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#imgCode&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>attrs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span></span>
<span class="line">code_url <span class="token operator">=</span> <span class="token string">&#39;https://so.gushiwen.cn&#39;</span> <span class="token operator">+</span> code</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 有坑</span></span>
<span class="line"><span class="token comment"># import urllib.request</span></span>
<span class="line"><span class="token comment"># urllib.request.urlretrieve(url=code_url,filename=&#39;code.jpg&#39;)</span></span>
<span class="line"><span class="token comment"># requests里面有一个方法 session（）  通过session的返回值 就能使用请求变成一个对象</span></span>
<span class="line"></span>
<span class="line">session <span class="token operator">=</span> requests<span class="token punctuation">.</span>session<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 验证码的url的内容</span></span>
<span class="line">response_code <span class="token operator">=</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>code_url<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 注意此时要使用二进制数据  因为我们要使用的是图片的下载</span></span>
<span class="line">content_code <span class="token operator">=</span> response_code<span class="token punctuation">.</span>content</span>
<span class="line"><span class="token comment"># wb的模式就是将二进制数据写入到文件</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;code.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span></span>
<span class="line">    fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content_code<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取了验证码的图片之后 下载到本地 然后观察验证码  观察之后 然后在控制台输入这个验证码 就可以将这个值给</span></span>
<span class="line"><span class="token comment"># code的参数 就可以登陆</span></span>
<span class="line"></span>
<span class="line">code_name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;请输入你的验证码&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 点击登陆</span></span>
<span class="line">url_post <span class="token operator">=</span> <span class="token string">&#39;https://so.gushiwen.cn/user/login.aspx?from=http%3a%2f%2fso.gushiwen.cn%2fuser%2fcollect.aspx&#39;</span></span>
<span class="line"></span>
<span class="line">data_post <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&#39;__VIEWSTATE&#39;</span><span class="token punctuation">:</span> viewstate<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;__VIEWSTATEGENERATOR&#39;</span><span class="token punctuation">:</span> viewstategenerator<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;from&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;http://so.gushiwen.cn/user/collect.aspx&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;email&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;595165358@qq.com&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;pwd&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;code&#39;</span><span class="token punctuation">:</span> code_name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&#39;denglu&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">response_post <span class="token operator">=</span> session<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token operator">=</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> data<span class="token operator">=</span>data_post<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">content_post <span class="token operator">=</span> response_post<span class="token punctuation">.</span>text</span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;gushiwen.html&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39; utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> fp<span class="token punctuation">:</span></span>
<span class="line">    fp<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content_post<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,131)]))}const o=s(l,[["render",t],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/docs/python/crawler/","title":"爬虫基础笔记","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"【1】爬虫设计思路","slug":"【1】爬虫设计思路","link":"#【1】爬虫设计思路","children":[]},{"level":2,"title":"【2】编码","slug":"【2】编码","link":"#【2】编码","children":[]},{"level":2,"title":"【3】urllib - 常用API","slug":"【3】urllib-常用api","link":"#【3】urllib-常用api","children":[]},{"level":2,"title":"【4】urllib - 基本使用","slug":"【4】urllib-基本使用","link":"#【4】urllib-基本使用","children":[]},{"level":2,"title":"【5】urllib - 下载","slug":"【5】urllib-下载","link":"#【5】urllib-下载","children":[]},{"level":2,"title":"【6】urllib -  请求对象定制","slug":"【6】urllib-请求对象定制","link":"#【6】urllib-请求对象定制","children":[]},{"level":2,"title":"【7】urllib - get","slug":"【7】urllib-get","link":"#【7】urllib-get","children":[]},{"level":2,"title":"【8】urllib - post","slug":"【8】urllib-post","link":"#【8】urllib-post","children":[]},{"level":2,"title":"【9】urllib - 异常","slug":"【9】urllib-异常","link":"#【9】urllib-异常","children":[]},{"level":2,"title":"【10】urllib - handler处理器","slug":"【10】urllib-handler处理器","link":"#【10】urllib-handler处理器","children":[]},{"level":2,"title":"【11】urllib - 代理服务器","slug":"【11】urllib-代理服务器","link":"#【11】urllib-代理服务器","children":[]},{"level":2,"title":"【12】xpath","slug":"【12】xpath","link":"#【12】xpath","children":[]},{"level":2,"title":"【13】JsonPath","slug":"【13】jsonpath","link":"#【13】jsonpath","children":[]},{"level":2,"title":"【14】BeautifulSoup","slug":"【14】beautifulsoup","link":"#【14】beautifulsoup","children":[]},{"level":2,"title":"【15】Selenium","slug":"【15】selenium","link":"#【15】selenium","children":[]},{"level":2,"title":"【16】Selenium - handless","slug":"【16】selenium-handless","link":"#【16】selenium-handless","children":[]},{"level":2,"title":"【17】requests - 常用API","slug":"【17】requests-常用api","link":"#【17】requests-常用api","children":[]},{"level":2,"title":"【18】requests - get","slug":"【18】requests-get","link":"#【18】requests-get","children":[]},{"level":2,"title":"【19】requests - post","slug":"【19】requests-post","link":"#【19】requests-post","children":[]},{"level":2,"title":"【20】requests - 代理","slug":"【20】requests-代理","link":"#【20】requests-代理","children":[]},{"level":2,"title":"【21】requests - cookie","slug":"【21】requests-cookie","link":"#【21】requests-cookie","children":[]}],"git":{"updatedTime":1728319555000,"contributors":[{"name":"GlobalXiaoHua","email":"409732463@qq.com","commits":1}]},"filePathRelative":"docs/python/crawler/README.md"}');export{o as comp,u as data};
