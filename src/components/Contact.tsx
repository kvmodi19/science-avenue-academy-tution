import Image from 'next/image'
import getConfig from 'next/config'; 
const { publicRuntimeConfig } = getConfig();

export default function Contact() {
    const sendMessage = (event: any) => {
        event.preventDefault();
        window.open(`https://wa.me/918905970710?text=Hi,%0aMy name is ${event.target.name.value}%0a%0a${event.target.message.value}`, '_blank');
    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <form id="contact-form" onSubmit={sendMessage}>
                        <div className="section-title">
                            <h2>Contact us <small>we love conversations. let us talk!</small></h2>
                        </div>

                        <div className="col-md-12 col-sm-12">
                            <input type="text" className="form-control" placeholder="Enter full name" name="name" id="name" required />

                            {/* <input type="email" className="form-control" placeholder="Enter email address" name="email" required /> */}

                            <textarea className="form-control" rows={6} placeholder="Tell us about your message" name="message" id="message" required></textarea>
                        </div>

                        <div className="col-md-12 col-sm-12">
                            <input type="submit" className="form-control" name="send message" value="Send Message on Whatsapp" />
                        </div>

                    </form>
                </div>

                {/* <div className="col-md-6 col-sm-12">
                    <div className="contact-image">
                        <Image
                            src={`${publicRuntimeConfig.staticFolder || ''}/images/contact-image.jpg`}
                            className="img-responsive"
                            layout='fill'
                            objectFit='contain'
                            alt="Smiling Two Girls" />
                    </div>
                </div> */}

            </div>
        </div>
    )
}