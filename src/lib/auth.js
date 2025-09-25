const HASHED_PASSWORD = '3d976d1f2fe1124e0c50a1b6ea1f2fb839ca8a957144adb8ffc6210f3a06959d';

const hashText = async (text) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};

export const verifyPassword = async (input) => {
  if (typeof window === 'undefined') return false;
  const hashed = await hashText(input);
  return hashed === HASHED_PASSWORD;
};

export const getPasswordHint = () => 'City name + year + !';
