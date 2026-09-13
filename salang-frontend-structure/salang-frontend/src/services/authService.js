// Placeholder — will call /auth/** via gateway
export const authService = {
  login: async (email, password) => ({ token: 'mock-token', user: { email } }),
  register: async (data) => ({ message: 'Registered' }),
  logout: async () => {},
}
