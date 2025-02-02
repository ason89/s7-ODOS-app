const local = {
    api: {
      URL: "https://71746357-3db1-4773-a74c-220be7c205e0.mock.pstmn.io" //URL Rewrite will take care of this
    },
    keycloak:{
        URL: "http://localhost:8080/auth"
    }
  };
  
  const dev = {
    api: {
      URL: "https://71746357-3db1-4773-a74c-220be7c205e0.mock.pstmn.io"
    },
    keycloak:{
        URL: "http://localhost:8080/auth"
    }
  };
  
  const variables = process.env.REACT_APP_STAGE === "development" ? dev : local;
  
  export const config = {
    // Add common config values here
    ...variables
  };
   