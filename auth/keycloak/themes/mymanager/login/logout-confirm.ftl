<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirm Logout | MyManager</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
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
            <h1>Confirm sign out</h1>
            <p class="subtitle">Are you sure you want to end your current session?</p>
        </div>

        <#if logout?? && logout.sessionCode??>
            <form id="kc-logout-form" class="form-action" action="${url.logoutConfirmAction}" method="POST">
                <input type="hidden" name="session_code" value="${logout.sessionCode}">
                
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 32px;">
                    <button type="submit" name="confirmLogout" id="kc-logout" style="width: 100%; padding: 14px 22px; font-size: 0.9375rem; font-weight: 700; color: #FFFFFF; background-color: var(--error-main); border: none; border-radius: 12px; cursor: pointer; transition: all 250ms ease; box-shadow: 0 8px 16px 0 rgba(255, 86, 48, 0.2);">
                        Yes, sign out
                    </button>
                    
                    <a href="${client.baseUrl!''}" style="text-decoration: none; width: 100%;">
                        <button type="button" style="width: 100%; padding: 14px 22px; font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); background-color: transparent; border: 1px solid var(--border-color); border-radius: 12px; cursor: pointer; transition: all 250ms ease;">
                            Cancel
                        </button>
                    </a>
                </div>
            </form>
        <#else>
            <div class="alert alert-error" style="margin-top: 24px; text-align: center; justify-content: center;">
                Session not found or already signed out.
            </div>
            <div style="margin-top: 32px; text-align: center;">
                <a href="${url.loginUrl}" style="text-decoration: none;">
                    <button type="button" style="width: 100%; padding: 14px 22px; font-size: 0.9375rem; font-weight: 700; color: #FFFFFF; background-color: var(--text-primary); border: none; border-radius: 12px; cursor: pointer; transition: all 250ms ease;">
                        Back to Login
                    </button>
                </a>
            </div>
        </#if>

        <div class="footer">
            <p>&copy; 2024 MyManager. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
