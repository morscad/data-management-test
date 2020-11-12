import React, { useEffect } from "react";
import "./App.scss";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useWebService } from "./hooks/useWebService";
import { PostList } from "./components/PostList";

export const App = () => {
  const { result, loading, callHTTP } = useWebService({ url: "posts", method: "GET" });

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className='App'>
      {!result && (
        <>
          {!loading && (
            <div className='App__ui-container'>
              <Button variant='contained' color='primary' onClick={callHTTP}>
                Get All Posts
              </Button>
            </div>
          )}
          {loading && (
            <div className='App__ui-container'>
              <CircularProgress />
            </div>
          )}
        </>
      )}
      {result && <PostList list={result} />}
    </div>
  );
};
