import "./App.css";
const freelanceJobs = [
  {
    company: "DXspring Freelancing",
    dates: "January 2023 – December 2023",
    points: [
      "Developed and implemented highly responsive user interface components for web and mobile apps using React.js.",
      "Used JavaScript, HTML, CSS, TypeScript, jQuery, MUI, and React.js to create data visualization tools and optimize cross-browser performance.",
      "Built interactive technologies for menus, online forms, and dynamic content.",
      "Collaborated with backend teams to integrate APIs and improve user workflows.",
      "Worked with clients and designers to create strong and effective applications.",
    ],
  },
  {
    company: "PICTURA E-commerce (Freelancing Project)",
    dates: "June 2023 – December 2023",
    points: [
      "Developed responsive interfaces for web and mobile using React.js and Next.js.",
      "Created data visualization tools and optimized performance for different browsers and devices.",
      "Built interactive web features and collaborated closely with designers and stakeholders.",
    ],
  },
];

const mtorPoints = [
  "Led front-end development across MTOR's core dashboards: MTOR Dashboard, Supplier, and Sales.",
  "Collaborated closely with designers and back-end developers to ensure seamless API integration and UI consistency.",
  "Built responsive, reusable components using React, Ant Design, TanStack query, and Redux, enhancing maintainability and overall application performance.",
  "SKU Dashboard Optimization : Implemented performance improvements and data handling refinements to enhance SKU management and user experience.",
  "AI Mapping Module (MTOR AI Mapping) : Initiated and developed a new AI-powered module to assist the finance team in uploading invoices via images or Excel files. The system parses product names, prices, and codes, then uses AI to suggest the most relevant SKUs from the database, dramatically reducing manual data entry.",
  "Led quality assurance efforts through extensive testing and interface debugging, ensuring stable production releases.",
];

const videos = [
  { src: `${process.env.PUBLIC_URL}/videos/dashboard.mp4`, title: "Dashboard" },
  {
    src: `${process.env.PUBLIC_URL}/videos/oil-video.mp4`,
    title: "Oil Platform",
  },
  {
    src: `${process.env.PUBLIC_URL}/videos/real-estate-video.mp4`,
    title: "Real Estate",
  },
];

function Experience() {
  return (
    <div id="experience-section">
      <div className=" fs-2 mt-0 mb-3 pt-5 pb-3 text-center">
        <h2 id="sample">Live Samples & Work Experience</h2>
      </div>
      <div className="row justify-content-center pb-5">
        {videos.map((video) => (
          <div key={video.src} className="col-12 col-md-3 m-2 video-card">
            <video
              className="video-card-player"
              src={video.src}
              controls
              muted
              loop
              playsInline
              preload="metadata"
            />
            <p className="video-card-title">{video.title}</p>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row experience-columns">
          <div className="col-12 col-md-6 experience-header text-start">
            <h4 id="experience-role">Front-end React Developer</h4>
            <div className="freelance-job">
              <p id="experience-meta">
                <a
                  className="text-decoration-underline"
                  href="https://www.linkedin.com/company/mtor-e-commerce/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTOR.co
                </a>{" "}
                &middot; August 2024 – Present
              </p>
              <ul className="freelance-points">
                {mtorPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6 experience-header text-start">
            <h4 id="experience-role">Front-end React Developer</h4>
            {freelanceJobs.map((job) => (
              <div key={job.company} className="freelance-job">
                <p id="experience-meta">
                  <span className="text-white">{job.company}</span> &middot;{" "}
                  {job.dates}
                </p>
                <ul className="freelance-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
