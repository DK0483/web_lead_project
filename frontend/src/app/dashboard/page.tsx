"use client"; // This component uses hooks, so it must be a client component

import React, { useState } from 'react';

// 1. Define a specific type for the user data we expect from the backend.
interface UserData {
  message: string;
}

const DashboardPage = () => {
  // 2. Use the new UserData type instead of 'any' for the state.
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [isLoginLoading, setIsLoginLoading] = useState<boolean>(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

  // Function to log in and get a token from the backend
  const handleLogin = async () => {
    setIsLoginLoading(true);
    setError('');
    setUserData(null);
    setToken(null);
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'testuser', password: 'password' }),
      });

      if (!response.ok) {
        throw new Error(`Authentication failed with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.access_token) {
        setToken(data.access_token);
      } else {
        throw new Error('Login successful, but no access token was provided.');
      }
    } catch (e: unknown) { // 3. Use 'unknown' instead of 'any' for safer error handling.
      console.error(e);
      if (e instanceof Error) {
        setError(`Failed to log in. Please ensure the backend server is running and accessible. Details: ${e.message}`);
      } else {
        setError('An unknown error occurred during login.');
      }
    } finally {
      setIsLoginLoading(false);
    }
  };

  // Function to fetch protected data from the gateway using the obtained token
  const fetchProfile = async () => {
    if (!token) {
      setError('You must log in first to get a token before you can fetch data.');
      return;
    }
    setIsDataLoading(true);
    setError('');
    setUserData(null);
    try {
      const response = await fetch('http://localhost:3001/gateway/user/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setUserData(data);
    } catch (e: unknown) { // 4. Use 'unknown' here as well.
      console.error(e);
      if (e instanceof Error) {
        setError(`Failed to fetch protected data. This could be due to an invalid token or the downstream service being unavailable. Details: ${e.message}`);
      } else {
        setError('An unknown error occurred while fetching data.');
      }
    } finally {
      setIsDataLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Client-Backend Interaction Demo</h1>
      <p className="text-gray-400 mb-8">This page demonstrates how the frontend (this website) communicates with the secure backend API you built.</p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button 
          onClick={handleLogin} 
          className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700 disabled:bg-gray-500"
          disabled={isLoginLoading || isDataLoading}
        >
          {isLoginLoading ? 'Logging In...' : '1. Login & Get JWT'}
        </button>
        <button 
          onClick={fetchProfile} 
          className="bg-green-600 text-white rounded-full px-5 py-2 hover:bg-green-700 disabled:bg-gray-500"
          disabled={isLoginLoading || isDataLoading}
        >
          {isDataLoading ? 'Fetching...' : '2. Fetch Protected Data'}
        </button>
      </div>

      <div className="p-4 sm:p-8 border border-gray-700 rounded-lg bg-gray-900 min-h-[250px] text-left">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">API Call Results</h2>
        {token && (
            <div>
                <p className="text-green-400 font-semibold">Token Received Successfully:</p>
                <p className="text-sm text-green-500 break-all bg-gray-800 p-2 rounded-md mt-2">{token}</p>
            </div>
        )}
        {userData && (
            <div className="mt-4">
                <p className="text-green-400 font-semibold">Protected Data Fetched:</p>
                <pre className="bg-gray-800 p-4 rounded-md mt-2">{JSON.stringify(userData, null, 2)}</pre>
            </div>
        )}
        {error && (
            <div>
                <p className="text-red-500 font-semibold">An Error Occurred:</p> 
                <p className="text-red-600 bg-red-900/20 p-2 rounded-md mt-2">{error}</p>
            </div>
        )}
        {!token && !userData && !error && (
            <p className="text-gray-500 text-center pt-8">Click the buttons above to interact with the backend.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
