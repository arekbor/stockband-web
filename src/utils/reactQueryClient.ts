import { QueryClient } from "react-query";

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      notifyOnChangeProps: "tracked",
      staleTime: 0,
      retry: 0,
    },
  },
});

export default reactQueryClient;
