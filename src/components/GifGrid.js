import React, {  Fragment} from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const { data: images ,loading} = useFetchGifs(category);

    console.log(loading);

    // useEffect( () => {
    //     getGifs(category)
    //         .then(imgs => setImages( imgs))
    // }, [category]);

    

    return(
        <Fragment>
            <h3 className="animate__fadeIn">{category}</h3>
            { loading && <p>Loading</p>}
            <div className='card-grid'>
                
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {}

export default GifGrid