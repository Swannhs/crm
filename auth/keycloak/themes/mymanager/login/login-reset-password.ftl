<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        <h1>${msg("forgotPasswordTitle")}</h1>
        <p class="subtitle">${msg("forgotPasswordSubtitle")}</p>
    <#elseif section = "form">
        <form id="kc-reset-password-form" action="${url.loginAction}" method="post">
            <div class="form-group">
                <label for="username">${msg("email")}</label>
                <input type="text" id="username" name="username" autofocus value="${(auth.attemptedUsername!'')}" placeholder="${msg("emailPlaceholder")}" />
            </div>

            <div style="margin-top: 32px;">
                <button type="submit">${msg("sendRequestButton")}</button>
            </div>

            <div style="text-align: center; margin-top: 24px; font-size: 0.875rem;">
                <a href="${url.loginUrl}" style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    ${msg("backToSignIn")}
                </a>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>
