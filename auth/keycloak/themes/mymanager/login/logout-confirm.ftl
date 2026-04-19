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
        <div class="card-header" style="text-align: center;">
            <div class="logo-text">MyManager</div>
            <h1>Confirm log out</h1>
            <p class="subtitle">Are you sure you want to log out of your session?</p>
        </div>

        <form id="kc-logout-form" class="form-action" action="${url.logoutConfirmAction}" method="POST">
            <input type="hidden" name="session_code" value="${logout.sessionCode}">
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
                <button type="submit" name="confirmLogout" id="kc-logout" style="width: 100%; padding: 11px 22px; font-size: 0.9375rem; font-weight: 700; color: #FFFFFF; background-color: var(--error-main); border: none; border-radius: 8px; cursor: pointer;">
                    Yes, log out
                </button>
                
                <a href="${client.baseUrl!''}" style="text-decoration: none; width: 100%;">
                    <button type="button" style="width: 100%; padding: 11px 22px; font-size: 0.9375rem; font-weight: 700; color: var(--text-primary); background-color: transparent; border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer;">
                        Cancel
                    </button>
                </a>
            </div>
        </form>

        <div class="footer">
            <p>&copy; 2024 MyManager. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
