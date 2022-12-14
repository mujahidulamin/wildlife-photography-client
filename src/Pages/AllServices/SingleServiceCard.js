import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const SingleServiceCard = ({ singleService }) => {
    
    const { _id, price, image, service_name, description } = singleService;



    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="card w-full bg-base-100 shadow-xl drop-shadow-xl my-8">
            <PhotoProvider>
                <figure className="px-10 pt-10">
                    <PhotoView src={image}>
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </figure>
            </PhotoProvider>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{service_name}
                </h2>
                <p className='font-bold text-xl'>Price: {price}</p>
                <p><span className='font-bold'>Description:</span> {description.slice(0, 100) + '...'} </p>
                <Link to={`/services/${_id}`}>
                    <button className="btn btn-accent">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleServiceCard;