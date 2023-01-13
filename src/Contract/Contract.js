import React from 'react';

const Contract = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mx0e2b4', 'template_sndmb6m', e.target, 'qYTC39fN0BVe_QduB')
            .then((result) => {
                toast.success('Message sent successfully')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <h3 className='text-3xl text-center mt-10 text-orange-600 font-bold'>Contract</h3>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <p className='text-secondary text-2xl font-bold'>Easy Transport,Easy Life</p>
                            <p className=" text-secondary">A transport contract is a legally binding contract that deals with freight transportation services such as domestic freight forwarding services, motor carriers, local rail drayage services, domestic water carriers, and others.</p>
                            <p className='text-secondary text-xl font-bold'>Address: Dhaka,Bangladesh</p>
                            <p className='text-secondary text-xl font-bold'>Email: easytransport@gmail.com</p>
                        </div>
                        <div className="card flex-shrink-0 lg:w-1/2 shadow-lg">
                            <form onSubmit={sendEmail} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Type here Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='user_email' placeholder="Type here Your Email" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Massage</span>
                                    </label>
                                    <textarea name='message' className="textarea textarea-bordered" placeholder="Massage"></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contract;