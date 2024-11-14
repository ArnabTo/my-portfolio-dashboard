import mongoose from "mongoose";


const projectSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    live: {
        type: String,
        required: true,
    },
    techs: {
        type: [String],
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
}, {
    collection: 'projectCollection'
}
);

const ProjectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default ProjectModel;