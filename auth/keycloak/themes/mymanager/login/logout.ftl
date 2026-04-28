<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        <div style="width: 64px; height: 64px; background-color: rgba(0, 167, 111, 0.08); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 24px auto 24px auto; color: var(--primary-main);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </div>
        <h1>${msg("loggedOutTitle")}</h1>
        <p class="subtitle">${msg("loggedOutSubtitle")}</p>
    <#elseif section = "form">
        <div style="margin-top: 32px;">
            <button type="button" onclick="location.href='${url.loginUrl}'">
                ${msg("signBackIn")}
            </button>
        </div>
    </#if>
</@layout.registrationLayout>
