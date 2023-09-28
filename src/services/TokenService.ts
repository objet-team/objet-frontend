import { Cookies } from 'react-cookie';

class TokenService {
  cookie = new Cookies();

  setToken(token: string) {
    this.cookie.set('token', token, { path: '/' });
  }

  setId(id: number) {
    this.cookie.set('id', id, { path: '/' });
  }

  setRole(role: string) {
    this.cookie.set('role', role, { path: '/' });
  }

  setName(name: string) {
    this.cookie.set('name', name, { path: '/' });
  }

  getToken() {
    return this.cookie.get('token');
  }

  getId() {
    return this.cookie.get('id');
  }

  getRole() {
    return this.cookie.get('role');
  }

  getName() {
    return this.cookie.get('name');
  }
  logout() {
    this.cookie.remove('token');
    this.cookie.remove('id');
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
const api = new TokenService();
export default api;
