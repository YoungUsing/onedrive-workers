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
<h2 id="add-credentials" class="heading-anchor">二.添加凭据</h2>
<ol>
<li>在 <strong>管理</strong>下，选择 <strong>证书和机密</strong>&gt;<strong>客户端机密</strong>&gt;<strong>新建客户端密码</strong>”。</li>
<li>添加客户端密码的说明。</li>
<li>选择机密的过期时间或指定自定义生存期。
<ul>
<li>客户端机密生存期限制为两年 (24 个月) 或更短。 不能指定超过 24 个月的自定义生存期。</li>
<li>Microsoft建议将过期值设置为小于 12 个月。</li>
</ul>
</li>
<li>选择“<strong>添加</strong>”。</li>
<li>
              <em>记录要在</em> 客户端应用程序代码中使用的机密值。 离开此页面后 <em>，永远不会再次显示</em> 此机密值。</li>
</ol>


























<p/>const中client_id与client_secret获取详见 <a href="https://learn.microsoft.com/zh-cn/graph/auth-v2-service">身份验证和授权-无用户访问</a>
<p/>需授予应用程序类别的files.readAll权限
<p/>tenate获取：<a href="https://entra.microsoft.com/#home">Microsoft Entra 管理中心</a>的租户ID
<p/>driver_id获取：登录到 <a href="https://developer.microsoft.com/zh-cn/graph/graph-explorer">Graph-explorer</a> 并请求https://graph.microsoft.com/v1.0/me/drive/?$select=id

<p>更完整的版本 <a href="https://github.com/qkqpttgf/OneManager-cfworkerskv/">OneManager-cfworkerskv</a></p>
