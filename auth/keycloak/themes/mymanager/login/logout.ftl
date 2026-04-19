<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Logged Out | MyManager</title>
    <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
    <style>
        .logout-container {
            text-align: center;
        }
        .icon-box {
            width: 64px;
            height: 64px;
            background-color: rgba(0, 167, 111, 0.08);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px auto;
            color: var(--primary-main);
        }
        .icon-box svg {
            width: 32px;
            height: 32px;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <div class="logout-container">
            <div class="card-header">
                <div class="logo-text">MyManager</div>
                <div class="icon-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                </div>
                <h1>You are logged out</h1>
                <p class="subtitle">Thank you for using MyManager. You have successfully signed out of your account.</p>
            </div>

            <div style="margin-top: 32px;">
                <a href="${url.loginUrl}" style="text-decoration: none;">
                    <button type="button" style="width: 100%; padding: 11px 22px; font-size: 0.9375rem; font-weight: 700; color: #FFFFFF; background-color: var(--text-primary); border: none; border-radius: 8px; cursor: pointer;">
                        Sign back in
                    </button>
                </a>
            </div>

            <div class="footer">
                <p>&copy; 2024 MyManager. All rights reserved.</p>
            </div>
        </div>
    </div>
</body>
</html>
