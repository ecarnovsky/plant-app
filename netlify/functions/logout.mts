import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Logged out successfully"
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Something went wrong",
        error: error.message
      })
    };
  }
};

export { handler };