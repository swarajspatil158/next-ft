'use client';

export async function logout() {
  try {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    
    if (response.ok) {
      window.location.href = '/sign-in';
    }
  } catch (error) {
    console.error('Logout failed:', error);
  }
}