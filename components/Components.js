import Image from 'next/image'

export default function Components(){
    return (
        <>
            <div className='banners'>
                <h1>About Us</h1>
            </div>
            
            <div className="dual_section">
                <div className='container'>
                    <section className='text'>
                        <h2>Who we are</h2>
                        <p>We are a conveyancing team who works together with pride to bring out the best of our abilities in die world of IT & Technology. We care for our customers and help wherever we can. We believe with hard work comes great achievements.</p>
                    </section>
                    <section>
                        <Image src={"/working.jpg"} alt="" width="700" height={466.9} />
                    </section>
                </div>
            </div>
            
            <div className={`dual_section white_bac`}>
                <div className='container'>
                    <section className='text'>
                        <h2>Who we are</h2>
                        <p>We are a conveyancing team who works together with pride to bring out the best of our abilities in die world of IT & Technology. We care for our customers and help wherever we can. We believe with hard work comes great achievements.</p>
                    </section>
                    <section>
                        <Image src={"/working.jpg"} alt="" width="700" height={466.9} />
                    </section>
                </div>
            </div>
            
            <div className="quad_section">
                <div className='container'>
                    <section>
                        <h2>What Makes Us Different?</h2>
                        <p>We don’t work on a Break-Fix scheme, resulting in downtime. We take responsibility for every IT service, providing an end-to-end solution before systems become unstable.</p>
                    </section>
                    <section>
                        <h2>Services We Specialise In</h2>
                        <p>Microsoft-based solutions, thus allowing you to maintain your initial competitive advantage without the increased risk associated with large businesses that rely on technology solutions. We provide dynamic services and specialized support for midmarket businesses as well as strategic consulting services for enterprise businesses.</p>
                    </section>
                    <section>
                        <h2>Why Choose Us?</h2>
                        <p>We strive to provide our customers with a highly professional IT service in a timely manner that exceeds our customers’ expectations, offering a variety of services to optimize your technology environment for you.</p>
                    </section>
                    <section>
                        <h2>SLA</h2>
                        <p>Providing SLAs (Service Level Agreements) at affordable monthly rates ensures that our customers get the service they need.</p>
                    </section>
                </div>
            </div>
            
            <div className="timeline">
                <div className='container'>
                    
                    <section>
                        <em className='line'></em>
                        <span></span>
                        <div>
                            <h2>Cloud services</h2>
                            <p>The cloud has become the destination of choice for everything – infrastructure, apps, services, products, and even an operating system. As a result, billions of dollars are being invested in the cloud migration process.</p>
                            <h4>What are the Advantages of Cloud Services?</h4>
                            <p>Businesses can use cloud computing to reduce their operational and fixed monthly costs of hardware, databases, servers, and software licenses, eventually reducing their need for IT resources, including people.</p>
                            <p>The cloud is characterized by 24/7 availability (99.99% uptime). Each cloud service provider manages the servers and data centers, thereby eliminating the need for management by employees.</p>
                            <p>In cloud computing, there are no limits to the number of users or resources. Furthermore, you can increase the processing and resources as needed. If you do not need much processing power, you can reduce it.</p>
                            <p>Cloud service providers have data centers in various locations, which makes them faster and more reliable. Larger companies such as Microsoft and AWS even have data centers around the world.</p>
                            <p>Instead of owning their own computing infrastructure, companies can rent storage and applications from cloud service providers.</p>
                        </div>
                    </section>
                    <section>
                        <em className='line'></em>
                        <span></span>
                        <div>
                            <h2>Backup Solutions</h2>
                            <p>The goal of backup solutions is to prevent data loss by storing copies on external hardware or online platforms, such as a cloud service.</p>
                            <p>Information backup services can help protect your business’ information should any issues occur like a power outage, system failure or ransomware</p>
                            <p>Your enterprise data backups need to be as safe as in a vault, and you must be sure that, in case of disaster strikes, you will be able to recover your data in a short period, and your company will be back in business as if nothing has happened</p>
                        </div>
                    </section>
                    <section>
                        <em className='line'></em>
                        <span></span>
                        <div>
                            <h2>Email Services: Stay professional</h2>
                            <p>Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves.</p>
                        </div>
                    </section>
                    <section>
                        <em className='line'></em>
                        <span></span>
                        <div>
                            <h2>Email retention and E-Discovery</h2>
                            <p>Retain emails across your organization for a specified period to comply with company standards and to counter legal attacks. e-Discovery helps discover such retained emails quickly</p>
                        </div>
                    </section>
                    <section>
                        {/* <em className='line'></em> */}
                        <span></span>
                        <div>
                            <h2>Network Security: Importance of Network Security </h2>
                            <ul>
                                <li>1. Protects Your Data
                                    <p>For businesses and individuals, data is what it takes to be safe and secure. If you are running a business, your data may include marketing materials, financial data, and whatever else forms the backbone of your business. people, you also have financial data and personal information that you don’t want anyone to have access to. Network security ensures that your data stays yours.</p>
                                </li>
                                <li>2. Protects Client Data 
                                    <p>Governments and businesses store data that they do not own. For organizations such as accounting firms and medical clinics, this data is strictly confidential. Ensuring their safety is the responsibility of the organization. This includes properly backing up your data and ensuring that hackers cannot get into your system.</p>
                                </li>
                                <li>3. Prevents Identity Theft
                                    <p>Identity theft can happen when you work in the office or at home. Whether you are a freelancer or an employee, your identity matters. If they enter your system or any other website, their identity will not be visible to third parties. Having a secure network is essential when enterprises process customer information.</p>
                                </li>
                                <li>4. Cyberattacks on the Rise
                                    <p>Attacks such as the Colonial Pipeline are becoming more frequent. Organizations, especially large ones with rescue funding, need to invest now in increased security. Cyberattacks are on the rise for several reasons. The 5G network is one. As the network expands, so do all its vulnerabilities. It’s not enough to embrace something as new and exciting as 5G, you also need a new security system to support it. Technological advances like artificial intelligence and machine learning are also helping hackers. They no longer need to manually hack into the system; they can set up a system to do it for them.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    
                </div>
            </div>
        </>
    )
}
