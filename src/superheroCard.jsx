function SuperheroCard(props) {
    return (
        <div className="hero">
            <h2 className="hero__name">{props.name}</h2>
            <div className="hero__universe">Вселенная: {props.universe}</div>
            <div className="hero__alter">Альтерэго: {props.alterego}</div>
            <div className="hero__work">Род деятельности: {props.occupation}</div>
            <div className="hero__friends">Друзья: {props.friends}</div>
            <div className="hero__power">Суперсилы: {props.superpowers}</div>
            <div className="hero__info">Информация: {props.info}</div>
            <div className="hero__picture"><img className="hero-image" src={props.url} alt='superheroimage' /></div>
        </div>
    )
}

export default SuperheroCard;