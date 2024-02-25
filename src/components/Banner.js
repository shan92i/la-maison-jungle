import '../styles/Banner.css';


function Banner({children}){

    return (<div className='lmj-banner'>{children}</div>);
}

export default Banner; //ça nous épargne d'utiliser les accolades au moment de l'import
