import React from "react";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Components/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick.css";
import "slick-theme.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(

  <QueryClientProvider client={queryClient}>
      <App tab="home" />
  </QueryClientProvider>
);

