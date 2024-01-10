import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            {user.logeado ? (
                <div>
                    <h2>Bienvenido, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    {/* Otros detalles del perfil */}
                </div>
            ) : (
                <p>Por favor, inicia sesión para ver tu perfil.</p>
            )}
        </div>
    );
};

export default UserProfile;