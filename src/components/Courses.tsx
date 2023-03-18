import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {

    return (
    <div className="container">
          <div className="row">

            <div className="col-md-12 col-sm-12">
              <div className="section-title">
                <h2>Popular Courses <small>Upgrade your skills with newest courses</small></h2>
              </div>

              <div className="owl-carousel owl-theme owl-courses">
                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <Image src="/images/courses-image1.jpg" className="img-responsive" width={100} height={100} alt="" />
                        </div>
                        <div className="courses-date">
                          <span><i className="fa fa-calendar"></i> 12 / 7 / 2018</span>
                          <span><i className="fa fa-clock-o"></i> 7 Hours</span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3><Link href="#">Social Media Management</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <Image src="/images/author-image1.jpg" className="img-responsive" width={100} height={100} alt="" />
                          <span>Mark Wilson</span>
                        </div>
                        <div className="courses-price">
                          <Link href="#"><span>USD 25</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <Image src="/images/courses-image2.jpg" className="img-responsive" width={100} height={100} alt="" />
                        </div>
                        <div className="courses-date">
                          <span><i className="fa fa-calendar"></i> 20 / 7 / 2018</span>
                          <span><i className="fa fa-clock-o"></i> 4.5 Hours</span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3><Link href="#">Graphic & Web Design</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <Image src="/images/author-image2.jpg" className="img-responsive" width={100} height={100} alt="" />
                          <span>Jessica</span>
                        </div>
                        <div className="courses-price">
                          <Link href="#"><span>USD 80</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <Image src="/images/courses-image3.jpg" className="img-responsive" width={100} height={100} alt="" />
                        </div>
                        <div className="courses-date">
                          <span><i className="fa fa-calendar"></i> 15 / 8 / 2018</span>
                          <span><i className="fa fa-clock-o"></i> 6 Hours</span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3><Link href="#">Marketing Communication</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <Image src="/images/author-image3.jpg" className="img-responsive" width={100} height={100} alt="" />
                          <span>Catherine</span>
                        </div>
                        <div className="courses-price free">
                          <Link href="#"><span>Free</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <Image src="/images/courses-image4.jpg" className="img-responsive" width={100} height={100} alt="" />
                        </div>
                        <div className="courses-date">
                          <span><i className="fa fa-calendar"></i> 10 / 8 / 2018</span>
                          <span><i className="fa fa-clock-o"></i> 8 Hours</span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3><Link href="#">Summer Kids</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <Image src="/images/author-image1.jpg" className="img-responsive" width={100} height={100} alt="" />
                          <span>Mark Wilson</span>
                        </div>
                        <div className="courses-price">
                          <Link href="#"><span>USD 45</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="item">
                    <div className="courses-thumb">
                      <div className="courses-top">
                        <div className="courses-image">
                          <Image src="/images/courses-image5.jpg" className="img-responsive" width={100} height={100} alt="" />
                        </div>
                        <div className="courses-date">
                          <span><i className="fa fa-calendar"></i> 5 / 10 / 2018</span>
                          <span><i className="fa fa-clock-o"></i> 10 Hours</span>
                        </div>
                      </div>

                      <div className="courses-detail">
                        <h3><Link href="#">Business &amp; Management</Link></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>

                      <div className="courses-info">
                        <div className="courses-author">
                          <Image src="/images/author-image2.jpg" className="img-responsive" width={100} height={100} alt="" />
                          <span>Jessica</span>
                        </div>
                        <div className="courses-price free">
                          <Link href="#"><span>Free</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
)
}