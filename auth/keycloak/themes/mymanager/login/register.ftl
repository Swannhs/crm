<#import "template.ftl" as layout>
<@layout.registrationLayout; section>
    <#if section = "header">
        <h1>${msg("register")}</h1>
        <p class="subtitle">${msg("registerSubtitle")}</p>
    <#elseif section = "form">
        <form id="kc-register-form" action="${url.registrationAction}" method="post">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <div class="form-group">
                    <label for="firstName">${msg("firstName")}</label>
                    <input type="text" id="firstName" name="firstName" value="${(register.formData.firstName!'')}" autocomplete="given-name" />
                </div>
                <div class="form-group">
                    <label for="lastName">${msg("lastName")}</label>
                    <input type="text" id="lastName" name="lastName" value="${(register.formData.lastName!'')}" autocomplete="family-name" />
                </div>
            </div>

            <div class="form-group">
                <label for="email">${msg("email")}</label>
                <input type="text" id="email" name="email" value="${(register.formData.email!'')}" autocomplete="email" />
            </div>

            <#if !realm.registrationEmailAsUsername>
                <div class="form-group">
                    <label for="username">${msg("username")}</label>
                    <input type="text" id="username" name="username" value="${(register.formData.username!'')}" autocomplete="username" />
                </div>
            </#if>

            <#if passwordRequired??>
                <div class="form-group">
                    <label for="password">${msg("password")}</label>
                    <input type="password" id="password" name="password" autocomplete="new-password" placeholder="${msg("passwordPlaceholder")}" />
                </div>

                <div class="form-group">
                    <label for="password-confirm">${msg("passwordConfirm")}</label>
                    <input type="password" id="password-confirm" name="password-confirm" autocomplete="new-password" placeholder="${msg("passwordPlaceholder")}" />
                </div>
            </#if>

            <div style="margin-top: 32px;">
                <button type="submit" name="register">${msg("registerButton")}</button>
            </div>

            <div style="text-align: center; margin-top: 24px; font-size: 0.875rem;">
                <span style="color: var(--text-secondary);">${msg("alreadyHaveAccount")}</span>
                <a href="${url.loginUrl}">${msg("signIn")}</a>
            </div>
        </form>
    </#if>
</@layout.registrationLayout>
