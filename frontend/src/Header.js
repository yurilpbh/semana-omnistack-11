import React from 'react'; //Importação essencial para JSX

//Para injetar JS é necessário utilizar chaves
export default function Header([children]) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}