import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>ERROR</h1>
            <button onClick={() => navigate('/')}>Geri Dön</button>
        </div>
    );
}
