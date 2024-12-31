import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Calendar = () => {
  return (
    <>
      <Breadcrumb pageName="Scalabilty" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mx-auto max-w-280">
          <p className="mt-7.5">
            As a system grows, the performance starts to degrade unless we adapt it to deal with that growth.
            Scalability is the property of a system to handle a growing amount of load by adding resources to the system.
          </p>
          <p className="mt-7.5">
            A system that can continuously evolve to support a growing amount of work is scalable.
            In this article, we will explore different ways a system can grow and common ways to make a system scalable.
          </p>

          <p className="mt-7.5">
            <strong>How can a System Grow?</strong>
            A system can grow in several dimensions:
          </p>
          <p className="mt-7.5">
            <strong>1. Growth in User Base</strong><br />
            More users started using the system, leading to an increased number of requests.
            <br />
            Example: A social media platform experiencing a surge in new users.
          </p>
          <p className="mt-7.5">
            <strong>2. Growth in Features</strong><br />
            More features were introduced to expand the system's capabilities.
            <br />
            Example: An e-commerce website adding support for a new payment method.
          </p>
          <p className="mt-7.5">
            <strong>3. Growth in Data Volume</strong><br />
            Growth in the amount of data the system stores and manages due to user activity or logging.
            <br />
            Example: A video streaming platform like YouTube storing more video content over time.
          </p>
          <p className="mt-7.5">
            <strong>4. Growth in Complexity</strong><br />
            The system's architecture evolves to accommodate new features, scale, or integrations, resulting in additional components and dependencies.
            <br />
            Example: A system that started as a simple application is broken into smaller, independent systems.
          </p>
          <p className="mt-7.5">
            <strong>5. Growth in Geographic Reach</strong><br />
            The system is expanded to serve users in new regions or countries.
            <br />
            Example: An e-commerce company launching websites and distribution in new international markets.
          </p>

          <p className="mt-7.5">
            <strong>How to Scale a System?</strong>
            Here are 10 common ways to make a system scalable:
          </p>
          <p className="mt-7.5">
            <strong>1. Vertical Scaling (Scale up)</strong><br />
            This means adding more power to your existing machines by upgrading servers with more RAM, faster CPUs, or additional storage.
            It's a good approach for simpler architectures but has limitations in how far you can go.
          </p>
          <p className="mt-7.5">
            <strong>2. Horizontal Scaling (Scale out)</strong><br />
            This means adding more machines to your system to spread the workload across multiple servers.
            Example: Netflix uses horizontal scaling for its streaming service, adding more servers to their clusters to handle the growing number of users and data traffic.
          </p>
          <p className="mt-7.5">
            <strong>3. Load Balancing</strong><br />
            Load balancing is the process of distributing traffic across multiple servers to ensure no single server becomes overwhelmed.
            Example: Google employs load balancing extensively across its global infrastructure to distribute search queries and traffic evenly across its massive server farms.
          </p>
          <p className="mt-7.5">
            <strong>4. Caching</strong><br />
            Caching is a technique to store frequently accessed data in-memory (like RAM) to reduce the load on the server or database.
            Implementing caching can dramatically improve response times.
            Example: Reddit uses caching to store frequently accessed content like hot posts and comments so that they can be served quickly without querying the database each time.
          </p>
          <p className="mt-7.5">
            <strong>5. Content Delivery Networks (CDNs)</strong><br />
            CDN distributes static assets (images, videos, etc.) closer to users. This can reduce latency and result in faster load times.
            Example: Cloudflare provides CDN services, speeding up website access for users worldwide by caching content in servers located close to users.
          </p>
          <p className="mt-7.5">
            <strong>6. Partitioning</strong><br />
            Partitioning means splitting data or functionality across multiple nodes/servers to distribute workload and avoid bottlenecks.
            Example: Amazon DynamoDB uses partitioning to distribute data and traffic for its NoSQL database service across many servers, ensuring fast performance and scalability.
          </p>
          <p className="mt-7.5">
            <strong>7. Asynchronous Communication</strong><br />
            Asynchronous communication means deferring long-running or non-critical tasks to background queues or message brokers.
            This ensures your main application remains responsive to users.
            Example: Slack uses asynchronous communication for messaging. When a message is sent, the sender's interface doesn't freeze; it continues to be responsive while the message is processed and delivered in the background.
          </p>
          <p className="mt-7.5">
            <strong>8. Microservices Architecture</strong><br />
            Micro-services architecture breaks down an application into smaller, independent services that can be scaled independently.
            Example: Uber has evolved its architecture into microservices to handle different functions like billing, notifications, and ride matching independently.
          </p>
          <p className="mt-7.5">
            <strong>9. Auto-Scaling</strong><br />
            Auto-Scaling means automatically adjusting the number of active servers based on the current load.
            Example: AWS Auto Scaling monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.
          </p>
          <p className="mt-7.5">
            <strong>10. Multi-region Deployment</strong><br />
            Deploy the application in multiple data centers or cloud regions to reduce latency and improve redundancy.
            Example: Spotify uses multi-region deployments to ensure their music streaming service remains highly available and responsive to users all over the world, regardless of their location.
          </p>
        </div>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default Calendar;
