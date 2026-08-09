// Placeholder project metadata. Replace with real project info as it becomes available.
// `sortDate` drives the date sort (ISO string, use the project's start date).
// `thumbFit` is "cover" for full-bleed art or "contain" for images with transparent backgrounds.
// Single source of truth for the project gallery (projects.html) and the homepage thumbnails.
const PROJECTS = [
  // Claw Robot project card + detail page metadata
  {
    id: "claw-robot",
    name: "Claw Robot",
    dateDisplay: "January - May 2025",
    sortDate: "2025-01-01",
    type: "Class Project",
    location: "Cambridge, MA",
    skills: ["CAD", "3D Printing", "Mechanical Design", "Arduino"],
    thumb: "assets/images/claw-robot-cutout.png",
    thumbFit: "contain",
    url: "projects/claw-robot.html",
  },
  // Autonomous Rover project card + detail page metadata
  {
    id: "autonomous-rover",
    name: "Autonomous Rover",
    dateDisplay: "September - December 2024",
    sortDate: "2024-09-01",
    type: "Personal Project",
    location: "Cambridge, MA",
    skills: ["Python", "Robotics", "Sensor Fusion", "3D Printing"],
    thumb: "assets/images/thumbs/project-2.png",
    thumbFit: "cover",
    url: "projects/autonomous-rover.html",
  },
  // Solar Car Suspension project card + detail page metadata
  {
    id: "solar-car-suspension",
    name: "Solar Car Suspension",
    dateDisplay: "June - August 2024",
    sortDate: "2024-06-01",
    type: "Internship",
    location: "Detroit, MI",
    skills: ["CAD", "Structural Analysis", "Manufacturing"],
    thumb: "assets/images/thumbs/project-3.png",
    thumbFit: "cover",
    url: "projects/solar-car-suspension.html",
  },
  // Prosthetic Hand Design project card + detail page metadata
  {
    id: "prosthetic-hand",
    name: "Prosthetic Hand Design",
    dateDisplay: "January - April 2024",
    sortDate: "2024-01-01",
    type: "Research",
    location: "Cambridge, MA",
    skills: ["CAD", "Biomechanics", "3D Printing", "User Testing"],
    thumb: "assets/images/thumbs/project-4.png",
    thumbFit: "cover",
    url: "projects/prosthetic-hand.html",
  },
  // Personal Website project card + detail page metadata
  {
    id: "personal-website",
    name: "Personal Website",
    dateDisplay: "2026",
    sortDate: "2026-01-01",
    type: "Personal Project",
    location: "Cambridge, MA",
    skills: ["Web Design", "JavaScript", "CSS"],
    thumb: "assets/images/thumbs/project-5.png",
    thumbFit: "cover",
    url: "projects/personal-website.html",
  },
];
