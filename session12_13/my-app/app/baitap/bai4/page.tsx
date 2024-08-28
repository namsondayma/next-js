// pages/error-handling.tsx
import React from 'react';
import axios from 'axios';

type ErrorPageProps = {
  errorCode?: number;
  message: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode, message }) => {
  return (
    <div>
      <h1>Error {errorCode ? `(${errorCode})` : ''}</h1>
      <p>{message}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('https://example.com/invalid-endpoint');
    
    return {
      props: {
        message: 'Success! This should not show since the endpoint is invalid.',
      },
    };
  } catch (error) {
    // Default error message
    let errorMessage = 'An unexpected error occurred';
    let errorCode: number | undefined;

    if (axios.isAxiosError(error)) {
      if (error.response) {
        errorCode = error.response.status;

        if (errorCode === 404) {
          errorMessage = '404 - Page Not Found';
        } else if (errorCode === 500) {
          errorMessage = '500 - Internal Server Error';
        } else {
          errorMessage = `Unexpected error: ${errorCode}`;
        }
      } else if (error.request) {
        errorMessage = 'No response received from the server.';
      } else {
        errorMessage = `Request error: ${error.message}`;
      }
    } else {
      errorMessage = `An error occurred: ${error.message}`;
    }

    return {
      props: {
        errorCode,
        message: errorMessage,
      },
    };
  }
};

export default ErrorPage;
