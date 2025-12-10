# OneDrive Workers

> 不能再简单了

## 安装指导

### 一、注册应用程序

1. 登录到 [Microsoft Entra 管理中心](https://entra.microsoft.com)。
2. 如果有权访问多个租户，请使用顶部菜单中的 **“设置”** 图标，从 **“目录 + 订阅”** 菜单切换到要在其中注册应用程序的租户。
3. 浏览到 **“标识” > “应用程序” > “应用注册”**，然后选择 **“新建注册”**。
4. 输入应用程序的显示 **名称**。
5. 在 **“支持的帐户类型”** 部分中选择 **“仅限此组织目录中的帐户”**。
6. 不要为重定向 URI 输入任何内容。
7. 选择 **“注册”** 以完成初始应用注册。

![Microsoft Entra 管理中心的“注册应用程序”窗格](https://learn.microsoft.com/zh-cn/graph/images/quickstart-register-app/portal-02-app-reg-01.png)

注册完成后，Microsoft Entra 管理中心将显示应用注册的 **“概述”** 窗格。请记下 **“应用程序 (客户端) ID”**，这将作为 `client_id`。

![应用注册的“概述”窗格](https://learn.microsoft.com/zh-cn/graph/images/quickstart-register-app/portal-03-app-reg-02.png)

### 二、添加凭据

1.  在 **“管理”** 下，选择 **“证书和机密” > “客户端机密” > “新建客户端密码”**。
2.  添加客户端密码的说明。
3.  选择机密的过期时间或指定自定义生存期。
    *   客户端密码生存期限制为两年（24 个月）或更短。不能指定超过 24 个月的自定义生存期。
    *   Microsoft 建议将过期值设置为小于 12 个月。
4.  选择 **“添加”**。
5.  **记录要在客户端应用程序代码中使用的机密值。离开此页面后，永远不会再次显示此机密值。** 此即为 `client_secret`。

### 三、配置 Microsoft Graph 的权限

*   在应用程序的 **“API 权限”** 页上，选择 **“添加权限”**。
*   选择 **“Microsoft Graph”**，然后选择 **“应用程序权限”**。
*   在 **“选择权限”** 对话框中，选择 `Files.Read.All`。
*   点击 **“添加权限”**。
*   待操作完成后，点击 **“代表 (你的组织名称) 授予管理员同意”**。

### 四、部署

1.  将 `worker.js` 部署到 Cloudflare Workers 上。
2.  将以下参数填入对应的位置：
    *   `client_id` 与 `client_secret`：见上文。
    *   `tenate`：打开 [Microsoft Entra 管理中心](https://entra.microsoft.com/#home)，找到 **“租户 ID”**。
    *   `driver_id`：用对应账号登录到 [Graph Explorer](https://developer.microsoft.com/zh-cn/graph/graph-explorer) 并请求 `https://graph.microsoft.com/v1.0/me/drive/?$select=id`。
    *   `root`：起始目录，例如 `/files`。
    *   `proxyhost` (选填)：代理服务器域名，例如 `proxy.mydomain.com`。

---

## 使用

有两个查询字符串参数：`view` 和 `proxy`。

### `view` 参数
有两个可选值：
*   `video`：使用 `?view=video` 可以在线预览视频。
*   `videojs`：使用 `?view=videojs` 可以在线预览视频（使用 Video.js 播放器）。

### `proxy` 参数
有 `true` 和 `false` 两个值：
*   使用 `?proxy=true` 可以启用代理。

---

**更完整的版本**：[OneManager-cfworkerskv](https://github.com/qkqpttgf/OneManager-cfworkerskv/)