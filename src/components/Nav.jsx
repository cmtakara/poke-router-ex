import { Link } from 'react-router';

// we are going to use the Link in a similar manner
// to the way that we used <a> and href in multipage applications
//      (when were only using html and css with no framework)
// you need to add the "to=" attribute to tell the Link where to go
//      and that needs to match one of the Routes in my Router

function Nav() {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>WELCOME</div>
            </Link>
            <Link to='/pokelist'>
                <div>FIND A POKEMON</div>
            </Link>
        </div>
    )
}

export default Nav