import axios from 'axios';

async function testAuth(): Promise<void> {
  try {
    console.log('Testing Registration...');
    const regRes = await axios.post<{ message: string }>('http://localhost:5000/api/auth/register', {
      name: 'Backend Test User',
      email: 'backend@test.com',
      password: 'Password123',
    });
    console.log('Registration Success:', regRes.data.message);

    console.log('Testing Login...');
    const loginRes = await axios.post<{ token: string }>('http://localhost:5000/api/auth/login', {
      email: 'backend@test.com',
      password: 'Password123',
    });
    console.log('Login Success! Token received:', loginRes.data.token.substring(0, 20) + '...');

    console.log('Testing Me endpoint...');
    const meRes = await axios.get<{ name: string }>('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${loginRes.data.token}` },
    });
    console.log('Profile Fetch Success:', meRes.data.name);

    console.log('--- ALL AUTH STEPS VERIFIED ---');
    process.exit(0);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Test Failed:', err.response ? err.response.data : err.message);
    } else {
      console.error('Test Failed:', (err as Error).message);
    }
    process.exit(1);
  }
}

testAuth();
