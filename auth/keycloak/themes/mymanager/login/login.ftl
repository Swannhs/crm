<#import "template.ftl" as layout>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${msg("loginTitle", (realm.displayName!''))}</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
</head>
<body>
    <div class="login-card">
        <div class="card-header">
            <div class="logo-text">MyManager</div>
            <h1>Sign in to your account</h1>
            <p class="subtitle">Enter your details to continue</p>
        </div>

        <#if message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
            <div class="alert alert-${message.type}">
                ${kcSanitize(message.summary)?no_esc}
            </div>
        </#if>

        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <div class="form-group">
                <label for="username">Email address</label>
                <input id="username" name="username" value="${(login.username!'')}" type="text" autofocus autocomplete="off" placeholder="Email address" />
            </div>

            <div class="form-group">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <label for="password" style="margin-bottom: 0;">Password</label>
                    <a href="${url.loginResetCredentialsUrl}" style="font-size: 0.8125rem;">Forgot password?</a>
                </div>
                <input id="password" name="password" type="password" autocomplete="off" placeholder="Password" />
            </div>

            <button type="submit" name="login" id="kc-login">Sign in</button>
        </form>

        <div class="footer">
            <p>Don't have an account? <a href="${url.registrationUrl}">Get started</a></p>
        </div>
    </div>
</body>
</html>
