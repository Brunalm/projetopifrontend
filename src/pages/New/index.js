import React from 'react';

import { useAuth } from '../../contexts/auth';

export default function New() {

    const { user, login, logout } = useAuth();

    console.log(user);

    return <h1>Hello Ecommerce</h1>
}