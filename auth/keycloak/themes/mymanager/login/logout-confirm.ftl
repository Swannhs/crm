<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        <h1>${msg("confirmLogoutTitle")}</h1>
        <p class="subtitle">${msg("confirmLogoutSubtitle")}</p>
    <#elseif section = "form">
        <#if logout?? && logout.sessionCode??>
            <form id="kc-logout-form" class="form-action" action="${url.logoutConfirmAction}" method="POST">
                <input type="hidden" name="session_code" value="${logout.sessionCode}">
                
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 32px;">
                    <button type="submit" name="confirmLogout" id="kc-logout" style="background-color: var(--error-main); box-shadow: 0 8px 16px 0 rgba(255, 86, 48, 0.24);">
                        ${msg("yesSignOut")}
                    </button>
                    
                    <button type="button" onclick="location.href='${client.baseUrl!''}'" style="color: var(--text-primary); background-color: transparent; border: 1px solid var(--border-color); box-shadow: none;">
                        ${msg("cancel")}
                    </button>
                </div>
            </form>
        <#else>
            <div style="margin-top: 32px; text-align: center;">
                <button type="button" onclick="location.href='${url.loginUrl}'">
                    ${msg("backToLogin")}
                </button>
            </div>
        </#if>
    </#if>
</@layout.registrationLayout>
