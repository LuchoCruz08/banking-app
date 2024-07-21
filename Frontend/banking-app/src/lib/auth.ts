export interface RegisterUserDTO {
    email: string;
    password: string;
    name: string;
  }
  
  export interface LoginUserDTO {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    expiresIn: number;
  }
  
  export const signup = async (userData: RegisterUserDTO) => {
    const response = await fetch('http://localhost:8081/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to sign up');
    }
  
    return response.json();
  };
  
  export const login = async (credentials: LoginUserDTO) => {
    const response = await fetch('http://localhost:8081/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Failed to log in');
    }
  
    return response.json() as Promise<LoginResponse>;
  };
  