# onedrive-workers
<p/>不能再简单了
<h1/>安装指导
<h2>一.注册应用程序</h2>
<p>1.登录到 <a href="https://entra.microsoft.com" data-linktype="external">Microsoft Entra 管理中心</a>。</p>
<p>2.如果有权访问多个租户，请使用顶部菜单中的 <strong>“设置”</strong> 图标从“ <strong>目录 + 订阅</strong> ”菜单切换到要在其中注册应用程序的租户。</p>
<p>3.浏览到<strong>“标识</strong>&gt;<strong>应用程序”</strong>&gt;<strong>应用注册</strong>并选择“<strong>新建注册</strong>”。</p>
<p>4.输入应用程序的显示 <strong>名称</strong> 。</p>
<p>5.在 <strong>支持的帐户类型</strong> 部分中选择<strong>仅限此组织目录中的帐户</strong></p>
<p>6.不要为重定向 URI 输入任何内容。</p>
<p>7.选择“ <strong>注册</strong> ”以完成初始应用注册。</p>
<img src="https://learn.microsoft.com/zh-cn/graph/images/quickstart-register-app/portal-02-app-reg-01.png" alt="Microsoft Entra 管理中心的屏幕截图，其中显示了“注册应用程序”窗格。" data-linktype="relative-path">
<p>注册完成后，Microsoft Entra 管理中心将显示应用注册的“<strong>概述</strong>”窗格。 将<strong>应用程序 (客户端) ID</strong>记下，这将成为<code>client_id</code></p>
<img src="https://learn.microsoft.com/zh-cn/graph/images/quickstart-register-app/portal-03-app-reg-02.png" alt="Web 浏览器中Microsoft Entra 管理中心的屏幕截图，其中显示了应用注册的“概述”窗格。" data-linktype="relative-path">
<h2>二.添加凭据</h2>
<ol>
<li>在 <strong>管理</strong>下，选择 <strong>证书和机密</strong>&gt;<strong>客户端机密</strong>&gt;<strong>新建客户端密码</strong>。</li>
<li>添加客户端密码的说明。</li>
<li>选择机密的过期时间或指定自定义生存期。
<ul>
<li>客户端机密生存期限制为两年 (24 个月) 或更短。 不能指定超过 24 个月的自定义生存期。</li>
<li>Microsoft建议将过期值设置为小于 12 个月。</li>
</ul>
</li>
<li>选择 <strong>添加</strong>。</li>
<li>
              <em>记录要在</em> 客户端应用程序代码中使用的机密值。 离开此页面后 <em>，永远不会再次显示</em> 此机密值。此即为<code>client_secret</code></li>
</ol>
<h2>三.配置 Microsoft Graph 的权限</h2>
<ul>
<li>在应用程序的 <strong>API 权限</strong> 页上，选择 <strong>添加权限</strong>。</li>
<li>选择 <strong>Microsoft Graph</strong>，选择 <strong>应用程序权限</strong>。</li>
<li>在 <strong>选择权限</strong> 对话框中，选择<code>Files.Read.All
</code></li>
<li>点击 <strong>添加权限</strong></li>
<li>待操作完成后，点击 <strong>代表 xxx(组织名称) 授予管理员同意</strong></li>
</ul>
<h2>四.部署</h2>
<p>1.将worker.js部署到cloudflare workers上</p>
<p>2.将<code>client_id</code> <code>client_secret</code> <code>tenate</code> <code>driver_id</code> <code>root</code> <code>proxyhost</code> 填入对应的位置，其中</p>
<ul><li><code>client_id</code>与<code>client_secret</code>见上文</li>
<li><code>tenate</code>：打开<a href="https://entra.microsoft.com/#home">Microsoft Entra 管理中心</a>，找到租户ID</li>
<li><code>driver_id</code>：用对应账号登录到 <a href="https://developer.microsoft.com/zh-cn/graph/graph-explorer">Graph-explorer</a> 并请求https://graph.microsoft.com/v1.0/me/drive/?$select=id</li>
<li><code>root</code>：起始目录,例如<code>/files</code></li>
<li><code>proxyhost</code>(选填)：代理服务器域名，例如<code>proxy.mydomain.com</code></li>
</ul>
<br>
<p>更完整的版本 <a href="https://github.com/qkqpttgf/OneManager-cfworkerskv/">OneManager-cfworkerskv</a></p>
