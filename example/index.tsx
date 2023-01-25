// .storybook/preview.js
import 'react-app-polyfill/ie11';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Button from '../src/components/Button/Button';
import Loader from '../src/components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/ThemeProvider';
import { GlobalStyles } from '../src/theme/GlobalStyles';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import BreadcrumbItem from '../src/components/Breadcrumbs/BreadcrumbItem';
import Avatar from '../src/components/Avatar/Avatar';
import AvatarGroup from '../src/components/AvatarGroup/AvatarGroup';
import Table from '../src/components/Table/Table';


const App = () => {
  const columns = [
    { key: 'name', label: 'Name', render: (item : any) => item.name },
    { key: 'age', label: 'Age', render: (item : any) => item.age },
    { key: 'seniority', label: 'Seniority', render: (item : any) => item.seniority },
    { key: 'job', label: 'Job', render: (item : any) => item.job },
];
  const items = [
    { name: 'John Doe', age: 25, seniority: 'Senior', job: 'Frontend' },
    { name: 'Jane Smith', age: 32, seniority: 'Junior', job: 'Backend' },
  ];
  return (
    <ThemeProvider theme={theme}>
      <Table items={items} columns={columns} />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
