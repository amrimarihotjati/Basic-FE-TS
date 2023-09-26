import { useParams } from "react-router-dom";

const withRouter =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (WrappedComponent: any | null) => (props: { id?: string } | null) => {
    const params = useParams<{ id: string }>();

    return <WrappedComponent {...props} params={params} />;
  };

export default withRouter;
