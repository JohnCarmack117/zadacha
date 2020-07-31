import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return(
        <div className='about-page'>
            <h1>Информация о нашей фирме</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia, vitae ea nobis tenetur adipisci
               repellendus eos quia illo? Animi possimus perspiciatis ex repellat tempore obcaecati eaque aut, quasi
               impedit sed. A cum quidem perferendis dolores molestiae repellendus, labore iure, quae veritatis excepturi
               optio cumque ipsum nemo dolor. Laudantium earum possimus velit nesciunt iure architecto, repellendus beatae
               necessitatibus vero, aliquid laboriosam voluptatem impedit nemo rerum reiciendis commodi minus hic voluptatibus
               odit. Quis beatae quisquam non, earum vel excepturi. Suscipit, corporis voluptates nesciunt iusto quasi veritatis
               impedit delectus error cupiditate sapiente eius illo cum? Nihil sit voluptas, esse accusantium quis adipisci.
            </p>
            <Button variant="contained" color="primary" onClick={() => history.push('/')}>Вернуться на главную</Button>
        </div>
    )
}