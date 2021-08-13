import HeaderRepo from './HeaderRepo';
import NavbarRepo from './NavbarRepo';
import SecondHeaderRepo from './SecondHeaderRepo';
const repositories = {
    'header': HeaderRepo,
    'navbar': NavbarRepo,
    'secondsection': SecondHeaderRepo
}

export default {
    get: name => repositories[name],
}