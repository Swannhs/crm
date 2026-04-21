import { AuthService } from '../services/auth.service.js';
export class AuthController {
    authService = new AuthService();
    async signup(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const result = await this.authService.signup(orgId, req.body);
            return res.status(201).json({ data: result });
        }
        catch (err) {
            console.error('Signup Error:', err.message);
            return res.status(400).json({ message: err.message });
        }
    }
    async login(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const result = await this.authService.login(orgId, req.body);
            return res.json({ data: result });
        }
        catch (err) {
            console.error('Login Error:', err.message);
            return res.status(401).json({ message: err.message });
        }
    }
}
