import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        console.log(serviceName, price, image, description);

        const service = {
            service_name: serviceName,
            price: price,
            image: image,
            description: description
        }

        fetch('https://wildlife-photographer-server.vercel.app/allServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Added Successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }





    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col my-8 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Add a Service</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100 px-16">
                        <form onSubmit={handleAddService} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" placeholder="Service Name" className="input input-bordered w-full"
                                    name='serviceName'
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" className="input input-bordered"
                                    name='price'
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL Of the Service</span>
                                </label>
                                <input type="text" placeholder="Image URL" className="input input-bordered"
                                    name='image'
                                    required
                                />
                            </div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Description About Service"
                                name='description'
                                required
                            ></textarea>


                            <div className="form-control mt-6">
                                <input className='btn btn-accent' type="submit" value="Add Service" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;