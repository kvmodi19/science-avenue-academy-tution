export default function About() {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <div className="about-info">
                        <h2>Start your journey to a better life with online practical courses</h2>

                        <figure>
                            <span><i className="fa fa-users"></i></span>
                            <figcaption>
                                <h3>Professional Trainers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                            </figcaption>
                        </figure>

                        <figure>
                            <span><i className="fa fa-certificate"></i></span>
                            <figcaption>
                                <h3>International Certifications</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                            </figcaption>
                        </figure>

                        <figure>
                            <span><i className="fa fa-bar-chart-o"></i></span>
                            <figcaption>
                                <h3>Free for 3 months</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ipsa voluptatibus.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div className="col-md-offset-1 col-md-4 col-sm-12">
                    <div className="entry-form">
                        <form action="#" method="post">
                            <h2>Signup today</h2>
                            <input type="text" name="full name" className="form-control" placeholder="Full name" required />

                            <input type="email" name="email" className="form-control" placeholder="Your email address" required />

                            <input type="password" name="password" className="form-control" placeholder="Your password" required />

                            <button className="submit-btn form-control" id="form-submit">Get started</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}