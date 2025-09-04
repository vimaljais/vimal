import CertCard from './CertCard.js';

// import

export default function Employment() {
  return (
    <div id='employment' className='mt-4 text-white'>
      <h1 className='text-2xl font-bold'>Employment</h1>
      <div style={{ marginTop: '10px' }}>
        <h1 className='text-xl'>
          <span className='font-bold'>Software Development Engineer</span>
          <br />
          <span style={{ fontSize: 15 }}>
            Fractal Analytics [Feb 2025 - Present]
          </span>
        </h1>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Designed and developed an enterprise-grade AI assistant platform enabling users to create, organize, and execute complex workflows, data-driven notebooks, and visual canvases for internal analytics and research.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Engineered a modular frontend architecture using Next.js and Tailwind CSS for interactive user experiences, integrating real-time collaboration, rich text editing, and customizable data visualization components.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Built scalable backend services utilizing LangChain, FastAPI, and Langfuse for prompt orchestration, semantic search, and vector-based context retrieval in large language model applications.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Implemented secure storage and retrieval of user data and knowledge graphs using Azure Blob Storage and Azure Vector Search, with robust access controls and audit logging.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Orchestrated distributed infrastructure with Kubernetes for container management, supporting auto-scaling and high availability.
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h1 className='text-xl'>
          <span className='font-bold'>Software Development Engineer</span>
          <br />
          <span style={{ fontSize: 15 }}>
            Daffodil Software Pvt Ltd [Jan 2022 - Feb 2025]
          </span>
        </h1>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Developed a loan management system (LMS) for a fintech company
          using NestJS, MySQL, and event-driven architecture.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Integrated BullMQ for efficient communication between
          microservices.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Integrated multiple third-party adapters for customer onboarding,
          document verification, and risk profiles, streamlining the
          application process and reducing loan processing time by 70%.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Implemented an event-driven audit log for loan applications. This
          comprehensive log captures all critical actions throughout the loan
          lifecycle, ensuring transparency and facilitating regulatory
          compliance.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Leveraged Docker for seamless deployment, scaling of microservices,
          and consistent dev environments.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Streamlined eKYC verification by integrating 3rd party eKYC partners
          like Khosla and Hyperverge in NodeJS APIs, achieving a 95% approval
          rate. This integration led to a 50% increase in customer acquisition.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Built a highly scalable NodeJS-based Enterprise Service Bus (ESB) to
          manage 29 concurrent services (pm2). This ESB eliminated the need for
          SOAP/JSON message transformation, simplifying the architecture.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Implemented Hasura triggers with NodeJS APIs and Firebase Cloud
          Messaging (FCM). This combination allowed for targeted notifications
          to active users, leading to a 70% improvement in user engagement.
        </p>

        <p style={{fontSize: 12, paddingBottom: 4}}>
          • Designed a scalable image and video processing pipeline using Cloud
          Pub/Sub for efficient message delivery and NodeJS for task execution
          with cron-based scheduling.
        </p>
      </div>
    </div>
  );
}
