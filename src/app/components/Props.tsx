import React from 'react';
type componentsProps ={name:string,id:string}
const Props = ({name,id}:componentsProps) => {
    return (
        <div>
            <h2 className='text-3xl'>Practicing Props</h2>
        </div>
    );
};

export default Props;