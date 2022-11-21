function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i className="fas fa-star" key={i}></i>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <i className="fas fa-star active" key={i}></i>;
        }
    }
    return stars;
};
function getInitial(string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toString();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toString();
    }
    return initials;
};
function fetchFlavorIcon(flavor) {
    return process.env.PUBLIC_URL + "/assets/img/" + flavor + ".svg";
}
export { Rating, getInitial, fetchFlavorIcon };