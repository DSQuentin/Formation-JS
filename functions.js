// functions
// manière classique
function faireQqch() {
    console.log('test');
}

faireQqch();

// manière moderne
const faireUneTach = (type) => {
    console.log(`Je fais : ${type}`);
}

faireUneTach('la vaisselle');
faireUneTach('les courses');