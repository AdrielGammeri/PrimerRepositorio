import React from 'react';

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return(
        <div className="novedades">
            <div className='conimg'>
                <img className="imgnov" src= {imagen}/>
            </div>
            <div className='con1'>
                <h1 className="titulonov">{title}</h1>
                <h2 className="subtitulonov">{subtitle}</h2>
                <div className='cuerponov' dangerouslySetInnerHTML={{ __html: body}}/>
            </div>
            <hr />
        </div>
    );
}

export default NovedadItem;