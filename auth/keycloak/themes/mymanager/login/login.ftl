<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=realm.password && realm.registrationAllowed && !registrationDisabled??; section>
    <#if section = "header">
        <h1>${msg("signIn")}</h1>
        <p class="subtitle">${msg("signInSubtitle")}</p>
    <#elseif section = "form">
        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
            <div class="form-group">
                <label for="username">${msg("email")}</label>
                <input id="username" name="username" value="${(login.username!'')}" type="text" autofocus autocomplete="off" placeholder="${msg("emailPlaceholder")}" />
            </div>

            <div class="form-group">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <label for="password" style="margin-bottom: 0;">${msg("password")}</label>
                    <#if realm.resetPasswordAllowed>
                        <a href="${url.loginResetCredentialsUrl}" style="font-size: 0.8125rem; font-weight: 500;">${msg("forgotPassword")}</a>
                    </#if>
                </div>
                <input id="password" name="password" type="password" autocomplete="off" placeholder="${msg("passwordPlaceholder")}" />
            </div>

            <div style="margin-top: 32px;">
                <button type="submit" name="login" id="kc-login">${msg("signInButton")}</button>
            </div>
        </form>
    <#elseif section = "info">
        <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
            <div id="kc-registration" style="text-align: center; margin-top: 24px; font-size: 0.875rem;">
                <span style="color: var(--text-secondary);">${msg("dontHaveAccount")}</span>
                <a href="${url.registrationUrl}">${msg("getStarted")}</a>
            </div>
        </#if>
    </#if>
</@layout.registrationLayout>
