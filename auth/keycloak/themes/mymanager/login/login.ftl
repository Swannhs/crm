<#import "template.ftl" as layout>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${msg("loginTitle", (realm.displayName!''))}</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
    <style>
        .brand-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 48px;
        }
        .logo-symbol {
            width: 48px;
            height: 48px;
            background-color: var(--primary-main);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 16px;
            box-shadow: 0 8px 16px 0 rgba(0, 167, 111, 0.24);
        }
        .logo-symbol svg {
            color: white;
            width: 28px;
            height: 28px;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <div class="card-header">
            <div class="brand-section">
                <div class="logo-symbol">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <div class="logo-text">MyManager</div>
            </div>
            <h1>Sign in</h1>
            <p class="subtitle">Enter your details below to access your account.</p>
        </div>

        <#if message?has_content && (message.type != 'warning' || !isAppInitiatedAction??)>
            <div class="alert alert-${message.type}">
                ${kcSanitize(message.summary)?no_esc}
            </div>
        </#if>

        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <div class="form-group">
                <label for="username">Email address</label>
                <input id="username" name="username" value="${(login.username!'')}" type="text" autofocus autocomplete="off" placeholder="name@company.com" />
            </div>

            <div class="form-group">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <label for="password" style="margin-bottom: 0;">Password</label>
                    <a href="${url.loginResetCredentialsUrl}" style="font-size: 0.8125rem; font-weight: 500;">Forgot password?</a>
                </div>
                <input id="password" name="password" type="password" autocomplete="off" placeholder="••••••••" />
            </div>

            <div style="margin-top: 32px;">
                <button type="submit" name="login" id="kc-login">Sign in</button>
            </div>
        </form>

        <div class="footer">
            <p>&copy; 2024 MyManager. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
