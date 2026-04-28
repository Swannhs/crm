<#import "template.ftl" as layout>
<@layout.registrationLayout displayMessage=false; section>
    <#if section = "header">
        <h1>${msg("errorTitle")}</h1>
        <p class="subtitle">${msg("errorSubtitle")}</p>
    <#elseif section = "form">
        <div class="alert alert-error">
            ${message.summary?no_esc}
        </div>

        <#if client?? && client.baseUrl?has_content>
            <div style="margin-top: 32px;">
                <button onclick="window.location.href='${client.baseUrl}'">${msg("backToApp")}</button>
            </div>
        </#if>
    </#if>
</@layout.registrationLayout>
