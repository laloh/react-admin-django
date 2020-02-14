import React from 'react';
import { Admin, Resource } from 'react-admin';
import drfProvider from 'ra-data-drf';
import { UserList } from './users';

const App = () => (
    <Admin dataProvider={drfProvider('http://ec2-3-136-154-4.us-east-2.compute.amazonaws.com')}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
