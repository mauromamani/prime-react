import { store } from '@/store';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';

interface ProvidersProps {
  children: JSX.Element;
}

const Providers = (props: ProvidersProps) => {
  return (
    <>
      <PrimeReactProvider>
        <Provider store={store}>{props.children}</Provider>
      </PrimeReactProvider>
    </>
  );
};

export default Providers;
