import React from 'react';

import { useAuth } from '../../contexts/auth';

export default function New() {

    const { user } = useAuth();

    console.log(user);

    return <h1>Hello Ecommerce</h1>
}